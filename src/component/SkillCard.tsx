import React from "react";
import SkillInfo from "../data/SkillInfo";
import {
    Avatar, Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    makeStyles, Tooltip,
    Typography
} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import CodeIcon from '@material-ui/icons/Code';

interface SkillCardProps{
    skill: SkillInfo,
    onOpenProjectDialog: () => void
}

const useStyles = makeStyles({
    avatar: {
        width: "auto",
        height: 80,
    },
    avatarZone: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    media: {
        height: 150,
        position: "relative"
    }
});

const SkillCard: React.FC<SkillCardProps> = ({skill, onOpenProjectDialog}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia style={{backgroundColor: skill.color}} className={classes.media}>
                <div className={classes.avatarZone}>
                    <Avatar variant="square" src={skill.image} className={classes.avatar} />
                </div>
            </CardMedia>
            <CardContent>
                <Grid container>
                    <Grid item xs>
                        <Typography variant="h5">
                            {skill.name} <Typography component="span" variant="subtitle2" color="textSecondary">с {skill.started}</Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Rating value={skill.rate} readOnly />
                    </Grid>
                </Grid>

                <Typography variant="body1" color="textSecondary">
                    {skill.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" color="primary" startIcon={<CodeIcon />} onClick={onOpenProjectDialog}>Проекты</Button>
            </CardActions>
        </Card>
    );
};

export default SkillCard;
