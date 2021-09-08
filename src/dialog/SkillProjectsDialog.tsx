import React from "react";
import {
    Avatar,
    createStyles,
    Dialog, DialogContent,
    DialogTitle,
    Hidden,
    IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText,
    makeStyles, Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import {ModalProps} from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import SkillInfo from "../data/SkillInfo";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Github} from "mdi-material-ui";

const useStyles = makeStyles(theme => createStyles({
    root: {
        width: '100%',
    },
    iconAvatar: {
        backgroundColor: theme.palette.type === "light" ? "white" : "",
    },
}));

interface SkillProjectsDialogProps{
    onClose: ModalProps['onClose'],
    skill: SkillInfo|null
}

const SkillProjectsDialog: React.FC<SkillProjectsDialogProps> = ({onClose, skill}) => {
    const theme = useTheme();
    const open = skill !== null;
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();

    if(!onClose) return (<div />);

    const list = [];

    if(skill) {
        for (const project of skill.projects) {
            list.push(
                <ListItem key={project.name}>
                    <ListItemAvatar>
                        {project.image ?
                            <Avatar src={project.image}/> :
                            <Avatar className={classes.iconAvatar}>{project.icon}</Avatar>
                        }
                    </ListItemAvatar>
                    <ListItemText primary={project.name} secondary={project.type} />
                    <ListItemSecondaryAction>
                        {project.github && <IconButton href={project.github} target="_blank" color="primary"><Github /></IconButton>}
                        {project.url && <IconButton href={project.url} target="_blank" color="primary"><OpenInNewIcon /></IconButton>}
                    </ListItemSecondaryAction>
                </ListItem>
            )
        }
    }

    const closeOnClick = () => onClose({}, "backdropClick");

    return (
        <Dialog
            onClose={onClose}
            open={open}
            maxWidth="sm"
            fullWidth
            fullScreen={fullScreen}
        >
            <DialogTitle>
                <Hidden smUp>
                    <IconButton edge="start" color="inherit" onClick={closeOnClick} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Hidden>
                <span>Проекты на {skill && skill.name}</span>
            </DialogTitle>
            <DialogContent dividers={true}>
                <List className={classes.root}>
                    {list}
                </List>
            </DialogContent>
        </Dialog>
    )
}

export default SkillProjectsDialog;
