/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React from "react";
import{ useState } from 'react'


async function AddAllBooks(){
    try{
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
        const result = await response.json();
        console.log(result);

    } catch(e){
        console.error(e);
        console.error('Error retrieving all books in the library')
    }
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

export default AddAllBooks;