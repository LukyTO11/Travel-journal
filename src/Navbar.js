import Earth from "./images/earth-icon.png"

export default function Navbar() {
    return (
        <nav>
            <h1 className="nav--title">my travel journal.</h1>
            <img src={Earth} alt="" className="earth-icon"/>
        </nav>
    )
}