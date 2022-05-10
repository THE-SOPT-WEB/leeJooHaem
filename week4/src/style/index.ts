import { DefaultTheme } from "styled-components";

const colors = {
  black: "#373837",
  orange: "#fe8001",
  lightOrange: "#c47600",
};

const theme: DefaultTheme = {
  colors,
  shadow: "box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);",
  center: `display: flex;
  justify-content: center;
  align-items: center;`,
};

export default theme;
