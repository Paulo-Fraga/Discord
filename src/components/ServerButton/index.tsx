import React from 'react';

import { Button } from './styles';

import Logo from '../../assets/logo-rocketseat.svg';
export interface Props{
    select?: Boolean;
    isHome?: Boolean;
    hasNotification?: Boolean;
    mentions?: Number;
}
const ServerButton : React.FC<Props> = ({
    select,
    isHome,
    hasNotification,
    mentions
}) =>{

    return(
        <Button 
            isHome={isHome}
            hasNotification={hasNotification}
            mentions={mentions}
            className={select ? 'active': ''}

            >
                            {isHome && <img src={Logo}  alt='Rocketseat'/> }
        </Button>
    )
};
export default ServerButton;