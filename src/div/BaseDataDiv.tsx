import React from "react";
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemAvatar, ListItemText,
    makeStyles,
    Typography
} from "@material-ui/core";
import EventIcon from '@material-ui/icons/Event';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles(() => ({
    avatar: {
        width: 250,
        height: 250
    },
    infoCard: {
        maxWidth: 450
    }
}));

const BaseDataDiv: React.FC = () => {
    const classes = useStyles();
    const avatar = "https://sun9-2.userapi.com/s/v1/ig2/qph9z4MDC0CaDVRD_gVIvqMezxXYPYEctoFS2UT7WASknXbqJYTCSas2Bq2l3xhwUCgn6A9Q3UwfLOwpfGH1DgB7.jpg?size=400x400&quality=96&crop=205,303,866,866&ava=1"; //400x400
    //const avatar = "https://sun9-2.userapi.com/s/v1/ig2/hYexATin3e5XDJNnUJBwZRzauP2a7T5cODAxY0HxNX_nNrZ0OF8ZmltV_-YHLEvzjFQEb4xFHghOqQCY5YME5aCd.jpg?size=200x200&quality=96&crop=205,303,866,866&ava=1"; //200x200

    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item>
                <Avatar alt="Avatar" src={avatar} className={classes.avatar} />
            </Grid>
            <Grid item>
                <Card className={classes.infoCard}>
                    <CardContent>
                        <Typography variant="h5">Айдан Миннегараев</Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <SchoolIcon color="primary" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="СПбГЭТУ (ЛЭТИ), ИСИТ, 2 курс" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
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
