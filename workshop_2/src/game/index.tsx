
import Phaser from "phaser";
import { gameConfig } from "./config/config";
import React from "react";


export default function Game() {
    React.useEffect(() => {
        const game = new Phaser.Game(gameConfig);
    }, []);
    
    return (
        <div id="game">
        </div>
    )
}
