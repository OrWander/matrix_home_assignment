import React from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel } from "@mui/material";

export default function SearchByCategory(props: {
  OrderBy: FunctionStringCallback;
}) {
  const [currentSort, setCurrentSort] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentSort(event.target.value);
    props.OrderBy(event.target.value);
  };
  return (
    <div className="container" style={{fontFamily: "Dosis"}}>
      <Box sx={{ minWidth: 10 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-autowidth-label">Sort By...</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={currentSort}
            onChange={handleChange}
            autoWidth
            label="Sorting...">
            <MenuItem value={1}>Price: Low to High</MenuItem>
            <MenuItem value={2}>Price: High to Low</MenuItem>
            <MenuItem value={3}>The Most Popular</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
