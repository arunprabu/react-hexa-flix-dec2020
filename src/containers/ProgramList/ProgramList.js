import React, { Component } from 'react';
import Program from '../../components/Program/Program';

// Class Comp should inherit React Component
class ProgramList extends Component {

  // render should return JSX
  render() {
    return (
      <div>
        <br />
        <h2>Featured Program List | Props Demo</h2>
        
        <Program 
          title='Man Vs Wild' 
          category='Infotainment' 
          time='8PM'>Wild Adventure Program by Bear Grylls</Program>

        <Program 
          title='Planet Earth' 
          category='Infotainment' 
          time='9PM'>WildLife Program by David Attenborough</Program>

        <Program 
          title='Ind Vs Aus Test' 
          category='Sports' 
          time='7AM'>India Vs Australia Test Match Series Game #1</Program>
        
      </div>
    );
  }

}

export default ProgramList;