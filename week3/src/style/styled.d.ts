import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      orange: string;
      lightOrange: string;
    };
    shadow: string;
    center: string;
  }
}
