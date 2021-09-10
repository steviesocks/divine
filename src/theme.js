import { normalizeColor } from "grommet/utils";
import { rgba } from "polished";

const grommetTheme = {
  global: {
    colors: {
      "light-2": "#f5f5f5",
      text: {
        light: "rgba(0, 0, 0, 0.87)",
      },
      primary: "#303f9f",
    },
    edgeSize: {
      small: "14px",
    },
    elevation: {
      light: {
        medium:
          "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
      },
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
      color: "green",
    },
  },
  button: {
    border: {
      width: "1px",
      radius: "4px",
    },
    padding: {
      vertical: "8px",
      horizontal: "16px",
    },
    extend: (props) => `
        text-transform: uppercase;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: normal;

        ${
          !props.primary &&
          `
        border-color: ${rgba(
          normalizeColor(props.colorValue, props.theme),
          0.5
        )};
        color: ${normalizeColor(props.colorValue, props.theme)};
        :hover {
        box-shadow: none;
        background-color: ${rgba(
          normalizeColor(props.colorValue, props.theme),
          0.08
        )};
        }
        `
        }
        `,
  },
};

export default grommetTheme;
