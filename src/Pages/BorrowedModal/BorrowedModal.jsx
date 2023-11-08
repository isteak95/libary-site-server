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
      <h2>Borrow Book</h2>
      <p>Email: {user?.email}</p>
      <p>Name: {user?.displayName}</p>
      <div>
        <label htmlFor="returnDate">Return Date</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="borrowedDate">Borrow Date</label>
        <input
          type="text"
          id="borrowedDate"
          value={borrowedDate} // Set the value to the current date
          readOnly // Make it read-only
        />
      </div>
      <p className="error-message">{errorMessage}</p>
      <button onClick={handleBorrow}>Borrow</button>
    </Modal>
  );
};

export default BorrowedModal;
