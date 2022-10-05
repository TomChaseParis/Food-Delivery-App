import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import React from 'react';
import DeliveryPic from './assets/img/delivery.png';
import { useEffect } from 'react';
import './App.css';
import BannerName from './components/BannerName';
import Header from './components/Header';
import MenuContainer from './components/MenuContainer';
import SubMenuContainer from './components/SubMenuContainer';
import MenuCard from './components/MenuCard';
import { MenuItems, Items } from './components/Data';

function App() {

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');

    function setMenuActive() {
      menuLi.forEach(n => n.classList.remove('active'));
      this.classList.add('active')
    }
    
    menuLi.forEach(n => n.addEventListener('click', setMenuActive))

    // Menucard Active toggle
    const menuCards = document.querySelector('.rowContainer').querySelectorAll('.rowMenuCard');

    function setMenuCardActive() {
      menuCards.forEach(n => n.classList.remove('active'));
      this.classList.add('active')
    }

    menuCards.forEach(n => n.addEventListener('click', setMenuCardActive))
  }, [])


  return (
    <div className="App">
     {/* Header Section */}
     <Header />

     {/* Main Container */}
     <main>
      <div className='mainContainer'>
        {/* Banner */}
        <div className='banner'>
          <BannerName name={"Tom Chase Paris"} discount={"20"} link={"#"} />
          <img className='deliveryPic' src={DeliveryPic} alt='banner' />
        </div>

        {/* DishContainer */}
        <div className='dishContainer'>
          <div className='menuCard'>
            <SubMenuContainer name={"Menu Category"} />
          </div>
          <div className='rowContainer'>
            {
              MenuItems && MenuItems.map(data => (
                <div key={data.id}>
                <MenuCard imgSrc={data.imgSrc}  name={data.name} isActive = {data.id === 1 ? true : false} />
              </div>   
              ))
            }
          </div>
          <div className='dishitemContainer'></div>
        </div>
      </div>
      <div className='rightMenu'></div>
     </main>

     {/* Bottom Menu */}
     <div className='bottomMenu'>
      <ul id='menu'>
       {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<HomeRounded />} isHome />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Chat />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Settings />}  />

        <div className='indicator'></div>
        </ul>
     </div>
    </div>
  );
}

export default App;
