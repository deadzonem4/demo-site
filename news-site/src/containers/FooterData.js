import React from 'react';

class FooterData extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
      footer: [],
      url: this.props.dataLink,
    };
  }
  componentWillMount(){
    sessionStorage.getItem('footer') && this.setState({
      footer: JSON.parse(sessionStorage.getItem('footer')),
      loading: false
    })
        
  }
  componentDidMount(){
    if (!sessionStorage.getItem('footer')) {
      this.fetchData();
    }

  }
  fetchData(){
    fetch(this.state.url)
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
    .then(api => {
      this.setState({ 
        footer: api,
        loading: false
      });
      sessionStorage.setItem('footer', JSON.stringify(this.state.footer));
    })
    .catch(error => {
      console.log('error');
    });

  }
  render() {
    if (this.state.loading) {
      return (
        <div>Please wait</div>
      );
    }
	  return (
      <div>
        {React.cloneElement(this.props.children, { footer: this.state.footer })}
      </div>
	  );
	}
}

export default FooterData;