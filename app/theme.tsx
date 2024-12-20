import { createTheme } from "@mui/material";

const materialTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 905,
      lg: 1240,
      xl: 1440,
    },
  },
});

export default materialTheme;
