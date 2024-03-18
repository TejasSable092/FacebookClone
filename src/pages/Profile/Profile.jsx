import Feed from "../../Components/Feed/Feed"
import Rightbar from "../../Components/rightbar/Rightbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Topbar from "../../Components/Topbar/Topbar"
import './profile.css'
export default function Profile() {
  return (
    <> <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src="src/assets/post/2.jpg"
              alt=""
            />
            <img
              className="profileUserImg"
              src="src/assets/person/profile.jpg"
              alt=""
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">Harry Bruk</h4>
              <span className="profileInfoDesc">Aesthetic!😎🔥</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar profile/>
        </div>
      </div>
    </div>
  </>
);
}