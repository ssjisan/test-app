import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        maxWidth: 1000,
        margin: "auto",
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
        boxShadow:
          "0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)",
    },
    title:{
        color: '#000',
        textAlign: 'center',
        marginBottom:"30px"
    },
    form: {
        padding:"20px"
    }
}))