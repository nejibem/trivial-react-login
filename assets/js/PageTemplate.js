import React from 'react';

const PageTemplate = ({ children }) => (
  <div class="page-container">
    <div className="content-wrap">
      <div class="container">
        {children}
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <p>Some App &copy; 2019</p>
      </div>
    </footer>
  </div>
);

export default PageTemplate;