import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import React from 'react';
import DeliveryPic from './assets/img/delivery.png';
import { useState, useEffect } from 'react';
import './App.css';
import BannerName from './components/BannerName';
import Header from './components/Header';
import MenuContainer from './components/MenuContainer';
import SubMenuContainer from './components/SubMenuContainer';
import MenuCard from './components/MenuCard';
import { MenuItems, Items } from './components/Data';
import ItemCard from './components/ItemCard';
import DebitCard from './components/DebitCard';
import CartItem from './components/CartItem';

function App() {

  // Main Dish State 
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );

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
  }, [isMainData]);

  // set main dish items on filter
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId)
    )
  }

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
            <SubMenuContainer name={'Menu Category'} />
          </div>
          <div className='rowContainer'>
            {
              MenuItems && MenuItems.map((data => (
                <div key={data.id} onClick = { () => setData(data.itemId  ) }>
                <MenuCard 
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive = {data.id === 1 ? true : false} />
              </div>   
              )))
            }
          </div>


          {/* dishitemContainer */}
          <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId= {data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
        </div>
      </div>


      {/* DebitCardContainer */}
      <div className='rightMenu'>
        <div className='debitCardContainer'>
          <div className='debitCard'>
              <DebitCard />
          </div>
        </div>
        <div className='cartCheckOutContainer'>
          <div className='cartCoontainer'>
            <SubMenuContainer name={"Carts Items"} />


            {/* cartItem  */}      
            <div className='cartItems'>
              <CartItem
                name={'Burger Bistro'}
                imgSrc={'https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0'}
                qty={'4'}
                price={'7.95'}
              /> 
            </div>

            <div className='totalSection'>
              <h3>Total</h3>
              <p><span>$ </span>45.0</p>
            </div>

            <button className='checkOut'>Check Out</button>
          </div>
        </div>
      </div>
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
