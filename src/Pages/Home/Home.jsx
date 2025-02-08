import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = () => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);

  return (
    <div className="home">
      {/* Sidebar Component */}
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />

      {/* Main Content Area */}
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <button className="toggle-btn" onClick={() => setSidebar(!sidebar)}>
          {sidebar ? "Hide Sidebar" : "Show Sidebar"}
        </button>
        <Feed category={category} />
      </div>
    </div>
  );
}

export default Home;

