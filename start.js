class Start{
    constructor(){
        this.playerName='Player'
        this.botName='Bot'
        this.playerOption;
        this.botOption;
        this.winner=''
    }
    get getPlayerOption() {
        return this.playerOption;
    }
    get getBotOption() {
        return this.botOption;
    }
    set setPlayerOption(option){
        this.playerOption= option;
    }
    set setBotOption(option) {
        this.botOption = option;
    }
    botBrain() {
        const option =["✋","✌","👊"]
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }
    winCalculation() {

        if (this.playerOption == "✋" && this.botOption == "✌") {
            return this.winner=this.botName;
        } else if (this.playerOption == "✋" && this.botOption == "👊") {
            return this.winner = this.playerName;
        } else if (this.playerOption == "✌" && this.botOption == "👊") {
            return this.winner = this.botName;
        } else if (this.playerOption == "✌" && this.botOption == "✋") {
            return this.winner = this.playerName;
        }else{
            this.winner="Draw";
        }
    }
    matchResult(){
        if (this.winner != "Draw"){
            return this.winner+" "+"Menang";
        }else{
            return 'Hasilnya '+this.winner;
        }
    }

    }
    


function pickOption(params){
    const start= new Start();
    start.setPlayerOption=params;
    start.botOption= start.botBrain();

   
   // console.log("Kamu melilih: ", start.playerOption);
    //console.log("Bot pilih: ", start.botOption);
    start.winCalculation();
    document.getElementById("inGame").innerText = start.playerName + " " + "VS " + start.botName;
    document.getElementById("inGame").innerText = start.playerName + " " + start.playerOption + " " + "VS " + start.botName + " " + start.botOption;

    setTimeout(() => {
        document.getElementById("result").innerText = start.matchResult().toUpperCase();
    },1000);

}
 
