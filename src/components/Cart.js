import React from 'react';
import {Box,Button,Typography} from '@material-ui/core'
function Cart(props) {
  const { cartItems, onAdd, onRemove , price } = props;
  const discount = price < 200 ? 0 : 20;
  const taxPrice = price * 0.14;
  const totalPrice = price + taxPrice - discount;

  return (
    <Box className="cartContainer">
      <Typography variant="h4">Cart</Typography>
      <Box>
        {cartItems.length === 0 && <Typography>Cart is empty</Typography>}
        {cartItems.map((item) => (
          <Box key={item.id} className="row">
            <Typography className="col-2">{item.name}</Typography>
            <div className="col-2" style={{display:"flex" ,padding:"2px"}}>
              <Button size="small" margin='dense' onClick={() => onRemove(item)} color="primary" variant="contained" >
                -
              </Button>{' '}
              <Button size="small" onClick={() => onAdd(item)} color="primary" variant="contained">
                +
              </Button>
            </div>
            <Typography className="col-2 text-right">
              {item.qty} x RS. {item.price.toFixed(2)}
            </Typography>
          </Box>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr/>
            <div className="row">
              <Typography component="div">SubTotal: </Typography>
              <Typography component="div">RS. {price.toFixed(2)}</Typography>
            </div>
            <div className="row">
              <Typography component="div">Tax :</Typography>
              <Typography component="div">RS. {taxPrice.toFixed(2)}</Typography>
            </div>
            <div className="row">
              <Typography  component="div">Discount:</Typography>
              <Typography  component="div"> RS. {discount.toFixed(2)}</Typography>
            </div>
            <div className="row">
              <Typography variant="h6"  component="div" ><strong>PAY AMOUNT</strong></Typography>
              <Typography variant="h6"  component="div">
                <strong>RS.{totalPrice.toFixed(2)}</strong>
              </Typography>
            </div>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Cart