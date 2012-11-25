var handlebars = require('handlebars'),
    fs = require('fs'),
    dox = require('dox'),
    DoxBars;


/**
 * Constructs a new `DoxBars` instance for given javascript file.
 *
 * @param String path The javascript file path.
 */
DoxBars = function (path) {
    "use strict";
    var file = fs.readFileSync(path, 'utf-8');
    this.api = dox.parseComments(file);
};


/**
 * Merges user defined context and api datas..
 *
 * @param Object api The extracted api datas.
 * @param Object context The user context.
 * @return Object The context.
 */
DoxBars.prototype.makeContext = function (api, context) {
    "use strict";
    var c = {},
        key;
    for (key in context) {
        if (!key.match(/^[\_$]/)) {
            c[key] = context[key];
        }
    }
    c.api = api;
    return c;
};


/**
 * Renders context in template file a given path.
 *
 * @param String path The template file path.
 * @param Object context The context.
 * @return String The rendered doc.
 */
DoxBars.prototype.render = function (path, context) {
    "use strict";
    context = context || {};
    context = this.makeContext(this.api, context);
    return this.template(path)(context);
};


/**
 * Gets the handlebar compiled template for given file.
 *
 * @param String path The path to the template file.
 * @return Object The compiled template.
 */
DoxBars.prototype.template = function (path) {
    "use strict";
    var template = fs.readFileSync(path, 'utf-8');
    return handlebars.compile(template);
};


module.exports = DoxBars;
