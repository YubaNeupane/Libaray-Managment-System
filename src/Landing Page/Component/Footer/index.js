import React from 'react';

const FooterPage = () => {
  return (
    <footer style={{ background: 'black' }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        Made by{'  '}
        <a
          style={{ color: 'red' }}
          href="https://github.com/YubaNeupane/Libaray-Managment-System"
        >
          Team 6
        </a>
        <br />
        <br />
        SWENG 411
        <br />
        Super Library Management
      </div>
    </footer>
  );
};

export default FooterPage;
