import { styled } from '@mui/material/styles';
import {Paper,Grid,Box} from '@material-ui/core';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './components/Helpers/data'
import { useState,useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const { products } = data;
  const[price,setPrice]=useState(0);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    setPrice(cartItems.reduce((a, c) => a + c.qty * c.price, 0));
  }, [cartItems]);
  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <Box className="App">
      <Navbar />
       <Box sx={{ flexGrow: 1 }} className="row">
        <Grid container spacing={2}>
         <Grid item xs={6} md={8} >
          <Item>
            <Main  products={products} onAdd={onAdd}></Main>
          </Item>
        </Grid>
       <Grid item xs={6} md={4}>
       <Item>
       <Cart
          cartItems={cartItems}
          onAdd={onAdd}
          price={price}
          onRemove={onRemove}
       ></Cart>
       </Item>
        </Grid>
      </Grid>    
    </Box>
  </Box>
  );
}

export default App;
