import React from 'react';
import Header from './components/Header'
import './App.css';
import { render } from '@testing-library/react';
import Kpis from './components/Kpis'
import 'bootstrap/dist/css/bootstrap.min.css';
import CcgItem from './components/CcgItem';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      kpiData : [
        {
          id: 1,
          measure: 'LQR01b',
          ccgs:[
            '09D','09H','09X'
          ]
        },
        {
          id: 2,
          measure: 'LQR17b',
          ccgs:[
            '09D','09H','09X'
          ]
        },
        {
          id: 3,
          measure: 'LQR18',
          ccgs:[
            '09D','09H','09X'
          ]
        }
      ]
    }
  }

  render() {

    // const bler = this.state.kpiData.ccgs.map(c =>            
    //     <CcgItem odsCode={c}/>)

    console.log(this.state.kpiData.ccgs)

    return(
      <div>
        <Header />
        <Kpis kpiData={this.state.kpiData}/>
          {/* <CcgItem components /> */}
      </div>
    )
  }
}

export default App;
