//Задача № 1

function cachingDecoratorNew(func) {
    let cache = {};
    return (...args) => {

        const hash = md5(args);
        if(hash in cache){
            return "Из кэша: " + cache[hash];
        }

        if(Object.keys(cache).length === 5) {
            delete cache[Object.keys(cache)[0]];
        }
        
        const result = func(...args);
        cache[hash] = result;
        return "Вычисляем: " + result;
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay){
    let timeoutId = null;
    wrapper.allCount = 0;
    wrapper.count = 0;

    function wrapper(...args){
        wrapper.allCount += 1;

        if(timeoutId){
            clearTimeout(timeoutId);
        }

        if(!timeoutId){
            func(...args);
            wrapper.count += 1;
        }

        timeoutId = setTimeout(() => {
            timeoutId = null;
            func(...args);
        }, delay);
    }
    return wrapper;
}