import React from 'react'
import * as FaIcons from 'react-icons/fa';

export const SideNavData = [
    // Home button
    {
        title: 'Home',
        path: '',
        icon: <FaIcons.FaHome/>,
    },
    {
        title: 'Sell',
        path: '',
        icon: <FaIcons.FaRegHandshake/>,
        subNav: 
        [
            {
                title: 'Make a Sale',
                path: '',
            },
            {
                title: 'Register',
                path: '',
            },
            {
                title: 'History',
                path: '',
            },
            {
                title: 'Cash',
                path: '',
            },
            {
                title: 'Customers',
                path: '',
            },
            {
                title: 'Settings',
                path: '',
            },
        ]
    },

    {
        title: 'Dashboards',
        path: '',
        icon: <FaIcons.FaChartLine/>,
        subNav: [{}]
    },
    {
        title: 'Inventory',
        path: '',
        icon: <FaIcons.FaBoxes/>,
        subNav: [
            {
                title: 'Stock',
                path: '',
            },
            {
                title: 'Products',
                path: '',
            },
            {
                title: 'Catalog',
                path: '',
            },
            {
                title: 'Promotions',
                path: '',
            },
            {
                title: 'Settings',
                path: '',
            },
        ]
    },
    {
        title: 'Payments',
        path: '',
        icon: <FaIcons.FaRegCreditCard/>,
        subNav: [{}]
    },
    {
        title: 'Leads',
        path: '',
        icon: <FaIcons.FaRegFolderOpen/>,
        subNav: 
        [
            {
                title: 'Referrals',
                path: '',
            },
            {
                title: 'Management',
                path: '',
            },
            {
                title: 'Settings',
                path: '',
            },

        ]
    },
    {
        title: 'Teams',
        path: '',
        icon: <FaIcons.FaUsers/>,
        subNav: [{}]
    },
    {
        title: 'Reporting',
        path: '',
        icon: <FaIcons.FaRegClipboard/>,
        subNav: [{}]
    },
    {
        title: 'Settings',
        path: '',
        icon: <FaIcons.FaTools/>,
        subNav: [{}]
    },

]