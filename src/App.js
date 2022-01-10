import * as Mui from "./styles/collections";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PostList from "./components/PostList";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "2rem",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline>
        <Mui.Container maxWidth="lg">
          <Mui.AppBar position="static" color="inherit" elevation={0}>
            <Mui.Toolbar>
              <Mui.IconButton edge="start" />
              <Mui.Typography variant="h6" color="secondary">
                <a href="http://localhost:5000/posts">filmAjandam</a>
              </Mui.Typography>
            </Mui.Toolbar>
          </Mui.AppBar>

          <Mui.Grid container>
            <Router>
              <Routes>
                <Route exact path="/posts" component={PostList}></Route>

                <Route path="*" element={<Navigate to="/" />}></Route>
              </Routes>
            </Router>
          </Mui.Grid>
        </Mui.Container>
      </CssBaseline>
    </>
  );
};

export default App;
