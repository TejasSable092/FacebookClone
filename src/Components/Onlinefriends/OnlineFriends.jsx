import  './onlineFriends.css'

function OnlineFriends({user}) {
  return (
    <li className='rightbarFriend'>
    <div className="rightbarProfileImgContainer">
      <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{user.user}</span>
  </li>
  )
}

export default OnlineFriends
