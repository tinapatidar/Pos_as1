import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Style.css'

export default function Product(props) {
  const { product, onAdd } = props;

  return (  
    <Card variant="outlined"  >
    <CardContent>
      <Typography variant="h5" component="div">
       {product.name}
      </Typography>
      <Typography sx={{ mb: 1.7 }} color="text.secondary">
       RS.{product.price}.00
      </Typography>
      <Button  size="small" className="addBtn" variant="contained" color="secondary" onClick={() => onAdd(product)}> Add To Cart</Button>
    </CardContent>
  </Card>
  );
}