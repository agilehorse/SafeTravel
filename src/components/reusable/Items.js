import React from "react";
import {Divider, List} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export default function Items({children}) {
    const classes = useStyles();

    return (
      <List className={classes.list}>
          <Divider className={classes.divider}/>
          {
              React.Children.map(children, (child =>
                <>
                    {child}
                    <Divider className={classes.divider}/>
                </>
              ))
          }
      </List>
    );
}

const useStyles = makeStyles((theme)=>({
    list: {
        flexGrow: 1,
        marginBottom: 60
    },
    divider: {
        backgroundColor: theme.palette.primary.main
    }
}));