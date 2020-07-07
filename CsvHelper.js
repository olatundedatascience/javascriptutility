const pth = require("path")
const fs = require("fs")

class CsvHelper {
    constructor(csvfile) {
        this._file = csvfile
       // console.log(this._file)
        let _extname = (""+pth.extname(this._file)).toLowerCase()
        //console.log(_extname)

        if(_extname != ".csv") {
            throw new Error('only csv files allowed')
        }

        //let _exists = fs.existsSync(pth.join(__dirname, this._file))
        let p = pth.parse(this._file)
       

        
        let _data = fs.readFileSync(this._file).toString()
       // console.log(_data)
        let _indata = 10299
        this._dataCode = ""
        this._setInData(_data, _indata)
    }

    Parse() {
        let _splt = Array.from(this._getInData(10299).split("\n"))

        return _splt
    }

    getColumnHeading() {
        let _head  = Array.from(this.Parse()[0].split(","))

        return _head
    }

    _setInData(dt, ft_code) {
        if(ft_code != 10299) {
            throw new Error('invalid format code....you are not expected to call this method')
        }
        this._dataCode = dt;
    }

    _getInData(ft_code) {
        if(ft_code != 10299) {
            throw new Error('invalid format code....you are not expected to call this method')
        }
        return this._dataCode
    }

}

let fk = new CsvHelper("c:\\Users\\raimi.aliu\\Downloads\\P1-UK-Bank-Customers.csv")

console.log(fk.getColumnHeading())