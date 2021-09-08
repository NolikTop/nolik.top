import React from "react";

export default interface SkillInfo{
    name: string,
    color: string,
    started?: Date,
    image: string,
    rate: 0|1|2|3|4|5,
    description: React.ReactNode,
    projects: SkillProject[]
}

export interface SkillProject{
    name: string,
    type: string,
    url?: string,
    github?: string,
    icon?: React.ReactNode,
    image?: string,
}

export function d(year: number, month: number, day: number = 1): Date{
    return new Date(year, month-1, day, 0);
}
