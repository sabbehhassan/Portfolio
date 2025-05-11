import React, { useState } from "react";
import Layout from "./components/Layout";
import './index.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default App;
