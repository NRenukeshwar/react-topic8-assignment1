import React from "react";
import { render } from "react-dom";
import "./style.css";

class App extends React.Component {

  constructor()
  {
    super();
    this.state={
      array:[]
    }
  }

  generateRow=(event)=>{
    event.preventDefault();
    const data = this.state.array;
    const index=data.length+1
      data.push("5 X "+index+" = "+5*(data.length+1))
      this.setState({
        array:data
      })
  }

  handleClear=(event)=>{
    event.preventDefault();    
    this.setState({
      array:[]
    })
  }
  
  render() {

    const renderTable = this.state.array.map(t => (
      <tr key={t}>
        <td>{t}</td>
      </tr>
    ));

    return (
      <div align="center">
        <h1>React Multiplication Table of number 5</h1>
        
        <button onClick={(event)=>this.generateRow(event)} style={{color:"green"}}>{this.state.array.length===0?'Click to generate Multiplication tables of 5':'Generate Row'}</button>
        &nbsp;
        {this.state.array.length!==0 && <button onClick={(event)=>this.handleClear(event)} style={{color:"blue"}}>Clear</button>}
        
        <table>
          <tbody>{renderTable}</tbody>
        </table>        
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
