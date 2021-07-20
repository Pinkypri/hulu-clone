
import './App.css';
import React,{useState} from 'react'
import "./App.css"
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import requests from './helpers/requests';
import Result from './Components/Results/Results';


const App = () => {
  const [selectedOption, setselectedOption] = useState(requests.fetchTrending)
  console.log(selectedOption);
  return (
    <div className="app">
     <Header/>
     <Navbar setselectedOption={setselectedOption}/>
     <Result selectedOption={selectedOption}/>
    </div>
  )
}

export default App


