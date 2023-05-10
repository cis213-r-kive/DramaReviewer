import { useState } from "react";

function DramaCard(drama) {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    function commentHandler(event) {
        setComment(event.target.value);
    };

    function onClickHandler() {
        setComments((comments) => [...comments, comment]);
        setComment("");
    };

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
                </div>

                <p className="dramaCard-description">
                    {drama.description}
                </p>

                <div className="review-container">
                    <div className="comments-box">
                        {comments.map((text) => (
                            <div className="comment-container">{text}</div>
                        ))}
                    </div>
                    <div className="comment-form">
                        <h3 className="comment-text">Comment</h3>
                        <textarea
                            className="comment-input"
                            value={comment}
                            onChange={commentHandler}>
                        </textarea>
                        <button
                            className="comment-button"
                            onClick={onClickHandler}
                        >Submit</button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default DramaCard;