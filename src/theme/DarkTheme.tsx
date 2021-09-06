import {createTheme} from "@material-ui/core";
import {lightGreen, orange} from "@material-ui/core/colors";

export default createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: lightGreen['A400'],
        },
        secondary: {
            main: orange['A400'],
        },
    },
});
