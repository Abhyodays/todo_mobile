import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { fireEvent, render } from '@testing-library/react-native'
import CalendarTaskCard from '../components/CalendarTaskCard/CalendarTaskCard'
import { executeNativeBackPress } from 'react-native-screens';


const mockedUncompleteTodo = { categorty: "Personal", date: "", id: "995bf92b-4f38-47b1-a581-618bb71e8311", isCompleted: false, name: "hvfcfycvhgv", subTasks: [] }
const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
        navigate: mockedNavigate
    })
}))

describe("CalendarTaskCard component", () => {
    beforeEach(() => {
        mockedNavigate.mockClear();
    });
    it("component renders correctly", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <CalendarTaskCard task={mockedUncompleteTodo} />
            </NavigationContainer>
        )
        expect(getByTestId("CalendarTaskCard_container")).toBeTruthy();
        expect(getByTestId("CalendarTaskCard_text")).toBeTruthy();
    })
    it("applying style on completed todo", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <CalendarTaskCard task={{ ...mockedUncompleteTodo, isCompleted: true }} />
            </NavigationContainer>
        );
        expect(getByTestId("CalendarTaskCard_container")).toHaveStyle({ opacity: 0.5 });
        expect(getByTestId("CalendarTaskCard_text")).toHaveStyle({ textDecorationLine: "line-through" })
    })
    it("Navigate to TaskDetails onPress card", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <CalendarTaskCard task={mockedUncompleteTodo} />
            </NavigationContainer>
        );
        const card = getByTestId("CalendarTaskCard_container");
        fireEvent.press(card);
        expect(mockedNavigate).toHaveBeenCalledWith("TaskDetails", { id: mockedUncompleteTodo.id });
    });
    it("do not navigate to TaskDetails onPress card if no id", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <CalendarTaskCard task={{ ...mockedUncompleteTodo, id: "" }} />
            </NavigationContainer>
        );
        const card = getByTestId("CalendarTaskCard_container");
        fireEvent.press(card);
        expect(mockedNavigate).not.toHaveBeenCalled();
    });
})