import ListItemText from "@mui/material/ListItemText";
import './index.css';

export default function ProductCard(props: {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
  catergory: string;
}) {
  return (
    <div className="containerProductCard">
      <img className="imgProductCard" alt="product_image" src={props.thumbnail} />
      <ListItemText
        primary={`${props.title} `}
      />
      <div className="ListItemText">
        <ListItemText
          secondary={`Price: $${props.price} `}
        />
      </div> 
    </div>
  );
}
