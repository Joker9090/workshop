import Phaser from "phaser";
import MainScene from "../scenes/MainScene";


export const gameConfig = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: "game",
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: [MainScene]
}
