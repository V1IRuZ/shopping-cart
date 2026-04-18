import { useState, useEffect } from "react";

const useProductData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://dummyjson.com/products", {
      mode: "cors",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) =>
        setData(
          json.products.map((item, index) => ({
            ...item,
            isDiscount: (index + 1) % 6 === 0,
          })),
        ),
      )
      .catch((error) => {
        if (error.name !== "AbortError") {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { data, loading, error };
};

export { useProductData };
