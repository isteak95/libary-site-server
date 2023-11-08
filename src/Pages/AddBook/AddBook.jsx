import { useState } from 'react';

const AddBook = () => {

    const [Category, setCategory] = useState('');

    const handleCategory = (event) => {
        setCategory(event.target.value);

    };

    const handleBook = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const anotherName = form.name.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const image = form.image.value;

        const newBook = { name, anotherName, quantity, Category, description, rating, image };

        console.log(newBook);
        fetch(`http://localhost:5000/${Category}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

            })
            .catch((error) => {
                console.error('Error:', error);
                // Show an error toast/sweet alert here if the request fails
            });

    };

    const Categorys = ['novel', 'thriller', 'history', 'drama', 'sci-fi', 'Other'];


    return (
        <div className="lg:mx-[290px] lg:my-[180px] md:mx-16">
            <div className="bg-base-200">
                <div className="">
                    <div className="card w-full">
                        <form onSubmit={handleBook} className="card-body">
                            <div className="lg:flex gap-24 lg:my-20">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" className="input input-bordered lg:w-[575px] md:w-[575px]" type="text" placeholder="Enter the name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select name="brand" className="input input-bordered lg:w-[575px] md:w-[575px]" onChange={handleCategory} value={Category} required>
                                        <option value="">Category</option>
                                        {Categorys.map((brandName) => (
                                            <option key={brandName} value={brandName}>
                                                {brandName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="lg:flex lg:gap-24 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Author Name
                                        </span>
                                    </label>
                                    <input name="anotherName" className="input input-bordered lg:w-[575px] md:w-[575px]" type="text" placeholder="Enter the Another name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Quantity of the book
                                        </span>
                                    </label>
                                    <input name="quantity" className="input input-bordered lg:w-[575px] md:w-[575px]" type="text" placeholder="Enter Quantity of the book" required />
                                </div>
                            </div>
                            <div className="lg:flex lg:gap-24 lg:mt-20">
                                <div className="form-control  ">
                                    <label className="label ">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input name="image" className="input input-bordered  md:w-[575px]" type="text" placeholder="Enter the Image" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input name="rating" className="input input-bordered lg:w-[575px] md:w-[575px]" type="text" placeholder="Enter the Rating" required />
                                </div>
                            </div>
                            <div className="form-control lg:my-20">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input name="description" className="input h-20 lg:w-[1250px] input-bordered  md:w-[575px]" type="text" placeholder="Enter the Book description" required />
                            </div>

                            <div className="form-control my-16">
                                <button className="btn btn-primary" type="submit">Add New Book</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;
