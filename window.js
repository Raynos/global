var extend = require('xtend/mutable')

var minWindow = {
    removeEventListener: require('min-document/event/remove-event-listener'),
    addEventListener: require('min-document/event/add-event-listener'),
    dispatchEvent: require('min-document/event/dispatch-event'),
}


if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = extend(global, minWindow)
} else {
    module.exports = minWindow
}
