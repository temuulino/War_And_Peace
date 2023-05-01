import React, { useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF
} from "@react-google-maps/api";
import { Carousel } from "react-responsive-carousel";
// import Carousel from "react-bootstrap/Carousel";
import MapData from "./Data/MapData";
import { createPath } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css"

function CharMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBzUaTnWacRTYyYzE9ifdtSg7d1D-rUXBQ"
  });

  if (!isLoaded) return <h1 className="map-loading">Loading...</h1>;
  return <Map />;
}

function Map() {
  return (
    <div>
      <Carousel set showThumbs={false}>
        {MapData.map((data) => (
          <div>
            {/* {console.log("Running this time")} */}
            <h1 style={{ color: "white" }}>{data.streetName}</h1>
            <GoogleMap
              zoom={13}
              center={{ lat: data.lat, lng: data.long }}
              mapContainerClassName="map-container"
            >
              <MarkerF position={{ lat: data.lat, lng: data.long }} />
            </GoogleMap>
            <h1>test</h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CharMap;
