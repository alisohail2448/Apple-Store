export const fetchProduct = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProduct`);
  
    const data = await res.json();
    const products: Product[] = data.products;
  
    return products;
  };