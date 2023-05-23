import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "antd/dist/reset.css";

import ChatBot from "./components/chatbot";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ChatBot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
