import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            "Vesper Libre",
            "Verdana",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
        ].join(","),
    },
});

export default theme;
