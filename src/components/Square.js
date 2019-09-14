import React from 'react'
import {Grid, Icon} from 'semantic-ui-react'


class Square extends React.Component {


  squareClick = () => {
    this.props.squarePressed(this.props.i)
  }

  render() {
    return (
      <div>
         
          <Grid.Column 
           
            onClick={this.squareClick}
            style={{height: "150px", display: "flex", alignItems: "center", justifyContent: "center", width: "150px", border: "solid black 1px"}} 
          >
            {this.props.i.clicked ? <Icon name="x" /> : <Icon name="check circle outline" /> }
            
            {this.props.i.id}
            
          </Grid.Column>
          
      </div>
    )
  }


}

export default Square