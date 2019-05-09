import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
//https://vms-api.vilnius.lt/get-vilnius-gyvai/getmessages
//https://data-vplanas.opendata.arcgis.com/datasets/be32ac118bb94db98e2389826e80d3c5_5/geoservice
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <Main />
        </div>
      </div>
    );
  }
}
