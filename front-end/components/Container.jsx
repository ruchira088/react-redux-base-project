import React from "react"

import MenuBar from "./MenuBar"

export default ({children}) => (
    <div className="container">
        <MenuBar/>
        { children }
    </div>
)