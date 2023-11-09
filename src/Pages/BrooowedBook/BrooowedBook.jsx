import  { useState } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData } from "react-router-dom";

const BorrowedBooks = () => {
  const initialBorrowedBooks = useLoaderData();
  const [borrowedBooks, setBorrowedBooks] = useState(initialBorrowedBooks);

  const handleReturnBook = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, return it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allbook/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              handleRemoveBookFromList(_id);
            } else {
              Swal.fire('Error!', 'An error occurred while returning the book.', 'error');
            }
          });
      }
    });
  };

  const handleRemoveBookFromList = (_id) => {
    const updatedBorrowedBooks = borrowedBooks.filter((bookItem) => bookItem._id !== _id);
    setBorrowedBooks(updatedBorrowedBooks);
  };

  return (
    <div>
      {borrowedBooks.length === 0 ? (
        <p className="text-4xl text-center font-bold lg:my-96 md:my-72 my-36">Your cart is empty.</p>
      ) : (
        <div className="lg:mx-44 md:mx-10 mx-10">
          {borrowedBooks.map((bookItem) => (
            <div
              key={bookItem._id}
              className="card lg:card-side md:card-side lg:gap-20 gap-5 bg-base-100  my-24 rounded-lg shadow-lg h-full w-full"
            >
              <div>
                <figure>
                  <img
                    className="lg:h-[450px] lg:w-[330px] md:h-[220px] md:w-[150px]"
                    src={bookItem.book.image}
                    alt={bookItem.book.name}
                  />
                </figure>
              </div>
              <div className="lg:w-[350px] md:w-[350px]">
                <h1 className="lg:text-xl text-center font-bold lg:my-9 md:my-4 my-2">Book Name</h1>
                <h2 className="card-title text-center lg:ml-1 md:ml-1 ml-28 lg:text-2xl">{bookItem.book.name}</h2>
              </div>
              <div className="lg:w-[350px] md:w-[150px]">
                <h1 className="lg:text-xl text-center font-bold lg:my-9 md:my-4 my-2">Category</h1>
                <h2 className="text-center lg:text-2xl">{bookItem.book.Category}</h2>
              </div>
              <div className="lg:w-[350px] md:w-[100px]">
                <h1 className="lg:text-xl text-center font-bold lg:my-9 md:my-4 my-2"> Borrowed Date</h1>
                <h2 className="items-center text-center  lg:text-2xl">{bookItem.borrowedDate}</h2>
              </div>
              <div className="lg:w-[350px] md:w-[100px]">
                <h1 className="lg:text-xl text-center font-bold lg:my-9 md:my-4 my-2"> Return Date</h1>
                <h2 className="items-center text-center  lg:text-2xl">{bookItem.returnDate}</h2>
              </div>
              <div className="card-actions md:justify-end justify-center lg:justify-end  lg:p-5 md:mt-32 p-3 md:mr-2">
                <button onClick={() => handleReturnBook(bookItem._id)} className="btn btn-error">Return</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
