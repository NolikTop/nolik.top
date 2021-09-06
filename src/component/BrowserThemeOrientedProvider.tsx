import React, {useEffect, useState} from "react";
import DarkTheme from "../theme/DarkTheme";
import LightTheme from "../theme/LightTheme";
import {MuiThemeProvider} from "@material-ui/core";

const BrowserThemeOrientedProvider: React.FC = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            setIsDarkTheme(Boolean(e.matches));
        });
    }, []);

    return (
        <MuiThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
            {children}
        </MuiThemeProvider>
        )
}

export default BrowserThemeOrientedProvider;
