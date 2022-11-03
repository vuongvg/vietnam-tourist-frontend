import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import request from "../api";
import { Link } from "react-router-dom";
import { FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton, Alert } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Person, Visibility, VisibilityOff } from "@mui/icons-material";
import Background from "../images/loginbackground.jpg";
import { getToken } from "../utils";

function LoginPage() {
   // return <div style={{height:"1000px",background:''}}>s</div>
   const navigate = useNavigate();

   const [values, setValues] = useState({
      username: "",
      password: "",
      showPassword: false,
   });

   const [errors, setErrors] = useState({
      requestErr: "",
      usernameErr: "",
      passwordErr: "",
   });

   const [loginWait, setLoginWait] = useState(false);

   const handleChange = (prop) => (event) => {
      setErrors({ requestErr: "", usernameErr: "", passwordErr: "" });
      setValues({ ...values, [prop]: event.target.value });
   };

   const handleClickShowPassword = () => {
      setValues({
         ...values,
         showPassword: !values.showPassword,
      });
   };

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   const handleLogin = () => {
      setErrors({ requestErr: "", usernameErr: "", passwordErr: "" });
      if (!values.username) return setErrors({ ...errors, usernameErr: "Username is empty" });
      if (!values.password) return setErrors({ ...errors, passwordErr: "Password is empty" });

      setLoginWait(true);
      request
         .post("/auth/login", {
            username: values.username,
            password: values.password,
         })
         .then((res) => {
            setLoginWait(false);
            setErrors({ ...errors, requestErr: "" });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userRole", res.data.role);
            // navigate(-1);
            navigate("/");
         })
         .catch((err) => {
            setErrors({ ...errors, requestErr: err.response.data });
            setLoginWait(false);
         });
   };

   useEffect(() => {
      if (getToken()) {
         navigate("/");
      }
   }, []);

   return (
      <div
         className="position-absolute top-0 bottom-0 end-0 start-0 bg-center bg-cover bg-norepeat"
         style={{ backgroundImage: `url(${Background})` }}
      >
         <div className="position-relative h-100 ">
            <div className="position-absolute top-50 w-100 translate-middle-y">
               <div className="col-md-4 col-lg-3 col-10 m-auto p-3 pb-4 rounded border" style={{ backgroundColor: "rgba(255,255,255,.8)" }}>
                  <h3 className="color-secondary text-center">Login Form</h3>
                  <div hidden={!errors.requestErr} className="mt-3">
                     <Alert severity="error">{errors.requestErr}</Alert>
                  </div>
                  <div className="my-4">
                     <FormControl fullWidth variant="outlined">
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput
                           id="outlined-adornment-password"
                           type="text"
                           value={values.username}
                           onChange={handleChange("username")}
                           endAdornment={
                              <InputAdornment position="end">
                                 <IconButton edge="end">
                                    <Person />
                                 </IconButton>
                              </InputAdornment>
                           }
                           label="Username"
                        />
                     </FormControl>
                     <div className="color-d80f65 fs-0d8 mt-1">{errors.usernameErr}</div>
                  </div>
                  <div>
                     <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                           id="outlined-adornment-password"
                           type={values.showPassword ? "text" : "password"}
                           value={values.password}
                           onChange={handleChange("password")}
                           endAdornment={
                              <InputAdornment position="end">
                                 <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                 >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                 </IconButton>
                              </InputAdornment>
                           }
                           label="Password"
                        />
                     </FormControl>
                     <div className="color-d80f65 fs-0d8 mt-1">{errors.passwordErr}</div>
                  </div>
                  <div className="text-end mt-2 mb-4 fw-bold">
                     <Link to="/register" className="color-d80f65 fs-0d8">
                        Forgot password?
                     </Link>
                  </div>
                  <div>
                     <LoadingButton
                        loading={loginWait}
                        loadingPosition="start"
                        variant="contained"
                        fullWidth
                        sx={{ fontWeight: "bold" }}
                        onClick={handleLogin}
                        startIcon={<></>}
                     >
                        Login
                     </LoadingButton>
                  </div>
                  <div className="text-center mt-4">
                     <span>Don't have an account?</span>{" "}
                     <Link to="/register" className="fw-bold color-d80f65">
                        Sign up
                     </Link>
                  </div>
                  <div className="text-center mt-4">
                     <Link to="/register" className="fw-bold color-6a fs-0d8">
                        See pages without an account
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LoginPage;
