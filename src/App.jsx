import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  const [category, setCategory] = useState(null);

  return (
    <div>
      <Navbar />
      <Sidebar category={category} setCategory={setCategory} />
      {/* You can render your route components here if necessary, but 
          RouterProvider is already used at the root level */}
    </div>
  );
};

export default App;

//passing these function in sidebar.jsx and navbar.jsx

// yha jaise sidebar to uss compone nt me uss sidrbar ko prop ki tarah bhejdia 


// prop thode change kre dekhlena concept same hi hai 


