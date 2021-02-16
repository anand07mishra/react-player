import { Typography } from 'antd';
import React from 'react';
import gatracking from './GATracking';

const { Title } = Typography;
//GA code function call 
gatracking();


export default function Home() {
    return (
        <div>
            <Title>Home</Title>
        </div>
    )
   
}
