import React from "react";

export default interface SkillInfo{
    name: string,
    color: string,
    started: string,
    image: string,
    rate: 0|1|2|3|4|5,
    description: React.ReactNode,
    projects: SkillProject[]
}

export interface SkillProject{
    name: string,
    type: string,
    url: string,
    image: string,
}