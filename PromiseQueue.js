var log = require("log-update")
class PromiseQueue {
    constructor(tasks=[], concurrentCount) {
        this.todo = tasks;
        this.running = [];
        this.completed = []
        this.count = concurrentCount
    }

    toX = () => 'X';
    get runAnother() {
        return (this.running.length < this.count) && this.todo.length
    }

    graphTask() {
        let _running = `running:[${this.running.map(this.toX)}]`
        let complated = `completed:[${this.completed.map(this.toX)}]`
        let todo = `todo: [${this.todo.map(this.toX)}]`

        log(`${todo}
            ${_running}
            ${complated}
        `)
    }

    run() {

        while(this.runAnother) {
            let current = this.todo.shift()

            current.then(()=>{
                this.completed.push(this.running.shift())
                this.graphTask()
                this.run()
            })

            this.running.push(current)
            this.graphTask()
        }
    }
}

module.exports = PromiseQueue