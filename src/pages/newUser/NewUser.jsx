import "./newUser.css";
import React, { useContext, useState, useRef } from "react";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { PhonelinkOff } from "@material-ui/icons";


export default function NewUser() {
  // const [movie, setMovie] = useState(null);
  // const [user, setUser] = useState({});
  // const [img, setImg] = useState(null);
  // const { user: currentUser } = useContext(AuthContext);
  const username = useRef();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const desc = useRef({});
  const city = useRef({});
  const from = useRef();
  const phoneNo = useRef();
  const isAdmin = useRef();
  const relationship = useRef();
  const [file, setFile] = useState(null);
  const { dispatch } = useContext(MovieContext);
  const [open, setOpen] = React.useState(false);
  const [Error, setError] = useState(null);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setMovie({ ...movie, [e.target.name]: value });
  // };

  // const handleSubmit =  (e) => {
  //   e.preventDefault();
  //   try {
  //     if (passwordAgain.current.value !== password.current.value) {
  //       passwordAgain.current.setCustomValidity("Passwords don't match!");
  //     } else {
  //       const movie = {
  //         username: username.current.value,
  //         // name: name.current.value,
  //         email: email.current.value,
  //         password: password.current.value,
  //       };
  //       console.log(movie)
  //       createMovie(movie, dispatch);
  //       // await axios.post("/auth/register", movie);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        //name: name.current.value,
        // phoneNo: phoneNo.current.value,
        // city: city.current.value,
        // desc: desc.current.value,
        // from: from.current.value,
        // // isAdmin: isAdmin.current.value,
        // relationship: relationship.current.value,
      };
      try {
      const res=  await axios.post("https://facepageback.onrender.com/auth/register", user);
      console.log(res)
        setError("User Created");
        setOpen(true);
      } catch (error) {
        setError(error.response.data);
        setOpen(true);
      }
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text"
            //placeholder="john"
            required
            ref={username}
          />
        </div>
        {/* <div className="newUserItem">
          <label>Full Name</label>
          <input type="text"
           // placeholder="John Smith"
            required
            ref={name}
          />
        </div> */}
        <div className="newUserItem">
          <label>Email</label>
          <input type="email"
            //placeholder="john@gmail.com"
            required
            ref={email}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password"
            //placeholder="password"
            required
            minLength="6"
            ref={password}
          />
        </div>
        <div className="newUserItem">
          <label>Confirm Password</label>
          <input type="password"
            //placeholder="password"
            required
            ref={passwordAgain}
          />
        </div>
        {/* <div className="newUserItem">
          <label>Phone</label>
          <input type="text"
            placeholder=""
            ref={phoneNo}
          />
        </div> */}
        {/* <div className="newUserItem">
          <label>City</label>
          <input type="text"
            //placeholder="New York | USA"
            ref={city}
          />
        </div>
        <div className="newUserItem">
          <label>From</label>
          <input type="text"
            //placeholder=""
            ref={from}
          />
        </div>
        <div className="newUserItem">
          <label>About</label>
          <input type="text"
            //placeholder=""
            ref={desc}
          />
        </div>
        <div className="newUserItem">
          <label>Relationship Status</label>
          <input type="text"
           // placeholder=""
            ref={relationship}
          />
        </div> */}
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Admin</label>
          <select className="newUserSelect" name="active" id="active" ref={isAdmin}>
            <option value="true">true</option>
            <option value="false">False</option>
          </select>
        </div> */}
        
        <button
          type="Submit"
          className="newUserButton">Create</button>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>{Error}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
