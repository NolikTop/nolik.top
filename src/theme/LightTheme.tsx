import {createTheme} from "@material-ui/core";
import {green, orange} from "@material-ui/core/colors";

export default createTheme({
    palette: {
        type: 'light',
        primary: {
            main: green['500'],
        },
        secondary: {
            main: orange['A400'],
        },
    },
});
