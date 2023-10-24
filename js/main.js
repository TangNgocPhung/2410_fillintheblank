class scene extends Phaser.Scene{
    constructor()
    {
        super("scene");

        
    }

    preload()
    {
        this.load.html("form", "assets/form.html");
        this.load.image("win", "assets/win.png");
    }

    create()
    {
        this.questions =
        [
            { 
                options: "tríchdẫntrựctiếp", 
                question: "Khi bạn sử dụng chính xác những từ ngữ của người khác trong bài viết của mình, đây được gọi là",
                explain: "jbdmbndmnbd",
                typequestion: "FillInTheBlank",
            },
        ]
        this.nameInput = this.add.dom(640, 360).createFromCache("form");

        this.message = this.add.text(640, 250, this.questions[0].question  , 
        {
            color: "#FFFFFF",
            fontSize: 20,
            fontStyle: "bold",
            wordWrap: {width: game.config.width - 300, useAdvanceWrap: true},
            textAlign: "justify",
        }).setOrigin(0.5);
    
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    
        this.returnKey.on("down", event => {
            let name = this.nameInput.getChildByName("name");
            if(name.value != "")
            {
                name.value = name.value.replace(/\s+/g, ' ');
                name.value = name.value.replace(/[.,!?]+$/, "");
                name.value = name.value.toLowerCase();
                this.message.setText(this.questions[0].question + " " + name.value);
                name.value = name.value.replace(/\s+/g, '');
                if(name.value === this.questions[0].options)
                {
                    this.add.image(game.config.width/2, game.config.height/2, "win").setOrigin(0.5);
                }
                else{
                  console.log("banj sao r");
                }
                name.value = "";
            }
        });
    }
}


const phaserConfig = {
    type: Phaser.AUTO,
    parent: "game",
    width: 1280,
    height: 720,
    dom: {
        createContainer: true
    },
    scene: [scene]
};

const game = new Phaser.Game(phaserConfig);
