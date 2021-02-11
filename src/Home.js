import { Typography } from 'antd';
import React from 'react';
const { Title } = Typography;
var imported = document.createElement('script');
imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-187122323-2';
document.head.appendChild(imported);


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-187122323-2');
export default function Home() {
    return (
        <div>
            <Title>Home</Title>
        </div>
    )
   
}
