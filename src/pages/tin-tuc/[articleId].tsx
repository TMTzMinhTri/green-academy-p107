import { useRouter } from 'next/router'

const ArticleDetail = () => {
  const router = useRouter()
  const { articleId } = router.query

  return <div>ArticleDetail {articleId}</div>
}

export default ArticleDetail
