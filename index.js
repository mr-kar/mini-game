class Start{
    constructor(){
        this.playerName = 'YOU'
        this.botName = 'BOT'
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
        const option = ['PAPER', 'SCISSORS', 'ROCK'];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }
    winCalculation() {
        if(this.botOption == 'PAPER' && this.playerOption == 'SCISSORS') {
            return this.winner = this.playerName
        }else if(this.botOption == 'PAPER' && this.playerOption == 'ROCK'){
            return this.winner = this.botName
        }else if(this.botOption == 'SCISSORS' && this.playerOption == 'PAPER'){
            return this.winner = this.botName
        }else if(this.botOption == 'SCISSORS' && this.playerOption == 'ROCK'){
            return this.winner = this.playerName
        }else if(this.botOption == 'ROCK' && this.playerOption == 'SCISSORS') {
            return this.winner = this.botName
        }else if(this.botOption == 'ROCK' && this.playerOption == 'PAPER') {
            return this.winner = this.playerName
        }else {
            return this.winner = 'DRAW'
        }
    }
    macthResult(){
        if(this.winner !='DRAW') {
            return `CONGRATULATIONS ${this.winner} WIN!!`
        }else {
            return`${this.winner} NOBODY WINS!!`
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


