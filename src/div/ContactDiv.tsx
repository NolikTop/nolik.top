import React from "react";
import {Button, ButtonGroup, MuiThemeProvider} from "@material-ui/core";
import {Github, Vk, Telegram} from "mdi-material-ui";
import Center from "../component/Center";
import DarkTheme from "../theme/DarkTheme";


const ContactDiv: React.FC = () => {
    const vk = "https://vk.com/fr/";
    const telegram = "https://t.me/noliktop/";
    const github = "https://github.com/noliktop/";

    return (
        <MuiThemeProvider theme={DarkTheme}>
            <Center>
                <ButtonGroup aria-label="social media">
                    <Button size="large" href={vk} target="_blank"><Vk /></Button>
                    <Button size="large" href={telegram} target="_blank"><Telegram /></Button>
                    <Button size="large" href={github} target="_blank"><Github /></Button>
                </ButtonGroup>
            </Center>
        </MuiThemeProvider>
    )
};

export default ContactDiv;
