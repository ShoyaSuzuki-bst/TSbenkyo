import './App.css';
import React from 'react';
let noon =  Math.random() < 0.5 ? true : false

const formatName = (name) => {
  return name + "さん"
}

const GetGreeeting = (props) => {
  if(props.is_noon){
    return (
      <>
        <div id="noon-greeting">
          <h3>{formatName(props.name)} さん こんにちは</h3>
        </div>
      </>
    )
  } else {
    return(
      <>
      <div id="evening-greeting">
        <h3>{formatName(props.name)} さん こんばんは</h3>
      </div>
    </>
    )
  } 
}


function App() {
  return (
    <div className="App">
      <div id="hello-world">
        <GetGreeeting is_noon={noon} name="Ryota" />
      
      </div>
    </div>
  );
}

export default App;
