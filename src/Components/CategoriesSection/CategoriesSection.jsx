import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('Categories.json') 
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="my-28 shadow-md lg:p-4">
      <h1 className="lg:text-6xl md:text-3xl text-2xl font-extrabold text-center mb-28">All Categories</h1>
      <div className="grid lg:grid-cols-5 gap-6 md:grid-cols-2 md:mx-28 mx-20 lg:mr-10">
        {categories.map((category) => (
          <div key={category.id} className="brand-link">
            <div className="card w-64 h-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="rounded-2xl w-full h-[180px]"
                  src={category.image}
                  alt={category.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title card-actions justify-center text-2xl font-bold">
                  {category.name}
                </h2>
              </div>
              <Link to={`/${category.name}`} className="btn btn-primary">Click Here</Link>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
