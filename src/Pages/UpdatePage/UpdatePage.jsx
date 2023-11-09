import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const [brand, setBrand] = useState('');
    


    const book = useLoaderData();
    const { _id, name, anotherName, rating, image,Category } = book;
    console.log(book);

    const handleBrandChange = (event) => {
        setBrand(event.target.value);
        
    };

    const handleProduct = (event) => {
        event.preventDefault();

        const form = event.target;

        const updatedBook = {
            name: form.name.value,
            brand: brand,
            anotherName: form.anotherName.value,
            rating: form.rating.value,
            image: form.image.value,
            Category: form.image.Category,
        };

        console.log(updatedBook);

        fetch(`http://localhost:5000/novel/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();
                setBrand('');
               
            });
    };


    const Categorys = ['novel', 'thriller', 'history', 'drama', 'sci-fi', 'Other'];

    return (
        <div className="lg:mx-[290px] lg:my-[180px] md:mx-16">
            <h1 className="text-center text-5xl font-bold my-10">Update Product</h1>
            <div className="bg-base-200">
                <div className="">
                    <div className="card w-full">
                        <form onSubmit={handleProduct} className="card-body">
                            <div className="lg:flex gap-24 lg:my-20">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        name="name"
                                        defaultValue={name}
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        type="text"
                                        placeholder="Enter the name"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select
                                        name="brand"
                                        value={Category} // Use 'value' instead of 'defaultValue'
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        onChange={handleBrandChange}
                                        required
                                    >
                                        <option value="">Select Brand</option>
                                        {Categorys.map((brandName) => (
                                            <option key={brandName} value={brandName}>
                                                {brandName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="lg:flex gap-24 ">
                                <div className="">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl">Another Name</span>
                                        </label>
                                        <input
                                            name="anotherName"
                                            defaultValue={anotherName}
                                            className="input input-bordered lg:w-[575px] md:w-[575px]"
                                            type="text"
                                            placeholder="Enter another name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input
                                        name="rating"
                                        defaultValue={rating}
                                        className="input input-bordered lg:w-[575px] md:w-[575px]"
                                        type="text"
                                        placeholder="Enter the rating of the product"
                                    />
                                </div>

                            </div>

                            <div className="form-control lg:my-20">
                                <label className="label">
                                    <span className="label-text text-xl">Image</span>
                                </label>
                                <input
                                    defaultValue={image}
                                    name="image"
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Enter the Image URL"
                                    required
                                />
                            </div>
                            <div className="form-control my-16">
                                <button className="btn btn-primary" type="submit">
                                    Update Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
