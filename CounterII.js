/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let original = init;
    function increment(){
        return ++original;
    }  
    function decrement(){
        return --original;
    }
    function reset()
    {
        return (original=init);
    }
    return {increment, decrement, reset}
  };
  
  /**
   * const counter = createCounter(5)
   * counter.increment(); // 6
   * counter.reset(); // 5
   * counter.decrement(); // 4
   */