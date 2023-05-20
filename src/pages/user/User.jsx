import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./user.css";

export default function User() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">View User</h1>
        {/* <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link> */}
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={
                movie.profilePicture
                  ? "http://localhost:8800/images/" + movie.profilePicture
                  : "http://localhost:8800/images/person/noAvatar.png"
              }
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{movie.name}</span>
              <span className="userShowUserTitle">{movie.desc}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{movie.username}</span>
            </div>
            {/* <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{movie.date}</span>
            </div> */}
            {/* <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{movie.phoneNo}</span>
            </div> */}
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{movie.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{movie.city},{movie.from}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">General Information</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={movie.username}
                  className="userUpdateInput"
                  disabled
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder={movie.name}
                  className="userUpdateInput"
                  disabled
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={movie.email}
                  className="userUpdateInput"
                  disabled
                />
              </div>
              {/* <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={movie.phoneNo}
                  max="10"
                  className="userUpdateInput"
                />
              </div> */}
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={movie.city}
                  className="userUpdateInput"
                  disabled
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={
                    movie.profilePicture
                      ? "http://localhost:8800/images/" + movie.profilePicture
                      : "http://localhost:8800/images/person/noAvatar.png"
                  }
                  alt=""
                />
                {/* <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label> */}
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
