import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CategorySelect = () => {
  
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);

  return (
    <Box sx={{ minWidth: 120 }} mb={2}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value='all'>Any Category</MenuItem>
          <MenuItem value='JavaScript'>JavaScript</MenuItem>
          <MenuItem value='HTML'>HTML</MenuItem>
          <MenuItem value='CSS'>CSS</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default CategorySelect