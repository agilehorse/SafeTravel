import React from "react";
import Header from "../reusable/Header";
import {useHistory, useParams} from "react-router-dom";
import {PATHS} from "../../utils/mockData";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export default function () {
    const classes = useStyles();

    const {pathId, placeId} = useParams();
    const history = useHistory();

    const path = PATHS[pathId];
    const place = path.path[placeId];

    return (
      <>
          <Header text={place.name} isCancel cancelAction={() => history.push(`/paths/${pathId}`)} />
          <section className={classes.content}>
              <Typography variant="h5">{Number(placeId)+1}. zastávka</Typography>
              <p className={classes.paragraph}>{place.description}</p>
              <Typography variant="h5">Poloha</Typography>
              <Typography variant="h5">Fotky</Typography>
          </section>
      </>
    );
}

const useStyles = makeStyles(theme=>({
    content: {
        margin: theme.spacing(2)
    },
    paragraph: {
        marginTop: theme.spacing(1)
    }
}))