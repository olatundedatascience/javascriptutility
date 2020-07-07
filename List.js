// list data structures

class List  {
    #myItem = []
    constructor(items=[]) {
        
        if(items.length > 0) {
            for(let k of items) {
                this.#myItem.push(k)
            }
        }
    }


    add(item) {
        this.#myItem.push(item)
    }

    addAndCheck(item, checkForExistence=false){
        if(checkForExistence) {
            let found = this.exist(item)
            if(!found) {
                this.add(item)
            }
        }
        else {
            this.add(item)
        }
    }

    get Count() {
        return this.#myItem.length
    }

    exist(item) {
        let found = false;
        for(var i=0;i<this.#myItem.length;i++) {
            if(this.#myItem[i] == item) {
                found = true
                break;
            }
        }

        return found;
    }
    insert(index, item){}
    insert(index, ...items){}
    update(item){}
    update(...items){}
    updateAt(index, item){}
    remove(item){}
    indexOf(item){}
    itemAt(index){}
    remove(index, item){}
    removeAt(index){}
    toString() {

    }

    [Symbol.toString]() {

    }

    [Symbol.iterator]() {
        let _items = this.#myItem

        return {
            k :_items.length,
            _n:0,

            next() {
                if( this._n <= this.k) {
                    this._n++
                    return {done:false, value:_items[this._n]}
                }
                else {
                    return {done:true}
                }
            }
        }

    }
}


//var tl = new List()
module.exports = {List:List}