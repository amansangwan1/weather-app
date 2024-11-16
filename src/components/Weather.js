import React, { Component } from 'react'
import Card from './Card'
import Spinner from './Spinner'

export default class Weather extends Component {
    constructor(){
        super()
        this.state={
            location:{},
            weather:{},
            loading:false,
        }
    }

    fetchApi=async (place)=>{
        this.setState({loading:true})
        let url=`https://api.weatherstack.com/current?access_key=f0e1d6d6a021d4687c3433f63c9be95c&query=${this.props.place}`
        let data=await fetch(url)
        let parsedData=await data.json()
        this.setState({location:parsedData.location,weather:parsedData.current,loading:false})
    }

    componentDidMount(){
        this.fetchApi(this.props.place)
    }

    componentDidUpdate(prevProps){
        if(prevProps.place!==this.props.place){
            this.fetchApi(this.props.place)
        }
    }
    

  render() {
    
    return (
      <div>
        <div className="container d-flex" style={{alignItems:'center',justifyContent:'center',marginTop:120}}>
        {this.state.loading? (<Spinner />) : (this.state.weather.weather_descriptions && this.state.weather.weather_icons?(<Card 
        imageUrl={this.state.weather.weather_icons[0]}
        country={this.state.location.country}
        place={this.state.location.name}
        description={this.state.weather.weather_descriptions[0]}
        temperature={this.state.weather.temperature}
        observationTime={this.state.location.localtime.slice(11,16)}
        humidity={this.state.weather.humidity}
        visibility={this.state.weather.visibility}
        windSpeed={this.state.weather.wind_speed}
        />):(<h3>no data found</h3>))}
        </div>
      </div>
    )
  }
}
