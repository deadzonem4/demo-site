import React from 'react';
import Loader from 'react-loader-spinner';

class CountriesData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      countries: [],
      url: this.props.dataLink,
      token: this.props.token
    };
  }
  componentWillMount(){
    sessionStorage.getItem('countries') && this.setState({
      countries: JSON.parse(sessionStorage.getItem('countries')),
      loading: false
    })
  }
  componentDidMount(){
    if (!sessionStorage.getItem('countries')) {
      this.fetchData();
    }
  }
  fetchData(){
    fetch(this.state.url, { 
      method: 'get', 
      headers: new Headers({
        "content-type": "application/json",
        authorization: this.props.token,
        accept: "application/json"
      }), 
     })
    .then(response => {
      if (!response.ok) { throw response }
      return response.json()
    })
    .then(api => {
      this.setState({ 
        countries: api,
        loading: false
      });
      sessionStorage.setItem('countries', JSON.stringify(this.state.countries));
    })
    .catch(error => {
      console.log('error');
    });
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
          <Loader type="TailSpin" color="#D5071C" />
        </div>
      );
    }
    return (
      <div className="data-container">
        {React.Children.map(this.props.children, (child => React.cloneElement(child, { data: this.state.countries })))}
      </div>
    );
  }
}

export default CountriesData;