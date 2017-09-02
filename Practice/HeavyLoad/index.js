var fs = require('fs');
setTimeout(() => {
   let a = fs.readFileSync('./test.txt');
    setTimeout(() => {
        let b = fs.readFileSync('./test.txt');
        setTimeout(() => {
           let c = fs.readFileSync('./test.txt');
            setTimeout(() => {
                let d = fs.readFileSync('./test.txt');
                setTimeout(() => {
                    let e = fs.readFileSync('./test.txt');
                    setTimeout(() => {
                        let f = fs.readFileSync('./test.txt');
                        setTimeout(() => {
                            let g = fs.readFileSync('./test.txt');
                            setTimeout(() => {
                                let h = fs.readFileSync('./test.txt');
                                setTimeout(() => {
                                    let i = fs.readFileSync('./test.txt');
                                    setTimeout(() => {
                                        let j = fs.readFileSync('./test.txt');
                                        setTimeout(() => {
                                            let k = fs.readFileSync('./test.txt');
                                            setTimeout(() => {
                                                let l = fs.readFileSync('./test.txt');
                                                setTimeout(() => {
                                                    let m = fs.readFileSync('./test.txt');
                                                    setTimeout(() => {
                                                        let n = fs.readFileSync('./test.txt');
                                                        console.log('fin');
                                                    }, 1000);
                                                }, 10000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 10000);
}, 1000);