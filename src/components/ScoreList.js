export default function ScoreList(props){
    return (
        <div>
            <div className="average">
                <div class="card-body text-center">
                    <h5 class="card-title">Average</h5>
                    <h2 class="card-text">{props.averages}</h2>
                    <a href="#student-card" class="btn btn-primary">Student</a>
                </div>
            </div>

            <div className="student-card" style="width: 18rem;">
                <div className="card-body">
                    <h5 className="student-id">ID: {props.id}</h5>
                    <h5 className="student-name">Name: {props.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Math: {props.math}</li>
                    <li className="list-group-item">English: {props.english}</li>
                    <li className="list-group-item">Chemistry: {props.chemistry}</li>
                    <h6 className="student-average">Average: {props.average}</h6>
                </ul> 
                <div className="card-body">
                    <a href="#average" className="btn btn-success">Pass</a>
                </div>
            </div>
        </div>
    )
}