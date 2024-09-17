import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeaderBoard from "./pages/LeaderBoard";
import Home from "./pages/Home"; 
import UserDetail from "./pages/UserDetail";
import users from "./data/users";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCloseUserDetail = () => {
    setSelectedUser(null); 
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/leader-board" 
          element={
            <>
              <LeaderBoard users={users} setSelectedUser={setSelectedUser} />
              {selectedUser && (
                <UserDetail 
                  user={selectedUser} 
                  onClose={handleCloseUserDetail} 
                />
              )}
            </>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
