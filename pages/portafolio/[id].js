import {useRouter} from "next/router"


const PortafolioDetailsPage = () => {
    const router = useRouter()
    const {id} = router.query
    console.log(id)
    console.log(router.pathname)
    // send a request to some backend server
    // to feact the piece of data with an id of router.query.id
  return (
    <div>PortafolioDetailsPage</div>
  )
}

export default PortafolioDetailsPage