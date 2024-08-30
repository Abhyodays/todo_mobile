import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Text } from 'react-native';
import Calendar from '../screens/Calendar/Calendar';
import { renderWithProvider } from '../components/wrappers/renderWithProvider';
import { mockedState } from '../constants/mockedData';

const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
        navigate: mockedNavigate
    })
}))

jest.mock('react-native-calendar-picker', () => {
    return jest.fn(({ onDateChange }) => {
        return <MockedCalendarPicker onDateChange={onDateChange} />;
    });
});

const MockedCalendarPicker = ({ onDateChange }: any) => (
    <Text onPress={() => onDateChange(new Date('2024-08-20'))} testID='mocked-calendar-picker'>Mocked CalendarPicker</Text>
);



describe('Calendar Component', () => {
    it('renders correctly', () => {
        renderWithProvider(<Calendar />, { preloadedState: mockedState });

        expect(screen.getByText('Mocked CalendarPicker')).toBeTruthy();
    });

    it('filters tasks based on the selected date', () => {
        renderWithProvider(<Calendar />, { preloadedState: mockedState });

        // Check if uncompleted and completed tasks are rendered
        const uncompletedTask = screen.getByText('task1');
        const completedTask = screen.getByText('task3');

        expect(uncompletedTask).toBeTruthy();
        expect(completedTask).toBeTruthy();
    });

    it('displays correct section titles based on task completion', () => {
        renderWithProvider(<Calendar />, { preloadedState: mockedState });

        expect(screen.getByText('Tasks')).toBeTruthy();
        expect(screen.getByText('Completed')).toBeTruthy();
    });

    it('renders CalendarTaskCard component for each task', () => {
        renderWithProvider(<Calendar />, { preloadedState: mockedState });
        const taskCards = screen.getAllByTestId('calendar-task-card');
        expect(taskCards.length).toBe(2);
    });

    it('changes the selected date when a new date is chosen', () => {
        renderWithProvider(<Calendar />, { preloadedState: mockedState });
        fireEvent.press(screen.getByTestId('mocked-calendar-picker'));
        expect(screen.getByText("task2")).toBeTruthy();
        expect(screen.queryByText("task1")).toBeNull();
    });
});
