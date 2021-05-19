import React from 'react';
import { AiFillHome, AiOutlineFolderOpen, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaRegHandshake, FaBoxes, FaRegCreditCard, FaRegClipboard, FaTools, FaCashRegister, FaSitemap, FaBook, FaStoreAlt, FaMoneyBill } from 'react-icons/fa'
import { BsGraphUp, BsPeopleFill } from 'react-icons/bs'
import { RiTeamFill,  RiStockFill, RiExchangeFill } from 'react-icons/ri'
import { GiReceiveMoney, GiMeepleGroup } from 'react-icons/gi'
import { BiHistory } from 'react-icons/bi'
import { MdSettings, MdFolderSpecial } from 'react-icons/md'
import { VscReferences } from 'react-icons/vsc'
import { SiManageiq } from 'react-icons/si'
import { ImTarget } from 'react-icons/im'

const iconStyle = {
    color: '#2DAAD6'
}

export const SidebarData = [
    {
        title: 'Home',
        path: '/Sales',
        icon: <AiFillHome style={iconStyle} />,
        cName: 'nav-text'
    },
    {
        title: 'Sell',
        icon: <FaRegHandshake style={iconStyle} />,
        cName: 'nav-text',
        subNav: [
            {
                title: 'Make a Sale',
                path: '/MakeSale',
                icon: <RiExchangeFill style={iconStyle} />,
            },
            {
                title: 'Register',
                path: 'Register',
                icon: <AiOutlineUsergroupAdd style={iconStyle} />,
            },
            {
                title: 'History',
                path: '/History',
                icon: <BiHistory style={iconStyle} />,
            },
            {
                title: 'Cash',
                path: '/Cash',
                icon: <FaCashRegister style={iconStyle} />,
            },
            {
                title: 'Customers',
                path: '/Customers',
                icon: <BsPeopleFill style={iconStyle} />,
            },
            {
                title: 'SellSettings',
                path: '/SellSettings',
                icon: <MdSettings style={iconStyle} />,
            },
        ]    
    },
    {
        title: 'Dashboards',
        path: '/Dashboards',
        icon: <BsGraphUp style={iconStyle} />,
        cName: 'nav-text'
    },
    {
        title: 'Inventory',
        icon: <FaBoxes style={iconStyle} />,
        cName: 'nav-text',
        subNav:[
            {
                title: 'Stock',
                path: '/Stock',
                icon: <FaSitemap style={iconStyle} />,
            },
            {
                title: 'Products',
                path: '/Products',
                icon: <RiStockFill style={iconStyle} />,
            },
            {
                title: 'Catalog',
                path: '/Catalog',
                icon: <FaBook style={iconStyle} />,
            },
            {
                title: 'Promotions',
                path: '/Promotions',
                icon: <MdFolderSpecial style={iconStyle} />,
            },
            {
                title: 'InvSettings',
                path: '/InvSettings',
                icon: <MdSettings style={iconStyle} />,
            },
        ]
    },
    {
        title: 'Payments',

        icon: <FaRegCreditCard style={iconStyle} />,
        cName: 'nav-text',
        subNav:[
            {
                title: 'Finances',
                path: '/Finances',
                con: <FaMoneyBill style={iconStyle} />,
            },
            {
                title: 'Payroll',
                path: '/Payroll',
                con: <GiReceiveMoney style={iconStyle} />,
            },
		]
    },
    {
        title: 'Leads',
        icon: <AiOutlineFolderOpen style={iconStyle} />,
        cName: 'nav-text',

        subNav:[
            {
                title: 'Referrals',
                path: '/Referrals',
                icon: <VscReferences style={iconStyle} />,
            },
            {
                title: 'Management',
                path: '/Management',
                icon: <SiManageiq style={iconStyle} />,
            },
            {
                title: 'LeadSettings',
                path: '/LeadSettings',
                icon: <MdSettings style={iconStyle} />,
            },
        ]
    },
    {
        title: 'Users',
        icon: <RiTeamFill style={iconStyle} />,
        cName: 'nav-text',

        subNav:[
            {
                title: 'Teams',
                path: '/Teams',
                icon: <GiMeepleGroup style={iconStyle} />,
            },
            {
                title: 'Stores',
                path: '/Stores',
                icon: <FaStoreAlt style={iconStyle} />,
            },
            {
                title: 'Targets',
                path: '/Targets',
                icon: <ImTarget style={iconStyle} />,
            },
		]
    },
    {
        title: 'Reporting',
        path: '/',
        icon: <FaRegClipboard style={iconStyle} />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/Settings',
        icon: <FaTools style={iconStyle} />,
        cName: 'nav-text'
    },

]