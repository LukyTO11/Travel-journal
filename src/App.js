import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import data from "./data"

export default function App() {

    const cards = data.map(item => {
        return (
            <Main
            key={item.id}
            {...item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <div>
                {cards}
            </div>
        </div>
    )
}