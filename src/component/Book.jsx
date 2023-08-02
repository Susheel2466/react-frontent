import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Book = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/book/book_list')
        .then(resp => {
            console.log(resp.data.response);
            setBooks(resp.data.response);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-8 lg:px-8">
        <span>BOOK LIST PAGE</span>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">Books</h1>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 h-400">
          {books.map((book) => (
            <a key={book._id} href={book.book_image} className="group">
              <div className="aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-4">
                <img
                  src={book.book_image}
                  alt={book.book_image}
                  className="h-full  object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className='bg-white shadow p-4'>
                <h3 className="mt-4 text-sm text-gray-700">{book.book_name}</h3>
                <div class="flow-root ">
                    <small class="float-left text-red-600">
                      {book.discount_percent}%
                    </small>
                    <small class="float-right text-gray-800">
                      ${book.price}
                    </small>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Book;