import App from './App';
import React from "react";
import { render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById("root"));
registerServiceWorker();
