const debounce = (func, delay = 1000) => {
    let timerID;
    return (...args) =>{
        if(timerID){
            clearTimeout(timerID)
        }
        timerID = setTimeout(() => {
            func.apply(null, args)
        }, delay)
    }
}