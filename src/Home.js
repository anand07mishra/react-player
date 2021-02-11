import { Typography } from 'antd';
import React from 'react';
const { Title } = Typography;
var dataLayer = window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
//gtag('userEmail',new Date()​​);
//gtag('config', 'G-X2JYJZ00LL');
gtag('config', 'UA-187122323-1');
export default function Home() {
    return (
        <div>
            <Title>Home</Title>
        </div>
    )
   
}
