import React from 'react';
import { Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard_home from './Pages/Dashboard_home';
import History_page from './Pages/History_page';
import Solar_charging_page from './Pages/Solar_charging_page';
import Load_balancer_page from './Pages/Load_balancer_page';
import Settings_page from './Pages/Settings_page';
import Analytics_page from './Pages/Analytics_page';
import Account_settings_page from './Pages/Account_settings_page';
import Error_page from './Pages/Error_page';

const App = () => {
  return (
    <>
      <div className='main_wrapper'>
        <Sidebar />
        <Header />
        <Routes>
          <Route index path="/" element={<Dashboard_home />} />
          <Route path="/History_page" element={<History_page />} />
          <Route path="/Solar_charging_page" element={<Solar_charging_page />} />
          <Route path="/Load_balancer_page" element={<Load_balancer_page />} />
          <Route path="/Analytics_page" element={<Analytics_page />} />
          <Route path="/Settings_page" element={<Settings_page />} />
          <Route path="/Account_settings_page" element={<Account_settings_page />} />
          <Route path="/Error_page" element={<Error_page />} />
          {/* <Route path="*" element={<Error_page />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
