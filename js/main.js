const phaserConfig = {
    type: Phaser.AUTO,
    parent: "game",
    width: 1200,
    height: 650,
    backgroundColor: "0xccd9ff",
    dom: {
        createContainer: true
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 0},
            debug: true,
        }
    },
    scene: [preload,scene]
};

const game = new Phaser.Game(phaserConfig);
