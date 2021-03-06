
/**
 *
 * @param item
 * @param prefix
 * @returns {number|boolean}
 */
function number_extract(item, prefix) {

    //console.log(prefix, item);
    var regex = new RegExp(prefix + '(\\d+)');
    var i = item.replace(regex, '$1');
    i = parseInt(i);

    if (!isNaN(i)) {
        return i;
    }

    return item;
}

/**
 *
 * @param n
 * @returns {boolean}
 */
function isFloat(n)
{
    return n === +n && n !== (n|0);
}

/**
 *
 * @param n
 * @returns {boolean}
 */
function isInteger(n)
{
    return n === +n && n === (n|0);
}

function isUndefined (obj) {
    return obj === undefined;
}

function isNull (obj) {
    return obj === null;
}

function isNaN (obj) {
    return obj !== obj;
}

var isArray = Array.isArray || function(obj) {
        return obj.constructor === Array;
    };

function isObject (obj) {
    return obj === Object(obj);
}

function isNumber (obj) {
    return obj === obj+0;
}

function isString (obj) {
    return obj === obj+'';
}

function isBoolean (obj) {
    return obj === false || obj === true;
}
