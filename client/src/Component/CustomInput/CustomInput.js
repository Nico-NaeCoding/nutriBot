import { TextField } from "@mui/material";

const CustomInput = ({ label, value, onChange, type = "text" }) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            type={type}
            variant="outlined"
            fullWidth
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderRadius: "12px",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#059669",
                    },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: "#059669",
                },
            }}
        />
    );
};

export default CustomInput;
