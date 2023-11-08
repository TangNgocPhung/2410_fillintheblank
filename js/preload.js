class preload extends Phaser.Scene {
    constructor()
    {
        super("preload");
    }

    preload()
    {
        this.load.html("form", "assets/form.html");
        this.load.image("win", "assets/win.png");
        this.load.atlas("question", "assets/question.png", "assets/question_atlas.json");
        this.load.animation("question_anims", "assets/question_anim.json");
        this.load.image("table", "assets/table.png");

        this.load.image("table_question", "assets/table_question.png");
    }

    create()
    {
        this.scene.start("scene");
    }
}