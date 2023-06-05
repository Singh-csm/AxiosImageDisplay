import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css"
import imgs from "../../public/vite.svg"
const AxiosConnection = () => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };



  return (
    <div style={{ backgroundColor:"teal" ,  padding:"2%", borderRadius:"20px" }}>
      <button onClick={handleClick}>{isClicked ? 'Close' : 'Open'}</button>
      {isClicked &&
        data.map((val, i) => (
          <div key={i}>
            <div style={{display:"flex", border:"3px solid black", margin:"3%",alignItems:"center", backgroundColor:"lightcoral",borderRadius:"17px",flexDirection:"revert-layer",justifyContent:"space-around"}}>
              {<img style={{ width:"250px", height:"155px", padding:"12px", }} src={val.url} alt="img"/>}
              { <img src={imgs} alt="img"/>}
            </div>
          </div>
        ))}

            <h1>Welocme to play with Axios! { <img src={imgs} alt="img"/>}</h1>
    </div>
  );
};

export default AxiosConnection;
