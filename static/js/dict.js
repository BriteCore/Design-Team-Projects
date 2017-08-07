function KeyValuePair(key, value) {
    this.key = key;
    this.value = value;
}

var Dictionary = (function () {
    function Dictionary() {
        this.hash = {};
    }
    Dictionary.fromKeyValuePairArray = function (items) {
        var result = new Dictionary();
        items.forEach(function (kv) { return result.addOrUpdate(kv.key, kv.value); });
        return result;
    };
    Dictionary.fromCollection = function (items, propertyExtractor) {
        var result = new Dictionary();
        items.forEach(function (r) { return result.addOrUpdate(propertyExtractor(r), r); });
        return result;
    };
    Dictionary.fromCollectionCustom = function (items, propertyExtractor, valueExtractor) {
        var result = new Dictionary();
        items.forEach(function (r) { return result.addOrUpdate(propertyExtractor(r), valueExtractor(r)); });
        return result;
    };
    Dictionary.fromCollectionIndexed = function (items, propertyExtractor, valueExtractor) {
        var result = new Dictionary();
        items.forEach(function (r, i) { return result.addOrUpdate(propertyExtractor(r, i), valueExtractor(r, i)); });
        return result;
    };
    Dictionary.fromCollectionToConcat = function (items, propertyExtractor, valueExtractor) {
        var result = new Dictionary();
        items.forEach(function (r, i) { return result.addOrConcat(propertyExtractor(r, i), valueExtractor(r, i)); });
        return result;
    };
    Dictionary.prototype.sum = function (key, value) {
        if (key in this.hash) {
            this.hash[key] += value;
        }
        else {
            this.hash[key] = value;
        }
    };
    Dictionary.prototype.merge = function (anotherDictionary) {
        var _this = this;
        anotherDictionary.keys().forEach(function (key) {
            _this.addOrUpdate(key, anotherDictionary.get(key));
        });
    };
    Dictionary.prototype.addOrUpdate = function (key, value) {
        this.hash[key] = value;
    };
    Dictionary.prototype.addOrConcat = function (key, value) {
        if (typeof(this.hash[key]) == "undefined") this.hash[key] = [];
        this.hash[key].push(value);
    };
    Dictionary.prototype.addNested = function (keys, value) {
        var key = keys[0];
        if (keys.length === 1) {
            this.hash[key] = value;
        }
        else {
            if (typeof this.hash[key] === "undefined") {
                this.hash[key] = new Dictionary();
            }
            this.hash[key].addNested(keys.slice(1), value);
        }
    };
    Dictionary.prototype.sumNested = function (keys, value) {
        var key = keys[0];
        if (keys.length === 1) {
            this.hash[key] = (this.hash[key] || 0) + value;
        }
        else {
            if (typeof this.hash[key] === "undefined") {
                this.hash[key] = new Dictionary();
            }
            this.hash[key].sumNested(keys.slice(1), value);
        }
    };
    Dictionary.prototype.forEach = function (fn) {
        for (var key in this.hash) {
            fn(key, this.hash[key]);
        }
    };
    Dictionary.prototype.forEachNested = function (fn, context, levels, depth) {
        if (depth === void 0) { depth = 0; }
        for (var key in this.hash) {
            var childContext = fn(key, this.hash[key], context, depth);
            if (depth + 1 < levels) {
                this.hash[key].forEachNested(fn, childContext, levels, depth + 1);
            }
        }
    };
    Dictionary.prototype.remove = function (key) {
        delete this.hash[key];
    };
    Dictionary.prototype.clear = function () {
        var _this = this;
        Object.keys(this.hash).forEach(function (k) {
            delete _this.hash[k];
        }, this);
    };
    Dictionary.prototype.keys = function () {
        return Object.keys(this.hash);
    };
    Dictionary.prototype.values = function () {
        var _this = this;
        return Object.keys(this.hash).map(function (key) { return _this.hash[key]; });
    };
    Dictionary.prototype.count = function () {
        return Object.keys(this.hash).length;
    };
    Dictionary.prototype.containsKey = function (key) {
        return (typeof this.hash[key]) !== "undefined";
    };
    Dictionary.prototype.get = function (key) {
        return this.hash[key];
    };
    Dictionary.prototype.getOrDefault = function (key, defaultValue) {
        var item = this.hash[key];
        return typeof item !== "undefined" ? item : defaultValue;
    };
    Dictionary.prototype.items = function () {
        var _this = this;
        var result = [];
        Object.keys(this.hash).forEach(function (key) {
            result.push({ key: key, value: _this.hash[key] });
        }, this);
        return result;
    };
    Dictionary.prototype.getInverted = function () {
        var _this = this;
        var output = new Dictionary();
        Object.keys(this.hash).forEach(function (key) {
            output.addOrUpdate(_this.hash[key], key);
        }, this);
        return output;
    };
    Dictionary.prototype.itemsInverted = function () {
        var _this = this;
        var result = [];
        Object.keys(this.hash).forEach(function (key) {
            result.push({ key: _this.hash[key], value: key });
        }, this);
        return result;
    };
    return Dictionary;
}());