import React from 'react';
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import store, {history} from "./redux";

const App: React.FC = () => {
  return (
    <main>
      <Provider store={store}>
        <ConnectedRouter history={history}>

        </ConnectedRouter>
      </Provider>
    </main>
  )
}

export default App;