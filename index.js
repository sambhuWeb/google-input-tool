'use strict';

/**
 *
 * @param request               new XMLHttpRequest()
 * @param sourceText            Source text to be transliterated.
 * @param inputLanguageCode     Language code, for e.g. ne-t-i0-und for Nepal.
 * @param maxResult             Max number of transliterated results.
 * @return {Promise<any>}
 */
module.exports = function(request, sourceText, inputLanguageCode, maxResult) {
    return new Promise(function(resolve, reject) {
        /*
         * Match all alphanumeric with latin characters
         */
        const alphanumericWithLatin = sourceText.match(/[A-Za-z0-9\u00C0-\u024F\u1E00-\u1EFF]+/);

        if (alphanumericWithLatin === null) {
            return;
        }

        const alphaNumText = alphanumericWithLatin[0];
        const sourceTextParts = sourceText.split(alphaNumText);
        const firstPartBeforeText = sourceTextParts[0];
        const lastPartAfterText = sourceTextParts[1];

        let encodedUrl = encodeURI(
            'https://inputtools.google.com/request?text='
            + alphaNumText
            + '&itc='
            + inputLanguageCode
            + '&num='
            + maxResult
            + '&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage'
        );

        // Do the usual XHR stuff
        request.open('GET', encodedUrl);

        request.onreadystatechange = function () {

            // Notice state will be 1, 2, 3, 4 (done) on enabling following console.
            // console.log('request readyState', request.readyState);

            /**
             * The thing about promise resolution is that once rejected or resolved,
             * it cannot be rejected or resolved again
             *
             * The first time onreadystatechange gets called, the status would be 1, not 4 ... so you reject
             * you should only reject if readyState is 4 (DONE) AND status != 200
             */
            if (request.readyState === request.DONE) {
                if (request.status === 200) {
                    /**
                     * request.response returning following error on test:
                     *      Uncaught TypeError: Cannot read property 'responseText' of undefined
                     *
                     * Therefore, using this.responseTest
                     */
                    const responseJson = JSON.parse(this.responseText);

                    if (typeof responseJson[1] === 'undefined' || typeof responseJson[1][0] === 'undefined') {
                        return;
                    }

                    const responseList = responseJson[1][0][1];

                    /**
                     * return the response after putting back the first and last part of the text
                     */
                    resolve(responseList.map(response => {
                        return [
                            firstPartBeforeText + response + lastPartAfterText,
                            response
                        ];
                    }));
                } else {

                    /**
                     * readyState is 4 (done) and status code is not 200
                     */
                    reject('Rejected status code: ' + request.status);
                }
            }
        };

        request.onerror = function() {
            reject(Error('Network Error'));
        };

        request.send();
    });
};
