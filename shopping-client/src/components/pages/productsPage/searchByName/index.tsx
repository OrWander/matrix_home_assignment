import { Autocomplete, TextField } from '@mui/material';
import './index.css';

export default function SearchByName(props: {
  options: Array<any>;
  OrderByFreeSearch: FunctionStringCallback;
}) {

  const updateSearchByName: Function = (chosenProductName: string) => {
    props.OrderByFreeSearch(chosenProductName);
  };
  const result = props.options.reduce((acc, d) => {
    //@ts-ignore
    const found = acc.find(a => a.title === d.title);
    const id = d.id;
    if (!found) {
      acc.push({ name: d.title, id })
    }
    else {
      found.push(id)
    }
    return acc;
  }, []);

  console.log(result)
  return (
    <div className="container">
      <Autocomplete
        onChange={(event: any): any => updateSearchByName(event.target.innerText)}
        options={result.map((product: any) => { return product.name })}
        renderInput={(params) => <TextField {...params} label="Search by name" />}
      />
    </div>
  );
}