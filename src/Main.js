import React, {Component} from 'react'



export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
         baseURL: 'http://openweathermap.org/img/wn/'
        }
    }

format() {
    var options = {year: 'numeric', month: 'long', day:'numeric'}
    return new Date().toLocaleDateString([], options);
}

render() {

const children = this.props
const forecast = children.forecast

    return(
        <div>
        <h1 className="location">
        {forecast.city}
        </h1>
        <h2 className="date">{this.format()}</h2>
        <div className="weatherIcon">
          <div className="sunny"><img src={this.state.baseURL + forecast.icon + "@2x.png"}/></div>
        </div>
          <p className="temp">{(forecast.temp -  237.15).toFixed(0)}</p>
          <p className="conditions">{forecast.description}</p>


        </div>

    )
}

}