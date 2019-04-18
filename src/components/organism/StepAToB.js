import React, { Component } from 'react'

import StepsHeader from '../atom/StepsHeader'
import ChooseAmount from '../molecules/ChooseAmount'
import StepBToC from './StepBToC'

class StepAToB extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  showNextStep (e) {
    e.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      <div className='cardBody'>
         {this.state.isHidden && 
        <fieldset id="chooseAmount"> 
          <StepsHeader stepOne='boldStep' />
           <form id="contributeForm" className="form">
            <ChooseAmount />
            <div className="formFooter">
              <button onClick={this.showNextStep.bind(this)} type="submit">Details &rarr;</button>
            </div>
            </form>
        </fieldset>}
        {!this.state.isHidden && <StepBToC />}
      </div>
    )
  }
}

export default StepAToB