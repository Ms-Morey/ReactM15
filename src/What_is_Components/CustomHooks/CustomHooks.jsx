export let useAdd  = (a,b)=>{
    return a+b;
}

export let useMap = (cb, arr)=>{
    let temp = []
    for(let i =0; i<arr.length; i++){
        let rv = cb(arr[i])
        temp.push(rv)
    }
    return temp
}