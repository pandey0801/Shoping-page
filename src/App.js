import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const show = useSelector((store)=>store.ui.cartIsVisible)
  const cart = useSelector((store)=>store.cart)
  console.log(cart);
  useEffect(()=>{
fetch('https://expensetracker-7f8dd-default-rtdb.firebaseio.com/cart.json',
  {
    method:'PUT',
    body: JSON.stringify(cart),
  }).then((req)=>{
    if(req.ok)
      {
        console.log("ok");
      }
      else{
        console.log('error');
      }
  })
  },[cart])

  return (
    <Layout>
    {show && (<Cart />)}  
      <Products />
    </Layout>
  );
}

export default App;
