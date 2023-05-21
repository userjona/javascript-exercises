const palindromes = function (...[word]) {
    let arr = word.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
    let reverse = arr.slice().reverse();

    if(arr.join() === reverse.join()){
      return true
      
    }else{
      return false;
    }
    
  };

// Do not edit below this line
module.exports = palindromes;
