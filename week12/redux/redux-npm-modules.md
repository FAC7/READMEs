# Redux npm Modules

There are only 3 npm modules you need to install for redux which are:

* `npm install --save redux`
* `npm install --save react-redux`
* `npm install --save redux-devtools`


### redux
It helps you write applications that behave consistently, run in different environments (client, server, and native) and are easy to test. It stores all the state using create store, which you include as:

`import { createStore } from 'redux'`

### react-redux

This is the React Bindings which connects together React and Redux. It helps separate presentational and container components.

![](https://files.gitter.im/MyPitit/QGVq/Usage_with_React___Redux.png)

The main parts to read into would be [the provider store](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store) and [the various connect functions](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options).

### redux-devtools
`redux-devtools` allows you to:

* inspect every state and action payload
* go back in time by 'cancelling' actions
* if you change the reducer code, each staged action will be re-evaluated
* if the reducers throw, you will see during which action this happened, and what the error was
* with `persistState()` store enhancer, you can persist bug sessions across page reloads

There is a chrome extension which can be found [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

### Resources
[Redux dev tools](https://github.com/gaearon/redux-devtools)  
[Redux basics](http://redux.js.org/docs/basics/UsageWithReact.html)  
[React redux with Dan Abramov](https://www.youtube.com/watch?v=VJ38wSFbM3A)  
[React redux docs](https://github.com/reactjs/react-redux)  
[Simplest redux example](https://github.com/jackielii/simplest-redux-example)
