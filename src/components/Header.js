import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';

export default function Header(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.cancelAction && <CloseIcon onClick={props.cancelAction} fontSize="large"/>}
            <Typography variant="h6">{props.text}</Typography>
            {props.confirmAction && <DoneIcon onClick={props.confirmAction} fontSize="large"/>}
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(1, 1, 1, 1),
        border: "2px solid darkgrey"
    },
}));