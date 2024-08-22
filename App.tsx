import { ScrollView, Text } from "react-native";
import Router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;