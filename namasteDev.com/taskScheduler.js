// Still did not understand it

async function scheduleTasks(tasks, maxConcurrent) {
    const results = [];
    const pool = new Set();
    
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const promise = Promise.resolve().then(() => task());
        results[i] = promise;
        pool.add(promise);
        
        const cleanUp = () => pool.delete(promise);
        promise.then(cleanUp).catch(cleanUp);
        
        if (pool.size >= maxConcurrent) {
            await Promise.race(pool);
        }
    }
    
    return Promise.all(results);
}

const wait = (ms, value) =>
  () => new Promise(res => setTimeout(() => {
    console.log(value);
    res();
  }, ms));

const scheduler = scheduleTasks([wait(1000, "A"),wait(2000, "B"),wait(300, "C"),wait(100, "D")],2);
console.log(scheduler.then().catch())

