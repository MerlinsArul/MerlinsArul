function a() {
    return "Hi";
}
function b(h = a) {
    console.log(h());
    function c() {
        return "Welcome";
    }
    return c();
}
console.log(b());



