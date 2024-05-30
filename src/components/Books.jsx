/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import react from "react";
import{ useState, useEffect } from 'react'
import BookTitle from "./BookTitleListItem";



export function AddAllBooks(){
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const fetchBooks = async ()=>{
            try{
                const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
                const result = await response.json();
                
                setBooks(result.books);
    
            } catch(e){
                console.error(e);
                console.error('Error retrieving all books in the library')
            }
        }
        fetchBooks();
    },[])
    return(
        <ul>
            {books.map((book)=>{
            return <BookTitle title={book.title}/>
            })}
        </ul>
    );
}





async function GetSingleBookInfo (){
    try{
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/:bookId')
        const result = await response.json();
    } catch(e){
        console.error(e);
        console.error(`Failed to get book of ${Id}`)
    }
}