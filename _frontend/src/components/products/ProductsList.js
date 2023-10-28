import "../../styles/components/products/products-list.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "/eshop/products";

    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
        console.log("response.data: ", response.data);
      })
      .catch((error) => {
        console.log("Error fetching product data: ", error);
      });
  }, []);

  console.log("Products: ", products);

  //   if (!products) return <div class="spinner"></div>;

  return (
    <div>
      <h1>Products List</h1>
      <ul>
        {products ??
          products.map((product) => <li key={product.id}>{product.name}</li>)}
      </ul>
    </div>
  );
}

export default ProductsList;
