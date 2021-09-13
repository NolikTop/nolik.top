import React from "react";
import {makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    footer: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: -20,
        textAlign: "center",
        padding: 20
    }
}));

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.footer}>
            <Typography color="textSecondary">&copy; 2021 NolikTop</Typography>
        </Paper>
        );
};

export default Footer;
