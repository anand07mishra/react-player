import { Typography } from 'antd';
import React from 'react';
import gatracking from './GATracking';


const { Title } = Typography;

// GA Function calling
gatracking();

export default function Home() {
    return (
        <div>
            
            <Title>Home</Title>
        </div>
    )
   
}
