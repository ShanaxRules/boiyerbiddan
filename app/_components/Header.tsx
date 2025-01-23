"use client"
import React, { useState } from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { UserButton, useUser } from '@clerk/nextjs';

function Header() {

    const {user , isSignedIn} = useUser()

    const MenuList = [
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Create story',
            path:'/create-story'
        },
        {
            name:'Explore',
            path:'/explore'
        },
        {
            name:'Contact Us',
            path:'/contact-us'
        }
    ]

    const [isMenuOpen , setIsMenuOpen] = useState(false);


  return (
    <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify='start'>
            <NavbarMenuToggle
            aria-label={isMenuOpen? "Close menu" : "Open menu"}
            className='sm:hidden'
            >
                
            </NavbarMenuToggle>
            <NavbarBrand>
                <Image src={'/logo.svg'} alt='logo' width={40} height={40}></Image>
                <h2 className='font-bold text-3xl text-primary ml-3'>বইয়ের বিদ্বান</h2>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify='center' className='hidden sm:flex' >
            {MenuList.map((item , index)=>(
                <NavbarItem key={index} className='text-xl text-primary font-medium hover:text-blue-50 mx-2'>
                    <Link key={index} href={item.path}>
                    {item.name}
                    
                    </Link>
                </NavbarItem>
            ))}

        </NavbarContent>

        <NavbarContent justify='end'>
            <Link href={'/dashboard'}><Button color='primary'>
                {
                    isSignedIn? 'Dashboard' : 'Get Started'
                }
                
                </Button></Link>
            
                <UserButton></UserButton>
        </NavbarContent>
        <NavbarMenu>
            {MenuList.map((item , index)=>(
                <NavbarMenuItem key={index}>
                    <Link href={item.path}>
                        {item.name}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    </Navbar>
  )
}

export default Header