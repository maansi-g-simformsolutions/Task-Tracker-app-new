import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import App from "./App";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh", width: "100%" }}>
        <App />
      </Paper>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
