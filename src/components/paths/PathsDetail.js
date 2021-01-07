import React, {useRef, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import Header from "../reusable/Header";
import {PATHS} from "../../utils/mockData";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Collapse, IconButton, Typography} from "@material-ui/core";
import {InitialPlacesFilterState} from "../places/PlacesFilterDialog";
import clsx from "clsx";
import {cutText} from "../../utils/functions";

import {ThumbUp, ThumbDown} from "@material-ui/icons";
import {Alert} from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
import GraphicWay from "../reusable/GraphicWay";

export default function PathsDetail() {
    const classes = useStyles();
    const history = useHistory();
    const {pathId} = useParams();

    const path = PATHS[pathId];

    const [coefficient, setCoefficient] = useState(path.rating);
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
            <Header text={path.name} isCancel cancelAction={() => history.push("/paths")}/>
            <div
                className={classes.picture}
                style={{backgroundImage: `url(${path.picture})`}}
            />
            <div className={classes.content}>
                <p><strong>Doba cesty:</strong> {path.duration/60} hodin</p>
                <p><strong>Typ dopravy:</strong> pěšky</p>
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
                    <p style={{marginTop: 0}}>
                        <Alert
                            severity="warning"
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
                    </p>
                </Collapse>


                <Button className={classes.navigateBtn} variant="contained" color="primary"
                        onClick={() => history.push(`/paths/${pathId}/navigation`)}>
                    Začít navigovat
                </Button>
            </div>
            <div className={classes.content}>
                <GraphicWay path={path} pathId={pathId} />
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
    }
}));