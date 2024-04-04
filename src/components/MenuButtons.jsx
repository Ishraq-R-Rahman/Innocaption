import { Button } from "@mui/material";
// eslint-disable-next-line react/prop-types
function MenuButtons({ text, onClick, variant }) {
    return (
        <Button
            key={text}
            onClick={onClick}
            color="inherit"
            sx={{
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                    // backgroundColor: "transparent",
                    // borderBottom: "10px",
                    // borderBottomColor: "#002e5d",
                },
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    fontSize: variant === "small" && "12px",
                }}
            >
                {text}
            </div>
        </Button>
    );
}

export default MenuButtons;
