import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

export default function SearchByName(props: {
  options: Array<any>;
  OrderByFreeSearch:FunctionStringCallback;
}) {
  
  const updateValue:any = (newValue:string) => {
    props.OrderByFreeSearch(newValue);
  };
  
  return (
    <div className="container">
      <Autocomplete
        onChange={(event: any): any => updateValue(event.target.innerText)}
        options={props.options.map((p) => { return p.title })}
        renderInput={(params) => <TextField {...params} label="Search by name   " />}
      />
    </div>
  );
}