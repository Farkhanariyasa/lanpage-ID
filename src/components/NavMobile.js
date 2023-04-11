import React from 'react';
import { useState } from 'react';

// import navigation data
import { navigationData } from '../data';

const NavMobile = (props) => {
  return (
    <ul className='flex flex-col px-6 py-8 h-full gap-y-4 bg-primary'>
      {navigationData.map((item, index) => {
        return (
          <li key={index} >
            <a className='text-white' href={item.href} onClick={() => props.mobile(false)}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
