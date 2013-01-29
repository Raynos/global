/*global window, global*/
if (typeof global !== "undefined") {
    module.exports = global
} else if (typeof window !== "undefined") {
    module.exports = window
}
