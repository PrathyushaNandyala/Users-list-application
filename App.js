
import React from 'react'
import UserProfile from './components/UserProfile/index'


const UserDetails={
  imageUrl:"https://img.freepik.com/premium-photo/formal-casual-fashion-style-stylish-woman-hold-notebook-girl-follow-dress-code-confident-businesswoman-with-laptop-elegant-smiling-woman-jacket-online-office-worker_474717-3233.jpg",
  name:"Prathyusha",
  role:'Frontend Developer'
}


const App = () => 

    
      <UserProfile UserDetails={UserDetails}/>


export default App
