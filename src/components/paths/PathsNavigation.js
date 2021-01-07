import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import Header from "../reusable/Header";
import {PATHS} from "../../utils/mockData";
import GraphicWay from "../reusable/GraphicWay";
import {makeStyles} from "@material-ui/core/styles";

export default function PathsNavigation() {
    const classes = useStyles();
    const history = useHistory();
    const {pathId, currentNav} = useParams();

    const path = PATHS[pathId];

    const [currentPlace, setCurrentPlace] = useState(currentNav ? Number(currentNav) : 0);

    return (
        <>
            <Header text={path.name} isCancel cancelAction={() => history.push(`/paths/${pathId}`)} />
            <div className={classes.content}>
                <GraphicWay
                    path={path}
                    pathId={pathId}
                    current={currentPlace}
                    setCurrent={setCurrentPlace}
                    disableNavigation
                />
            </div>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    content: {
        margin: theme.spacing(2)
    }
}));