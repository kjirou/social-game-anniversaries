import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const AnniversaryPage = (): ReactElement => {
  const router = useRouter()
  return <div>AnniversaryPage: {router.query.id}</div>
}

export default AnniversaryPage
