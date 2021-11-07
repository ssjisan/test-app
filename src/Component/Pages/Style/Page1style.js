import { makeStyles } from '@material-ui/core/styles';
import name from "../../images/image1.jpg"

export default makeStyles((theme) => ({
    card: {
        maxWidth: 1000,
        marginTop:"150px",
        margin: "auto",
        boxShadow:
          "0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)",
    },
    title:{
        color: '#000',
        textAlign: 'center',
        marginBottom:"30px"
    },
    form: {
        padding: "20px",
        textAlign: 'center',
    },
    about: {
        backgroundImage: "url(https://wallpaperaccess.com/full/2578748.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        top: "0",
        width:'100%',
        position:"absolute",

    }, error: {
        verticalAlign: 'middle'
      },
      headline: {
        fontWeight: 700,
        textAlign: 'center',
        paddingTop: '30px',
      },
      subheadline: {
        fontWeight: 500,
        textAlign: 'center',
        paddingTop: '10px',
        color: '#ccc'
      },
      title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
      },
      textField: {
        // margin: '0 2%',
        width: 300,
        border: '#ccc',
        width: '95%',
        height: '45px',
      },
      submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2),
        border: '1px solid #00756A',
        fontWeight: 500,
        width:'350px',
        '&:hover': {
          border: '1px solid #00756A',
          backgroundColor: '#fff',
          color: '#000',
          fontWeight: 500,
        }
      },
      orDivider: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      seperator: {
        height: '2px',
        width: '20vw',
        backgroundColor: "#000"
      },
      orStyle: {
        padding: '0 5%'
      },
      loginWithText: {
        padding: '0 2%',
        fontWeight: 700
      },
    
      googleLogin: {
        width: '270px',
        height: '45px',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        boxShadow: '1px 1px 5px #ccc',
        '&:hover': {
          backgroundColor: '#dc3545',
          color: '#fff'
        }
    
      },
      fbLogin: {
        width: '270px',
        height: '45px',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        boxShadow: '1px 1px 5px #ccc',
        '&:hover': {
          backgroundColor: '#18ACFE',
          color: '#fff'
        }
    
      },
      githubLogin: {
        width: '270px',
        height: '45px',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        boxShadow: '1px 1px 5px #ccc',
        '&:hover': {
          backgroundColor: '#444',
          color: '#fff'
        }
    
      },
      loginwithContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: '2%',
        flexWrap:'wrap'
      },
      fbIcon: {
        color: '#0163E0'
      },

      tabsDiv:{
        display: 'flex',
        justifyContent: 'space-around'
      },
      talentTab:{
        color: '#00756A',
        borderBottom: '3px solid #00756A',
        padding:"10px 20px"
      },
      companyTab:{
        color: '#444',
        borderBottom: '3px solid #fff',
        padding:"10px 20px"
      },
}))