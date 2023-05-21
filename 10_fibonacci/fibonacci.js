const fibonacci = function(val) {
    var fib = 0;
    var aux = 1;
    var next = 0;

    if(val < 0){
        return "OOPS";
    }
    for(i=1;i<=val;i++){
        next = fib + aux;
        fib = aux;
        aux = next;
        
        
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
