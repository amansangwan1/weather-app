import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let{country,place,description,temperature,observationTime,humidity,visibility,windSpeed,imageUrl}=this.props
    return (
      <div>
        <div
          className="card"
          style={{ width: 500, overflow: "hidden", borderRadius: 20 }}
        >
          <div style={{ backgroundImage: "linear-gradient(to right top ,#40739e,#8c7ae6)" }}>
            <div className="d-flex m-3">
              <img
                src={imageUrl}
                className="card-img-top me-2 mt-3"
                alt="..."
                style={{ height: 50, width: 50, borderRadius: 7 }}
              />
              <div className="mt-2">
                <h3 className="card-title " style={{ height: 27 }}>
                  <strong>{country}</strong>
                </h3>
                <h4 className="card-title ">{place}</h4>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-text">
                the weather is : <strong>{description}</strong>
              </h5>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Time</strong> : {observationTime}
            </li>
            <li className="list-group-item">
              <strong>temperature</strong> : {temperature}
            </li>
            <li className="list-group-item">
              <strong>humidity</strong> : {humidity}
            </li>
            <li className="list-group-item">
              <strong>visibility</strong> : {visibility}
            </li>
            <li className="list-group-item">
              <strong>windSpeed</strong> : {windSpeed}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
