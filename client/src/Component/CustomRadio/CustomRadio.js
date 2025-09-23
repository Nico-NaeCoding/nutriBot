import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

const CustomRadio = ({ value, onChange, options }) => {
    return (
        <RadioGroup row value={value} onChange={onChange}>
            {options.map((opt) => (
                <FormControlLabel
                    key={opt.value}
                    value={opt.value}
                    control={
                        <Radio
                            sx={{
                                "&.Mui-checked": {
                                    color: "#059669",
                                },
                            }}
                        />
                    }
                    label={opt.label}
                    sx={{
                        "& .MuiFormControlLabel-label": {
                            fontSize: "1.4rem",
                        },
                    }}
                />
            ))}
        </RadioGroup>
    );
};

export default CustomRadio;
