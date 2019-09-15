import * as React from 'react'
import * as ReactDom from 'react-dom';
// import App from '../App'
// import '../index.scss'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import history from './store/history'

ReactDom.render(
<Provider store={store}>
    <ConnectedRouter history={history}>
        <React.Fragment>
            <Link to='/'>counter1</Link>
            <Link to='/2'>counter2</Link>
            <Route exact path='/' component={Counter1} />
            <Route exact path='/2' component={Counter2} />
        </React.Fragment>
    </ConnectedRouter>
</Provider>, document.getElementById('root'))