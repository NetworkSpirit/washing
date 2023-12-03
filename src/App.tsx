import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.tsx";
import {Provider} from "react-redux";
import {setupStore} from "./store/store.ts";
const store = setupStore();
function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
      </Provider>
  )
}

export default App