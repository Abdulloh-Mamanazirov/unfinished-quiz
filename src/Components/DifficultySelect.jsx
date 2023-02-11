import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DifficultySelect = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);

  return (
    <Box sx={{ minWidth: 120 }} mb={2}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Difficulty"
          onChange={handleChange}
        >
          <MenuItem value="all">Any Difficulty</MenuItem>
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default DifficultySelect;
