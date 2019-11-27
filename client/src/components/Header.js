

import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
      <nav class="navbar navbar-expand-lg ">
          <Link class="navbar-brand" to="/">Omnia FullStack  Customer</Link>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li class="nav-item active">
                      <Link to="/presenters" class="nav-link">
                          Customer <span class="sr-only">(current)</span>
                      </Link>
                  </li>

                  <li class="nav-item">
                      <Link to="/presenters/add" class="nav-link" href="#">
                          Add Customer
                </Link>
                
                  </li>
                  
                 
              </ul>
          </div>
      </nav>
  )
}

export default Header
