import React, {useRef} from "react";
import {Button, Typography} from "@material-ui/core";
import {cutText} from "../../utils/functions";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {DIRECTIONS} from "../../utils/mockData";

function randomDirection() {
    return DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
}

function generateDirections(path) {
    let result = [];

    for (let i=0; i<path.length; i++)
        result[i] = randomDirection();

    return result;
}

export default function GraphicWay({path, pathId, disableNavigation, current, setCurrent}) {
    const classes = useStyles();
    const history = useHistory();

    const directions = useRef(generateDirections(path.path));

    return (
        <div className={classes.timeline}>
            {
                path.path.map((place, i) =>
                    <div
                        key={place.id}
                        className={classes.place}
                        onClick={!disableNavigation ? (()=>history.push(`/paths/${pathId}/${i}`)) : undefined}
                        id={i}
                    >
                        <div className={classes.graphicPoint} />
                        {
                            i!==path.path.length-1 &&
                            <div className={classes.graphicLine} />
                        }
                        <div className={classes.placeContent}>
                            <Typography className={classes.placeHeading} variant="h5">{place.name}</Typography>
                            {
                                current!==i || !disableNavigation
                                    ?
                                        <div className={classes.placeDescription}>{cutText(place.description)}</div>
                                    :
                                        <div>
                                            <div className={classes.navigateContent}>
                                                <div className={classes.currentWay}>
                                                    {directions.current[i].description}
                                                </div>
                                                <div>
                                                    {React.cloneElement(directions.current[i].icon,
                                                        {className: classes.navigateIcon})}
                                                </div>
                                            </div>
                                            {
                                                i+1<directions.current.length &&
                                                <p>
                                                    <strong>Potom:</strong> {directions.current[i+1].description}
                                                </p>
                                            }
                                            <div className={classes.buttons}>
                                                <Button onClick={()=>history.push(`/paths/${pathId}/navigation/${current}/place/${i}`)}
                                                    className={classes.button} color="primary" variant="contained">
                                                    Zjisti více o místě
                                                </Button>
                                                {
                                                    i+1<directions.current.length &&
                                                    <Button onClick={()=>{
                                                        setCurrent(i+1);
                                                        window.location.hash = i;
                                                    }}
                                                            className={classes.button} color="primary" variant="contained">
                                                        Přejít k dalšímu místu
                                                    </Button>
                                                }
                                            </div>
                                        </div>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    timeline: {
        marginTop: theme.spacing(2)
    },
    graphicPoint: {
        width: 40,
        height: 40,
        minWidth: 40,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 20
    },
    graphicLine: {
        position: "absolute",
        width: 5,
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        left: 35/2,
        top: 2
    },
    placeContent: {
        paddingTop: theme.spacing(0.5),
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(3)
    },
    placeHeading: {
        marginBottom: theme.spacing(1)
    },
    placeDescription: {
        color: "gray"
    },
    place: {
        display: "flex",
        position: "relative"
    },
    navigateContent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    navigateIcon: {
        fontSize: 50,
        color: theme.palette.primary.main
    },
    currentWay: {
        paddingRight: theme.spacing(1),
        fontSize: 18,
        color: theme.palette.primary.main
    },
    buttons: {
        marginTop: theme.spacing(1)
    },
    button: {
        width: "100%",
        marginTop: theme.spacing(1)
    }
}));