import './App.css';
import Main from './components/MainComponent'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import Data from './redux/Data'
import thunk from 'redux-thunk'

function App() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(Data, composeEnhancers(applyMiddleware(thunk)));
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
