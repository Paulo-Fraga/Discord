import React from 'react';
import { Button } from './styles';

export interface Props{
    select?: Boolean
    isHome?: Boolean
    hasNotification?: Boolean
    mentions: Number
}
const ServerButton:React.FC<Props> = ({
    select,
    isHome,
    hasNotification,
    mentions,
}) =>{

    return(
        <>
        </>
    )
};

export default ServerButton;