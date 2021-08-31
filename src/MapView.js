import React, { useRef, useEffect, useState, useCallback } from "react";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { ApiKey } from "@esri/arcgis-rest-auth";
import { request } from "@esri/arcgis-rest-request";
import {
  addFeatures,
  updateFeatures,
  deleteFeatures,
} from "@esri/arcgis-rest-feature-layer";
import { addTempPoint } from "./utils";

import * as data from "./data";

const Map = () => {
  const mapContainer = useRef();
  const view = useRef();
  const map = useRef();
  const graphicsLayer = useRef();
  const [clickPoint, setClickPoint] = useState(null);
  const [tempPoint, setTempPoint] = useState(null);

  console.log("temp", tempPoint);
  //   const {
  //     point,
  //     simpleFillSymbol,
  //     simpleLineSymbol,
  //     simpleMarkerSymbol,
  //     polygon,
  //     polyline,
  //     popupTemplate,
  //     attributes,
  //   } = data;

  const addLayers = () => {
    graphicsLayer.current = new GraphicsLayer();
    map.current.add(graphicsLayer.current);
    const featureLayer = new FeatureLayer({
      url: data.featureServiceLayerUrl,
    });

    map.current.add(featureLayer);
  };

  useEffect(
    () => {
      if (tempPoint !== null) {
        console.log("set null");
        setTempPoint(null)
      } else if (clickPoint !== null) {
        // add temp point here
        graphicsLayer.add(tempPoint);
        setTempPoint(clickPoint);
      }
    }, [clickPoint, tempPoint]);

  useEffect(() => {
  

    console.log("map.currnet", map.current);
    if (typeof map.current === "undefined") {
      map.current = new WebMap({
        basemap: "arcgis-topographic",
      });

      view.current = new MapView({
        container: mapContainer.current,
        map: map.current,
        center: [-110.30512354972593, 40.792249423721735],
        zoom: 13,
      });

      view.current.when(
        () => {
          addLayers();
          view.current.on("click", (event) => {
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
            setClickPoint(point)
          })
        },
        (e) => {
          console.error(e);
        }
      );
    }

    // const pointGraphic = new Graphic({
    //   geometry: point,
    //   symbol: simpleMarkerSymbol,
    // });
    // graphicsLayer.add(pointGraphic);

    // const polylineGraphic = new Graphic({
    //   geometry: polyline,
    //   symbol: simpleLineSymbol,
    // });
    // graphicsLayer.add(polylineGraphic);

    // const polygonGraphic = new Graphic({
    //   geometry: polygon,
    //   symbol: simpleFillSymbol,
    //   attributes,
    //   popupTemplate,
    // });
    // graphicsLayer.add(polygonGraphic);

    // const authentication = new ApiKey({
    //   key: process.env.REACT_APP_API_KEY,
    // });

    // addFeatures({
    //   url: data.featureServiceLayerUrl,
    //   features: [data.featureToAdd],
    //   authentication,
    // }).then(handleAdded);

    // function handleAdded(response) {
    //     console.log('added', response);

    //     if (!response.addResults[0].success) {
    //       // stop early if adding a new feature was not successful
    //       return;
    //     }

    //     const featureToUpdate = {
    //         attributes: {
    //           objectId: response.addResults[0].objectId,
    //           name: 'new name',
    //           rating: '3'
    //         }
    //       };

    //     updateFeatures({
    //         url: data.featureServiceLayerUrl,
    //         features: [featureToUpdate],
    //         authentication
    //       })
    //         .then(handleUpdated);

    // }

    // function handleUpdated(response) {
    //     console.log(response);

    //     if (!response.updateResults[0].success) {
    //       // stop early if updating the feature was not successful
    //       return;
    //     }

    //     // delete the feature using the objectId of the updated feature
    //     const featureToDelete = [response.updateResults[0].objectId];

    //     deleteFeatures({
    //       url: data.featureServiceLayerUrl,
    //       objectIds: [featureToDelete],
    //       authentication
    //     })
    //       .then(handleDeleted);
    //   }

    //   function handleDeleted(response) {
    //     console.log(response);
    //   }

    return () => {
      view.current && view.current.destroy();
      map.current = undefined;
    };
  }, []);

  return (
    <div>
      <h1>hello</h1>
      <div ref={mapContainer} style={{ height: "85vh" }} />
    </div>
  );
};

export default Map;
