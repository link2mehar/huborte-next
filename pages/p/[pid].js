import { useRouter } from 'next/router'
import Single from '../../components/Single'
const Product = () => {
  const router = useRouter()
  const { pid } = router.query
  
  
  

  return <Single id={pid} />
}

export default Product