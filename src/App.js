// import {  Routes, Route } from "react-router-dom";
// // import demoS from './redux/demoSlice';
// import PostDetails from "./Components/PostDetails";
// import CardComponent from "./Components/CardComponent";

// function App() {
//   return (
//     <div className="App">
      
//         <Routes>
//           <Route path="/" element={ <CardComponent/>} />
//           <Route path="/post/:id" element={<PostDetails/>}/>
//         </Routes>
      
//     </div>
//   );
// }
// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardComponent from "./Components/CardComponent";
import PostDetails from "./Components/PostDetails";

function App() {
  return (
    <div className="container mx-auto mt-5">
      <Router>
        <Routes>
          <Route path="/" element={<CardComponent />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

