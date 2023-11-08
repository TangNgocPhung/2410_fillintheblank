# 2410_fillintheblank
     this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER).on("down", event => {
            let name = this.nameInput.getChildByName("name");
            if(name.value != "")
            {
                name.value = name.value.replace(/\s+/g, ' ');
                name.value = name.value.replace(/[.,!?]+$/, "");
                name.value = name.value.toLowerCase();
                this.message.setText(name.value);
                name.value = name.value.replace(/\s+/g, '');
                name.value = "";
            }
        });



        https://codesandbox.io/s/phaser-project-43ov23?file=/src/Map2.js