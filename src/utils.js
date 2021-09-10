import Graphic from "@arcgis/core/Graphic";
import * as data from './data';
import { ApiKey } from "@esri/arcgis-rest-auth";


export const authentication = new ApiKey({
  key: process.env.REACT_APP_API_KEY,
});

export const addTempPoint = (coordinates, graphicsLayer) => {
    const tempPoint = new Graphic({
      geometry: {
        type: "point",
        longitude: coordinates.longitude,
        latitude: coordinates.latitude,
      },
      symbol: data.simpleMarkerSymbol,
    });
    graphicsLayer.add(tempPoint);
    return tempPoint;
  };

  export const removeTempPoint = (tempPoint, graphicsLayer) => {
    graphicsLayer.remove(tempPoint);
  };

  export const pointsRenderer = {
    "type": "simple",
    "symbol": {
      "type": "picture-marker",
      "url": "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
      "width": "18px",
      "height": "18px"
    }
  };

  export const pointsLabels = {
    symbol: {
      type: "text",
      color: "#FFFFFF",
      haloColor: "#5E8D74",
      haloSize: "2px",
      font: {
        size: "12px",
        family: "Noto Sans",
        style: "italic",
        weight: "normal"
      }
    },

    labelPlacement: "above-center",
    labelExpressionInfo: {
      expression: "$feature.name"
    }
  };

  export const popupPoints = {
    "title": "Waypoint",
    "content": "<b>Waypoint:</b> {name}<br><b>Notes:</b> {note}"
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