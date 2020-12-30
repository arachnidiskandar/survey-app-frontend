const primary = { main: '#3f51b5', light: '#757de8', dark: '#002984', contrastText: '#fff' };
const secondary = '#bdbdbd';
const text = {
  title: primary.main,
  body: '#0000',
  button: primary.dark,
  link: primary.main,
  inverse: '#ffffff',
  light: '#616161',
  caption: secondary,
};
const borderColor = '#e1e4e8';
const background = '#f8f8f8';
const error = '#ff0000';

const spacing = (n: number): string => `${n * 5}px`;

export default {
  colors: {
    primary,
    secondary,
    text,
    borderColor,
    background,
    error,
  },
  spacing,
};
