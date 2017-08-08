/* var n = 42;
var x = isOdd(n);

function isOdd(n) {
    if (typeof n !== "number") {
        throw "erreur";
    } else if (n % 2 === 0) {
        return true;
    } else if (n % 2 === 1) {
        return false;
    } else {
        console.log("LOL");
    }
}
console.log(x);
console.log(1 % 2);
 */


function sum(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(typeof a[i]);
        if (typeof a[i] === "string" || typeof a[i] === "boolean") {
            alert('yes');
            throw "error !!!";
        } else {
            var sum2 = a.reduce((a, b) => a + b, 0);
            console.log(sum2);
        }
    }
}
sum([true, 42, 84, 0, 87, "a", 51]);