import React from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UIElements from "./pages/UIElements";
import Components from "./pages/Components";
import FormsStuff from "./pages/FormsStuff";
import DataTable from "./pages/DataTable";
import Icons from "./pages/Icons";
import SamplePage from "./pages/SamplePage";
import Extra from "./pages/Extra";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uielements" element={<UIElements />} />
        <Route path="/components" element={<Components />} />
        <Route path="/formsstuff" element={<FormsStuff />} />
        <Route path="/datatable" element={<DataTable />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/samplepage" element={<SamplePage />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </Router>
  );
};

export default App;
