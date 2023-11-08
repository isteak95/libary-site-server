import { useState } from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import BorrowModal from "../BorrowedModal/BorrowedModal";

const BookDetails = () => {
  const { bookId } = useParams();
  const bookData = useLoaderData();
  const book = bookData.find((book) => book._id === bookId);

  const [isBorrowModalOpen, setBorrowModalOpen] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const [isBookBorrowed, setIsBookBorrowed] = useState(false);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const handleBorrow = () => {
    if (!isBookBorrowed) {
      // Check if the book quantity is greater than 0 before borrowing
      if (book.quantity > 0) {
        setIsBookBorrowed(true);
        const borrowedBook = { ...book, returnDate: returnDate, borrowedDate: new Date().toISOString() };
        setBorrowedBooks([...borrowedBooks, borrowedBook]);

        // Reduce the book quantity by 1
        book.quantity = book.quantity - 1;
      }
    }
    setBorrowModalOpen(false);
  };

  const openBorrowModal = () => {
    setBorrowModalOpen(true);
  };

  const closeBorrowModal = () => {
    setBorrowModalOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 justify-center lg:py-20">
        <div className=" absolute mt-32 ml-[1320px]">
          <h1 className="text-2xl font-bold">
            Book quantity :{" "}
            <span className={`text-red-600 ${book.quantity === 0 ? "text-disabled" : ""}`}>
              {book.quantity}
            </span>
          </h1>
        </div>
        <div className="flex items-center p-10 lg:w-[1150px] h-[1000px] lg:mx-[400px] md:mx-20 mx-5 mt-20 md:mb-12 lg:mb-44 mb-8 lg:mt-18 bg-base-100 shadow-xl">
          <div className="mb-44">
            <figure>
              <img
                className="lg:w-[4550px] lg:h-[500px] object-cover"
                src={book.image}
                alt={book.name}
              />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title lg:text-3xl md:text-3xl text-xl font-bold mb-2">
              {book.name}
            </h2>
            <h2 className="lg:text-3xl md:text-3xl text-xl font-bold mb-2">
              Brand: {book.brand}
            </h2>
            <p className="lg:text-xl md:text-xl text-base font-bold mb-2">
              Book description: <br />
              {book.description}
            </p>
            <p className="text-2xl text-orange-500 font-bold "></p>
            <div className="-mb-14">
              <div className="card-actions justify-end mt-16">
                <button
                  className="btn btn-accent lg:px-[128px]"
                  onClick={openBorrowModal}
                  disabled={book.quantity === 0 || isBookBorrowed}
                >
                  {isBookBorrowed ? "Borrowed" : "Borrow This Book"}
                </button>
              </div>
              <div className="card-actions justify-end mt-10">
             <Link to={`/read/${book._id}`}>
             <button
                  className="btn btn-active btn-accent lg:px-[140px]"
                >
                  Read This Book
                </button>
             </Link>
              </div>
              <div className="category-badge">
                <span>{book.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BorrowModal
        isOpen={isBorrowModalOpen}
        onRequestClose={closeBorrowModal}
        onBorrow={handleBorrow}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        book={book}
      />
    </div>
  );
};

export default BookDetails;
