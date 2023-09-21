import React from 'react'
import Button from '../components/Button'

function Header() {
  return (
    <div className='relative'>
        <img className='w-[100%] sm:hidden' src="/assets/images/homepage/hero-bg-mobile.jpg" alt="" />
        <img className='w-[100%] hidden sm:inline-block md:hidden' src="/assets/images/homepage/hero-bg-mobile@2x.jpg" alt="" />
        <img className='w-[100%] hidden md:inline-block lg:hidden' src="/assets/images/homepage/hero-bg-tablet.jpg" alt="" />
        <img className='w-[100%] hidden lg:inline-block xl:hidden' src="/assets/images/homepage/hero-bg-tablet@2x.jpg" alt="" />
        <img className='w-[100%] hidden xl:inline-block 2xl:hidden' src="/assets/images/homepage/hero-bg-desktop.jpg" alt="" />
        <img className='w-[100%] hidden 2xl:inline-block' src="/assets/images/homepage/hero-bg-desktop@2x.jpg" alt="" />

        <div className="headerContent absolute inset-0 grid place-content-center justify-items-center xl:justify-items-start translate-y-[50px] sm:translate-y-0 xl:-translate-x-[20%]">
            <img src="/assets/icons/logo.svg" alt="" />
            <>
                <h1 className='text-clrWhite font-fw300 text-5xl text-center my-[2rem] xl:text-start xl:text-[7rem]'>Exquisite dining <br/> since 1989</h1>
                <p className='text-clrWhite font-fw400 lg:w-[800px] text-center pb-[2rem] lg:text-[3rem] xl:text-start'>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <Button title={"BOOK A TABLE"}/>
            </>
        </div>

        
    </div>
  )
}

export default Header