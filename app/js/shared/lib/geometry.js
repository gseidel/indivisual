/**
 *
 * @param a
 * @param b
 * @returns {number}
 */
function sinAlpha(a, b) {
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    var sina = Math.asin(a / c) * 2 * DEG;

    return sina;
}

/**
 * arccos( (b² + c² - a²) / 2bc )
 * b * sin( α )
 * @param a
 * @param b
 * @param c
 * @returns {number}
 */
function heightFromThreeSides(a, b, c) {
    var upper = (Math.pow(b,2) + Math.pow(c,2) - Math.pow(a,2));
    var lower = 2*b*c;
    var alpha = Math.acos( upper / lower );
    var hc = b * Math.sin(alpha);
    return hc;
}

/**
 * arccos( (a² + b² - c²) / 2ab )
 * @param a
 * @param b
 * @param c
 * @returns {number}
 */
function gammaFromThreeSides(a, b, c) {
    //
    var upper = (Math.pow(a,2) + Math.pow(b,2) - Math.pow(c,2));
    var lower = 2*a*b;
    var gamma = Math.acos( upper / lower );
    return gamma * 180 / Math.PI;
}

/**
 *
 * @param vectorGamma
 * @param vectorBeta
 * @param vectorAlpha
 * @returns {number}
 */
function gammaFromThreePoints(vectorGamma, vectorBeta, vectorAlpha) {

    var a = vectorGamma.distanceTo(vectorBeta);
    var b = vectorGamma.distanceTo(vectorAlpha);
    var c = vectorAlpha.distanceTo(vectorBeta);

    if (a == 0 && b == 0 && c == 0) {
        return 0;
    }

    return gammaFromThreeSides(a, b, c);
}