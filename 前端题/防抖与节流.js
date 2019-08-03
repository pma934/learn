// function a(x) {
//     console.log(x)
// }

//节流
function throttle(fn, ...args) {
    var timeout = null
    return function (t = 1000) {
        timeout = timeout === null ? setTimeout(() => {
            timeout = null
            fn(...args)
        }, t) : timeout
    }
}

//防抖
function debounce(fn, ...args) {
    var timeout = null
    return function (t = 3000) {
        clearTimeout(timeout)
        timeout = setTimeout(fn.bind(this, ...args), t) //等同于()=>{fn(...args)}
    }
}

// b = debounce(a,123)

// for(let i in new Array(10).fill(1)){
//     b()
// }

// setInterval(throttle(a,123), 100)