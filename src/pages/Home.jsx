
import '../scss/Home.scss'
import Card from  '../components/Card.jsx'
import DATA from'../MOCK_DATA.json'
import Header from "../components/Header.jsx"
import Footer from '../components/Footer.jsx'
import {  useState } from 'react'




function Home() {

    
   
    

    const [searchTerm, setSearchTerm]= useState("");

    const data=    DATA.filter((data)=>{
        if (searchTerm ==""){
            return data
        }else if (data.date.toLowerCase().includes(searchTerm.toLowerCase())){
            return data
        }
    }).map((data)=>{
        return(
            
                <Card key={data.id} button={data.button} image={data.image} date={data.date} heading={data.heading} author={data.author}/>)
    })
    

  return (
    <div className="App">
        <Header/>

  
        <div className="banner">
            <div>
                <h1>Energy made simple</h1>
                <h2>Join today for 24/7 support and savings upward of £300/yr*.</h2>

            </div>
          </div>
          
          <div className="why-us-short">
            <p>Why switch to us?</p>
            <h3>We offer intelligent tariffs, ground-breaking apps & low cost green energy.</h3>
          </div>
      <div className="updates-short">  
        <p>What we are doing at Green</p>
        <h3> Company updates & how we are improving your experience.</h3>
      </div>

      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e)=>{
            setSearchTerm(e.target.value);
        }}
      />
      <div className="card-section">
          {data}
  
      </div>
      <Footer/>



    </div>
    
  );
}


export default Home;