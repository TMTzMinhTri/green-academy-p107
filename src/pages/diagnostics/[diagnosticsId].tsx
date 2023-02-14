import { useRouter } from 'next/router'

const DiagnosticDetail = () => {
  const router = useRouter()
  const { diagnosticsId } = router.query

  return <div>DiagnosticDetail {diagnosticsId}</div>
}

export default DiagnosticDetail
