"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_joi_1 = require("../joi/login.joi");
const loginDriverController_1 = __importDefault(require("../controllers/user/loginDriverController"));
const loginUserController_1 = __importDefault(require("../controllers/user/loginUserController"));
const registerController_1 = __importDefault(require("../controllers/user/registerController"));
const validateRequest_1 = require("../middlewares/validateRequest");
const register_joi_1 = require("../joi/register.joi");
const express_1 = require("express");
const userRouters = (0, express_1.Router)();
userRouters.post("/login", (0, validateRequest_1.validateRequest)(login_joi_1.LoginStudentInputSchema), loginUserController_1.default);
userRouters.post("/login/driver", (0, validateRequest_1.validateRequest)(login_joi_1.LoginDriverInputSchema), loginDriverController_1.default);
userRouters.post("/register", (0, validateRequest_1.validateRequest)(register_joi_1.RegisterInputSchema), registerController_1.default);
exports.default = userRouters;
//# sourceMappingURL=user.router.js.map