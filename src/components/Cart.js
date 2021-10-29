import React,{useState} from 'react';
import {Box,Typography,Table,Input} from '@material-ui/core'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Cart(props) {
  const [disc,setDisc] = useState()
  const { cartItems, price,onAdd, onRemove } = props;
  const taxPrice = price>1000?100:0;
  // const totalPrice = price + taxPrice - disc;
  
//  const handleInput=()=>{
//    const discIn={
//      'Discount':disc
//    }
//    console.log(discIn)
//  }
  return (
 <Box className="cartContainer">
  <Typography variant="h4">Cart</Typography>
    <TableContainer >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Item </TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Dec/Inc</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        < >
        {cartItems.length === 0 && <>
          <div className="total">
              <Typography >SubTotal: </Typography>
              <Typography  align="right">RS 0.00</Typography>
            </div>
            <div className="total">
              <Typography >Tax :</Typography>
              <Typography  align="right">RS 0.00</Typography>
            </div>
            <div className="total">
              <Typography >Discount:</Typography>
              <Typography   align="right"> RS 0.00</Typography>
            </div>
            <div className="total">
              <Typography  ><b>PAY:</b></Typography>
              <Typography  align ="right"><b> RS.0.00</b></Typography>
            </div>
        </>
        }
      </>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                {item.name}
              </TableCell>
              <TableCell align="right">{item.qty}</TableCell>
              <TableCell align="right">
               <button onClick={() => onRemove(item)} >
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} >
                +
              </button>{' '}
           </TableCell>
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
              <Typography >SubTotal: </Typography>
              <Typography >RS. {price.toFixed(2)}</Typography>
            </div>
            <div className="row">
              <Typography >Tax :</Typography>
              <Typography >RS. {taxPrice.toFixed(2)}</Typography>
            </div>
            <div className="row">
              <Typography  >Discount:</Typography>
              <Input type="text" onChange={e=>setDisc(e.target.value)} />
              {/* <button onClick={handleInput}>Disc</button> */}
           
              <Typography  >  {disc}%</Typography>
            </div>
            <div className="row">
              <Typography ><b>PAY AMOUNT</b></Typography>
              <Typography  >
                <b>RS.{Number((price*(1-(disc/100)))+taxPrice).toFixed(2)}</b>
              </Typography>
            </div>
          </>
        )}
    </Box>
  );
}
export default Cart