import React from "react";
import TopEvents from "./TopEvents";

class PopularEvents extends React.Component {

  componentWillMount(){
    window.scrollTo(0, 0);
  }
  render() {
    const topEvents = this.props.data.map((data, index) =>{
      return(
      	<div key={data.id}>
      	  <div className="league-title">
              <h4>{data.country.name + " > " + data.name}</h4>
          </div>
          <TopEvents data={data}/>
        </div>
      )
    });
    return(
      <div>
        <div className="popular-events-title">
          <h4>Акценти</h4>
        </div>
        <div className="all-events-box">
          {topEvents}
        </div>
      </div>
    );
  }
}

export default PopularEvents;
