import './closeFriends.css'

const CloseFriends = ({user}) => {
  return (
    <li className="sidebarFried">
                        <img src={user.profilePicture} alt="" className='sidebarFriendImg'/>
                        <span className="sidebarFriendName">{user.username}</span>
                    </li>
  )
}

export default CloseFriends
