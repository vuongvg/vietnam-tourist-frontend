import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    FormControl,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Person, Visibility, VisibilityOff } from '@mui/icons-material';

function Login() {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
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

  return (
    <div className='position-absolute top-0 bottom-0 end-0 start-0 bg-white'>
        <div className='position-relative h-100 '>
            <div className='position-absolute top-50 w-100 translate-middle-y'>
                <div className='col-md-3 col-10 m-auto p-3 pb-4 rounded border'>
                    <h3 className='color-secondary text-center'>Login Form</h3>
                    <div className='my-4'>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type='text'
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                    >
                                        <Person />
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Username"
                            />
                        </FormControl>      
                    </div>
                    <div>
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
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>       
                    </div>
                    <div className='text-end mt-2 mb-4'>
                        <Link to="/register" style={{fontSize:'.9rem'}}>Forgot password?</Link>
                    </div>
                    <div>
                        <Button
                            loading
                            loadingPosition="start"
                            variant="contained"
                            fullWidth="true"
                            sx={{fontWeight:"bold"}}
                        >
                            Login
                        </Button>
                    </div>
                    <div className='text-center mt-4'>
                        <span>Don't have an account?</span> <Link to="/register">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login