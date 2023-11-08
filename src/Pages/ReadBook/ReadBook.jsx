
import { useLoaderData } from "react-router-dom";

const ReadBook = () => {
  // Use the useLoaderData hook to load data
  const bookData = useLoaderData();

  return (
    <div>
      <h1>Read Book Page</h1>
      <p>This is where you can read the content of the book.</p>

      {/* Display book title and description */}
      <div className="book-description">
        <h2>{bookData.title}</h2>
        <p>{bookData.description}</p>
      </div>
    </div>
  );
};

export default ReadBook;
