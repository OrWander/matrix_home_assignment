import React from "react";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function Product(props: {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
  catergory: string;
}) {
  return (
    <div className="container" style={{ width: "300px", padding: "5%" }}>
      <img alt="img" src={props.thumbnail} style={{ height: "180px", width: "250px", borderRadius: "30px", marginRight: "10px" }} />
      <ListItemText
        primary={`${props.title} `}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary">
              {props.catergory}
            </Typography>
          </React.Fragment>
        }
      />
      <div>
        <ListItemText
          primary={`Price: $${props.price} `}
          style={{borderTop:"1px solid #D3D3D3",borderBottom:"1px solid #D3D3D3",padding:"4px"}}
        />
      </div>
   </div>
  );
}
