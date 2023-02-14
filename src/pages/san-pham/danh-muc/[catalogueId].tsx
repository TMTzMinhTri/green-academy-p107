import { useRouter } from 'next/router'

const ProductCatalogues = () => {
  const router = useRouter()
  const { catalogueId } = router.query

  return <div>ProductCatalogues {catalogueId}</div>
}

export default ProductCatalogues
