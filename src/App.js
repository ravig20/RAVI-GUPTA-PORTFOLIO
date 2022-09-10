import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary'
import Loder from "./components/loading/loding";
import ErrorFallback from "./components/errorboundary/Errorboundry";
 const Home = lazy(()=>import ("./routes/Home")); ;
  const About =  lazy(()=>import ("./routes/About"))
 const Contact= lazy(()=>import("./routes/Contact"))
 const Projects = lazy(()=>import ("./routes/Projects"));
  


function App() {
  return (
    <BrowserRouter>
    <ErrorBoundary FallbackComponent={<ErrorFallback />}>
    <Suspense fallback={<Loder/>}>
    <Routes>     
      <Route index  path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/project" element={<Projects />} />
    </Routes>
    </Suspense>
    </ErrorBoundary>
   
  </BrowserRouter>
  );
}

export default App;
