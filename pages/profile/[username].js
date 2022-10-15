import { useRouter } from 'next/router'

export default function Userprofile() {
  const router = useRouter()
  const {username} = router.query
    return(
    <div>
        <h1> Userprofile </h1>
        <p> hello {username} </p>
</div>
  )
}
