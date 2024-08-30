import { fireEvent, render } from '@testing-library/react-native'
import { renderWithProvider } from '../components/wrappers/renderWithProvider'
import Tasks from '../screens/Tasks/Tasks'
import { mockedState } from '../constants/mockedData'
import { useNavigation } from '@react-navigation/native';

jest.mock('uuid', () => ({ v4: () => '123456789' }));
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
        navigate: jest.fn()
    })
}))
describe("Tasks screen", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    it("renders correctly", () => {
        const { queryAllByTestId, queryByTestId } = renderWithProvider(<Tasks />, { preloadedState: mockedState })
        expect(queryAllByTestId("todo_card")).toHaveLength(2)
        expect(queryByTestId("add-task-modal")).not.toBeOnTheScreen();
    });
    it("opens modal on add task button press and closes modal on back or outside click", () => {
        const { getByTestId, queryByTestId } = renderWithProvider(<Tasks />, { preloadedState: mockedState })
        const addTaskButton = getByTestId("add-task-button");
        fireEvent.press(addTaskButton);
        expect(queryByTestId("add-task-modal")).toBeTruthy();
        fireEvent(getByTestId("modal-container"), 'onRequestClose')
        expect(queryByTestId("add-task-modal")).not.toBeOnTheScreen();
        fireEvent.press(addTaskButton);
        expect(queryByTestId("add-task-modal")).toBeOnTheScreen();
        fireEvent(getByTestId("add-task-modal"), 'onPress');
        expect(queryByTestId("add-task-modal")).not.toBeOnTheScreen();
    })
})