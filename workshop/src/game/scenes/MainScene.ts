// create a base phaser scene
export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        this.load.setBaseURL('/game');
        this.load.spritesheet('dude', 'characters.png', { frameWidth: 726 / 23, frameHeight: 36,  });
    }

    create() {
        const player = this.add.sprite(400, 300, 'dude');
        player.setScale(3)

        this.anims.create({
            key: 'animationDefault',
            frames: this.anims.generateFrameNumbers('dude', { start: 23, end: 45 }),
            frameRate: 10,
            repeat: -1
        });

        player.anims.play('animationDefault');




       
    }

    update() {
       
    }
}
