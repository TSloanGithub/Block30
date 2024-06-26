/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import react from "react";
import{ useState, useEffect } from 'react'
import BookTitle from "./BookTitleListItem";
import LogInForm from "./Login";
import Navbar from "./Navigations";



export function AddAllBooks({token, setToken}){
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    // const [storedBooks, setStoredBooks] = useState([]);
    console.log(token);
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
    // useEffect(()=>{

    // },[search])
    return(
        <>
        <h1>Tyler's Library Collection</h1>
        <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/> 
        <ul>
            {books.filter(book=>book.title.toLowerCase().includes(search.toLowerCase())).map((book)=>{
            return <BookTitle key={book.id} title={book.title} id={book.id} available={book.available}/>
            })}
        </ul>
        </>
    );
}





