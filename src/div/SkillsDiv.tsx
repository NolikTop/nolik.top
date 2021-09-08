import React, {useState} from "react";
import {Grid, Typography} from "@material-ui/core";
import Skills from "../data/Skills";
import SkillCard from "../component/SkillCard";
import CenterContainer from "../component/CenterContainer";
import SkillInfo from "../data/SkillInfo";
import SkillProjectsDialog from "../dialog/SkillProjectsDialog";

const SkillsDiv: React.FC = () => {
    const [openedSkill, setOpenedSkill] = useState<SkillInfo|null>(null);
    const openSkill = (skill: SkillInfo) => () => {
        setOpenedSkill(skill);
    }
    const closeSkill = () => {
        setOpenedSkill(null);
    }

    const cards = [];
    for(const skill of Skills){
        cards.push(
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SkillCard skill={skill} onOpenProjectDialog={openSkill(skill)} />
            </Grid>
        )
    }

    return (
        <CenterContainer>
            <SkillProjectsDialog onClose={closeSkill} skill={openedSkill} />
            <br />
            <Typography variant="h3" align="center">Умения</Typography>
            <br />
            <Grid container spacing={3}>
                {cards}
            </Grid>
            <br />
        </CenterContainer>
    );
};

export default SkillsDiv;
