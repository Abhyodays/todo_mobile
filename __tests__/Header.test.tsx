import { fireEvent, render } from '@testing-library/react-native'
import Header from '../components/Header/Header'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const mockedGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
        goBack: mockedGoBack
    })
}));

describe("Header component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders correctly", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <Header />
            </NavigationContainer>
        );
        expect(getByTestId("back_button")).toBeOnTheScreen();
    })

    it("calls goBack on button click", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <Header />
            </NavigationContainer>
        )
        const back_button = getByTestId("back_button")
        fireEvent.press(back_button);
        expect(mockedGoBack).toHaveBeenCalledTimes(1)
    })

})