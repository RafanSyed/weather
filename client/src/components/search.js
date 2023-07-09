import React from 'react'

const InputTag = ({ onChange, onButtonClick }) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='search-bar-container'>
            <form>
                <input type= 'text'
                      className='form-control'
                      placeholder='Search City'
                      onChange={(e) => onChange(e.target.value)}
                      autoFocus
                      />
            </form>
        </div>
        <button className='button' onClick={onButtonClick}>Search</button>
      </div>  
    </header>  
  )
}

export default InputTag


