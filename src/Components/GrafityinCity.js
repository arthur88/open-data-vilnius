import React from "react";
import Timestamp from "react-timestamp";
import Loading from "./Multiuse/Loading";
import showErr from "./Multiuse/ErrorShow";

const BuildingType = props => (
  <div>
    {props.bid === null && "-"}
    {props.bid === 1 && "Daugiabutis"}
    {props.bid === 2 && "Privatus pastatas"}
    {props.bid === 3 && "Viešas pastatas"}
    {props.bid === 4 && "Inžinerinis statinys"}
    {props.bid === 5 && "Tvora"}
    {props.bid === 6 && "Garažas"}
    {props.bid === 7 && "El. Skydinė"}
    {props.bid === 8 && "Sandėlys"}
    {props.bid === 9 && "Kiti"}
  </div>
);

const SignStatus = props => (
  <div>
    {props.sstatus === null && "-"}
    {props.sstatus === 1 && "Užfiksuota"}
    {props.sstatus === 2 && "Patikslinta"}
    {props.sstatus === 3 && "Sutvarkyta"}
  </div>
);

const CleanUpType = props => (
  <div>
    {props.cutype === null && "-"}
    {props.cutype === 1 && "Dažoma"}
    {props.cutype === 2 && "Valoma"}
  </div>
);

const Mpdata = ({ mdata, index }) => (
  <tr>
    <td>{index + 1}</td>
    <td className="objID">{mdata.attributes.OBJECTID}</td>
    <td className="sign">{mdata.attributes.uzrasas}</td>
    <td className="status">
      <SignStatus sstatus={mdata.attributes.statusas} />
    </td>
    <td className="tvark_tipas">
      <CleanUpType cutype={mdata.attributes.tvark_tipas} />
    </td>
    <td className="cleaned_on">
      <Timestamp date={mdata.attributes.baigti_darbai} />
    </td>
    <td className="buildtype">
      <BuildingType bid={mdata.attributes.statinio_tip} />{" "}
    </td>
    <td className="region">{mdata.attributes.Seniunija}</td>
    <td className="address">{mdata.attributes.adresas}</td>
  </tr>
);

export default class GrafityinCity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      mapdata: [],
      currentPage: 0,
      prevState: 0,
      pagination: {
        start: 0,
        rows: 20
      }
    };
  }

  componentDidMount() {
    fetch(
      "https://zemelapiai.vplanas.lt/arcgis/rest/services/Open_Data/Civiline_sauga_OD/MapServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    )
      .then(response => response.json())
      .then(mapdata => {
        this.setState({
          loading: false,
          mapdata
        });
      })
      .catch(error => {
        this.setState({ loading: false, error });
      });
  }

  rloading() {
    return <Loading />;
  }

  rerror() {
    return <showErr serror={this.state.error.message} />;
  }

  previousPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 20 });
    }
  };

  nextPage = () => {
    if (this.state.currentPage + 1 < this.state.mapdata.features.length) {
      this.setState({ currentPage: this.state.currentPage + 20 });
    }
  };

  rshow() {
    const { error, mapdata, currentPage } = this.state;

    if (error) {
      return this.rerror();
    }
    return (
      <div>
        <table className="table table-bordered table-responsive table-hover table-stripped">
          <thead className="thead-dark">
            <tr>
              <th>Nr.</th>
              <th>Objekto ID</th>
              <th>Ženklas</th>
              <th>Būklė</th>
              <th>Tvarkymo tipas</th>
              <th>Sutvarkyta</th>
              <th>Pastato tipas</th>
              <th>Mikrorajonas</th>
              <th>Adresas</th>
            </tr>
          </thead>
          <tbody>
            {mapdata.features
              .slice(currentPage, currentPage + 20)
              .map((mdata, key) => (
                <Mpdata
                  mdata={mdata}
                  index={key + currentPage}
                  key={mdata.id}
                />
              ))}
          </tbody>
          <tfoot className="d-block">
            <div className="inline-bl">
              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={this.previousPage}
              >
                Ankstesnis
              </button>
            </div>
            <div className="inline-bl">
              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={this.nextPage}
              >
                Sekantis
              </button>
            </div>
          </tfoot>
        </table>
      </div>
    );
  }

  render() {
    if (this.state.loading) {
      return this.rloading();
    } else if (this.state.error) {
      return this.rerror();
    } else if (this.state.mapdata) {
      return this.rshow();
    }
  }
}
