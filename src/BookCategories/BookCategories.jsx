import { Link, useLoaderData } from "react-router-dom";
import ReactRating from 'react-rating';
const BookCategories = () => {


    const CategorysData = useLoaderData();
    console.log(CategorysData);

    if (!CategorysData || CategorysData.length === 0) {
        return (
            <div className="my-[650px]">
                <h2 className="my-10 text-red-500 text-center text-5xl font-bold align-middle ">
                    No Book available for this Category......
                </h2>
                <p className="text-red-500 text-center text-5xl font-bold align-middle">
                    ------- Please Add Book ---------
                </p>
            </div>
        );
    }

    return (
        <div>
            <div>
                <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-10 lg:mx-28 mx-20 my-40">
                    {CategorysData.map((Category) => (
                        <div key={Category._id} className="card lg:w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <img className="h-[400px]" src={Category.image} alt={Category.name} />
                                <h3 className="text-2xl font-bold">{Category.name}</h3>
                                <h3 className="text-2xl font-bold">{Category.anotherName}</h3>

                                <p className="text-xl font-semibold"> Category: {Category.Category}</p>
                                {/* <p className="text-xl font-semibold">Price: ${Category.price}</p> */}
                                <p className="text-xl font-semibold">Rating:     <ReactRating
                                    initialRating={Category.rating} // Rating value (e.g., 3.5)
                                    emptySymbol="far fa-star fa-2x" // Correct empty star icon (Font Awesome class)
                                    fullSymbol="fas fa-star fa-2x" // Correct full star icon (Font Awesome class)
                                    readonly // Make the rating read-only
                                /></p>
                                <Link to={`/${Category.Category}/details/${Category._id}`}>
                                    <button className="btn btn-accent w-full">Details</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookCategories;
