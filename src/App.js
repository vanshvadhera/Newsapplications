import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const [progress, setProgress] = useState(10)


  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pagesize="8" country='in' category="General" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pagesize="8" country='in' category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pagesize="8" country='in' category="Business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pagesize="8" country='in' category="Entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pagesize="8" country='in' category="Health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pagesize="8" country='in' category="Science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pagesize="8" country='in' category="Sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pagesize="8" country='in' category="Technology" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;