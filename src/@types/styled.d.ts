/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: string;
      background: string;
      borderColor: string;
      error: string;
    };
    spacing: function;
  }
}
