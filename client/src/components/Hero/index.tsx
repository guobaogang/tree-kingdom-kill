import React from "react";

function Hero(props: any){
    const {hero, role} = props;
    return(
        <div>
            {hero.name}
            {role}
        </div>
    )
}

export default Hero;