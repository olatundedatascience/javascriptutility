function StringsHelpers(string ="strings"){
    // randomize a string
    const randomnize = (degree=1) => {
        let result = ""
        for(var i=0;i<degree;i++) {
            let current = _randomnize(string)
            result = current
        }

        return result;
    }

    function _randomnize(query="query"){
        let query_arr = Array.from(query.split(''))
        let query_arr_len = query_arr.length
        let queryToReturn = "";
        for(var i = 0;i<query_arr_len;i++) {
            let current_index = Math.round(Math.floor(Math.random() * query_arr_len))
            //console.log(current_index)
            let currentQuery = query_arr[i]
            let tempQuery = query_arr[current_index]
           // console.log(tempQuery)
            query_arr[current_index] = currentQuery
          //  query_arr[current_index] = currentQuery
            query_arr[i] = tempQuery
            

           
        }

        return query_arr.join("")
    }

    return {
        randomize:randomnize
    }

}

var helpers = {}
helpers["StringHelpers"] = StringsHelpers
module.exports = helpers
//module.exports = {StringsHelpers}

//console.log(StringsHelpers("olatunde").randomize())