import { useState, useEffect } from 'react';
import ScoreList from '../components/ScoreList';

export default function Score(props) {
  let [score, setScore] = useState([]);

  useEffect(() => {
    // initialize state scores
    let arrScore = [
      {
        id: 1,
        name: `Aira Johnson`,
        math: 80,
        english: 90,
        chemistry: 70,
      },
      {
        id: 2,
        name: `Scarlette Mahatam`,
        math: 40,
        english: 80,
        chemistry: 79,
      },
      {
        id: 3,
        name: `Michael Oka Wahyu`,
        math: 50,
        english: 87,
        chemistry: 60,
      },
      {
        id: 4,
        name: `Mama Zila`,
        math: 70,
        english: 78,
        chemistry: 80,
      },
      {
        id: 5,
        name: `Essa Adila Rahmandito`,
        math: 50,
        english: 80,
        chemistry: 56,
      },
    ];

    setScore(arrScore);
  }, []);

  let count = (math, english, chemistry) => {
    let result = (math + english + chemistry) / 3;
    return result;
  };

  let pass = (average) => {
    if (average >= 75) {
      return (
        <h4>
          <span className="badge rounded-pill bg-success">LULUS</span>
        </h4>
      );
    } else if (average <= 74) {
      return (
        <h4>
          <span className="badge rounded-pill bg-danger">TIDAK LULUS</span>
        </h4>
      );
    }
  };

  return (
    <div className="container-fluid">
      {/* <div className="average">
                <div className="card-body text-center">
                    <h5 className="card-title">Average</h5>
                    <h2 className="card-text">75</h2>
                    <a href="#student-card" className="btn btn-primary">Student</a>
                </div>
            </div> */}
      <div className="row">
        {score.map((item) => (
          <ScoreList
            key={`key-${item.id}`}
            id={item.id}
            name={item.name}
            math={item.math}
            english={item.english}
            chemistry={item.chemistry}
            averages={count(item.math, item.english, item.chemistry)}
            pass={pass(count(item.math, item.english, item.chemistry))}
          ></ScoreList>
        ))}
      </div>
    </div>
  );
}
