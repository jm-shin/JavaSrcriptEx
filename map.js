const createCollection = {
    Map(keys, ...vals){
        const m = new Map()
        vals.forEach((val, i) => {
            m.set(keys[i].trim(), val)
        });
        return m;
    },
    WMap(keys, ...vals){
        const wm = new WeakMap();
        for (let i = 0; i < vals.length; i += 2) {
            wm.set(vals[i], vals[i+1]);
        }
        return wm;
    } 
};

const wkeys = [ {a: 100}, {b: 200} ];
const map = createCollection.Map `
    a ${10}
    b ${'what'}
    fn ${v => v + 10}`;
let wmap = createCollection.WMap `
    ${wkeys[0]} ${10}
    ${wkeys[1]} ${20}`;

console.log(map);
console.log(wmap);