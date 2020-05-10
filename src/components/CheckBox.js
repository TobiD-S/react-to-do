import React from "react"
import Header from "./Header"


function CheckBox(){
    return(
        <div>
        <Header/>
            <input type="checkbox"/><p>Food</p>
            <input type="checkbox"/><p>Water</p>
            <input type="checkbox"/><p>Air</p>
        </div>
    )
}

export default CheckBox