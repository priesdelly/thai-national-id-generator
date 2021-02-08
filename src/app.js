function generate() {
    let foo = [];
    let bar = 0;
    let output = '';
    for (let i = 0; i < 12; i++) {
        let sub = 13 - i;
        let confu = i + 1;
        foo[confu] = rand();
        bar += foo[confu] * sub;
        output = output.concat(foo[confu])
    }
    bar = ((11 - (bar % 11)) % 10);
    output = output.concat(bar)
    return output;
}

function rand() {
    return Math.floor(Math.random() * 10)
}