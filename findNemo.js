console.clear();
const arr = ['nemo'];

function findNemo(array){
    let t0 = performance.now();
    for(let i=0;i<array.length;++i){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
    t1 = performance.now();
    console.log("Total time:",t1-t0," milliseconds");
}

findNemo(arr);