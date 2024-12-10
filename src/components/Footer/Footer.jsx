import React from 'react';
import Logo from '../../assets/logo-white.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const navigate = useNavigate();

  const homeButton = () => {
    navigate('/')
  }
  return (
    <section className='footer'>
      <div className="footer-content">
        <div className="footer-logo">
            <img src={Logo} alt="logo" onClick={homeButton} style={{cursor: "pointer"}}/>
        </div>
        <div className='ul'>
        <li onClick={homeButton} style={{ cursor: "pointer" }}>
            Home
          </li>
          <li>
            <HashLink to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink to="/#participation">Participation</HashLink>
          </li>
          <li>
            <NavLink to='/register'>Register</NavLink>
          </li>
            <li><a href="https://bluesapphirehub.com/" target='_blank' rel="noreferrer">Blue Sapphire Hub</a></li>
        </div>
        <p>At Innovate North, we believe that a brighter future for our communities starts with your ideas. Together, we can revolutionize agriculture, education, healthcare and security by harnessing the power of technology.</p>
      </div>
      <div className="footer-base">
        <div className="left-base"></div>
        <div className="social-links">
            <div className="social-content">
                <a href="https://www.facebook.com/Bluesapphirehub?mibextid=ZbWKwL" target='_blank' rel="noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_14_163)">
                    <path d="M9.78669 19V12.4308H7.99976V10.0656H9.78669V8.04535C9.78669 6.45785 10.8422 5 13.2745 5C14.2592 5 14.9874 5.09177 14.9874 5.09177L14.93 7.30049C14.93 7.30049 14.1874 7.29347 13.377 7.29347C12.4999 7.29347 12.3594 7.68638 12.3594 8.33851V10.0656H14.9998L14.8849 12.4308H12.3594V19H9.78669Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_14_163">
                    <rect width="7" height="14" fill="white" transform="translate(7.99974 5)"/>
                    </clipPath>
                    </defs>
                </svg>
                </a>
                <a href="https://x.com/bluesapphirehub?s=11&t=AXIOF-haeOi0RivRIN1tNw" target='_blank' rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_14_159)">
                    <path d="M20.9998 6.7049C20.3258 6.98937 19.6109 7.1761 18.8788 7.25887C19.6413 6.82346 20.2268 6.13398 20.5025 5.31247C19.7776 5.72228 18.9845 6.01101 18.1575 6.1662C17.4839 5.48248 16.5242 5.05518 15.4619 5.05518C13.4225 5.05518 11.7689 6.63041 11.7689 8.57326C11.7689 8.84904 11.8016 9.11752 11.8646 9.37508C8.79541 9.22831 6.07432 7.82771 4.25287 5.69918C3.93506 6.21878 3.75295 6.82319 3.75295 7.46786C3.75295 8.68848 4.40496 9.76527 5.3958 10.3962C4.80936 10.3787 4.23582 10.2278 3.72307 9.95611C3.72286 9.97085 3.72286 9.98559 3.72286 10.0004C3.72286 11.705 4.99579 13.1269 6.68512 13.4501C6.14131 13.591 5.5709 13.6117 5.01745 13.5104C5.48735 14.9082 6.8512 15.9253 8.46712 15.9537C7.20325 16.8973 5.61089 17.4598 3.88078 17.4598C3.58265 17.4598 3.28875 17.4431 2.99983 17.4106C4.63411 18.4088 6.57522 18.9913 8.66069 18.9913C15.4534 18.9913 19.1678 13.6303 19.1678 8.98127C19.1678 8.82868 19.1643 8.67695 19.1571 8.5261C19.8801 8.02819 20.5041 7.41147 20.9998 6.7049Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_14_159">
                    <rect width="18" height="14" fill="white" transform="translate(2.99983 5)"/>
                    </clipPath>
                    </defs>
                </svg>
                </a>
                <a href="https://www.linkedin.com/company/blue-sapphire-hub/" target='_blank' rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_14_155)">
                    <path d="M7.63281 19V8.87953H4.20251V19H7.63281ZM5.9181 7.49692C7.11431 7.49692 7.85889 6.71978 7.85889 5.74862C7.8366 4.75556 7.11436 4 5.9408 4C4.76743 4 4.00012 4.75558 4.00012 5.74862C4.00012 6.71983 4.74452 7.49692 5.89571 7.49692H5.918H5.9181ZM9.53147 19H12.9618V13.3482C12.9618 13.0458 12.9841 12.7436 13.0746 12.5274C13.3226 11.923 13.8871 11.2971 14.8346 11.2971C16.0759 11.2971 16.5725 12.2252 16.5725 13.5857V18.9999H20.0026V13.1969C20.0026 10.0883 18.3103 8.64193 16.0533 8.64193C14.2028 8.64193 13.3903 9.65626 12.939 10.3471H12.9619V8.87932H9.53155C9.57657 9.82897 9.53155 18.9998 9.53155 18.9998L9.53147 19Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_14_155">
                    <rect width="16" height="15" fill="white" transform="translate(4.00012 4)"/>
                    </clipPath>
                    </defs>
                </svg>
                </a>
                <a href="https://www.instagram.com/bluesapphirehub" target='_blank' rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_14_151)">
                    <path d="M12.0037 7.95683C9.73225 7.95683 7.90011 9.76035 7.90011 11.9963C7.90011 14.2322 9.73225 16.0357 12.0037 16.0357C14.2751 16.0357 16.1073 14.2322 16.1073 11.9963C16.1073 9.76035 14.2751 7.95683 12.0037 7.95683ZM12.0037 14.6225C10.5358 14.6225 9.33583 13.4447 9.33583 11.9963C9.33583 10.5478 10.5323 9.37011 12.0037 9.37011C13.4751 9.37011 14.6715 10.5478 14.6715 11.9963C14.6715 13.4447 13.4715 14.6225 12.0037 14.6225ZM17.2322 7.7916C17.2322 8.31543 16.8037 8.73379 16.2751 8.73379C15.743 8.73379 15.318 8.31191 15.318 7.7916C15.318 7.27129 15.7465 6.84941 16.2751 6.84941C16.8037 6.84941 17.2322 7.27129 17.2322 7.7916ZM19.9501 8.74785C19.8894 7.48574 19.5965 6.36777 18.6572 5.44668C17.7215 4.52559 16.5858 4.2373 15.3037 4.17402C13.9823 4.1002 10.0215 4.1002 8.70011 4.17402C7.42154 4.23379 6.28583 4.52207 5.34654 5.44316C4.40726 6.36426 4.11797 7.48222 4.05369 8.74433C3.97869 10.0451 3.97869 13.9439 4.05369 15.2447C4.1144 16.5068 4.40726 17.6248 5.34654 18.5459C6.28583 19.467 7.41797 19.7553 8.70011 19.8185C10.0215 19.8924 13.9823 19.8924 15.3037 19.8185C16.5858 19.7588 17.7215 19.4705 18.6572 18.5459C19.593 17.6248 19.8858 16.5068 19.9501 15.2447C20.0251 13.9439 20.0251 10.0486 19.9501 8.74785ZM18.243 16.6404C17.9644 17.3295 17.4251 17.8603 16.7215 18.1381C15.668 18.5494 13.168 18.4545 12.0037 18.4545C10.8394 18.4545 8.33583 18.5459 7.28583 18.1381C6.58583 17.8639 6.04654 17.333 5.7644 16.6404C5.34654 15.6033 5.44297 13.1424 5.44297 11.9963C5.44297 10.8502 5.35011 8.38574 5.7644 7.35215C6.04297 6.66308 6.58226 6.13223 7.28583 5.85449C8.3394 5.44316 10.8394 5.53809 12.0037 5.53809C13.168 5.53809 15.6715 5.44668 16.7215 5.85449C17.4215 6.12871 17.9608 6.65957 18.243 7.35215C18.6608 8.38926 18.5644 10.8502 18.5644 11.9963C18.5644 13.1424 18.6608 15.6068 18.243 16.6404Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_14_151">
                    <rect width="16" height="18" fill="white" transform="translate(4.00012 3)"/>
                    </clipPath>
                    </defs>
                </svg>
                </a>
            </div>
        </div>
        <div className="right-base"></div>
      </div>
    </section>
  )
}

export default Footer;
