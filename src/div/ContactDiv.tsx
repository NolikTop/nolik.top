import React from "react";
import {Button, ButtonGroup, MuiThemeProvider} from "@material-ui/core";
import {Github, Vk} from "mdi-material-ui";
import {Instagram, Mail} from "@material-ui/icons";
import Center from "../component/Center";
import DarkTheme from "../theme/DarkTheme";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


const ContactDiv: React.FC = () => {
    return (
        <MuiThemeProvider theme={DarkTheme}>
            <Center>
                <ButtonGroup aria-label="social media">
                    <Button size="large" href="https://vk.com/noliktop" target="_blank"><Vk /></Button>
                    <Button size="large" href="https://instagram.com/noliktop/" target="_blank"><Instagram /></Button>
                    <Button size="large" href="https://github.com/noliktop/" target="_blank"><Github /></Button>
                    <Button size="large" href="mailto:noliktop@vk.com" target="_blank"><Mail /></Button>
                    <Button size="large" href="https://docs.google.com/document/d/1qTGiGnUv9JuIyVqjItMgF2wbIAZDVLZ0Gm0el7Nwkws/edit?usp=sharing" target="_blank"><InsertDriveFileIcon /> &nbsp; резюме</Button>
                </ButtonGroup>
            </Center>
        </MuiThemeProvider>
    )
};

export default ContactDiv;
