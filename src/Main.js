import Path from "./images/Path.png"

export default function Main(props) {
    return (
        <div className="main">
            <img src={props.imageUrl} atl="" className="main-image" />
            <div className="main-info">
                <img src={Path} alt="" className="main-path" />
                <span className="main-country">{props.location}</span>
                <a className="main-maps" href={props.googleMapsUrl}>View on Google Maps<br/></a>
                <span className="main-title" >{props.title}<br/></span>
                <span className="main-date" >{props.startDate} - </span>
                <span className="main-date" >{props.endDate}</span>
                <p className="main-description">{props.description}</p>
            </div>
        </div>
    )
}