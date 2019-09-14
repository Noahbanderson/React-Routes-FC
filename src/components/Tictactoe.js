import React from 'react'
import { Grid} from 'semantic-ui-react'
import Square from './Square'



class Tictactoe extends React.Component {
  state={
    wins: 0,
    loses: 0,
    ties: 0,
    twoPlayerMode: false,
    playerTwoWins: 0,
    playerTwoLoses: 0,
    divs: [
      {id: 1, clicked: false},
      {id: 2, clicked: false},
      {id: 3, clicked: false},
      {id: 4, clicked: false},
      {id: 5, clicked: false},
      {id: 6, clicked: false},
      {id: 7, clicked: false},
      {id: 8, clicked: false},
      {id: 9, clicked: false},
    ],
    firstPlayerTurn: true,
    arrUserChoices: [],
    arrCompChoices: []
  }

  squarePressed = (i) => {
    const oppo = !i.clicked  
    this.setState({divs: this.state.divs.map( div => {
      if (div.id === i.id) {
        return {id: i.id, clicked: oppo}
      } else {
        return div
      }
    })})
    this.setState({firstPlayerTurn: !this.state.firstPlayerTurn})
    this.setState({arrUserChoices: [i.id, ...this.state.arrUserChoices]}, () => this.gameLogic(this.state.arrUserChoices))
  }


  compChoice = () => {
    
    const available = this.state.divs.filter( div => { // array of available divs
      if (div.clicked === false) {
        return div
      } else if (div.id === undefined) {
        // how to end game??
        
      } 
    })

    const computerNumber = Math.floor(Math.random()*available.length) //array index number 

    this.setState({divs: this.state.divs.map( div => {
      if (div.id === available[computerNumber].id){
        return {id: div.id, clicked: !div.clicked}
      } 
      return div
    })})
    this.setState({arrCompChoices: [available[computerNumber].id, ...this.state.arrCompChoices]}, () => this.gameLogic(this.state.arrCompChoices))
    // choose a div that has not been selected 
  }


  gameLogic = (array) => {
    
    const hori1 = array.includes(1,2,3)
    const hori2 = array.includes(4,5,6)
    const hori3 = array.includes(7,8,9)
    
    const vert1 = array.includes(1,4,7)
    const vert2 = array.includes(2,5,8)
    const vert3 = array.includes(7,8,9)
    
    const diag1 = array.includes(1,5,9)
    const diag2 = array.includes(3,5,7)

    

    if ( hori1 === true || hori2 === true ||  hori3 === true ||  vert1 === true ||  vert2 === true ||  vert3 === true ||  diag1 === true || diag2 === true ){
      // winning dipslay
    } else if (array === this.state.arrCompChoices) {
      this.setState({firstPlayerTurn: !this.state.firstPlayerTurn})
    } else {
      this.compChoice()
    }
     

  }




  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}> 
        <Grid columns={3} style={{width: "450px"}}>
        <Grid.Row > 
          {this.state.divs.map( i => ( <Square squarePressed={this.squarePressed} key={i.id} i={i} firstPlayerTurn={this.state.firstPlayerTurn}  />))}
        </Grid.Row>
      </Grid>™
    </div>
    )
  };
  
}

export default Tictactoe

        