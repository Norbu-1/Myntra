import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import { Outlet } from "react-router-dom";
import FetchItem from "../components/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  
  return (
    <div>
      <Header />
      <FetchItem/>
      
      {fetchStatus.currentlyFetching === 'true' ? (
         <LoadingSpinner />
      // Assuming Outlet is a component you want to render when fetching is done
      ) : (
        <Outlet /> 
      )}
     
      <Footer />
    </div>
  );
};

export default App;
