import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactRating from 'react-rating'; // Import the ReactRating component
import { useLoaderData } from 'react-router-dom';

const AllBook = () => {
    const books = useLoaderData();
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const handleFilter = () => {
        setShowAvailableOnly(!showAvailableOnly);
    };

    const filteredBooks = showAvailableOnly ? books.filter((book) => book.quantity > 0) : books;

    return (
        <div>
            <h1 className='text-center text-4xl font-bold py-5'>All Books</h1>
            <div className='flex justify-center pt-10'>
                <button className='btn btn-secondary text-xl font-bold' onClick={handleFilter}>
                    {showAvailableOnly ? 'Show All Books' : 'Show Available Books'}
                </button>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:mx-28 mx-20 my-40">
                {filteredBooks.map((book) => (
                    <div key={book._id} className="card lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className="h-[400px]" src={book.image} alt={book.name} />
                            <h3 className="text-2xl font-bold">{book.name}</h3>
                            <p className="text-xl font-semibold">Author Name: {book.anotherName}</p>
                            <p className="text-xl font-semibold">Category: {book.Category}</p>
                            <p className="text-sm font-semibold">
                                Rating:
                                <ReactRating
                                    initialRating={book.rating} // Rating value (e.g., 3.5)
                                    emptySymbol="far fa-star fa-2x" // Correct empty star icon (Font Awesome class)
                                    fullSymbol="fas fa-star fa-2x" // Correct full star icon (Font Awesome class)
                                    readonly // Make the rating read-only
                                />

                            </p>
                            <Link to={`/${book.Category}/update/${book._id}`}>
                                <button className="btn btn-accent w-full">Update Book</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBook;
