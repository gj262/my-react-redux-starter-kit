import React from 'react'
import { connect } from 'react-redux'
import { actions as sampleActions } from 'reducers/sample'
import Toggle from 'components/Toggle'

const mapStateToProps = (state) => ({
  enabled: state.sample.enabled
})

class SampleManager extends React.Component {
  render () {
    return (
      <Toggle {...this.props} />
    );
  }
}

export default connect(mapStateToProps, sampleActions)(SampleManager)
