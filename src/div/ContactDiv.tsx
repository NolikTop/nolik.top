import React from "react";
import {Button, ButtonGroup} from "@material-ui/core";
import {Github, Vk} from "mdi-material-ui";
import {Instagram, Mail} from "@material-ui/icons";
import Center from "../component/Center";

const ContactDiv: React.FC = () => {
    return (
        <Center>
            <ButtonGroup aria-label="social media">
                <Button size="large" href="https://vk.com/noliktop" target="_blank"><Vk /></Button>
                <Button size="large" href="https://instagram.com/noliktop/" target="_blank"><Instagram /></Button>
                <Button size="large" href="https://github.com/noliktop/" target="_blank"><Github /></Button>
                <Button size="large" href="mailto:noliktop@vk.com" target="_blank"><Mail /></Button>
            </ButtonGroup>
        </Center>
    )
};

export default ContactDiv;
