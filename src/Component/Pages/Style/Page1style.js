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

    }
}))