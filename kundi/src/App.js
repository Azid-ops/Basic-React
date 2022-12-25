import React, {useState} from 'react';
import './App.css';
import Data from './data';

const App = () => {
  const [User,setUser] = useState({
    name:"Ahtesham ",
    email:"Ahtesham@gmail.com",
    country:"Pakistan"
  })

  return (
    <Data User={User}/>
  );
}

export default App;
