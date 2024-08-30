import { fireEvent, render } from '@testing-library/react-native';
import { renderWithProvider } from '../components/wrappers/renderWithProvider';
import Search from '../screens/Search/Search';
import { mockedState } from '../constants/mockedData';

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
        navigate: jest.fn()
    })
}))
describe("Search screen", () => {
    it("rendered correctly", () => {
        const { getByTestId } = renderWithProvider(<Search />, { preloadedState: mockedState })
        expect(getByTestId("search-input")).toBeTruthy();
    })
    it("initially rendered 0 cards", () => {
        const { queryAllByTestId } = renderWithProvider(<Search />, { preloadedState: mockedState })
        expect(queryAllByTestId("calendar-task-card")).toHaveLength(0);
    })
    it("change input to search more todos", () => {
        const { queryAllByTestId, getByTestId } = renderWithProvider(<Search />, { preloadedState: mockedState })
        const searchInput = getByTestId("search-input");
        fireEvent.changeText(searchInput, "task");
        fireEvent(searchInput, 'onEndEditing');
        expect(queryAllByTestId("calendar-task-card")).toHaveLength(3);
    })
    it("for empty input no card", () => {
        const { queryAllByTestId, getByTestId } = renderWithProvider(<Search />, { preloadedState: mockedState })
        const searchInput = getByTestId("search-input");
        fireEvent.changeText(searchInput, "  ");
        fireEvent(searchInput, 'onEndEditing');
        expect(queryAllByTestId("calendar-task-card")).toHaveLength(0);
    })

    it("after clicking clear icon no card", () => {
        const { queryAllByTestId, getByTestId } = renderWithProvider(<Search />, { preloadedState: mockedState })
        const searchInput = getByTestId("search-input");
        fireEvent.changeText(searchInput, "task");
        fireEvent(searchInput, 'onEndEditing');
        expect(queryAllByTestId("calendar-task-card")).toHaveLength(3);
        const clearIcon = getByTestId("icon-clear");
        fireEvent.press(clearIcon);
        expect(queryAllByTestId("calendar-task-card")).toHaveLength(0);
    })


})