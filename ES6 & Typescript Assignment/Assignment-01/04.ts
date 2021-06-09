var arr=["Cricket","Hockey","Football"];

const items=arr.map(item => {
    return {name: item, size: item.length};
});

console.log(items);
