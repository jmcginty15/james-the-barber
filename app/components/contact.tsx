import { Map, Marker } from "react-map-gl";

const mapProps = {
  latitude: 36.115202,
  longitude: -97.058219,
  zoom: 17,
};

export default function Contact(props: { token: string }) {
  const { token } = props;

  return (
    <div className="contact">
      <div className="contactContent">
        <h1 className="contactTitle">Contact</h1>
        <h2 className="contactTitle">Location</h2>
        <p className="contactText">609 S Main St</p>
        <p className="contactText">Stillwater, OK 74074</p>
        <h2 className="contactTitle">Call or text</h2>
        <p className="contactText">
          <a className="contactLink" href="tel:4058772059">
            (405) 877-2059
          </a>
        </p>
      </div>
      <div className="contactContent" style={{ height: "100%", width: "100%" }}>
        <Map
          mapboxAccessToken={token}
          initialViewState={mapProps}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker latitude={mapProps.latitude} longitude={mapProps.longitude} />
        </Map>
      </div>
    </div>
  );
}
