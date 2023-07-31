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
        this.data = { iat: -1, exp: 0, };
        this.is_jwt = false;
        this.is_valid = false;
        this.default_secret = 'We love Toucan !';
        this.default_expiresIn = 3600;
        this.value = value;
        this.config = config;
        this._init();
    }
    isAuthentic() {
        var _a;
        try {
            if (typeof this.token === 'string') {
                const data = jsonwebtoken_1.default.verify(this.token, ((_a = this.config) === null || _a === void 0 ? void 0 : _a.secret) || this.default_secret);
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
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.exp) && this.data.exp > this._10(new Date().getTime())) {
            this.is_valid = true;
            return this.is_valid;
        }
        this.is_valid = false;
        return this.is_valid;
    }
    isExpired() {
        var _a;
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.exp) && this.data.exp > this._10(new Date().getTime())) {
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
        const _e = `[${new Date().toJSON()}:Toucan] >>> Oh no ! Toucan can only read real tokens... (provided value: ${this.value})`;
        // If initial param is a JWT
        if (typeof this.value === 'string') {
            try {
                const data = (0, jwt_decode_1.default)(this.value);
                if (data && typeof data === 'object') {
                    this.data = data;
                    this.token = this.value;
                    this.is_jwt = true;
                    if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.exp) && this.data.exp > this._10(new Date().getTime())) {
                        this.is_valid = true;
                    }
                }
            }
            catch (e) {
                console.log(_e);
                throw new Error(_e);
            }
        }
        else if (typeof this.value === 'object') {
            const token = jsonwebtoken_1.default.sign(this.value, ((_b = this.config) === null || _b === void 0 ? void 0 : _b.secret) || this.default_secret, { expiresIn: ((_c = this.config) === null || _c === void 0 ? void 0 : _c.expiresIn) || this.default_expiresIn });
            const data = (0, jwt_decode_1.default)(token);
            this.token = token;
            this.data = data;
            this.is_jwt = true;
        }
        else {
            const error = `[${new Date().toJSON()}:Toucan] >>> Oh no ! Toucan can only read real tokens... (provided value: ${this.value})`;
            console.log(_e);
            throw new Error(_e);
        }
    }
    _10(number) {
        const numAsString = number.toString();
        const firstTenDigits = numAsString.slice(0, 10);
        return parseInt(firstTenDigits, 10);
    }
}
exports.Toucan = Toucan;
;
exports.default = Toucan;
