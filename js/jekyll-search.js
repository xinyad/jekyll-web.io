!function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                throw new Error("Cannot find module '" + o + "'");
            }
            var f = n[o] = { exports: {} };
            t[o][0].call(f.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
    return s;
}({
    1: [function(require, module) {
        module.exports = function() {
            function receivedResponse(xhr) {
                return 200 == xhr.status && 4 == xhr.readyState;
            }
            function handleResponse(xhr, callback) {
                xhr.onreadystatechange = function() {
                    if (receivedResponse(xhr)) {
                        try {
                            callback(null, JSON.parse(xhr.responseText));
                        } catch (err) {
                            callback(err, null);
                        }
                    }
                };
            }
            var self = this;
            self.load = function(location, callback) {
                var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                xhr.open("GET", location, !0);
                handleResponse(xhr, callback);
                xhr.send();
            };
        };
    }, {}],

    2: [function(require, module) {
        function FuzzySearchStrategy() {
            function createFuzzyRegExpFromString(string) {
                // Create a fuzzy regex but stricter to match closely
                return new RegExp(string.split("").join(".{0,1}"), "gi");
            }
            var self = this;
            self.matches = function(string, crit) {
                return "string" != typeof string ? !1 : (string = string.trim(), !!string.match(createFuzzyRegExpFromString(crit)));
            };
        }
        module.exports = new FuzzySearchStrategy();
    }, {}],

    3: [function(require, module) {
        function LiteralSearchStrategy() {
            function doMatch(string, crit) {
                return string.toLowerCase().indexOf(crit.toLowerCase()) >= 0;
            }
            var self = this;
            self.matches = function(string, crit) {
                return "string" != typeof string ? !1 : (string = string.trim(), doMatch(string, crit));
            };
        }
        module.exports = new LiteralSearchStrategy();
    }, {}],

    4: [function(require, module) {
        module.exports = function() {
            function findMatches(store, crit, strategy) {
                var data = store.get();
                for (var i = 0; i < data.length && matches.length < limit; i++) {
                    findMatchesInObject(data[i], crit, strategy);
                }
                return matches;
            }
            function findMatchesInObject(obj, crit, strategy) {
                for (var key in obj) {
                    if (strategy.matches(obj[key], crit)) {
                        matches.push(obj);
                        break;
                    }
                }
            }
            function getSearchStrategy() {
                return fuzzy ? fuzzySearchStrategy : literalSearchStrategy;
            }
            var self = this,
                matches = [],
                fuzzy = !1,
                limit = 10,
                fuzzySearchStrategy = require("./SearchStrategies/fuzzy"),
                literalSearchStrategy = require("./SearchStrategies/literal");
            self.setFuzzy = function(_fuzzy) {
                fuzzy = !!_fuzzy;
            };
            self.setLimit = function(_limit) {
                limit = parseInt(_limit, 10) || limit;
            };
            self.search = function(data, crit) {
                return crit ? (matches.length = 0, findMatches(data, crit, getSearchStrategy())) : [];
            };
        };
    }, {"./SearchStrategies/fuzzy": 2, "./SearchStrategies/literal": 3}],

    5: [function(require, module) {
        module.exports = function(_store) {
            function isObject(obj) {
                return !!obj && "[object Object]" == Object.prototype.toString.call(obj);
            }
            function isArray(obj) {
                return !!obj && "[object Array]" == Object.prototype.toString.call(obj);
            }
            function addObject(data) {
                store.push(data);
                return data;
            }
            function addArray(data) {
                var added = [];
                for (var i = 0; i < data.length; i++) {
                    isObject(data[i]) && added.push(addObject(data[i]));
                }
                return added;
            }
            var self = this,
                store = [];
            isArray(_store) && addArray(_store);
            self.clear = function() {
                store.length = 0;
                return store;
            };
            self.get = function() {
                return store;
            };
            self.put = function(data) {
                return isObject(data) ? addObject(data) : isArray(data) ? addArray(data) : void 0;
            };
        };
    }, {}],

    6: [function(require, module) {
        module.exports = function() {
            var self = this,
                templatePattern = /\{(.*?)\}/g;
            self.setTemplatePattern = function(newTemplatePattern) {
                templatePattern = newTemplatePattern;
            };
            self.render = function(t, data) {
                return t.replace(templatePattern, function(match, prop) {
                    return data[prop] || match;
                });
            };
        };
    }, {}],

    7: [function(require) {
        !function(window) {
            var searchKeyword = ''; // Global variable to hold the current search keyword
            const resultsContainer = document.querySelector('#results-container');
            "use strict";
            
            // Utility function to safely add the 'highlight' parameter to the URL
            function addHighlightToUrl(url, keyword) {
                // If the URL already contains '?highlight=', don't add it again
                if (url.includes('?highlight=')) {
                    // If it does, replace the existing highlight parameter with the new one
                    const updatedUrl = url.replace(/highlight=[^&]*/, `highlight=${encodeURIComponent(keyword)}`);
                    return updatedUrl;
                } else {
                    // Append the highlight parameter with the full search keyword
                    return url + '?highlight=' + encodeURIComponent(keyword);
                }
            }

            // Utility function to debounce input handling
            function debounce(func, wait) {
                let timeout;
                return function(...args) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func.apply(this, args), wait);
                };
            }

            function SimpleJekyllSearch() {
                function initWithJSON() {
                    store.put(opt.dataSource);
                    registerInput();
                }
                
                function initWithURL(url) {
                    jsonLoader.load(url, function(err, json) {
                        if (err) throwError("failed to get JSON (" + url + ")");
                        else {
                            if (searchKeyword) {
                                json = json.map(item => {
                                    if (item.url) {
                                        // Use the utility function to add the highlight parameter safely
                                        item.url = addHighlightToUrl(item.url, searchKeyword);
                                    }
                                    return item;
                                });
                            }
                            
                            store.put(json);
                            registerInput();
                        }
                    });
                }

                function throwError(message) {
                    throw new Error("SimpleJekyllSearch --- " + message);
                }

                function validateOptions(_opt) {
                    for (var i = 0; i < requiredOptions.length; i++) {
                        var req = requiredOptions[i];
                        if (!_opt[req]) throwError("You must specify a " + req);
                    }
                }

                function assignOptions(_opt) {
                    for (var option in opt) opt[option] = _opt[option] || opt[option];
                }

                function isJSON(json) {
                    try {
                        return json instanceof Object && JSON.parse(JSON.stringify(json));
                    } catch (e) {
                        return !1;
                    }
                }

                function emptyResultsContainer() {
                    opt.resultsContainer.innerHTML = "";
                }

                function appendToResultsContainer(text) {
                    opt.resultsContainer.innerHTML += text;
                }

                function registerInput() {
                    opt.searchInput.addEventListener("keyup", debounce(function(e) {
                        searchKeyword = e.target.value.trim(); // Capture the full search keyword
                        console.log("Captured search keyword:", searchKeyword); // Debugging: Check the captured keyword
                        
                        if (searchKeyword.length === 0) {
                            emptyResultsContainer();
                        } else {
                            const searchResults = searcher.search(store, searchKeyword);
                            render(searchResults);
                        }
                    }, 300)); // Debounce for 300ms
                }

                function render(results) {
                    const resultsContainer = document.getElementById('results-container');
                    
                    if (resultsContainer) {
                        // Clear existing results
                        resultsContainer.innerHTML = '';
                        
                        results.forEach(function(result) {
                            // If there's a search keyword, use the utility function to safely add it
                            if (searchKeyword && result.url) {
                                result.url = addHighlightToUrl(result.url, searchKeyword);
                                console.log("Constructed URL with highlight:", result.url); // Debugging: Check the URL construction
                            }

                            // Construct the result HTML
                            const resultHTML = `<li><a href="${result.url}" title="${result.desc}">${result.title}</a></li>`;
                            
                            // Append the result to the container
                            resultsContainer.innerHTML += resultHTML;
                        });
                    }
                }
                
                var self = this,
                    requiredOptions = ["searchInput", "resultsContainer", "dataSource"],
                    opt = {
                        searchInput: null,
                        resultsContainer: null,
                        dataSource: [],
                        searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
                        noResultsText: "No results found",
                        limit: 10,
                        fuzzy: !1
                    };
                self.init = function(_opt) {
                    validateOptions(_opt);
                    assignOptions(_opt);
                    isJSON(opt.dataSource) ? initWithJSON(opt.dataSource) : initWithURL(opt.dataSource);
                };
                
            }

            var Searcher = require("./Searcher"),
                Templater = require("./Templater"),
                Store = require("./Store"),
                JSONLoader = require("./JSONLoader"),
                searcher = new Searcher,
                templater = new Templater,
                store = new Store,
                jsonLoader = new JSONLoader;
            window.SimpleJekyllSearch = new SimpleJekyllSearch;
        }(window, document);
    }, {"./JSONLoader": 1, "./Searcher": 4, "./Store": 5, "./Templater": 6}]
}, {}, [7]);