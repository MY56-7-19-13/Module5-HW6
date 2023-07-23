import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {routes as appRoutes} from "./routes"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
        <Layout>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
        </Layout>
        </Router>
      </ThemeProvider>
  );
}

export default App;
