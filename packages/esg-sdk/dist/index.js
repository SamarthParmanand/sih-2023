"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsgSDK = exports.FileModel = exports.FileContent = exports.FileComment = exports.Administrator = exports.updateFile = exports.getFileContent = exports.fetchFiles = exports.deleteFile = exports.createFile = void 0;
var create_file_1 = require("src/methods/create_file");
Object.defineProperty(exports, "createFile", { enumerable: true, get: function () { return __importDefault(create_file_1).default; } });
var delete_file_1 = require("src/methods/delete_file");
Object.defineProperty(exports, "deleteFile", { enumerable: true, get: function () { return __importDefault(delete_file_1).default; } });
var fetch_files_1 = require("src/methods/fetch_files");
Object.defineProperty(exports, "fetchFiles", { enumerable: true, get: function () { return __importDefault(fetch_files_1).default; } });
var get_file_content_1 = require("src/methods/get_file_content");
Object.defineProperty(exports, "getFileContent", { enumerable: true, get: function () { return __importDefault(get_file_content_1).default; } });
var update_file_1 = require("src/methods/update_file");
Object.defineProperty(exports, "updateFile", { enumerable: true, get: function () { return __importDefault(update_file_1).default; } });
var administrator_1 = require("src/models/administrator");
Object.defineProperty(exports, "Administrator", { enumerable: true, get: function () { return administrator_1.Administrator; } });
var file_comment_1 = require("src/models/file_comment");
Object.defineProperty(exports, "FileComment", { enumerable: true, get: function () { return file_comment_1.FileComment; } });
var file_content_1 = require("src/models/file_content");
Object.defineProperty(exports, "FileContent", { enumerable: true, get: function () { return file_content_1.FileContent; } });
var file_model_1 = require("src/models/file_model");
Object.defineProperty(exports, "FileModel", { enumerable: true, get: function () { return file_model_1.FileModel; } });
var sdk_1 = require("./src/sdk");
Object.defineProperty(exports, "EsgSDK", { enumerable: true, get: function () { return __importDefault(sdk_1).default; } });
