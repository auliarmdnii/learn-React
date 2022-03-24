export default function BookList(props){
    return (
        <div className="row m-2 p-4" style={{border: `2px solid grey`}}>
            {/* cover area */}
            <div className="col-lg-3">
                <img
                src={props.cover}
                width={`200px`}
                height={`200px`}
                alt={`Books`}
                />
            </div>

            {/* labels area */}
            <div className="col-lg-9">
                <h5>ISBN: {props.isbn}</h5>
                <h5>Tittle: {props.title}</h5>
                <h5>Creator: {props.creator}</h5>
                <h5>Publisher: {props.publisher}</h5>
                <h5>Rating: {props.rating} of 5</h5>
            </div>
        </div>
    )
}