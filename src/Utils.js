const Utils = {
    removeItemOnce:  (arr, value) => {
        var index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
    },
    parsePrice: ( n ) => {
      let z = Math.round(n)
      if ( n === z && z !== 0) return n.toString() + ",00"
      let w = n.toString().replaceAll('.',',')
      if ( w[w.length-2] === "," ) w += "0"
      return w.slice(0, w.indexOf(',')+3)
    },
    parseTextOverflow: ( str, range ) => {
      if ( str.length <= range ) return str;
      return str.slice(0, range) + "..."
    }
} 

export default Utils;


