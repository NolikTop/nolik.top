import React from "react";
import SkillInfo from "../data/SkillInfo";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Chip, createStyles,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import CodeIcon from '@material-ui/icons/Code';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

interface SkillCardProps{
    skill: SkillInfo,
    onOpenProjectDialog: () => void
}

const useStyles = makeStyles(theme => createStyles({
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
    },
}));

const SkillCard: React.FC<SkillCardProps> = ({skill, onOpenProjectDialog}) => {
    const classes = useStyles();

    const tags = [];
    for(const tag of skill.tags){
        tags.push(
            <Grid item>
                <Chip label={tag} />
            </Grid>
        )
    }

    return (
        <Card>
            <CardMedia style={{backgroundColor: skill.color}} className={classes.media}>
                <div className={classes.avatarZone}>
                    <img src={skill.image} className={classes.avatar} alt={skill.name} />
                </div>
            </CardMedia>
            <CardContent>
                <Grid container>
                    <Grid item xs>
                        <Typography variant="h5">
                            {skill.name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Rating icon={<EmojiObjectsIcon />} value={skill.rate} max={skill.rate} readOnly />
                    </Grid>
                </Grid>

                <Typography variant="body1" color="textSecondary">
                    {skill.description}
                </Typography>

                {tags.length > 0 &&
                    <>
                        <br />
                        <Grid container spacing={1}>
                            {tags}
                        </Grid>
                    </>
                }
            </CardContent>
            <CardActions>
                <Button size="large" color="primary" startIcon={<CodeIcon />} onClick={onOpenProjectDialog}>Проекты</Button>
            </CardActions>
        </Card>
    );
};

export default SkillCard;
