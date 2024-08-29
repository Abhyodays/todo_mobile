import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { fireEvent, render } from '@testing-library/react-native'
import TaskCard from '../components/TaskCard/TaskCard'

const mockedUncompleteTodo = { categorty: "Personal", date: "", id: "995bf92b-4f38-47b1-a581-618bb71e8311", isCompleted: false, name: "hvfcfycvhgv", subTasks: [] }
const mockedRadioPress = jest.fn()
const mockedNavigation = {
    navigate: jest.fn()
}
const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
        navigate: mockedNavigate
    })
}))
describe("TaskCard component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("renders all elements correctly for uncomplete todo", () => {
        const { getByTestId, queryByTestId } = render(
            <NavigationContainer>
                <TaskCard task={mockedUncompleteTodo} onRadioPress={mockedRadioPress} />
            </NavigationContainer>
        )

        expect(getByTestId("icon_circle")).toBeTruthy();
        expect(queryByTestId("icon_checkmark")).toBeNull();
        expect(getByTestId("todo_name")).toBeTruthy();
    })

    it("renders all elements correctly for complete todo", () => {
        const { getByTestId, queryByTestId } = render(
            <NavigationContainer>
                <TaskCard task={{ ...mockedUncompleteTodo, isCompleted: true }} onRadioPress={mockedRadioPress} />
            </NavigationContainer>
        )

        expect(queryByTestId("icon_circle")).toBeNull();
        expect(queryByTestId("icon_checkmark")).toBeTruthy();
        expect(getByTestId("todo_name")).toBeTruthy();
    })

    it("Call onRadioPress on press circle icon", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <TaskCard task={mockedUncompleteTodo} onRadioPress={mockedRadioPress} />
            </NavigationContainer>
        )
        const radioButton = getByTestId("button_radio");
        fireEvent.press(radioButton);
        expect(mockedRadioPress).toHaveBeenCalledWith(mockedUncompleteTodo.id)
    })

    it("call goToDetails on press todo card", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <TaskCard task={mockedUncompleteTodo} onRadioPress={mockedRadioPress} />
            </NavigationContainer>
        )
        const todoCard = getByTestId("todo_card");
        fireEvent.press(todoCard);
        expect(mockedNavigate).toHaveBeenCalledWith("TaskDetails", { id: mockedUncompleteTodo.id })

    })
})