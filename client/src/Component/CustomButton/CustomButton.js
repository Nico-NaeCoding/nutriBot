import { Button } from "@mui/material";

const CustomButton = ({ ButtonOnClick, ButtonMessage, fullWidth = false }) => {
    return (
        <Button
            onClick={ButtonOnClick}
            variant="contained"
            fullWidth={fullWidth}
            sx={{
                backgroundColor: "#059669",
                "&:hover": {
                    backgroundColor: "#047857",
                },
                px: 10,
                py: 2,
                fontSize: "1.3em",
                borderRadius: "12px",
            }}
        >
            {ButtonMessage}
        </Button>
    );
};

export default CustomButton;
