import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import  store  from "./redux/Store";
 // import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <App />   
      <Toaster/>  
    </Provider>
  </DndProvider>
</BrowserRouter>
);


