const getData = async () => {
    const res = await fetch("https://jsonserver.reactbd.com/phone", {
      cache: "no-store", // Prevent stale data
    });
  
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
  
    return res.json();
  };
  
  export const getTheSingleProduct = async (_id: number) => {
    try {
      const data = await getData();
  
      if (!Array.isArray(data)) {
        throw new Error("Unexpected response format");
      }
  
      const singleProduct = data.find((product: { _id: number }) => product._id === _id);
  
      return singleProduct || null; // Return null if no product is found
    } catch (error) {
      console.error(`Error fetching product with ID ${_id}:`, error);
      return null; // Graceful fallback for errors
    }
  };
  