(function main() {
    var x = 10;

    console.log('Init');



    function f() {
        const y = 100;
        console.log(x)

        return function () {
            debugger;
            return x*y;
        }
    }

    const t = f();

    t();
    f();
})(); // IIFE