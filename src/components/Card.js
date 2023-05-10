function Card(props){
    return (
        <div className="card">
            <div className="card=-body">
                <img src={props.img} alt={props.alt} className="card-image"></img>
                <h2 className="card-title">{props.title}</h2>
            </div>
        </div>
    );
}

export default Card;