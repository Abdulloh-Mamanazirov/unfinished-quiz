import { TextField } from '@mui/material';
import React from 'react'

const Amount = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);
  
  return (
    <div>
      <TextField
      onKeyUp={handleChange}
        id="filled-basic"
        type="number"
        label="Number of questions"
        fullWidth
        variant="filled"
      />
    </div>
  );
}

export default Amount
