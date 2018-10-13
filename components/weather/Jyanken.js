export default class Jyanken{
    constructor(){
        this.scores=[]
        this.statuses=[0,0,0]
    }
    pon(human_hand){
        const computer_hand=Math.floor(Math.random()*3)
        const judgment=(computer_hand-human_hand+3)%3
        this.scores.push({human:human_hand,computer:computer_hand,created_at:new Date(),judgment:judgment})
        this.statuses[judgment]++
    }
    getScores(){
        return this.scores.slice().reverse()
    }
    getStatuses(){
        return {
            draw:this.statuses[0],
            win:this.statuses[1],
            lose:this.statuses[2]
        }
    }

}