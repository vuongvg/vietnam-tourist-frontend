import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../api';
import { Link } from 'react-router-dom';
import {
    FormControl,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    IconButton,
    Alert
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Person, Visibility, VisibilityOff, Done, WarningAmber, Email} from '@mui/icons-material';

function Register() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
      username: '',
      email:'',
      password:'',
      confirmPassword:'',
      showPassword:false,
  });

  const [errors, setErrors] = useState({
      requestErr:'',
      usernameErr:'',
      email:'',
      passwordErr:'',
      confirmPasswordErr:''
  });

  const [registerWait, setRegisterWait] = useState(false);

  const handleChange = (prop) => (event) => {
    setErrors({ requestErr:'', usernameErr:'', email:'', passwordErr:'', confirmPasswordErr:'' });
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
      setErrors({ requestErr:'', usernameErr:'', email:'', passwordErr:'', confirmPasswordErr:'' });
      if (!values.username) {
          setErrors({ ...errors, usernameErr:'Username is empty' });
      } else if (!values.email) {
          setErrors({ ...errors, emailErr:'Email is empty or invalid' });
      } else if (!values.password) {
        setErrors({ ...errors, passwordErr:'Password is empty' });
      } else if (!values.confirmPassword) {
        setErrors({ ...errors, confirmPasswordErr:'Confirm password failed' });
      } else {
        setRegisterWait(true);
        request.post(
            '/auth/register', 
            {
              username: values.username,
              password: values.password,
              email: values.email,
              phone: '1234567899'
            }
        )
        .then((res) => {
          if (res.status === 200) {
            setRegisterWait(false);
            setErrors({ ...errors, requestErr:'' });
            navigate('/login');
          } else {
            setErrors({ ...errors, requestErr:res.data.message });
            setRegisterWait(false);
          }
        })
        .catch(() => {
            console.log("request failed");
        })
      }
  }

  useEffect(() => {

  },[])

  return (
    <div className='position-absolute top-0 bottom-0 end-0 start-0 bg-white'>
        <div className='position-relative h-100 '>
            <div className='position-absolute top-50 w-100 translate-middle-y'>
                <div className='col-md-4 col-10 m-auto p-3 pb-4 rounded border'>
                    <h3 className='color-secondary text-center'>Register Form</h3>
                    <div hidden={!errors.requestErr} className="mt-3">
                        <Alert severity="error">{errors.requestErr}</Alert>
                    </div>
                    <div className='mt-4'>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Username</InputLabel>
                            <OutlinedInput
                              type='text'
                              value={values.username}
                              onChange={handleChange('username')}
                              endAdornment={
                              <InputAdornment position="end">
                                  <IconButton edge="end" className='bg-white'>
                                    <Person />
                                  </IconButton>
                              </InputAdornment>
                              }
                              label="Username"
                            />
                        </FormControl>      
                        <div className='color-d80f65 fs-0d8 mt-1'>{errors.usernameErr}</div>
                    </div>
                    <div className='mt-4'>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Email</InputLabel>
                            <OutlinedInput
                                type='text'
                                value={values.email}
                                onChange={handleChange('email')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton className='bg-white' edge="end">
                                      <Email />
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Username"
                            />
                        </FormControl>      
                        <div className='color-d80f65 fs-0d8 mt-1'>{errors.emailErr}</div>
                    </div>
                    <div className='mt-4'>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {
                                      values.showPassword 
                                        ? <VisibilityOff /> 
                                        : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>    
                        <div className='color-d80f65 fs-0d8 mt-1'>{errors.passwordErr}</div>   
                    </div>
                    <div className='mt-4 mb-5'>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Confirm password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type='password'
                                value={values.confirmPassword}
                                onChange={handleChange('confirmPassword')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton className='bg-white' edge="end">
                                      {
                                        !values.confirmPassword 
                                          ? <></>
                                          : 
                                            values.confirmPassword === values.password 
                                            ? <Done color="success"/> 
                                            : <WarningAmber sx={{ color:"#ffc107" }}/>
                                      }
                                    
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>    
                        <div className='color-d80f65 fs-0d8 mt-1'>{errors.passwordErr}</div>   
                    </div>
                    <div>
                        <LoadingButton
                            loading={registerWait}
                            loadingPosition="start"
                            variant="contained"
                            fullWidth
                            sx={{fontWeight:"bold"}}
                            onClick={handleLogin}
                            startIcon={<></>}
                        >
                          Register
                        </LoadingButton>
                    </div>
                    <div className='text-center mt-4'>
                        <span>Already have an account?</span> <Link to="/login" className='fw-bold color-d80f65'>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register