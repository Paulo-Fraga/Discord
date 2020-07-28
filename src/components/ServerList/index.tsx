import React from 'react';
import{ Conteiner, Separator} from './styles';
import ServerButton from '../ServerButton/index';
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