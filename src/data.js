export const popupTemplate = {
  title: "{Name}",
  content: "{Description}",
};
export const attributes = {
  Name: "Graphic",
  Description: "I am a polygon",
};

export const point = {
  type: "point",
  longitude: -110.30512354972593,
  latitude: 40.792249423721735,
};

export const simpleMarkerSymbol = {
  type: "simple-marker",
  color: [226, 119, 40], // Orange
  outline: {
    color: [255, 255, 255], // White
    width: 1,
  },
};

export const polyline = {
  type: "polyline",
  paths: [
    [-110.30461, 40.79194], //Longitude, latitude
    [-110.30158, 40.79258], //Longitude, latitude
    [-110.29881, 40.79104],
    [-110.29646, 40.78815],
    [-110.29454, 40.78815], //Longitude, latitude
  ],
};
export const simpleLineSymbol = {
  type: "simple-line",
  color: [226, 119, 40], // Orange
  width: 2,
};

export const simpleFillSymbol = {
  type: "simple-fill",
  color: [227, 139, 79, 0.3], // Orange, opacity 80%
  outline: {
    color: [255, 255, 255],
    width: 1,
  },
};

export const polygon = {
  type: "polygon",
  rings: [
    [-110.30461, 40.79194], //Longitude, latitude
    [-110.30158, 40.79258], //Longitude, latitude
    [-110.29881, 40.79104],
    [-110.29646, 40.78815],
    [-110.29454, 40.78815],
  ],
};

export const featureServiceLayerUrl = "https://services3.arcgis.com/cVS7R33dvMF3bt2i/arcgis/rest/services/my_points/FeatureServer/0";

export const featureToAdd = {
    attributes: {
      id: 101,
      name: 'editing test',
      rating: '2'
    },
    geometry: {
      x: -118.807,
      y: 34.002,
      spatialReference: {
        wkid: 4326
      }
    }
  };
