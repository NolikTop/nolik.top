import {CssBaseline} from '@material-ui/core';
import React from 'react';
import Space from "./component/Space";
import BaseDataDiv from "./div/BaseDataDiv";
import BigBgDiv from "./div/BigBgDiv";
import ContactDiv from "./div/ContactDiv";
import BrowserThemeOrientedProvider from "./component/BrowserThemeOrientedProvider";

function App() {
    return (
        <BrowserThemeOrientedProvider>
            <CssBaseline />

            <BigBgDiv>
                <BaseDataDiv />
                <Space height={50} />
                <ContactDiv />
            </BigBgDiv>

        </BrowserThemeOrientedProvider>
    );
}

export default App;
