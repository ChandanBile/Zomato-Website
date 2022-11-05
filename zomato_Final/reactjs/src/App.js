import './App.css';
import React, { useState } from 'react';
import Frontpg from './components/Frontpg';
import Popupmodal from './components/Popupmodal';
import SignUpModal from './components/signUpModal';
const list1 = [{
  id: 1,
  name: 'Bombay High',
  address: 'add1, Mumbai',
  city: 'Mumbai',
  img: '../assets/resCard.png',
  cuisine: 'Breakfast',
  cost: '500'
},
{
  id: 2,
  name: 'Annapurna',
  address: 'add1, Bangalore',
  city: 'Bangalore',
  img: '../assets/resCard.png',
  cuisine: 'Breakfast',
  cost: '500'
},
{
  id: 3,
  name: 'Punjabi Tadka',
  address: 'add1, Delhi',
  city: 'Delhi',
  img: '../assets/resCard.png',
  cuisine: 'Lunch',
  cost: '500'
},
{
  id: 4,
  name: 'Green Kitchen',
  address: 'add1, Kolkata',
  city: 'Kolkata',
  img: '../assets/resCard.png',
  cuisine: 'Lunch',
  cost: '500'
},
{
  id: 5,
  name: 'Thali King',
  address: 'add1, Jaipur',
  city: 'Jaipur',
  img: '../assets/resCard.png',
  cuisine: 'Dinner',
  cost: '500'
}, {
  id: 6,
  name: 'Oberoi',
  address: 'add2, Mumbai',
  city: 'Mumbai',
  img: '../assets/resCard.png',
  cuisine: 'Dinner',
  cost: '500'
}, {
  id: 7,
  name: 'Bhau Misal',
  address: 'add3, Mumbai',
  city: 'Mumbai',
  img: '../assets/resCard.png',
  cuisine: 'Snacks',
  cost: '500'
}]
function App() {
  const [popup, setPopup] = useState(false)
  const [loginPopup, setLoginPopup] = useState(false)
  const [address, setAddress] = useState(null)
  const openPopup = () => {
    setPopup(true)
  }
  const closePopup = () => {
    setPopup(false)
  }
  const openLoginPopup = () => {
    setLoginPopup(true)
    setPopup(false)
  }
  const closeLoginPopup = () => {
    setLoginPopup(false)
    setPopup(true)
  }
  let location = []
  if (address) {
    list1.forEach(list => {
      if (list.city.toLowerCase() === address.toLowerCase()) {
        location.push(list)
      }
    })
  }
  const [username, setUsername] = useState('')
  
  return (
    <>
      <Frontpg openPopup={openPopup} setAddress={setAddress} location={location} restaurantList={list1} username={username} />
      <Popupmodal popup={popup} closePopup={closePopup} openLoginPopup={openLoginPopup} setUsername={setUsername} />
      <SignUpModal popup={loginPopup} closeLoginPopup={closeLoginPopup} />
    </>
  );
}
export default App;
