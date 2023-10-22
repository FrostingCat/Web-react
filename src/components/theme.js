import { createTheme } from "@material-ui/core/styles";

const myTheme = createTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#669E9B",
      },
    },
  },
});

export default createTheme(myTheme);