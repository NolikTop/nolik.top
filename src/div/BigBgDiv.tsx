import React from "react";
import {makeStyles} from "@material-ui/core";
import Bg from "../img/bg.jpeg";

const useStyles = makeStyles(() => ({
    bg: {
        background: "url(" + Bg + ")" //todo обрезать и сжать пикчу
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
