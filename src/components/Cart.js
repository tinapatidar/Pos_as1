import React from 'react';
import {Box,Typography,Table} from '@material-ui/core'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Cart(props) {
  const { cartItems, price } = props;
  const discount = price < 200 ? 0 : 20;
  const taxPrice = price * 0.14;
  const totalPrice = price + taxPrice - discount;

  return (
 <Box className="cartContainer">
  <Typography variant="h4">Cart</Typography>
    <TableContainer >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item </TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <Box  justifyContent="center">
        {cartItems.length === 0 && <div>
          <div className="row">
              <Typography component="div">SubTotal: </Typography>
              <Typography component="div" align="right">RS 0.00</Typography>
            </div>
            <div className="row">
              <Typography component="div">Tax :</Typography>
              <Typography component="div" align="right">RS 0.00</Typography>
            </div>
            <div className="row">
              <Typography  component="div">Discount:</Typography>
              <Typography  component="div" align="right"> RS 0.00</Typography>
            </div>
            <div className="row">
              <Typography  component="div" ><b>PAY AMOUNT:</b></Typography>
              <Typography  component="div" align="right"><b> RS 0.00</b></Typography>
            </div>
        </div>
        }
      </Box>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.qty}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.price * item.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
              <Typography  component="div" ><b>PAY AMOUNT</b></Typography>
              <Typography  component="div">
                <b>RS.{totalPrice.toFixed(2)}</b>
              </Typography>
            </div>
          </>
        )}
    </Box>
  );
}

export default Cart