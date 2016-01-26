import React from 'react'

import './Toggle.scss'

export default class Toggle extends React.Component {
  static propTypes = {
    toggle: React.PropTypes.func.isRequired,
    assign: React.PropTypes.func.isRequired,
    enabled: React.PropTypes.bool.isRequired
  };

  render () {
    return (
      <div className='container text-center'>
        <div className='checkbox'>
          <label>
            <input type='checkbox' checked={this.props.enabled} onChange={this.props.toggle} />
            Sample Enabled
          </label>
         </div>
      <button type='submit' className='btn btn-default' onClick={this.props.assign.bind({}, true)}>Enable</button>
      <button type='submit' className='btn btn-default' onClick={this.props.assign.bind({}, false)}>Disable</button>
      </div>
    )
  }
}
