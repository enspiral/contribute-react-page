import React, { Component } from 'react'

import StepsHeader from '../atom/StepsHeader'
import ChooseAmount from '../molecules/ChooseAmount'
import StepBToC from './StepBToC'

class StepAToB extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     isHidden: true
  //   }
  // }
  // toggleHidden () {
  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   })
  // }
  // onSubmit needs to send data amount. It also need to hide the current form and retreive the Details Form
  render () {
    return (
      <div className='cardBody'>
         <fieldset> 
          <StepsHeader stepOne='boldStep' />
           <form id="contributeForm" className="form">
            <ChooseAmount />
            <div className="formFooter">
              {/* <button onClick={this.toggleHidden.bind(this)}>Details &rarr;</button> */}
              <button>Details &rarr;</button>
            </div>
            </form>
        </fieldset>
        {/* {!this.state.isHidden && <StepBToC />} */}
        <StepBToC />
      </div>
    )
  }
}

export default StepAToB

// type = "submit"