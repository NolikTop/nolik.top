import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    wrapper: {
        minHeight: "calc(100vh - 64px)"
    }
}));

const MinHeightForFooterWrapper: React.FC = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
};

export default MinHeightForFooterWrapper;
