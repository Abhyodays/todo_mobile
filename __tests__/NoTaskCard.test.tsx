import { render, screen } from '@testing-library/react-native'
import NoTaskCard from '../components/NoTaskCard/NoTaskCard'

describe("NoTaskCard Component", () => {
    it("renderes correctly", () => {
        render(<NoTaskCard />);
        expect(screen.getByTestId("NoTaskCard_text")).toBeTruthy();
    }
    )
})