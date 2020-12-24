import logo from "../resources/big_logo.png"
import {makeStyles} from "@material-ui/core";

export default function Destinations() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={logo} alt="app logo" className={classes.image}/>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
      display: "flex",
      justifyContent: 'center'
    },
    image: {
        marginTop: theme.spacing(5),
        maxWidth: '80%',
    },
}));