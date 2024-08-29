import Router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SplashScreen from "react-native-splash-screen";
import { useEffect } from "react";
import { Platform } from "react-native";

function App() {
  useEffect(() => {
    if (Platform.OS === "android") {
      SplashScreen.hide();
    }
  }, []);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;