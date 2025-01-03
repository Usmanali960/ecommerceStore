type Props = {
    title:string
}

function Title({title}:Props) {
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold mt-20 underline">{title}</h1>
    </div>
  )
}

export default Title
