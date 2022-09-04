
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {  InputLabel } from "@mui/material";

export default function SearchByCategory(props: {
  OrderBy: FunctionStringCallback;
}) {

  const handleChange = (event: SelectChangeEvent) => {
    props.OrderBy(event.target.value);
  };
  return (
    <div className="container" style={{fontFamily: "Dosis"}}>
      <Box sx={{ minWidth: 10 }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Search by category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Search by category ---"
            onChange={handleChange}
            >
            <MenuItem value={1}>Price: Low to High</MenuItem>
            <MenuItem value={2}>Price: High to Low</MenuItem>
            <MenuItem value={3}>The Most Popular</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
