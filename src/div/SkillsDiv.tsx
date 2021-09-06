import React from "react";
import {Grid, Typography} from "@material-ui/core";
import Skills from "../data/Skills";
import SkillCard from "../component/SkillCard";
import CenterContainer from "../component/CenterContainer";

const SkillsDiv: React.FC = () => {
    const cards = [];
    for(const skill of Skills){
        cards.push(
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SkillCard skill={skill} />
            </Grid>
        )
    }

    return (
        <CenterContainer>
            <br />
            <Typography variant="h3" align="center">Умения</Typography>
            <br />
            <Grid container>
                {cards}
            </Grid>
            <br />
        </CenterContainer>
    );
};

export default SkillsDiv;
