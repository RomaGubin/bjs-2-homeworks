//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];
	const maxCacheValuesCount = 5;

	return (...args) => {
		const hash = md5(args.join(','));
		let objectInCache = cache.find((item) => item.hash === hash);

		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.value);
			return "Из кеша: " + objectInCache.value;
		}
		let result = func(...args);
		cache.push({
			hash: hash,
			value: result
		});

		if (cache.length > maxCacheValuesCount) {
			cache.shift();
		}

		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	};
}

//Задача № 1, вариант решения эксперта
/*
const md5 = require('./js-md5.js');

function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    const objectFromCache = cache.find(object => object.hash === hash);
    if (objectFromCache){
      console.log("Из кеша: ", objectFromCache.value);
      return "Из кеша: " + objectFromCache.value;
    }

    const value = func(...args);
    cache.push({hash, value})
    if(cache.length > maxCacheValuesCount) {
      cache.shift();
    }

    console.log("Вычисляем: ", value);
    return "Вычисляем: " + value;
  };
}
*/
//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	let isThrottled = false;
	wrapper.count = 0;
	wrapper.allCount = 0;

	function wrapper(...args) {
		wrapper.allCount++;

		if (!isThrottled) {
			isThrottled = true;
			wrapper.count++;
			func(...args);
		}
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			timeoutId = null;
			wrapper.count++;
			func(...args);
		}, delay);
	}
	return wrapper;
}

//Задача № 2, вариант решения эксперта
/*
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if(timeoutId === null) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }

  return wrapper;
}
*/