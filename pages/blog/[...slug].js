import { useRouter } from "next/router"

const ShowBlogPage = () => {
  const router = useRouter();
  console.log(router.query)
  return (
    <div>ShowBlogPage</div>
  )
}

export default ShowBlogPage