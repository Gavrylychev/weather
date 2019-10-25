import React from 'react';
import ReactDOM from 'react-dom';
import MainWeatherDisplay from './MainWeatherDisplay';
import Header from './Header';
import CardPage from './CardPage';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
      // lat: null,
      // long: null,
      errMsg: '',
      cities: [{"Version":1,"Key":"323903","Type":"City","Rank":21,"LocalizedName":"Kharkiv","Country":{"ID":"UA","LocalizedName":"Ukraine"},"AdministrativeArea":{"ID":"63","LocalizedName":"Kharkiv"}},{"Version":1,"Key":"1215508","Type":"City","Rank":85,"LocalizedName":"Kharkivske","Country":{"ID":"UA","LocalizedName":"Ukraine"},"AdministrativeArea":{"ID":"14","LocalizedName":"Donets'k"}},{"Version":1,"Key":"1215506","Type":"City","Rank":85,"LocalizedName":"Kharkivtsi","Country":{"ID":"UA","LocalizedName":"Ukraine"},"AdministrativeArea":{"ID":"53","LocalizedName":"Poltava"}},{"Version":1,"Key":"1215510","Type":"City","Rank":85,"LocalizedName":"Kharkivka","Country":{"ID":"UA","LocalizedName":"Ukraine"},"AdministrativeArea":{"ID":"59","LocalizedName":"Sumy"}},{"Version":1,"Key":"1215507","Type":"City","Rank":85,"LocalizedName":"Kharkivtsi","Country":{"ID":"UA","LocalizedName":"Ukraine"},"AdministrativeArea":{"ID":"68","LocalizedName":"Khmel'nyts'kyy"}}],
      selectedCity: [{"LocalObservationDateTime":"2019-10-25T09:46:00+03:00","EpochTime":1571985960,"WeatherText":"Cloudy","WeatherIcon":7,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":true,"Temperature":{"Metric":{"Value":11.1,"Unit":"C","UnitType":17},"Imperial":{"Value":52.0,"Unit":"F","UnitType":18}},"MobileLink":"http://m.accuweather.com/en/ua/kharkiv/323903/current-weather/323903?lang=en-us","Link":"http://www.accuweather.com/en/ua/kharkiv/323903/current-weather/323903?lang=en-us"}],
      currentPosition: [{"Version":1,"Key":"1642112","Type":"City","Rank":85,"LocalizedName":"Peremoha","EnglishName":"Peremoha","PrimaryPostalCode":"","Region":{"ID":"EUR","LocalizedName":"Europe","EnglishName":"Europe"},"Country":{"ID":"UA","LocalizedName":"Ukraine","EnglishName":"Ukraine"},"AdministrativeArea":{"ID":"63","LocalizedName":"Kharkiv","EnglishName":"Kharkiv","Level":1,"LocalizedType":"Province","EnglishType":"Province","CountryID":"UA"},"TimeZone":{"Code":"EEST","Name":"Europe/Kiev","GmtOffset":3.0,"IsDaylightSaving":true,"NextOffsetChange":"2019-10-27T01:00:00Z"},"GeoPosition":{"Latitude":49.984,"Longitude":36.369,"Elevation":{"Metric":{"Value":189.0,"Unit":"m","UnitType":5},"Imperial":{"Value":619.0,"Unit":"ft","UnitType":0}}},"IsAlias":false,"SupplementalAdminAreas":[],"DataSets":[]}],
      // cities:[],
      // selectedCity: [],
      // currentPosition: [],
    };

  KEY = '';
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => 
      // this.setState({
      //     lat: position.coords.latitude,
      //     long: position.coords.longitude
      //   }),
      this.onLoadCurrentPosition( position.coords.latitude, position.coords.longitude),
      err => this.setState({errMsg: err.message})      
    );

  }

  onLoadCurrentPosition = async (lat, long) => {
    // const response = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search', {
    //   params: {
    //     apikey: 'rJewdNIAlpwyOb28JjB1zwQdQaUqvtAP',
    //     q: `${lat}, ${long}`,
    //     language: 'en-us'
    //   }
    // });
    // this.setState({currentPosition: response.data});
  }

  onSearchChange = async (searchQuery) => {
    // const response = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete', {
    //   params: {
    //     apikey: 'rJewdNIAlpwyOb28JjB1zwQdQaUqvtAP',
    //     q: searchQuery,
    //     language: 'en-us'
    //   }
    // });
    // this.setState({cities: response.data});
  }

  viewCityTemperature = async (cityKey, city) => {
    // const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
    // const response = await axios.get(url, {
    //   params: {
    //     apikey: 'rJewdNIAlpwyOb28JjB1zwQdQaUqvtAP',
    //     language: 'en-us'
    //   } 
    // });

    // this.setState({ selectedCity: [response.data, ...city]});
  }
  

  render() {
    console.log(this.state)
    return (
      <>
        <BrowserRouter>
          <Header />
          <Route 
            path='/' 
            exact 
            render={(props) => 
              <MainWeatherDisplay {...props} 
                onSearchChange={this.onSearchChange} 
                viewCityTemperature={this.viewCityTemperature} 
                cities={this.state.cities}
                currentPosition={this.state.currentPosition}
              />
            }
          />
          <Route 
            path='/card-page/:Key' 
            render={(props) => 
              <CardPage {...props} 
                selectedCity={this.state.selectedCity} 
                
              />
            }
          />
          <Route path='/favorites'/>
        </BrowserRouter>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

