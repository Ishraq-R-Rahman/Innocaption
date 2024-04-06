import { Button } from "@mui/material";
// eslint-disable-next-line react/prop-types
function MenuButtons({ text, onClick, variant, active }) {
    return (
        <Button
            key={text}
            onClick={onClick}
            color="inherit"
            sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "5px 5px 0 0",
                borderBottom: active ? "2px solid white" : "none",
                "&:hover": {
                    // backgroundColor: "transparent",
                    // borderBottom: "10px",
                    // borderBottomColor: "#002e5d",
                    borderBottom: active ? "2px solid #002e5d" : "none",
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
