const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 2 * 1000);
});

Promise.all([p1, p2])
    .then(results => {
        const total = results.reduce((p, c) => p + c);
        console.log(`Values of x, y: ${results}`);
        console.log(`Total: ${total}`);
    });