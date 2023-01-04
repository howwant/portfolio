import * as React from 'react'
import GlobalStyles from './scss/globalStyles';
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
      <GlobalStyles />
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
