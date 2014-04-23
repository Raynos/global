if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var Individual = require('individual');

    var document = Individual('__GLOBAL_DOCUMENT_CACHE@4', 
        require('min-document'));

    module.exports = document;
}
