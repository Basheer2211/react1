

import { useState } from "react"
import product from './product.jsx'

export default function App(){
  const[counter,setCounter]=useState(0);
const increase= ()=>{
  setCounter(counter+1);
}
const[counter1,setCounter1]=useState(0);
const[pro,setPro]=useState(null);
const showProduct= ()=>{
  setCounter1(counter1+1);
if (counter1 % 2!=0) {
  setPro(null);
  console.log(counter1)
}
else {
  setPro(<div>
    <h1>Product details</h1>
    <p>name: iphone 14</p>
    <p>price:1200$</p>

</div>);
}

}

return (
<div>
<h1>counter is {counter}</h1>
<button onClick={increase}>increas</button>
<button onClick={showProduct}>show</button>
{pro}
</div>
);

}