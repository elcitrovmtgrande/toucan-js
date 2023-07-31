"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toucan = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
class Toucan {
    constructor(value, config) {
        this.token = '';
        this.data = {
            iat: -1,
            exp: 0,
        };
        this.is_jwt = false;
        this.is_valid = false;
        this.value = value;
        this.config = config;
        this._init();
    }
    isAuthentic() {
        var _a;
        try {
            if (typeof this.value === 'string') {
                const data = jsonwebtoken_1.default.verify(this.value, ((_a = this.config) === null || _a === void 0 ? void 0 : _a.secret) || 'We love Toucan !');
                if (typeof data === 'object') {
                    return true;
                }
                return false;
            }
            return false;
        }
        catch (e) {
            return false;
        }
    }
    isJWT() {
        return this.is_jwt;
    }
    isValid() {
        var _a;
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.exp) > this._10(new Date().getTime())) {
            this.is_valid = true;
            return this.is_valid;
        }
        this.is_valid = false;
        return this.is_valid;
    }
    isExpired() {
        var _a;
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.exp) > this._10(new Date().getTime())) {
            this.is_valid = true;
            return !this.is_valid;
        }
        this.is_valid = false;
        return !this.is_valid;
    }
    getInput() {
        return this.value;
    }
    getConfig() {
        return this.config;
    }
    getToken() {
        return this.token;
    }
    getPayload() {
        return this.data;
    }
    _init() {
        var _a, _b, _c;
        if (typeof this.value === 'string') {
            try {
                const data = (0, jwt_decode_1.default)(this.value);
                if (data && typeof data === 'object') {
                    this.data = data;
                    this.token = this.value;
                    this.is_jwt = true;
                    if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.exp) > this._10(new Date().getTime())) {
                        this.is_valid = true;
                    }
                }
            }
            catch (e) {
                console.log(`[${new Date().toJSON()}:Toucan] >>> Oh no ! Toucan can only read real tokens... (provided value: ${this.value})`);
            }
        }
        if (typeof this.value === 'object') {
            this.token = jsonwebtoken_1.default.sign(this.value, ((_b = this.config) === null || _b === void 0 ? void 0 : _b.secret) || 'We love Toucan !', { expiresIn: ((_c = this.config) === null || _c === void 0 ? void 0 : _c.expiresIn) || 3600 });
            this.data = this.value;
            this.is_jwt = true;
        }
    }
    _10(number) {
        const numAsString = number.toString();
        const firstTenDigits = numAsString.slice(0, 10);
        return parseInt(firstTenDigits, 10);
    }
}
exports.Toucan = Toucan;
exports.default = Toucan;
