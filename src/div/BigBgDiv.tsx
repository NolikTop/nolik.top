import React from "react";
import {makeStyles} from "@material-ui/core";
import "./bg.css";

const useStyles = makeStyles(() => ({
    bg: {
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite"
    }
}));

const BigBgDiv: React.FC = ({children}) => {
    const classes = useStyles();


    return (
        <div className={classes.bg}>
            {children}
        </div>
    )
}

export default BigBgDiv;
