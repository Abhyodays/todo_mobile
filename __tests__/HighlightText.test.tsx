import { render } from '@testing-library/react-native'
import HighlightText from '../components/HighlightText/HighlightText'

describe("HighlightText component", () => {
    const mockedText = "It is mocked text."
    it("renders text correctly on providing props", () => {
        const { getByText } = render(<HighlightText text={mockedText} />);
        expect(getByText(mockedText)).toBeTruthy();
    })
    it("do not renders text if no props", () => {
        const { queryByText } = render(<HighlightText />);
        expect(queryByText(mockedText)).toBeNull();
    })
})