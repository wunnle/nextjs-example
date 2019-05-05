import fetch from 'isomorphic-unfetch'
import Link from "next/link";

const Users = ({ users }) => {

  return (
    <div>
      {
          !users ? <div>Getting users</div>
          :
          <div>
            {users.info.map(user => <User {...user} key={user._id}/>)}
          </div>
      }
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </div>
  )

}

Users.getInitialProps = async () => {
  const res = await fetch('https://user-service.wunnle.dev/allUsers')
  const users = await res.json()

  console.log('got users:', users)

  return {
    users
  }
}


const User = ({ name, _id }) => (
  <div>
    <strong>{name}</strong>
    <p><small>{_id}</small></p>
  </div>
)

export default Users;