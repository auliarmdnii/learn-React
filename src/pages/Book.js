import { useState, useEffect } from 'react';
import BookList from '../components/BookList';
// import { useEffect } from "react/cjs/react.production.min"

export default function Book(props) {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    // initialize state books
    let arrBooks = [
      {
        isbn: 1,
        tittle: `Marvel Comis`,
        creator: `Aulia`,
        publisher: `Gramedia`,
        income: 1000,
        rating: 3,
        cover: `https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFrSzQ3OTQ2SkwuX0FDX1NMMTUwMF8uanBn.jpg`,
      },
      {
        isbn: 2,
        tittle: `Doraemon`,
        creator: `Putri`,
        publisher: `Indobaca`,
        income: 5000,
        rating: 4,
        cover: `https://cdn-japantimes.com/wp-content/uploads/2020/11/np_file_54029.jpeg`,
      },
      {
        isbn: 3,
        tittle: `Spiderman`,
        creator: `Ramadhani`,
        publisher: `Gramedia`,
        income: 7000,
        rating: 5,
        cover: `https://images.tokopedia.net/img/cache/700/VqbcmM/2021/4/29/1436bfa5-f1a8-49f7-81d7-d31b85569194.jpg`,
      },
    ];

    setBooks(arrBooks);
  }, []);

  return (
    <div className="container-fluid">
      {books.map(item => (
        <BookList 
            key={`key-${item.isbn}`} 
            isbn={item.isbn} 
            title={item.title} 
            creator={item.creator} 
            publisher={item.publisher} 
            rating={item.rating} cover={item.cover}>
        </BookList>
      ))}
    </div>
  );
}
