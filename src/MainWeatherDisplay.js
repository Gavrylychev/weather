import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class MainWeatherDisplay extends React.Component {
  state = {
    search: ''
  };

  onSubmitForm = event => {
    event.preventDefault();
    
    this.props.onSearchChange(this.state.search);
  }

  render() {
    console.log(this.props, 'MAinD')
    const {cities} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={this.onSubmitForm}>
              <input 
                type="text" 
                name="search" 
                placeholder="Search your city" 
                className="form-control" 
                value={this.state.search} 
                onChange={event => this.setState({ search: event.target.value })}
              />
            </form>
          </div>
        </div>
        <div className="row">
          {this.props.cities.length > 0 && this.props.cities.map((city) => {
            return (
              <div className="col-sm-3" key={city.Key} style={{marginTop: 10}}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{city.LocalizedName}</h5>
                    <p className="card-text">{`${city.AdministrativeArea.LocalizedName}, ${city.Country.LocalizedName}`}</p>
                    <button className="btn btn-primary" onClick={() => this.props.viewCityTemperature(city.Key)}>
                      <Link className="styled" to={`/card-page/${city.Key}`}>See the Weather</Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {this.props.cities.length === 0 && this.props.currentPosition.map ((city) => {
            return (
              <div className="col-sm-3" key={city.Key} style={{marginTop: 10}}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{city.LocalizedName}</h5>
                    <p className="card-text">{`${city.AdministrativeArea.LocalizedName}, ${city.Country.LocalizedName}`}</p>
                    <button className="btn btn-primary" onClick={() => this.props.viewCityTemperature(city.Key, city)}>
                      <Link className="styled" to={`/card-page/${city.Key}`}>See the Weather</Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default MainWeatherDisplay;
