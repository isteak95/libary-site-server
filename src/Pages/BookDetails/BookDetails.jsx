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
        <div className=" absolute lg:mt-32 md:mt-28 mt-24 lg:ml-[1320px] md:ml-[490px] ml-[250px]">
          <h1 className="lg:text-2xl md:text-xl font-bold">
            Book quantity :{" "}
            <span className={`text-red-600 ${book.quantity === 0 ? "text-disabled" : ""}`}>
              {book.quantity}
            </span>
          </h1>
        </div>
        <div className="lg:flex items-center p-8 lg:w-[1150px] h-[880px] lg:mx-[400px] md:mx-20 mx-5 mt-20 md:mb-12 lg:mb-44 mb-8 lg:mt-18 bg-base-100 shadow-xl">
          <div className="lg:mb-44 card-actions justify-center">
            <figure>
              <img
                className="lg:w-[580px] lg:h-[900px] lg:mt-20 md:pt-14   pt-6 object-cover"
                src={book.image}
                alt={book.name}
              />
            </figure>
          </div>
          <div className="card-body">
            <h2 className=" md:py-2 text-center lg:text-3xl md:text-xl text-xl font-bold mb-2">
              Name : {book.name}
            </h2>
            <h2 className="lg:text-3xl text-center md:text-xl text-xl font-bold mb-2">
              Another Name : {book.anotherName}
            </h2>
            <p className="lg:text-xl md:py-2 text-center text-base font-bold mb-2">
            Category : {book.Category}
            </p>
            <p className="text-2xl text-orange-500 font-bold "></p>
            <div className="-mb-14">
              <div className="card-actions lg:justify-end justify-center lg:mt-72">
                <button
                  className="btn btn-accent lg:px-[128px]"
                  onClick={openBorrowModal}
                  disabled={book.quantity === 0 || isBookBorrowed}
                >
                  {isBookBorrowed ? "Borrowed" : "Borrow This Book"}
                </button>
              </div>
              <div className="card-actions lg:justify-end justify-center mt-10">
             <Link to={`/${book.Category}/read/${book._id}`}>
             <button
                  className="btn btn-active btn-success lg:px-[140px]"
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
