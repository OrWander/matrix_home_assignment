import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

export default function SearchInput(props: {
  options: Array<any>;
  OrderByFreeSearch:FunctionStringCallback;
}) {
  const productsArray: Array<any> = props.options.map((p) => { return p.title });
  const [inputValue, setInputValue] = useState(productsArray[0]);
  const updateValue:any = (newValue:string) => {
    setInputValue(newValue);
    props.OrderByFreeSearch(newValue);
  };
  
  return (
    <div className="container">
      <Autocomplete
        value={inputValue}
        onChange={(event: any): any => updateValue(event.target.innerText.split(" ")[0])}
        placeholder="Click to find a smartphone!"
        options={productsArray}
        getOptionLabel={(option) => option.toString()}
        renderInput={(params) => <TextField {...params} label="Smartphone" />}
      />
    </div>
  );
}