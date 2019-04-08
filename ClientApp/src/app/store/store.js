"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var Store = /** @class */ (function () {
    function Store(initialState) {
        this._state$ = new rxjs_1.BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    Object.defineProperty(Store.prototype, "state", {
        get: function () {
            return this._state$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.setState = function (nextState) {
        this._state$.next(nextState);
    };
    return Store;
}());
exports.Store = Store;
//# sourceMappingURL=store.js.map