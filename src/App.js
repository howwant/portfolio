import * as React from 'react'
import { Reset } from 'styled-reset';
import AboutMe from "./components/aboutMe";
import Contect from "./components/contect";
import FirstPage from "./components/firstPage";
import Layout from "./components/layout/layout";
import Projects from "./components/projects";

function App() {
  return (  
    <React.Fragment>
      <Reset />
      <Layout>
        <FirstPage/>
        <AboutMe/>
        <Projects/>
        <Contect/>
      </Layout>
    </React.Fragment>
  );
}

export default App;
