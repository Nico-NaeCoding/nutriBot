import { Button } from "@mui/material";

const CustomButton = ({ ButtonOnClick, ButtonMessage }) => {
    return (
        <Button
            onClick={ButtonOnClick}
            variant="contained"
            sx={{
                backgroundColor: "#059669",
                "&:hover": {
                    backgroundColor: "#047857",
                },
                px: 10,
                py: 2,
                fontSize: "1.5em",
                borderRadius: "12px",
            }}
        >
            {ButtonMessage}
        </Button>
    );
};

export default CustomButton;
