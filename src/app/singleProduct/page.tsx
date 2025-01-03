import Image from "next/image"
import { getTheSingleProduct } from "../../helpers"
import Link from "next/link"

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const SingleProduct = async ({ searchParams }: Props) => {
    const _idString = searchParams._id
    const _id = Number(_idString)
    console.log(typeof _id)

    const product = await getTheSingleProduct(_id)
    console.log(product)

    return (
        <>
        <Link className="bg-orange-400 px-4 py-2 text-white font-medium rounded-sm m-5 lg:m-20 mt-10" href={"/"}>
        <button className="mt-5">Back</button>
        </Link>
        <div className="flex flex-col lg:flex-row items-center max-w-screen-xl h-auto justify-center p-4">
            <div className="mb-6 lg:mb-0 lg:w-1/2 flex justify-center">
                <Image 
                    src={product.image} 
                    alt="product image" 
                    height={500} 
                    width={500} 
                    className="rounded-lg" 
                />
            </div>
            <div className="lg:w-1/2 lg:-ml-16 lg:mt-0 -mt-8 w-full text-center lg:text-left">
                <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                <p className="text-sm lg:text-base font-medium mb-4">{product.description}</p>
                <p className="text-lg font-semibold">Price: ${product.price}</p>
                <p className="text-lg font-semibold">Category: {product.category}</p>
                <h2>{product.isNew && "New Item"}</h2>
            </div>
        </div>
        </>
    )
}

export default SingleProduct
