import * as React from 'react'
import { Reset } from 'styled-reset';
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
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
        <Contact/>
      </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
