import { useParams } from "react-router-dom"

function ProductScreen() {
     const { slug } = useParams();
  return (
    <div>
      <h1>product screens test {slug}</h1>
    </div>
  )
}

export default ProductScreen
