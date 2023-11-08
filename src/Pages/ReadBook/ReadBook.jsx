
import { useLoaderData } from "react-router-dom";

const ReadBook = () => {
  // Use the useLoaderData hook to load data
  const bookData = useLoaderData();

  return (
    <div className=" mx-60">
      <h1 className=" text-center text-5xl py-20 text-red-400 font-bold">Read Book Page</h1>
      <p className="text-5xl text-center  font-medium text-teal-600">This is where you can read the content of the book.</p>

      {/* Display book title and description */}
      <div className="book-description py-20 font-bold text-2xl">
        
        <p className="mx-10">{bookData.description}</p>
      </div>
    </div>
  );
};

export default ReadBook;
