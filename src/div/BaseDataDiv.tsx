import React from "react";
import {
    Avatar,
    Card,
    CardContent, createStyles,
    Grid,
    List,
    ListItem,
    ListItemAvatar, ListItemText,
    makeStyles,
    Typography, useMediaQuery, useTheme
} from "@material-ui/core";
import EventIcon from '@material-ui/icons/Event';
import SchoolIcon from '@material-ui/icons/School';
import NolikTop400x400Logo from "../img/noliktop400x400.jpeg";

const useStyles = makeStyles(theme => createStyles({
    avatar: {
        width: 250,
        height: 250
    },
    iconAvatar: {
        backgroundColor: theme.palette.type === "light" ? "white" : "",
    },
    infoCard: {
        maxWidth: 450
    },
    root: {
        width: "100% !important"
    }
}));

const BaseDataDiv: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const avatar = NolikTop400x400Logo; //400x400
    const full = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Grid className={classes.root} container spacing={full ? 0 : 3} justifyContent="center">
            <Grid item>
                <Avatar alt="Avatar" src={avatar} className={classes.avatar} />
            </Grid>
            <Grid item>
                {full && <br />}
                <Card className={classes.infoCard}>
                    <CardContent>
                        <Typography variant="h5">Айдан Миннегараев</Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.iconAvatar}>
                                        <SchoolIcon color="primary" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="СПбГЭТУ (ЛЭТИ), ИСИТ, 2 курс" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.iconAvatar}>
                                        <EventIcon color="primary" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={"Победитель VII национального чемпионата WorldSkills в компетенции \"Веб-дизайн и разработка - юниоры\""} />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
};

export default BaseDataDiv;
