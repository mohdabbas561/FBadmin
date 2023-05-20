import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";
// import { loginCall } from "../../apiCalls";
import { CircularProgress } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Topbar from '../../components/topbar/Topbar'
// import Navbar from "../../components/Navbar/navbar";
import axios from "axios";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const [Error, setError] = useState(null);


  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login",
        { email, password });
      if (res.data.isAdmin) {
        res.data.isAdmin &&
          setError("Admin Logged In");
      } else {
        setError("You'r not a Admin");
      }
      setOpen(true);
    } catch (error) {
      console.log(error.response.data)
      setError(error.response.data);
      setOpen(true);
    }
    login({ email, password }, dispatch);
  };

  return (
    <>

      {/* <div className="login">
        <form className="loginForm">
          <input
            type="text"
            placeholder="email"
            className="loginInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="loginInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="loginButton"
            onClick={handleLogin}
            disabled={isFetching}
          >
            Login
          </button>
        </form>
      </div> */}
      <div className="containerlogin">
        <div className="form">
          <h2>Admin Panel Login</h2>
          <form className="loginBox" onSubmit={handleLogin}>
            <input
              placeholder="Email"
              type="email"
              required
              className="txtfieldlogin"
              onChange={(e) => setEmail(e.target.value)}
            // ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="txtfieldlogin"
              onChange={(e) => setPassword(e.target.value)}
            // ref={password}
            />
            <button className="lbtn" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {Error && <p>{Error}</p>}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
