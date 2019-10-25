import React from 'react';

const CardPage = (props) => {
  console.log(props, 'card page')
  return (
    <div className="container">
      <div className="row" style={{width: '50%', border: '1px solid rgba(0,0,0,.125)'}}>
        <div className="col-sm">
          <div className="card" style={{border: 'none'}}>
            <div className="card-body">
              {/* <h5 className="card-title">{city.LocalizedName}</h5>
              <p className="card-text">{`${city.AdministrativeArea.LocalizedName}, ${city.Country.LocalizedName}`}</p> */}
              <p className="card-text">{`${props.selectedCity[0].Temperature.Metric.Value} ${props.selectedCity[0].Temperature.Metric.Unit}`}</p>
              <p className="card-text">{props.selectedCity[0].WeatherText}</p>
              {/* <button className="btn btn-primary" onClick={() => this.props.viewCityTemperature(city.Key)}>
                <Link className="styled" to={`/card-page/${city.Key}`}>See the Weather</Link>
              </button> */}
            </div>
          </div>
        </div>
        <div className="col-sm-6 d-flex justify-content-end" style={{padding: '1.25rem'}}>
          <button type="button" className="btn btn-primary" style={{height:40}}>
            <i className="far fa-heart" style={{marginRight: 5}}></i>
              Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPage;