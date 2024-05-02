import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup'
import { logIn } from './Store/authSlice';
import Cookies from 'js-cookie';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({                           // formik
    initialValues: {

      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({

      email: Yup.string().required("Email is required").email("Invalid email"),
      password: Yup.string().required("Password is required").min(8, "Must be at least 8 characters"),
    }),
    onSubmit: async (values) => {
      const sVals = {
        username: "mor_231",
        password: "83r5^_"
      }
      try {
        const res = await axios.post('https://fakestoreapi.com/auth/login', sVals);
        console.log("res",res)
        const token = res.data.token; // Extract the token from the response
        console.log("Token is here :", token);
        Cookies.set("token", token, { expires: 7 });
        if (Cookies.get("token")) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error occurred during signIn:", error);
      }
    }
  
  });


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{ boxShadow: "2px 2px 5px grey", borderRadius: 2 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 15
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              size='small'
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? <Typography sx={{ color: "red" }}>{formik.errors.email}</Typography> : <></>}
            <TextField
              margin="normal"
              size='small'
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? <Typography sx={{ color: "red" }}>{formik.errors.password}</Typography> : <></>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="" variant="body2" onClick={() => navigate("/signUp")}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />

        </Box>
      </Container>
    </ThemeProvider>
  );
}