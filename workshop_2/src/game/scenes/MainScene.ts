// create a base phaser scene
export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        this.load.setBaseURL('/game');
        this.load.spritesheet('characters', 'characters.png', { frameWidth: 736 / 23, frameHeight: 128 / 4,  });
        this.load.spritesheet('backgrounds', 'sheet.png', { frameWidth: 272 / 17, frameHeight: 128 / 8,  });
    }

    create() {
       

        const bkg1 = this.add.sprite(400, 375, 'backgrounds', 11).setScale(5).setAlpha(0);
        const camera = this.cameras.main;
        const size = (bkg1.width * bkg1.scaleX)
        const bkg_items = camera.width / size; 
        const height = 4;

        let initialHeight = 390
        let frame = 11
        for (let i = 0; i < height; i++) {
            for (let i = 0; i < bkg_items; i++) {

                const bkg = this.add.sprite(i * size, initialHeight, 'backgrounds', frame).setScale(5).setOrigin(0, 0.5);
                bkg.x = i * size;
            }
            initialHeight = initialHeight + size
            if(frame == 11 )frame = frame + 17
        }
        

        const label = this.add.sprite(600, 325, 'backgrounds', 14).setScale(3).setOrigin(0.5, 0.5);
        const flower = this.add.sprite(700, 325, 'backgrounds', 14 + (17 * 5)).setScale(3).setOrigin(0.5, 0.5);

        const player = new GameObject(this, { x: 400, y: 300, ...HUNTER });
        const enemy = new GameObject(this, { x: 500, y: 300, ...SNAKE }).setFlipX(true);
        const enemy2 = new GameObject(this, { x: -300, y: 300, ...SNAKE })

        // tweens
        this.tweens.add({
            targets: enemy2,
            x: 300,
            duration: 6000,
            ease: 'linear',
        })
    }

    update() {
       
    }
}

class GameObject extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene, gameObjectConfig: GameObjectConfig) {
        const { x, y, texture, fromFrame, toFrame } = gameObjectConfig;
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.setScale(3);
        this.anims.create({
            key: 'animationDefault',
            frames: this.anims.generateFrameNumbers(texture, { start: fromFrame, end: toFrame }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.play('animationDefault');
    }
}


export type GameObjectConfig = {
    x: number;
    y: number;
    texture: string;
    fromFrame?: number;
    toFrame?: number;
}

export const BOLD = { texture: 'characters', fromFrame: 0, toFrame: 22}
export const KING = { texture: 'characters', fromFrame: 23, toFrame: 45}
export const HUNTER = { texture: 'characters', fromFrame: 46, toFrame: 67}
export const SNAKE = { texture: 'characters', fromFrame: 69, toFrame: 72}
