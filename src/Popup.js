import React, { useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  Paragraph,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import * as data from "./data";
import { authentication } from "./utils";
import { v4 as uuidv4 } from "uuid";

import {
  addFeatures,
  // updateFeatures,
  deleteFeatures,
} from "@esri/arcgis-rest-feature-layer";

const Popup = ({ pointRef, featureLayer, onClose, hasPoint }) => {
  const [values, setValues] = useState({});

  const point = pointRef.current;

  // console.log("values", values);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("submit", values);

    const featureToAdd = {
      attributes: {
        id: uuidv4(),
        name: values.name,
        note: values.note,
      },
      geometry: {
        x: point.geometry.longitude,
        y: point.geometry.latitude,
        spatialReference: {
          wkid: 4326,
        },
      },
    };

    console.log(featureToAdd);

    addFeatures({
      url: data.featureServiceLayerUrl,
      features: [featureToAdd],
      authentication,
    }).then(handleAdded);

    function handleAdded(response) {
      console.log("added", response);
      if (response.addResults[0].success) {
        featureLayer.refresh();
        onClose();
      }
    }

    // for (let i = 14; i < 71; i++) {

    //   deleteFeatures({
    //         url: data.featureServiceLayerUrl,
    //         objectIds: [i],
    //         authentication
    //       })
    //         .then(handleDeleted);

    //     function handleDeleted(response) {
    //       console.log(response);
    //     }
    // }
  };

  return (
    <Box
      style={{
        width: "350px",
      }}
      tag='header'
      direction='column'
      align='center'
      justify='between'
      background='light-2'
      pad={{ vertical: "small", horizontal: "medium" }}
      elevation='medium'
    >
      <Heading size="20px">Add a point</Heading>
      <Paragraph size="small" >click on the map to add a waypoint</Paragraph>
      <Form
        value={values}
        onChange={(nextValue) => setValues(nextValue)}
        onReset={() => setValues({})}
        onSubmit={handleSubmit}
        style={{ width: "250px" }}
      >
        <FormField name='name' htmlFor='name-input' required>
          <TextInput
            id='name-input'
            placeholder='new point'
            size='medium'
            name='name'
            value={values.name || ""}
          />
        </FormField>
        <FormField name='note' htmlFor='note-input'>
          <TextArea
            id='note-input'
            placeholder='add a note'
            name='note'
            value={values.note || ""}
            resize={false}
          />
        </FormField>
        <Box direction='row' gap='medium' justify='center'>
          <Button color='primary' label='save' type='submit' disabled={!hasPoint} />
          <Button
            color='primary'
            label='cancel'
            type='reset'
            onClick={onClose}
          />
        </Box>
      </Form>
      <Box pad='medium'>
        { hasPoint && (
          <Text size='small' textAlign='center'>
            {`Coordinates: ${point.geometry.latitude.toFixed(
              6
            )}, ${point.geometry.longitude.toFixed(6)}`}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Popup;
