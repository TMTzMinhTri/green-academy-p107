import { useRouter } from 'next/router'

const ArticleDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return <div>ArticleDetail {id}</div>
}

export default ArticleDetail
