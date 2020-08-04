"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var crypto_1 = __importDefault(require("crypto"));
var multer_s3_1 = __importDefault(require("multer-s3"));
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var storageTypes = {
    local: multer_1.default.diskStorage({
        destination: function (req, file, callback) {
            callback(null, path_1.default.resolve(__dirname, '..', 'uploads'));
        },
        filename: function (req, file, cb) {
            crypto_1.default.randomBytes(16, function (err, hash) {
                if (err)
                    cb(err);
                file.key = hash.toString('hex') + "-" + file.originalname;
                cb(null, file.key);
            });
        }
    }),
    s3: multer_s3_1.default({
        s3: new aws_sdk_1.default.S3(),
        bucket: 'emprel-storage',
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: function (req, file, callback) {
            crypto_1.default.randomBytes(16, function (err, hash) {
                if (err) {
                    callback(err);
                }
                var filename = hash.toString('hex') + "-" + file.originalname;
                callback(null, filename);
            });
        }
    })
};
module.exports = {
    dest: path_1.default.resolve(__dirname, '..', 'uploads'),
    storage: storageTypes["s3"],
    limits: {
        fileSize: 4 * 1024 * 1024
    },
    fileFilter: function (req, file, cb) {
        var allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif"
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('Formato de arquivo invalido'));
        }
    }
};
