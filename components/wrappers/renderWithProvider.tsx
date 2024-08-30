import { render, RenderOptions } from "@testing-library/react-native"
import { AppStore, RootState } from "../../redux/store"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import todoReducer from '../../redux/features/todoSlice'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>
    store?: AppStore
}
export function setupStore(preloadedState?: Partial<RootState>): AppStore {
    const rootReducer = combineReducers({
        todos: todoReducer
    }
    )
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export function renderWithProvider(
    ui: React.ReactElement,
    extendedRenderOptions: ExtendedRenderOptions = {}
) {
    const {
        preloadedState = {},
        store = setupStore(preloadedState),
        ...renderOptions
    } = extendedRenderOptions

    const Wrapper = ({ children }: PropsWithChildren) => (
        <Provider store={store}>{children}</Provider>
    )

    return {
        store,
        ...render(ui, { wrapper: Wrapper, ...renderOptions })
    }
}