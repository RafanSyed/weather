import './App.css'; //imports App.css
import React, { useEffect, useState } from "react";  //imports react as well as the react hooks from react 
import InputTag from './components/search.js';
import CharacterGrid from './components/cardgrid.js';
import axios from 'axios'

function App() { 
  const [text, setText] = useState('london') //sets the intial city to london
  const [data, setData] = useState({
    Name: "London",
    Condition: "Cloudy"
  }) //uses the react hook and sets the variable 'data' which can be changed using setData 
  const [loading, setLoading] = useState(true)

  useEffect(() => { // uses the react hook useState, this makes it possible that london is the intial city that shows up when you first go on the website
    axios.get("http://localhost:5000/weather/london").then((res) => { 
      setData(res.data)
    })
    .catch((error) => {
      setData(null)
    })
    .finally(() => setLoading(false))
  }, [])

  const onClick = () => { //sets the function onClick which is used on the button 
    try {
      setLoading(true)
      setTimeout(async() => {
        const res = await axios.get("http://localhost:5000/weather/" + text)
        setData(res.data)
        setLoading(false)
      }, 500);
    } catch (error) {
      setData(null)
      setLoading(false)
    }
  }
  

  
  return (
    <div>
      {loading ? (
        <p className='Loading'>Loading...</p>
      ) : (
        <div>
          {!data ? (
            <p className='no_city'>Can't recognize city. Refresh to go back.</p>
          ) : (
            <div className='everything'>
              <h1 className='Weather'>Weather in {data["Name"]}</h1>
              <InputTag onChange={setText} onButtonClick={onClick} />
              <header className='condition'>Condition: {data['Condition']}</header>
              <div className='card-container'>
                <div className='row'>
                  <div className='col-4 p-0'>
                    <CharacterGrid className='temp' item={data['Temperature Fahrenheit']+' degrees'} name='Temperature' />
                 
                  </div>
                  <div className='col-4 p-0'>
                    <CharacterGrid className='Hum' item={data['Humidity']+ ' %'} name='Humidity' />
                  </div>
                  <div className='col-4 p-0'>
                    <CharacterGrid className='wind' item={data['Wind mph'] +' mph'} name='Wind mph' />
                  </div>
                </div>
              </div>
              <div className='card-container2'>    
                <div className='row'>
                  <div className='col-4 p-0'>
                    <CharacterGrid className='lat' item={data['Latitude']} name='Latitude' />
                  </div>
                  <div className='col-4 p-0'>
                    <CharacterGrid className='lon' item={data['Longitude']} name='longitude' />
                  </div>
                  <div className='col-4 p-0'>
                    <CharacterGrid className='last' item={data['Last Updated']} name='last updated' />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
  
  
  
          }  
export default App;