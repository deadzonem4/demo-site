import React from "react";
// import { Link } from "react-router-dom";

class AllCountries extends React.Component {
  
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  render() {
    const countries = this.props.data.map((data, index) =>{
    	if(data.name ==="Германия" || data.name ==="Международен" || data.name ==="Англия" || data.name ==="Испания" )
    	{
	    	return(
	      	<li key={data.id}>
	      		{data.name}
	        </li>
	      )
    	}
    	return null
    });
    return(
      <ul className="all-countries-list">
        {countries}
      </ul>
    );
  }
}

export default AllCountries;
