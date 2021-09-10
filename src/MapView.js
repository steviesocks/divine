import React, { useRef, useEffect, useState, useCallback } from "react";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// import { ApiKey } from "@esri/arcgis-rest-auth";
// import { request } from "@esri/arcgis-rest-request";
// import {
//   addFeatures,
//   updateFeatures,
//   deleteFeatures,
// } from "@esri/arcgis-rest-feature-layer";
import {
  pointsLabels,
  pointsRenderer,
  popupPoints,
  authentication,
} from "./utils";

import * as data from "./data";

import Popup from "./Popup";
import { Button, Box, Heading } from "grommet";

const Map = () => {
  const mapContainer = useRef();
  const view = useRef();
  const map = useRef();
  const graphicsLayer = useRef();
  const clickPoint = useRef(null);
  const listeners = useRef([]);
  const [showPointEditor, setShowPointEditor] = useState(false);
  const [hasPoint, setHasPoint] = useState(false);

  console.log('view', view.current)

  const removePoint = () => {
    graphicsLayer.current.remove(clickPoint.current);
    clickPoint.current = null;
    setHasPoint(false);
  };

  const handleClick = (event) => {
    // console.log(event);
    if (clickPoint.current === null) {
      const { longitude, latitude } = event.mapPoint;
      const coordinates = { longitude, latitude };
      const point = new Graphic({
        geometry: {
          type: "point",
          longitude: coordinates.longitude,
          latitude: coordinates.latitude,
        },
        symbol: data.simpleMarkerSymbol,
      });
      // console.log("add");
      graphicsLayer.current.add(point);
      clickPoint.current = point;
      setShowPointEditor(true);
      setHasPoint(true);
    } else {
      // console.log("remove");
      removePoint();
    }
  };

  const addLayers = () => {
    graphicsLayer.current = new GraphicsLayer();
    map.current.add(graphicsLayer.current);
    const featureLayer = new FeatureLayer({
      url: data.featureServiceLayerUrl,
      authentication,
      renderer: pointsRenderer,
      labelingInfo: [pointsLabels],
      outFields: ["name", "note"],
      popupTemplate: popupPoints,
    });

    map.current.add(featureLayer);

    console.log(map.current.layers);
  };

  const handleClosePointEditor = () => {
    clickPoint.current !== null && removePoint();
    listeners.current[0].remove();
    listeners.current.pop();
    setShowPointEditor(false);
  };

  const handleOpenPointEditor = () => {
    setShowPointEditor(true);
    const listener = view.current.on("click", handleClick);
    listeners.current.push(listener);
  };

  useEffect(() => {
    console.log("map.current", map.current);
    if (typeof map.current === "undefined") {

      map.current = new WebMap({
        portalItem: {
          id: "32332826c3444113bbc409cf7eaff5d5",
        }
      });

      view.current = new MapView({
        container: mapContainer.current,
        map: map.current,
        center: [-110.30512354972593, 40.792249423721735],
        zoom: 12,
      });

      view.current.when(
        () => {
          addLayers();
        },
        (e) => {
          console.error(e);
        }
      );
    }

    return () => {
      view.current && view.current.destroy();
      map.current = undefined;
    };
  }, []);

  return (
    <div>
      <Box style={{height: "11vh"}}>
        <Heading size="30px" margin={{left: "small"}}>divine</Heading>
      </Box>
      <div style={{ position: "relative" }}>
        <div ref={mapContainer} style={{ height: "89vh" }} />
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            // width: "350px",
          }}
        >
          {showPointEditor ? (
            <Popup
              pointRef={clickPoint}
              featureLayer={view.current.layerViews.items[3]}
              onClose={handleClosePointEditor}
              hasPoint={hasPoint}
            />
          ) : (
            <Box
              background='light-2'
              pad={{ vertical: "small", horizontal: "medium" }}
              elevation='medium'
            >
              <Button
                color='primary'
                label='add a point'
                onClick={handleOpenPointEditor}
              />
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
