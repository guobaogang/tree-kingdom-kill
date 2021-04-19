import React, {useEffect, useState} from "react";
import socket from "../../model/socket";
import {getUserInfo} from "../../utils/util";
import MyPanel from "../../components/MyPanel";
import {useParams} from 'react-router-dom';
import './index.less';

function Room(props: any) {

    const [players, setPlayers] = useState([]);
    // @ts-ignore
    let {id} = useParams();

    const playerInfo = {
        role: 1,
        hero: {
            name: '张飞',
            key: 'zhangfei',
            equipments: [{
                name: '丈八蛇矛',
                suit: 'spade',
                distance: 3
            }]
        },
        cards: [{
            key: 'kill_spade_2',
            ability: 'kill',
            points: '2',
            suit: 'spade',
            name: '杀'
        }, {
            key: 'dodge_diamond_q',
            ability: 'dodge',
            points: 'Q',
            suit: 'diamond',
            name: '闪'
        }, {
            key: 'bagua_club_2',
            ability: 'bagua',
            points: '2',
            suit: 'club',
            category: 'equipment',
            name: '八卦'
        }, {
            key: 'peach_heart_3',
            ability: 'peach',
            points: '3',
            suit: 'heart',
            name: '桃'
        }]
    }

    useEffect(() => {
        joinRoom();
    }, []);

    const joinRoom = () => {
        let userInfo = getUserInfo();
        socket.emit("joinRoom", {
            userName: userInfo && userInfo.name,
            roomId: id
        }, (msg: any) => {
            console.log(msg)
        })
        socket.on("message", (msg: any) => {
            if (msg.type === 'join') {
                setPlayers(msg.msg.users)
            }
        });
    }

    return (
        <div className={'game-room'}>
            <div className={'other-players'}>
                {
                    players.map(player => {
                        return <div key={player}>
                            {player}
                        </div>
                    })
                }
            </div>
            <div className={'my-panel'}>
                <MyPanel {...playerInfo}/>
            </div>
        </div>
    );
}

export default Room;
