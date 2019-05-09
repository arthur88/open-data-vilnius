import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Sveiki atvykę į Open Vilnius</h1>
        <p>
          Naudojami duomenys:
          <ul>
            <li>
              <a href="/grafity-in-city">Grafičiai mieste</a> -{" "}
              <code>
                https://zemelapiai.vplanas.lt/arcgis/rest/services/Open_Data/Civiline_sauga_OD/MapServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json
              </code>
            </li>
            <li>
              <a href="/dangerous-objects">
                Pavojingi objektai Vilniaus mieste
              </a>{" "}
              -{" "}
              <code>
                https://zemelapiai.vplanas.lt/arcgis/rest/services/Open_Data/Civiline_sauga_OD/MapServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json
              </code>
            </li>
          </ul>
        </p>
      </div>
    );
  }
}
