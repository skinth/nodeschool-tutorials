var tot = process.argv.splice(2, process.argv.length)
                .map((it) => Number(it))
                .reduce((a,b) => a + b);
console.log(tot);