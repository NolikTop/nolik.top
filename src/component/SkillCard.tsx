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
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

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

function getYearsForm(years: number): string{
    switch (years) {
        case 11:
        case 12:
            return 'лет';
        default:
            switch (years % 10) {
                case 1:
                    return 'год';
                case 2:
                case 3:
                case 4:
                    return 'года';
                default:
                    return 'лет';
            }
    }
}

const SkillCard: React.FC<SkillCardProps> = ({skill, onOpenProjectDialog}) => {
    const classes = useStyles();

    let years: number = 0;
    if(skill.started) {
        const now = new Date();
        const yearsDate = new Date(now.getTime() - skill.started.getTime());
        years = yearsDate.getUTCFullYear() - 1970;
    }

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
                            {skill.name} {skill.started && <Typography component="span" variant="subtitle1" color="textSecondary">{years} {getYearsForm(years)}</Typography>}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Rating icon={<EmojiObjectsIcon />} value={skill.rate} readOnly />
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
