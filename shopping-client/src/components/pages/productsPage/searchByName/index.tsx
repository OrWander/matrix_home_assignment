import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

export default function SearchByName(props: {
  options: Array<any>;
  OrderByFreeSearch:FunctionStringCallback;
}) {
  console.log(props.options);
  
  const [inputValue, setInputValue] = useState("Enter smartphone name");
  const updateValue:any = (newValue:string) => {
    setInputValue(newValue);
    props.OrderByFreeSearch(newValue);
  };
  
  return (
    <div className="container">
      <Autocomplete
        value={inputValue}
        onChange={(event: any): any => updateValue(event.target.innerText)}
        placeholder="Click to find a smartphone!"
        options={props.options.map((p) => { return p.title })}
        renderInput={(params) => <TextField {...params} label="Smartphone" />}
      />
    </div>
  );
}