import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Popular } from './components/Popular';
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import { GlobalProvider } from './context/GlobalState';

import "./lib/font-awesome/css/all.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>

  )
}

export default App
