import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      grey: string;

      background: string;
      color: string;
    };
  }
}
