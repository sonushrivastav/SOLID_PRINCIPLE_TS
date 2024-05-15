import axios  from "axios";
import { useEffect, useState } from "react";


export const useProducts = ()=>{
    const [products,setProducts] = useState<any[]>([])
    const fetchProduct = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
    
        if (response && response.data) setProducts(response.data);
      };

      useEffect(() => {
        fetchProduct();
      }, []);

      return {products}
}