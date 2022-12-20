import * as React from 'react'
import { Reset } from 'styled-reset';
import AboutMe from "./components/aboutMe";
import Contect from "./components/contect";
import FirstPage from "./components/firstPage";
import Layout from "./components/layout/layout";
import Projects from "./components/projects/projects";
import { ThemeProvider} from "./api/themeProvider";

function App() {
  return (  
    <React.Fragment>
    <ThemeProvider>
      <Reset/>
      <Layout>
        <FirstPage/>
        <AboutMe/>
        <Projects/>
        <Contect/>
      </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
