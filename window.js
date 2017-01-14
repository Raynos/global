if (typeof window !== "undefined") {
    var win = window;
} else if (typeof global !== "undefined") {
    var win = global;
} else if (typeof self !== "undefined"){
    var win = self;
} else {
    var win = {};
}

module.exports = win;
