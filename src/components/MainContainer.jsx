// // import React from 'react';
// // import { Switch, Route } from 'react-router-dom';
// // import Home from './Home';
// // import Projects from './Projects';
// // import About from './About';
// // import Contact from './Contact';

// // const MainContainer = () => {
// //   return (
// //     <div className="flex-1 p-10">
// //       <Switch>
// //         <Route path="/home" component={Home} />
// //         <Route path="/projects" component={Projects} />
// //         <Route path="/about" component={About} />
// //         <Route path="/contact" component={Contact} />
// //         <Route path="/" exact component={Home} />
// //       </Switch>
// //     </div>
// //   );
// // };

// // export default MainContainer;

// import React from 'react';
// import Home from './Home';
// import Projects from './Projects';
// import About from './About';
// import Contact from './Contact';
// import { Routes, Route } from 'react-router-dom'; // Adjusted for React Router v6

// // const MainContainer = () => {
// //   const location = useLocation();
// //   const renderContent = () => {
// //     switch (location.pathname) {
// //       case '/home':
// //         return <Home />;
// //       case '/projects':
// //         return <Projects />;
// //       case '/about':
// //         return <About />;
// //       case '/contact':
// //         return <Contact />;
// //       default:
// //         return <Home />;
// //     }
// //   };

// //   return (
// //     <div className="flex-1 p-10">
// //       {renderContent()}
// //     </div>
// //   );
// // };

// // const MainContainer = () => {
// //   const location = useLocation();

// //   return (
// //     <div className="flex-1 p-10">
// //       <Routes>
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/projects" element={<Projects />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //       </Routes>
// //     </div>
// //   );
// // };

// const MainContainer = () => {
//   return (
//     <div className="flex-1 p-10">
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// };

// export default MainContainer;

// MainContainer.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
// import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const MainContainer = () => {
  return (
    <div className="flex-1 p-10">
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
