import { useRouter } from 'next/router'

const SelectedClientPage = () => {
    const router = useRouter()
    console.log(router.query, "router.query")
  return (
    <div>SelectedClientPage</div>
  )
}

export default SelectedClientPage