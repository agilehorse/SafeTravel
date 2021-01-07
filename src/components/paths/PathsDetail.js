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

export default function PathsDetail() {
    const classes = useStyles();

    const {pathId} = useParams();
    const history = useHistory();

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


                <Button className={classes.navigateBtn} variant="contained" color="primary" onClick={() => {}}>
                    Začít navigovat
                </Button>
            </div>
            <div className={clsx(classes.content, classes.timeline)}>
                {
                    path.path.map((place, i) =>
                        <div
                            key={place.id}
                            className={classes.place}
                            onClick={()=>history.push(`/paths/${pathId}/${i}`)}
                        >
                            <div className={classes.graphicPoint} />
                            {
                                i!==path.path.length-1 &&
                                <div className={classes.graphicLine} />
                            }
                            <div className={classes.placeContent}>
                                <Typography className={classes.placeHeading} variant="h5">{place.name}</Typography>
                                <div className={classes.placeDescription}>{cutText(place.description)}</div>
                            </div>
                        </div>
                    )
                }
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
    timeline: {
        marginTop: theme.spacing(2)
    },
    place: {
        display: "flex",
        position: "relative"
    },
    picture: {
        height: 200,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
    },
    graphicPoint: {
        width: 40,
        height: 40,
        minWidth: 40,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 20
    },
    placeContent: {
        paddingTop: theme.spacing(0.5),
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(3)
    },
    graphicLine: {
        position: "absolute",
        width: 5,
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        left: 35/2,
        top: 2
    },
    placeHeading: {
        marginBottom: theme.spacing(1)
    },
    placeDescription: {
        color: "gray"
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