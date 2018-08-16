var simply = [];

searchSimply:
    for (var i = 1; i <= 1000; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue searchSimply;
        }

        simply.push(i);
    }
console.log(simply);
