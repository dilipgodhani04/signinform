import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { WindowTwoTone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function Sign() {
  const [signInData, setSignInData] = useState({});
  const[flag,setFlage]=useState(false)

  let error = {};
let navigate =useNavigate();
  const handleSubmit = (event) => {
   
    setSignInData({ ...signInData, [event.target.name]: event.target.value });
  };
  // console.log(signInData, "-----------");
  //   let navigate = useNavigate();

  const hadleClick = (e) => {
    e.preventDefault();
    let storeArry = JSON.parse(localStorage.getItem("data"));

    // console.log(storeArry, "------");

    const findUser =
      storeArry && storeArry.find((ele) => ele.email === signInData?.email);
    console.log("###############3", findUser);

    const userPassword =
      storeArry &&
      storeArry.find((ele) => ele.password === signInData?.password);
    console.log(userPassword, "---------");

    if (!findUser) {
     
      // {error && error.email != "" && <p>{error?.email}</p>}
      setFlage(true)
      // alert('email id is wrong')
      console.log(error, "-----errors");
    }
    else if (!userPassword) {
      setFlage(true)
    }
    else if (findUser && userPassword)
    {
      navigate("/home");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                onChange={(event) => handleSubmit(event)}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={signInData?.email}
                autoComplete="email"
                autoFocus
              />
            {flag&& <p>email not found</p>}
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(event) => handleSubmit(event)}
                name="password"
                label="Password"
                type="password"
                id="password"
                value={signInData?.password}
                autoComplete="current-password"
              />{flag&&<p>password is wrong</p>}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                onClick={(e) => hadleClick(e)}
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
                  {/* <Button variant="contained" onClick={() => navigate("/")}>
              Already have an account? Sign UP
          </Button> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
