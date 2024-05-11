import React from 'react'
import { Routes, Route } from "react-router-dom"
// import Administrator from './components/administrator/Administrator.jsx'
import Dashboard from './components/administrator/Dashboard.jsx'
import SideBar from './components/administrator/SideBar.jsx'
// import SearchBar from './components/administrator/SearchBar.jsx'
import ThemeProvider from './components/administrator/Theme.jsx'
import MyCalendar from './components/administrator/Calendar.jsx'
import { UpdateTheme,UseTheme } from "./components/administrator/Theme.jsx";
import ContactInformation from './components/administrator/ContactInformation.jsx'
import Item from './components/administrator/Item.jsx'
import Form from './components/administrator/Form.jsx'
import TeamTable from './components/administrator/TeamTable.jsx'
import TopNav from './components/administrator/TopNav.jsx'


function App () {
  const darkTheme=UseTheme() //usetheme hook
  const toggleColor=UpdateTheme() //button hook
  //create the themes
  const ThemeStyles={
    backgroundColor:darkTheme?"rgb(10,10,30)":"rgb(240,250,250)",
    color:darkTheme?"rgb(230,220,220)":"rgb(10,10,30)",
    
  }
  return (

    <div className="app overflow-hidden" style={ThemeStyles}>
      <SideBar/>
    <main className="content">
      <TopNav toggleColor={toggleColor} darkTheme={darkTheme}/> 
      {/* Routes */}
      <Routes>
       
       
        <Route path="/Team" element={<TeamTable/>}/>
        <Route path="/ThemeProvider" element={<ThemeProvider ThemeStyles={ThemeStyles} />}/>
       
        <Route path="/Profile" element={<Form ThemeStyles={ThemeStyles} />}/>
        <Route path="/" element={<Dashboard ThemeStyles={ThemeStyles}/>}/>
        <Route path="/Calendar" element={<MyCalendar/>}/>
        <Route path="/Item" element={<Item ThemeStyles={ThemeStyles}/>}/>
        <Route path="/Profile" element={<Form />}/>
        <Route path="/Contacts" element={<ContactInformation ThemeStyles={ThemeStyles} />}/>
      </Routes> 
      </main>
     
     </div>

  
  )
}

export default App;