import {CssBaseline} from '@material-ui/core';
import React from 'react';
import Space from "./component/Space";
import BaseDataDiv from "./div/BaseDataDiv";
import BigBgDiv from "./div/BigBgDiv";
import ContactDiv from "./div/ContactDiv";
import Footer from "./component/Footer";
import SkillsDiv from "./div/SkillsDiv";
import MinHeightForFooterWrapper from "./component/MinHeightForFooterWrapper";
import BrowserThemeOrientedProvider from "./component/BrowserThemeOrientedProvider";

function App() {
    return (
        <BrowserThemeOrientedProvider>
            <CssBaseline />

            <MinHeightForFooterWrapper>
                <BigBgDiv>
                    <Space height={100} />
                    <BaseDataDiv />
                    <Space height={50} />
                    <ContactDiv />
                    <Space height={50} />
                </BigBgDiv>

                <SkillsDiv />
            </MinHeightForFooterWrapper>

            <Footer />
        </BrowserThemeOrientedProvider>
    );
}

export default App;
