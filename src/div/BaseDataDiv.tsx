import React from "react";
import {
    Avatar, Button,
    Card, CardActions,
    CardContent, createStyles,
    Grid,
    List,
    ListItem,
    ListItemAvatar, ListItemText,
    makeStyles,
    Typography, useMediaQuery, useTheme
} from "@material-ui/core";
import SchoolIcon from '@material-ui/icons/School';
import NolikTop400x400Logo from "../img/noliktop400x400.jpeg";
import VkLogo from "../img/vk.png";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

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
    },
    noBottomPadding: {
        paddingBottom: 0
    }
}));

const BaseDataDiv: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const avatar = NolikTop400x400Logo; //400x400
    const full = useMediaQuery(theme.breakpoints.down('xs'));
    const cvUrl = "https://docs.google.com/document/d/1qTGiGnUv9JuIyVqjItMgF2wbIAZDVLZ0Gm0el7Nwkws/edit?usp=sharing";

    return (
        <Grid className={classes.root} container spacing={full ? 0 : 3} justifyContent="center">
            <Grid item>
                <Avatar alt="Avatar" src={avatar} className={classes.avatar} />
            </Grid>
            <Grid item>
                {full && <br />}
                <Card className={classes.infoCard}>
                    <CardContent className={classes.noBottomPadding}>
                        <Typography variant="h5">Айдан Миннегараев</Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.iconAvatar}>
                                        <SchoolIcon color="primary" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="СПбГЭТУ (ЛЭТИ), ИСИТ, 4 курс" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.iconAvatar}>
                                        <img src={VkLogo} width={40} height={40} alt="vk" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={"Младший программист-разработчик в ВКонтакте"} />
                            </ListItem>
                        </List>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="large"
                            variant="contained"
                            className={classes.root}
                            startIcon={<InsertDriveFileIcon />}
                            href={cvUrl}
                            target="_blank"
                        >Резюме</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
};

export default BaseDataDiv;
