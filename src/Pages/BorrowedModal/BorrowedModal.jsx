import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext, useState } from 'react';
import Modal from "react-modal";
import toast from 'react-hot-toast';

Modal.setAppElement("#root");

const BorrowedModal = ({ isOpen, onRequestClose, onBorrow, bookId, book, onBorrowedDate }) => {
  const [returnDate, setReturnDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useContext(AuthContext);

  // Calculate the current date as the Borrowed Date
  const borrowedDate = new Date().toISOString().split('T')[0]; // Format: "YYYY-MM-DD"

  const handleBorrow = () => {
    if (!returnDate) {
      setErrorMessage("Return date is required");
    } else {
      // Make a POST request to the server to update the database
      fetch(`http://localhost:5000/borrowbook/${bookId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ returnDate, borrowedDate, book }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Handle the response from the server

          // Assuming `onBorrow` and `onBorrowedDate` handle some local state updates
          onBorrow(returnDate);
          onBorrowedDate(borrowedDate);
          onRequestClose();
        })
        .catch((error) => {
          console.error("Error borrowing book:", error);
          toast.error("Failed to borrow the book", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Borrow Book"
    >
      <h2 className='text-center text-4xl font-bold lg:py-10 lg:mt-60'>Borrow Book</h2>
      <p className='text-center text-xl font-bold py-2'>Email: {user?.email}</p>
      <p className='text-center text-xl font-bold '>Name: {user?.displayName}</p>
      <div className='text-center text-xl font-bold  py-5'>
        <label htmlFor="returnDate">Return Date</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>
      <div className='lg:pl-[670px] text-xl font-bold md:pl-[200px] ml-20 py-3'>
        <label htmlFor="borrowedDate">Borrow Date  : </label>
        <input
          type="text"
          id="borrowedDate"
          value={borrowedDate} // Set the value to the current date
          readOnly // Make it read-only
        />
      </div>
      <p className="py-5 error-message text-center text-xl">{errorMessage}</p>
      <button className='btn lg:ml-[790px] md:ml-[230px] ml-16 btn-warning px-16' onClick={handleBorrow}>Borrow</button>
    </Modal>
  );
};

export default BorrowedModal;
