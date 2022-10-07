import React from 'react';
import { useEffect } from 'react';
import {} from '@mui/material';
import { BarChart, SearchRounded, ShoppingCart, ShoppingCartRounded } from '@mui/icons-material';

function Header() {

    useEffect(() => {
        const toggleIcon = document.querySelector(".toggleMenu");
        toggleIcon.addEventListener("click", () => {
          document.querySelector(".rightMenu").classList.toggle("active");
        });
        console.log('CLICK')
    }, []);
    

  return (
    <header>
        <img className='logo' src='https://img.freepik.com/premium-vector/burger-logo-vector-art-design_260747-248.jpg?w=2000' />
        <div className='inputBox'>
            <SearchRounded className='searchIcon' />
            <input type="text" placeholder='Search' />
        </div>

        <div className="shoppingCart">
            <ShoppingCartRounded className='cart' />
            <div className="cart_content">
                <p>2 </p>
            </div>
        </div>

        <div className="profileContainer">
            <div className="imgBox">
                <img className='profilePic' src="data:image/png;base64,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" alt="" />
            </div>

            <h2 className="userName">Tom Paris Chase</h2>
        </div>

        <div className="toggleMenu">
            <BarChart className='toggleIcon' />
        </div>
    </header>
  )
}

export default Header
