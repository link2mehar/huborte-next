import { useRouter } from 'next/router'
import Archive from '../../components/Archive'
const Category = () => {
  const router = useRouter()
  const { cid } = router.query
  
    return (<Archive  catId = {cid} />)
  
}

export default Category