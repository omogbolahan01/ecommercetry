import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Terms from "./pages/Terms";
import Catalogue from "./pages/Catalogue";
import CatalogueDetail from "./pages/CatalogueDetail";
// import CatalogueDetail from "./pages/CatalogueDetail";
import "/server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/catalogues/:id" element={<CatalogueDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/terms" element={<Terms/>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
