import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import "./bg.css";

const useStyles = makeStyles(() => ({
    bg: {
        height: "100vh",
        width: "100vw",
    },
}));

const BigBgDiv: React.FC = ({children}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.bg} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}

export default BigBgDiv;
