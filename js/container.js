import React, {Component} from 'react';
import App from './components/app.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, logger));


export default class Container extends Component
{
	constructor() {
		super();	
	}

	render() {
		return (
			<Provider store={store}>
				<App value='wadw1231aqq111'/>
			</Provider>
		)
	}
}

