export default function ScoreList(props){
    return (
        <div className="col-lg-3">
            {/* <div className="average">
                <div className="card-body text-center">
                    <h5 className="card-title">Average</h5>
                    <h2 className="card-text">75</h2>
                    <a href="#student-card" className="btn btn-primary">Student</a>
                </div>
            </div> */}

            <div className="student-card form-control" style={{width:'18rem'}}>
                <div className="card-body">
                    <h5 className="student-id">ID: {props.id}</h5>
                    <h5 className="student-name">Name: {props.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Math: {props.math}</li>
                    <li className="list-group-item">English: {props.english}</li>
                    <li className="list-group-item">Chemistry: {props.chemistry}</li>
                    <h6 className="student-average">Average: {props.averages}</h6>
                </ul> 
                <div className="card-body">
                    <a href="#average" className="btn">
                        
                        {props.pass}
                    </a>
                </div>
            </div>
        </div>
    )
}