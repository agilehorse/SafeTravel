import React from "react";
import {useHistory, useParams} from "react-router-dom";
import Header from "../reusable/Header";
import {PATHS} from "../../utils/mockData";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";
import {InitialPlacesFilterState} from "../places/PlacesFilterDialog";
import clsx from "clsx";
import {cutText} from "../../utils/functions";

export default function PathsDetail() {
    const classes = useStyles();

    const {pathId} = useParams();
    const history = useHistory();

    const path = PATHS[pathId];

    return (
        <>
            <Header text={path.name} isCancel cancelAction={() => history.push("/paths")}/>
            <div className={classes.content}>
                <p><strong>Doba cesty:</strong> {path.duration/60} hodin</p>
                <p><strong>Typ dopravy:</strong> pěšky</p>

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
    }
}));