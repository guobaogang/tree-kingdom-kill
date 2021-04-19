import React from "react";
import Equipment from "../Equipment";
import './index.less';

function Hero(props: any){
    const {hero, role} = props;
    return(
        <div className={'hero-panel'}>
            {hero.name}
            {role}
            <Equipment equipments={hero.equipments}/>
        </div>
    )
}

export default Hero;