import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ViewReview } from "./components/ViewReview";
import { SubmitReview } from "./components/SubmitReview";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {RateProfessorForm } from "./components/RateProfessorForm";

function App() {
  const [selectedNav, setSelectedNav] = useState();
  return (
    // <Box height={"100vh"} className="App">
    //   <Navbar height={"20%"} setSelectedNav={setSelectedNav} />
    //   <Box p={4} height={"90%"} bgColor={"orange.200"}>
    //     {selectedNav === "Home" && <Home />}
    //     {selectedNav === "View Review" && <ViewReview />}
    //     {selectedNav === "Submit Review" && <SubmitReview />}
    //   </Box>
    // </Box>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index  element={<Home />} />
          <Route path="/view_review" element={<ViewReview />} />
          <Route path="/submit_review" element={<SubmitReview />} />
          <Route path="/submit_review/rate" element={<RateProfessorForm/>}/>
           
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
