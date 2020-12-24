import {makeStyles, Typography} from "@material-ui/core";

export default function DetailSection({header, items}) {

    const classes = useStyles();

    return (
        <div className={classes.section}>
            <Typography variant="h6" className={classes.header}>{header}</Typography>
            {items.map(item => (<div className={classes.row}>
                {item.left && <Typography>{item.left}:</Typography>}
                <Typography className={classes.value}>{item.right}</Typography>
            </div>))}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        display: 'flex',
        flexDirection: "column",
        margin: theme.spacing(2,3),
        lineHeight: 1
    },
    header: {
        alignSelf: 'flex-start',
        color: theme.palette.primary.main
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    value: {
        fontWeight: 500,
        fontSize: '1.1rem',
        textAlign: "left"
    }
}));