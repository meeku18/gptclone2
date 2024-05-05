"use client"
import React, { useState } from 'react';

const ProfileMenu = ({email}:{email:string|undefined}) => {


  return (
    <div className="relative pl-2">
      <div className='flex bg-btn-background hover:bg-btn-background-hover'>
        <div className='flex flex-col justify-center '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[24px] h-[24px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
        <button className=" text-white px-4 py-2 rounded-sm focus:outline-none">{email?email.substring(0,12):"user1"}</button>
      </div>
    </div>
  );
};

export default ProfileMenu;
