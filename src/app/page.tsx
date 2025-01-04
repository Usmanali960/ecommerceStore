import Products from "../components/Products";
import Title from "../components/Title";

// Fetch the data from the API
const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone", {
    cache: "no-store", // Ensure fresh data is fetched
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
};

export default async function Home() {
  let products = [];
  try {
    products = await getData();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div>
      <Title title="Get Your Favorite Phone" />
      <Products products={products} />
    </div>
  );
}
