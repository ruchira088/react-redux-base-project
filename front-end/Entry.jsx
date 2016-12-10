import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import configureStore from "./reducers/configureStore"
import Routes from "./Routes.jsx"

ReactDOM.render(
	<Provider store={configureStore()}>
		<Routes/>
	</Provider>, 
	document.getElementById("app")
)