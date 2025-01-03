import Products from "../components/Products"
import Title from "../components/Title"

const getData = async () => {
  const res = await fetch(`https://jsonserver.reactbd.com/phone`)

  //fecth the data
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json()
}

export default async function Home() {

  const product = await getData()

  return (
    <div>
      <Title title="Get Your Favorite Phone"/>
      <Products products={product}/>
    </div>
  );
}
