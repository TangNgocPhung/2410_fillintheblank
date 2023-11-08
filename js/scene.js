class scene extends Phaser.Scene{
    constructor()
    {
        super("scene");

        
    }
    create()
    {
        this.questions = [
            {
                question: 'Câu 1: Bạn hãy điền vào chỗ trống: ...... là sử dụng tác phẩm của người khác làm tác phẩm của mình mà không công nhận xứng đáng hoặc nộp bài viết của người khác dưới danh nghĩa là của bạn. Nó cũng có nghĩa là nhờ hoặc trả tiền cho người khác để viết bài của bạn.',
                option: 'DAOVAN',
                count: "6",
            },
            {
                question: "Câu 2: Quy tắc nào ứng với nội dung sau đây: 'Tiết lộ các phương pháp, tài liệu, giả định, phân tích và các thông tin khác cần thiết để đánh giá nghiên cứu của bạn.'",
                option: "MINHBACH",
                count: "8",
            },
            {
                question: "Câu 3: Bạn hãy điền vào chỗ trống: 'Những phương pháp kết hợp ý tưởng của người khác vào bài viết của bạn để tránh bị đạo văn gồm: Summary (tóm tắt), Paraphrase (diễn giải) và ......'",
                option: "QUOTE",
                count: "5",
            },
            {
                question: "Câu 4: Bạn hãy điền vào chỗ trống: 'Mỗi trích dẫn tham khảo bao gồm các yếu tố chính được gọi là 4W: Tác giả (Who), Ngày (Date), Vị trí nguồn (Where) và ........ (What)",
                option: "TIEUDE",
                count: "6",
            },
            {
                question: "Câu 5: Bạn hãy điền vào chỗ trống: 'Bạn không cần trích dẫn nguồn của mình khi thông tin của bạn được xem là.....'",
                option: "KIENTHUCCHUNG",
                count: "13",
            },
            {
                question: "Câu 6: Bạn hãy điền vào chỗ trống: '........ và Reference chính xác cũng cho phép người đọc tác phẩm của bạn dễ dàng xác định những nguồn được sử dụng trong tác phẩm của bạn và theo dõi chúng nếu cần.'",
                option: "CITATION",
                count: "8",
            },
            {
                question: "Câu 7: Bạn hãy điền vào chỗ trống: '........... là danh sách các trích dẫn đầy đủ. Nói chung, nó bao gồm các chi tiết đầy đủ của tất cả các nguồn được trích dẫn trong một tác phẩm học thuật. Người viết thường trình bày chúng theo bảng chữ cái.'",
                option: "TAILIEUTHAMKHAO",
                count: "15",
            },
            {
                question: "Câu 8: Bạn hãy điền vào chỗ trống: 'Sự khác biết lớn nhất giữa DOI và URL chính là: 'DOI ....... hơn URL'",
                option: "VINHVIEN",
                count: "8",
            },
            {
                question: "Câu 9: DOI là viết tắt của từ gì?",
                option: "DIGITALOBJECTIDENTIFIER",
                count: "23",
            },
            {
                question: "Câu 10: Khi giảng viên đặt quá nhiều bài tập trong một khoảng thời gian ngắn thì một trong những nguyên nhân dẫn đến việc đạo văn mặc dù bản thân nhận thức được đó là hành vi đạo văn chính là: ",
                option: "THIEUTHOIGIAN",
                count: "13",
            },
            {
                question: "Câu 11: Bạn hãy điền vào chỗ trống: 'Có 2 dạng trích dẫn: Narrative Citation và............'",
                option: "PARENTHETICALCITATION",
                count: "21",
            },
            {
                question: "Câu 12: Bạn hãy điền vào chỗ trống: 'Tóm tắt (Summarize) là quá trình lấy lời nói của người khác và…........ chúng thành một tuyên bố ngắn gọn hoặc khái quát hơn bằng lời nói của riêng bạn. Độ dài tóm tắt của bạn sẽ ngắn hơn so với văn bản gốc'",
                option: "CODONG",
                count: "6",
            },
            {
                question: "Câu 13: Bạn hãy điền vào chỗ trống: 'Trích dẫn trực tiếp (Quote) là sử dụng các từ chính xác của người khác và đặt chúng trong dấu ......'",
                option: "NGOACKEP",
                count: "8",
            }
        ]
        this.nameInput = this.add.dom(590, 260).createFromCache("form");
        const row_crosses =  this.nameInput.node.querySelectorAll(".row_cross");
        let table_question = this.add.image(game.config.width/2, 500, "table_question" ).setOrigin(0.5).setScale(1);
        let questionText = this.add.text(game.config.width/2, 570, "", {fill: "0x000000", color: "0x000000", wordWrap: {width: 1000, useAdvaneWrap: true}, fontSize: "20px", fontStyle: "bold"}).setOrigin(0.5);
        let questionLoop = [];
        row_crosses.forEach((row, index1) => 
        {
            const inputs = row.querySelectorAll('.inpt');
            const numberOfTds = row.querySelectorAll('.typping').length;
            inputs.forEach((input, index) =>
            {
                input.addEventListener('input', () =>
                {
                    if (input.value.length > 1) {
                        let name = input.value[0].toLowerCase();
                        input.value = name; // Chỉ giữ lại ký tự đầu tiên
                    }
                    if (index < numberOfTds - 1 && input.value.length === 1) {
                        const nextInput = inputs[index + 1];
                        nextInput.focus(); // Di chuyển trỏ đến ô input kế tiếp
                    }
                    else if(index == numberOfTds -1)
                    {
                        console.log( this.questions[index1].option);
                        const inputValues = [];
                        inputs.forEach((input) => {
                            inputValues.push(input.value);
                        });
                        let answer = inputValues.join('');
                        // console.log(answer);
                        if(answer === this.questions[index1].option)
                        {
                            console.log("success");
                            inputs.forEach((input) => {
                                input.style.color = "green"; // Đổi màu chữ thành màu xanh lá
                                input.disabled = true; // Khóa ô không cho người dùng nhập nữa
                            });
                            this.add.image(question.x, question.y, "table").setOrigin(0.5).setScale(0.1);
                            question.destroy();
                        }
                        else{
                            console.log("error");
                            inputs.forEach((input) => {
                                input.value = ''; // Xóa giá trị của ô input
                            });
                            inputs[0].focus(); // Đặt con trỏ chuột ở vị trí đầu tiên của hàng
                            inputs[0].setSelectionRange(0, 0); // Đặt vị trí con trỏ chuột ở đầu ô input
                        }
                    }
                });
            });
            const lastInput = inputs[inputs.length - 1];
            const rect = lastInput.getBoundingClientRect();
            const x = rect.left + rect.width + 40; // Tọa độ x của phần tử ".inpt" cuối cùng
            const y = rect.top + rect.height - 20; // Tọa độ y của phần tử ".inpt" cuối cùng
            let question = this.add.sprite(x, y, "question").setOrigin(0.5).setScale(0.3).setRotation(-45 * (Math.PI/180));
            questionLoop.push(question);
            let isQuestionVisible = false;
            question.setInteractive({ useHandCursor: true }).on("pointerdown", () =>
            {
                if(isQuestionVisible)
                {
                    questionText.setText("");  // Xóa nội dung câu hỏi
                    isQuestionVisible = false;
                }
                else{
                    questionText.setText(`${this.questions[index1].question}`);
                    isQuestionVisible = true;
                }
            });;
        });
        questionLoop.forEach(element => {
            this.tweens.add({
                targets: element,
                angle: 45,
                duration: 1000,
                ease: 'linear',
                yoyo: true,
                loop:-1,
            });
        });
    }
        // let table = this.add.image(game.config.width/2, 550, "table").setOrigin(0.5).setScale(0.5);



    update()
    {

    }
}
