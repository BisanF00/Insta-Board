import "./App.css";
import Layout from "./components/Layout";
import LikedUsers from "./components/LikedUsers";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Team from "./components/Team/Team";
import TeamDetails from "./components/Team/TeamDetails/TeamDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/team"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />
          <Route
            path="/team/:id"
            element={
              <Layout>
                <TeamDetails />
              </Layout>
            }
          />
          <Route
            path="/liked-users"
            element={
              <Layout>
                <LikedUsers />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
