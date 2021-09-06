import React from "react";
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    marginAutoItem: {
        [theme.breakpoints.up('lg')]: {
            width: '80vw',
        },
        [theme.breakpoints.down('md')]: {
            width: '95vw',
        },
        margin: 'auto'
    },
}))

const CenterContainer: React.FC = ({children}) => {
    const classes = useStyles();

    return (
        <Box display="flex">
            <div className={classes.marginAutoItem}>
                {children}
            </div>
        </Box>
    )
}

export default CenterContainer;
