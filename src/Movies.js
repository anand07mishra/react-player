import { Typography } from 'antd';
import React from 'react';
const { Title } = Typography;
var imported = document.createElement('script');
imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-187122323-2';
document.head.appendChild(imported);

export default function Movies() {
    return (
        <div>
            <Title>Movies</Title>
        </div>
    )
    
}
