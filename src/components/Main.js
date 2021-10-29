import React,{useState,useMemo} from 'react';
import Product from './Product';
import './Style.css';
import debounce from "lodash.debounce";
import Stack from '@mui/material/Stack';
import {Input,Typography ,Box,Grid} from '@material-ui/core';

 function Main(props) {
    const { products, onAdd} = props;
    const[text,setText]= useState("");
    let filteredProduct = products
    
    
    if (text!==""){
     filteredProduct=  products.filter((product)=>{
        return (product.name.toLowerCase().includes(text.toLowerCase()));
      });
    }
    const changeHandler = (event) => {
      setText(event.target.value);
    };
    const debouncedChangeHandler = useMemo(()=>debounce(changeHandler, 500), []);

  return (
    <Box className="block mainContainer">
     <Box>
      <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
         <Typography variant="h5">ITEMS</Typography>
        <Input type="text" name ="text" placeholder="search " variant="outlined"  onChange= {debouncedChangeHandler} />
      </Stack>
    </Box>
      <Grid className="grid-container" >
        {filteredProduct.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}  ></Product>
        ))}
      </Grid>
      <Typography>{filteredProduct.length === 0 && text !== "" && "No Item Found..."}</Typography>
    </Box>
  );
}
export default Main