import React from 'react';
import { AiFillHome, AiOutlineFolderOpen, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaRegHandshake, FaBoxes, FaRegCreditCard, FaRegClipboard, FaTools, FaCashRegister, FaSitemap, FaBook } from 'react-icons/fa'
import { BsGraphUp, BsPeopleFill } from 'react-icons/bs'
import { RiTeamFill, RiArrowUpSFill, RiArrowDownSFill, RiStockFill, RiExchangeFill } from 'react-icons/ri'
import { GrCatalog } from 'react-icons/gr'
import { BiHistory } from 'react-icons/bi'
import { MdSettings, MdFolderSpecial } from 'react-icons/md'
import { VscReferences } from 'react-icons/vsc'
import { SiManageiq } from 'react-icons/si'

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
        iconClosed:<RiArrowUpSFill style={iconStyle} />,
        iconOpened:<RiArrowDownSFill style={iconStyle} />,
        subNav: [
            {
                title: 'Make a Sale',
                path: '/Sell/MakeSale',
                icon: <RiExchangeFill style={iconStyle} />,
            },
            {
                title: 'Register',
                path: '/Sell/Register',
                icon: <AiOutlineUsergroupAdd style={iconStyle} />,
            },
            {
                title: 'History',
                path: '/Sell/History',
                icon: <BiHistory style={iconStyle} />,
            },
            {
                title: 'Cash',
                path: '/Sell/Cash',
                icon: <FaCashRegister style={iconStyle} />,
            },
            {
                title: 'Customers',
                path: '/Sell/Customers',
                icon: <BsPeopleFill style={iconStyle} />,
            },
            {
                title: 'SellSettings',
                path: '/Sell/SellSettings',
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
        iconClosed:<RiArrowUpSFill style={iconStyle} />,
        iconOpened:<RiArrowDownSFill style={iconStyle} />,
        subNav:[
            {
                title: 'Stock',
                path: '/Inventory/Stock',
                icon: <FaSitemap style={iconStyle} />,
            },
            {
                title: 'Products',
                path: '/Inventory/Products',
                icon: <RiStockFill style={iconStyle} />,
            },
            {
                title: 'Catalog',
                path: '/Inventory/Catalog',
                icon: <FaBook style={iconStyle} />,
            },
            {
                title: 'Promotions',
                path: '/Inventory/Promotions',
                icon: <MdFolderSpecial style={iconStyle} />,
            },
            {
                title: 'InvSettings',
                path: '/Inventory/InvSettings',
                icon: <MdSettings style={iconStyle} />,
            },
        ]
    },
    {
        title: 'Payments',
        path: '/Payments',
        icon: <FaRegCreditCard style={iconStyle} />,
        cName: 'nav-text'
    },
    {
        title: 'Leads',
        icon: <AiOutlineFolderOpen style={iconStyle} />,
        cName: 'nav-text',
        iconClosed:<RiArrowUpSFill style={iconStyle} />,
        iconOpened:<RiArrowDownSFill style={iconStyle} />,
        subNav:[
            {
                title: 'Referrals',
                path: '/Leads/Referrals',
                icon: <VscReferences style={iconStyle} />,
            },
            {
                title: 'Management',
                path: '/Leads/Management',
                icon: <SiManageiq style={iconStyle} />,
            },
            {
                title: 'LeadSettings',
                path: '/Leads/LeadSettings',
                icon: <MdSettings style={iconStyle} />,
            },
        ]
    },
    {
        title: 'Teams',
        path: '/Teams',
        icon: <RiTeamFill style={iconStyle} />,
        cName: 'nav-text'
    },
    {
        title: 'Reporting',
        path: '/Reporting',
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