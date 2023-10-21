class Start{
    constructor(){
        this.playerName = 'kamu'
        this.botName = 'bot'
        this.playerOption;
        this.botOption;
        this.winner = ''
    }

    get getBotOption() {
        return this.botOption;
    }
    set setBotOption(option) {
        this.botOption = option;
    }
    get getPlayerOption() {
        return this.playerOption
    }
    set setPlayerOption(option) {
        this.playerOption = option;
    }
    botBrain() {
        const option = ['KERTAS', 'GUNTING', 'BATU'];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }
    winCalculation() {
        if(this.botOption == 'KERTAS' && this.playerOption == 'GUNTING') {
            return this.winner = this.playerName
        }else if(this.botOption == 'KERTAS' && this.playerOption == 'BATU'){
            return this.winner = this.botName
        }else if(this.botOption == 'GUNTING' && this.playerOption == 'KERTAS'){
            return this.winner = this.botName
        }else if(this.botOption == 'GUNTING' && this.playerOption == 'BATU'){
            return this.winner = this.playerName
        }else if(this.botOption == 'BATU' && this.playerOption == 'GUNTING') {
            return this.winner = this.botName
        }else if(this.botOption == 'BATU' && this.playerOption == 'KERTAS') {
            return this.winner = this.playerName
        }else {
            return this.winner = 'SERI'
        }
    }
    macthResult(){
        if(this.winner !='SERI') {
            return `selamat ${this.winner} menang!!`
        }else {
            return`${this.winner} tidak ada yang menang!!`
        }
    }
}

function clickOption(params) {
    const start = new Start();
    start.setPlayerOption = params
    start.setBotOption = start.botBrain()
    start.winCalculation();
    console.log('hasi: ', start.macthResult())

    const inGame = document.getElementById('inGame');
    const result = document.getElementById('result');

    inGame.textContent = "...."
    result.textContent = "...."

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
        result.textContent = start.macthResult();
        
    }, 2000);
}


