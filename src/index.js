import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root'
import 'semantic-ui-css/semantic.min.css'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducers from 'reducers'

import App from 'components/App'

ReactDOM.render(
    <Root>
      {/* <Provider store={createStore(reducers, {})}> */}
      <App />
      {/* </Provider>  */}
    </Root>
       , document.querySelector('#root'))
