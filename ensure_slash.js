(function () {
    var maybeAppendSlash = function (url) {
        if (url[url.length-1] !== "/") {
            url += '/';
        }
        return url;
    };

    var ensureTrailingSlash = function (url) {
        var parser = document.createElement('a');
        parser.href = url;
        parser.pathname = maybeAppendSlash(parser.pathname);
        return parser.href;
    };

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!this.crossDomain) {
                settings.url = ensureTrailingSlash(settings.url);
            }
        }
    });

})();
