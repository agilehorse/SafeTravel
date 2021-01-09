import React, {useRef, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import Header from "../reusable/Header";
import {DESTINATION} from "../../utils/mockData";
import {makeStyles} from "@material-ui/core/styles";
import {Collapse, IconButton, ListItem} from "@material-ui/core";

import {ThumbDown, ThumbUp} from "@material-ui/icons";
import {Alert} from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

export default function PathsDetail({changeBottomNav}) {
    const classes = useStyles();
    const history = useHistory();
    const {destinationsId} = useParams();

    const dest = DESTINATION[destinationsId];

    const [coefficient, setCoefficient] = useState(dest.rating);
    const [alert, setAlert] = useState(false);
    const wasRated = useRef(false);

    const review = (plus) => {
        if (wasRated.current) {
            setAlert(true);
        } else {
            wasRated.current = true;
            setCoefficient(old => old+plus);
        }
    };

    return (
        <>
            <Header text={dest.name} isCancel cancelAction={() => history.push("/destinations")}/>
            <div
                className={classes.picture}
                style={{backgroundImage: `url(${dest.picture})`}}
            />
            <div className={classes.content}>
                <p>{dest.description}</p>
                <p className={classes.ratingLine}>
                    <span>
                        <strong>Hodnocení:</strong> {coefficient}
                    </span>
                    <IconButton className={classes.ratingButton} color="primary"
                                onClick={()=>review(1)}>
                        <ThumbUp />
                    </IconButton>
                    <IconButton className={classes.ratingButton} color="secondary" style={{marginLeft: 0}}
                                onClick={()=>review(-1)}>
                        <ThumbDown />
                    </IconButton>
                </p>


                <Collapse in={alert}>
                    <Alert
                        severity="warning"
                        className={classes.alert}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => setAlert(false)}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        Tuto cestu jste již ohodnotil.
                    </Alert>
                </Collapse>

                <Button variant="contained" color="first" onClick={() => {
                    history.push('/places');
                    changeBottomNav(1);
                }}>
                    VYBRAT
                </Button>

            </div>
        </>
    );
}

const useStyles = makeStyles((theme)=>({
    content: {
        margin: theme.spacing(2),
    },
    navigateBtn: {
        width: "100%"
    },
    picture: {
        height: 200,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
    },
    ratingButton: {
        minWidth: "unset",
        padding: theme.spacing(1),
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        marginLeft: theme.spacing(1)
    },
    ratingLine: {
        display: "flex",
        alignItems: "center"
    },
    alert: {
        marginBottom: theme.spacing(2)
    }
}));
