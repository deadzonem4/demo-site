import React from 'react';
import Loader from 'react-loader-spinner';

class StorageData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      news: [],
      url: this.props.dataLink,
      token: this.props.token
    };
  }
  componentWillMount(){
    sessionStorage.getItem('news') && this.setState({
      news: JSON.parse(sessionStorage.getItem('news')),
      loading: false
    })
  }
  componentDidMount(){
    if (!sessionStorage.getItem('news')) {
      this.fetchData();
    }
  }
  fetchData(){
    fetch(this.state.url, { 
      method: 'get', 
      headers: new Headers({
        "content-type": "application/json",
        authorization: `Bearer ${this.state.token}`,
        accept: "application/json",
        project: "winbet.bg"
      }), 
     })
    .then(response => {
      if (!response.ok) { throw response }
      return response.json()
    })
    .then(api => {
      this.setState({ 
        news: api.data,
        loading: false
      });
      sessionStorage.setItem('news', JSON.stringify(this.state.news));
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
        {React.Children.map(this.props.children, (child => React.cloneElement(child, { news: this.state.news })))}
      </div>
    );
  }
}

export default StorageData;