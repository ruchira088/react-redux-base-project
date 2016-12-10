import React from "react"
import {Router, Route, browserHistory} from "react-router"

const SampleComponent = () => (
	<div>
		This is a sample component.
	</div>
)

export default () => (
	<Router history={browserHistory}>
		<Route path="/" component={SampleComponent}/>
	</Router>
)