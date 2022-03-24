import { useState, useEffect } from 'react';
import ScoreList from '../components/ScoreList';

// export default function Average(props) {
//     let [averages, setAverages] = useState();

//    useEffect(() => {
//     // initialize state average
//     let count = (math + english + chemistry) / 3;
//     let averages = count / 5;   
//    })
// }

export default function Score(props) {
    let [scores, setScores] = useState([]);

  useEffect(() => {
    // initialize state average
    let count = (math + english + chemistry) / 3;
    let averages = count / 5;

    // initialize state scores
    let arrScores = [
      {
        id: 1,
        name: `Aira Johnson`,
        math: 80,
        english: 90,
        chemistry: 70,
        average: count,
      },
      {
        id: 2,
        name: `Scarlette Mahatam`,
        math: 40,
        english: 80,
        chemistry: 79,
        average: count,
      },
      {
        id: 3,
        name: `Michael Oka Wahyu`,
        math: 50,
        english: 87,
        chemistry: 60,
        average: count,
      },
      {
        id: 4,
        name: `Mama Zila`,
        math: 70,
        english: 78,
        chemistry: 80,
        average: count,
      },
      {
        id: 5,
        name: `Essa Adila Rahmandito`,
        math: 50,
        english: 80,
        chemistry: 56,
        average: count,
      },
    ];

    setScores(arrScores);
  }, []);

  return (
    <div className="container-fluid">
      {books.map(item => (
        <ScoreList 
            key={`key-${item.id}`} 
            id={item.id} 
            name={item.name} 
            math={item.math} 
            english={item.english} 
            chemistry={item.chemistry} 
            average={item.average}>
        </ScoreList>
      ))}
    </div>
  );
}