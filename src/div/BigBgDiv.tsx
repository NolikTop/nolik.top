import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    bg: {
        background: "url(https://sun9-40.userapi.com/impg/kegZ8S8IJxFDnxh6hJvjjl5SUldWePvdoLLmmQ/S7u6ldbZINI.jpg?size=2000x2000&quality=96&sign=15eddb9933a055ab6ec83ae72035a71d&type=album)" //todo обрезать и сжать пикчу
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
