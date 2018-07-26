'use strict';

/**
 *
 * @param sourceText            Source text to be transliterated.
 * @param inputLanguageCode     Language code, for e.g. ne-t-i0-und for Nepal.
 * @param maxResult             Max number of transliterated results.
 * @return {Promise<any>}
 */
module.exports = function(sourceText, inputLanguageCode, maxResult) {
    return new Promise(function(resolve, reject) {
        let encodedUrl = encodeURI('https://inputtools.google.com/request?text=' + sourceText + '&itc=' + inputLanguageCode + '&num=' + maxResult + '&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage');

        // Do the usual XHR stuff
        let request = new XMLHttpRequest();
        request.open('GET', encodedUrl);

        request.onreadystatechange = function() {
            if (request.response !== "") {
                // This is called even on 404 etc
                // so check the status
                if (request.status == 200) {
                    let json = JSON.parse(request.response);

                    // Resolve the promise with the response text
                    resolve(json[1][0][1]);
                } else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    reject('Rejected !' + request.status);
                }
            }
        };

        // Handle network errors
        request.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        request.send();
    });
}