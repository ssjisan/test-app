import { Typography,OutlinedInput,Card,Button,CardActions,CardContent,Grid,TextField,FormControl,IconButton,InputAdornment,InputLabel } from '@material-ui/core'
import React from 'react'
import useStyles from "./Style/Page1style";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
export default function Page3() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      console.log(values);
    
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
        <div className={classes.about}>
      <Card className={classes.card}>
        <form>
          <CardContent>
            <Grid container spacing={0}>
              <Grid item lg={6} xs={12}>
                <TextField
                  id="fname"
                  name="fname"
                  label="First Name*"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={6} xs={12}>
              <TextField
                  id="lname"
                  name="lname"
                  label="Last Name*"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={6} xs={12}>
              <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email*"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <br/>
              <br/>
              <br/>
               </Grid> 
              <Grid item lg={6} xs={12}>
              <TextField
                  id="phone"
                  name="phone"
                  type="text"
                  label="Phone Number*"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <br/>
              <br/>
              <br/>
              </Grid>
              <Grid item lg={6} xs={12}>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"    className={classes.textField}>
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
                </Grid>
              {/* <Grid item lg={6} xs={12}>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"    className={classes.textField}>
          <InputLabel htmlFor="outlined-adornment-password" className={classes.textField}>Password</InputLabel>
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
              </Grid> */}
            </Grid>
            <br/>
            <br/>
            {
                values.password.length >= 8 ? <Typography style={{color:"green"}}> <CheckCircleIcon/>At least 8 characters</Typography> :  <Typography  style={{color:"red"}}> <CancelIcon/> At least 8 characters</Typography>
            }
            {
                values.password.match(/[A-Z]/) ? <Typography style={{color:"green"}}> <CheckCircleIcon/>At least 1 uppercase letter</Typography> :  <Typography  style={{color:"red"}}> <CancelIcon/> At least 8 characters</Typography>
            }
            {
                values.password.match(/[a-z]/) ? <Typography style={{color:"green"}}> <CheckCircleIcon/>At least 1 lowercase letter</Typography> :  <Typography  style={{color:"red"}}> <CancelIcon/> At least 8 characters</Typography>
            }
            {
                values.password.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/) ? <Typography style={{color:"green"}}> <CheckCircleIcon/>At least 8 characters</Typography> :  <Typography  style={{color:"red"}}> <CancelIcon/> At least 1 number or special character</Typography>
            }
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              className={classes.submit}
            >
              SUBMIT
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>            
    )
}
