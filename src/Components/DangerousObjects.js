import React from "react";
import LoadObj from "./Multiuse/Loading";
import showErr from "./Multiuse/ErrorShow";

const BuildingType = props => (
  <div>
    {props.mtype === null && "-"}
    {props.mtype === 1 && "Pavojingas objektas"}
  </div>
);

const Mpdata = ({ mdata, index }) => (
  <tr>
    <td>{index + 1}</td>
    <td className="objID">{mdata.OBJECTID}</td>
    <td className="Pav">{mdata.Pav}</td>
    <td className="address">{mdata.Adresas}</td>
    <td className="radius">{mdata.PavojSpind} m</td>
    <td className="mtype">
      <BuildingType mtype={mdata.Tipas} />
    </td>
  </tr>
);

export default class DangerousObjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    fetch(
      "https://zemelapiai.vplanas.lt/arcgis/rest/services/Open_Data/Civiline_sauga_OD/MapServer/4/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    )
      .then(response => response.json())
      .then(mapdata => {
        this.setState({
          loading: false,
          mapdata
        });
      });
  }

  rloading() {
    return <LoadObj />;
  }

  showErr() {
    return <showErr serror={this.state.error.message} />;
  }

  rshow() {
    const { error, mapdata } = this.state;

    if (error) {
      return this.error();
    }

    return (
      <div>
        <table className="table table-bordered table-responsive table-hover table-stripped">
          <thead className="thead-dark">
            <tr>
              <th>Nr.</th>
              <th>Objekto ID</th>
              <th>Įvykio aprašymas</th>
              <th>Adresas</th>
              <th>Įvykio poveikio zonos spindulys (m)</th>
              <th>Tipas</th>
            </tr>
          </thead>
          <tbody>
            {mapdata.features.map((mdata, key) => (
              <Mpdata mdata={mdata.attributes} index={key} key={mdata.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    if (this.state.loading) {
      return this.rloading();
    } else if (this.state.error) {
      return this.rerror();
    } else {
      return this.rshow();
    }
  }
}
