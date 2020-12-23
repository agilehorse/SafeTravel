import {Typography, makeStyles} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function Header(props) {

    const classes = useStyles();

    const CancelIcon = props.isCancel ? ArrowBackIosIcon : CloseIcon
    return (
        <div className={classes.root}>
            <CancelIcon className={!props.cancelAction && classes.hidden} onClick={props.cancelAction} fontSize="large"/>
            <Typography variant="h6">{props.text}</Typography>
            <DoneIcon className={!props.confirmAction && classes.hidden} onClick={props.confirmAction} fontSize="large"/>
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
    hidden: {
        visibility: 'hidden',
    }
}));