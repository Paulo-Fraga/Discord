import React from 'react';

import ServerButton from '../ServerButton'

import{ Conteiner, Separator} from './styles';

const ServerList: React.FC = () =>{
    
    return(
        <Conteiner>

            <ServerButton isHome/>
            <Separator />

            <ServerButton />
            <ServerButton hasNotification/>
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />

        </Conteiner>
    )
};
export default ServerList;