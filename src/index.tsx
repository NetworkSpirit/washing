import ReactDOM from 'react-dom/client';
import 'typeface-montserrat';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store.ts";
const store = setupStore();
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
