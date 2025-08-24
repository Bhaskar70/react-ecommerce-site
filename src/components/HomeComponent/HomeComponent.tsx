
import  { useEffect, useState } from 'react'
import './HomeComponent.scss'
import { useNavigate } from 'react-router-dom';

export const HomeComponent = () => {
  const [products, setProducts]: any = useState([]);
  const [categories, setCategories]: any = useState([])
  const [selectedCategory, setSelectedCategory]: any = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        const categoriesData: any = [...new Set(data.map((res: any) => res.category))]
        setCategories(categoriesData)
      } catch (err) {
        console.log('products data empty ')
      }
    };
    fetchProducts();
  }, []);

  const handleSelectChange = async (e: any) => {
    setSelectedCategory(e.target.value);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/category/${e.target.value}`);
      const data = await res.json();
      setProducts(data)
    } catch (err) {
      alert("Invalid login!");
    }
  };

  return (
    <div className="container">
      <div className="filter">
        <p>Filter By Caterogy</p>
        <select value={selectedCategory} onChange={handleSelectChange}>
          <option disabled={true} value="">Select Category</option>
          {
            categories.map((category: any) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
      </div>
      <div className="product-list">
        {products.map((product: any) => (
          <div key={product.id} className="product-card">
            <div className='poduct-image'>
              <img src={product.image} alt={product.title} />
            </div>
            <div>
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p>
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
              </p>
              <div className="product-footer">
                <span>${product.price}</span>
                <span>
                  {product.rating.rate}  ({product.rating.count} reviews)
                </span>
              </div>
              <button onClick={() => navigate(`/product/${product.id}`)} >Product Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}