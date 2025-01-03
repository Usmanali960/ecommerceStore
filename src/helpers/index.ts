const getData = async () => {
    const res = await fetch(`https://jsonserver.reactbd.com/phone`)
    //fecth the data
    if (!res.ok) {
        throw new Error('Failed to fetch')
    }
    return res.json()
}

export const getTheSingleProduct = async (_id: number) => {
    const item = await getData()
    const singleProduct = item.find((product: any) => product._id === _id)
    return singleProduct
}