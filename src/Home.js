import { Typography } from 'antd';
import React from 'react';
import doSomething from './GATracking';


const { Title } = Typography;

doSomething();

export default function Home() {
    return (
        <div>
            
            <Title>Home</Title>
        </div>
    )
   
}
