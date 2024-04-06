import { Box, Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 2,
                mt: "auto",

                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item style={{ flexGrow: 1 }}>
                    <Typography
                        variant="h6"
                        color="textPrimary"
                        textAlign="center"
                    >
                        Design inspired by{" "}
                        <Link
                            href="https://www.asphalte.com/h/collections/eshop"
                            color="inherit"
                            target="_blank"
                            rel="noopener"
                        >
                            Asphalte
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Link
                        href="https://github.com/Ishraq-R-Rahman/Innocaption"
                        color="inherit"
                        target="_blank"
                        rel="noopener"
                    >
                        <GitHubIcon />
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
