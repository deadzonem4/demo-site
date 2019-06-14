import React from 'react';
import Loader from 'react-loader-spinner';

class EventsData extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      api: [],
      url: this.props.dataLink,
      loading: true,
      token: this.props.token
    };
  }
  componentDidMount(){
    this.fetchData();
    this.interval = setInterval(() => {
      this.fetchData();
    }, 20000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
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
        api: api,
        loading: false
      });
    })
    .catch(error => {
      console.log('error');
    });
  }
  render() {

    if (this.state.loading) {
      return (
        <div className="loader">
          <Loader type="TailSpin" color="#D5071C"/>
        </div>
      );
    }
    return (
      <div className="data-container">
        {React.cloneElement(this.props.children, { data: this.state.api } )}
      </div>
    );
	}
}

export default EventsData;