import React from "react";
import {Box} from "@material-ui/core";

const Center: React.FC = ({children}) => (
    <Box alignContent="center" justifyContent="center" display="flex">
        {children}
    </Box>
);

export default Center;
