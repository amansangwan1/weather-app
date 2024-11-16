import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinner-border text-secondary mt-5" style={{height:60,width:60}} role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
}
