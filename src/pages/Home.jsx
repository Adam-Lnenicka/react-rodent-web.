
import '../scss/Home.scss'
import Card from  '../components/Card.jsx'
import DATA from'../MOCK_DATA.json'
import Header from "../components/Header.jsx"
import Footer from '../components/Footer.jsx'
import {  useState } from 'react'




function Home() {

    
   
    

    const [searchTerm, setSearchTerm]= useState("");
    const [visible, setVisible] =useState(6)

    const data=    DATA.filter((data)=>{
        if (searchTerm ===""){
            return data
        }else if (data.date.toLowerCase().includes(searchTerm.toLowerCase())){
            return data
        }
    }).slice(0, visible).map((data)=>{
        return(
            
                <Card key={data.id} button={data.button} image={data.image} date={data.date} heading={data.heading} author={data.author}/>)
    })
    
const displayMore =()=>{
    setVisible (()=>visible+6)
}
  return (
    <div className="App">
        <Header/>

  
        <div className="banner">
            <div>
                <h1>Rodent World</h1>
                <h2>All you need to know about rodents.</h2>


          

      
      <input
        type="text"
        placeholder="Search for your favourite animal!"
        value={searchTerm}
        onChange={(e)=>{
            setSearchTerm(e.target.value);
        }}
      />

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


export default Home;