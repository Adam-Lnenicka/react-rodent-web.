
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Card.scss'
import '../scss/Home.scss'
import React, {useState} from "react";
import Card from "../components/Accordion.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import DATA from '../MOCK_DATA.json';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';







export default function Home() {
  const [searchTerm, setSearchTerm]= useState("");
  const [page, setPage] =useState(6)


  const data=    DATA.filter((data)=>{
      if (searchTerm ===""){
          return data
      }else if (data.date.toLowerCase().includes(searchTerm.toLowerCase())){
          return data
      }
  }).slice(0, page).map((data)=>{
      return(
        <Card key={data.id} button={data.button} date={data.date} image={data.image} heading={data.heading} author={data.author}/>)
              // <Cards key={data.id} button={data.button} image={data.image} date={data.date} heading={data.heading} author={data.author}/>)
  })
  
const displayMore =()=>{
  setPage (()=>page+6)
}


  return (
    <div className="App">

        <Header/>

        <div className="banner">
            <div>
                <h1>Rodent World</h1>
                <h2>All you need to know about rodents.</h2>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input                     
                        type="text"
                        placeholder="Search for your favourite animal!"
                        value={searchTerm}
                        onChange={(e)=>{
                            setSearchTerm(e.target.value);
                        }}
                     />
                </InputGroup>
            </div>
        </div>

        <div className="card-section">
            {data}
        </div>
        <button onClick ={displayMore}>Show more</button>

        <Footer/>

    </div>
  );
}


