import Graphic from "@arcgis/core/Graphic";
import * as data from './data';

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