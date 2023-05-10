function DramaCard(drama) {
    return (
        <div className="dramaCard">
            <div className="dramaCard-body">

                <h2 className="dramaCard-title">{drama.title}</h2>
                <p className="dramaCard-info">
                    {drama.info}
                </p>
                <p className="dramaCard-category">{drama.category}</p>
                <div className="dramaCard-content">
                    <img src={drama.img} alt={drama.alt} className="dramaCard-image"></img>
                    <iframe width="560" height="315" src={drama.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="review-container"></div>
                </div>
                <p className="dramaCard-description">
                        {drama.description}
                </p>
            </div>
        </div>
    );
}

export default DramaCard;