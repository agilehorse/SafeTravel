import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Chip} from "@material-ui/core";
import clsx from "clsx";

export default function Chips({data}) {
    const classes = useStyles();

    return (
      <div className={classes.tags}>
          {data.map((chip)=>
              <div onClick={chip.onClick} key={chip.key}>
                  <Chip label={chip.label} color="primary"
                        className={clsx(classes.tag, chip.state && classes.selected)}
                  />
              </div>
          )}
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
    tags: {
        display: "flex",
            margin: theme.spacing(0, 1),
            justifyContent: "flex-start"
    },
    tag: {
        margin: theme.spacing(0, 0.5),
    },
    selected: {
        backgroundColor: 'orange',
        fontWeight: 'bold',
    }
}));