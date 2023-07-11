import React from "react"

const Header = () => {
  return (
    <div>
          <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                      <a class="navbar-brand" href="/">School Management App</a>
                              <ul class="navbar-nav ml-auto">
                                   <li class="nav-item">
                                         <a class="nav-link" href="/contact">Contact</a>
                                  </li>
                                  <li class="nav-item">
                                         <a class="nav-link" href="/about">About Us</a>
                                    </li>
                                </ul>
                    </div>
            </nav>
    </div>
  )
}

export default Header