"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
let server;
const port = 5000;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb+srv://jubayerCodes:ud9opppHHaMpb9Cu@cluster0.opkciwj.mongodb.net/");
        server = app_1.default.listen(port, () => {
            // eslint-disable-next-line no-console
            console.log(`Server is running on port ${port}`);
        });
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
});
startServer();
// Unhandled Promise Rejection
process.on("unhandledRejection", () => {
    // eslint-disable-next-line no-console
    console.log("Unhandled Rejection is detected, we are closing our server");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// Uncaught Exception Error
process.on("uncaughtException", () => {
    // eslint-disable-next-line no-console
    console.log("Uncaught Exception is detected, we are closing our server");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// SIGTERM
process.on("SIGTERM", () => {
    // eslint-disable-next-line no-console
    console.log("SIGTERM is received, we are closing our server");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// SIGINT
process.on("SIGINT", () => {
    // eslint-disable-next-line no-console
    console.log("SIGINT is received, we are closing our server");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
