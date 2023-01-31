import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  
  const [coins , setCoins] = useState();

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

  useEffect(()=>{
     axios.get(url).then((response)=>{
       setCoins(response.data);
     }).catch((err)=>{
       console.log(err);
     })
  },[]);

  console.log(coins);

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
