import { Autocomplete, TextField } from '@mui/material';

export default function SearchByName(props: {
  options: Array<any>;
  OrderByFreeSearch:FunctionStringCallback;
}) {
  
  const updateSearchByName:Function = (chosenProduct:string) => {
    props.OrderByFreeSearch(chosenProduct);
  };
  
  return (
    <div className="container">
      <Autocomplete
        onChange={(event: any): any => updateSearchByName(event.target.innerText)}
        options={props.options.map((product) => { return product.title })}
        renderInput={(params) => <TextField {...params} label="Search by name" />}
      />
    </div>
  );
}