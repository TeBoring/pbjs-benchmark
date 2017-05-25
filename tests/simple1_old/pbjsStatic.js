/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Test = (function() {

    function Test(properties) {
        this.nums = [];
        this.strs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Test.prototype.string = "";
    Test.prototype.uint32 = 0;
    Test.prototype.inner = null;
    Test.prototype.float = 0;
    Test.prototype.nums = $util.emptyArray;
    Test.prototype.strs = $util.emptyArray;

    Test.create = function create(properties) {
        return new Test(properties);
    };

    Test.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.string != null && message.hasOwnProperty("string"))
            writer.uint32(10).string(message.string);
        if (message.uint32 != null && message.hasOwnProperty("uint32"))
            writer.uint32(16).uint32(message.uint32);
        if (message.inner != null && message.hasOwnProperty("inner"))
            $root.Test.Inner.encode(message.inner, writer.uint32(26).fork()).ldelim();
        if (message.float != null && message.hasOwnProperty("float"))
            writer.uint32(37).float(message.float);
        if (message.nums != null && message.nums.length) {
            writer.uint32(42).fork();
            for (var i = 0; i < message.nums.length; ++i)
                writer.int32(message.nums[i]);
            writer.ldelim();
        }
        if (message.strs != null && message.strs.length)
            for (var i = 0; i < message.strs.length; ++i)
                writer.uint32(50).string(message.strs[i]);
        return writer;
    };

    Test.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Test.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.string = reader.string();
                break;
            case 2:
                message.uint32 = reader.uint32();
                break;
            case 3:
                message.inner = $root.Test.Inner.decode(reader, reader.uint32());
                break;
            case 4:
                message.float = reader.float();
                break;
            case 5:
                if (!(message.nums && message.nums.length))
                    message.nums = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.nums.push(reader.int32());
                } else
                    message.nums.push(reader.int32());
                break;
            case 6:
                if (!(message.strs && message.strs.length))
                    message.strs = [];
                message.strs.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Test.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Test.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.string != null && message.hasOwnProperty("string"))
            if (!$util.isString(message.string))
                return "string: string expected";
        if (message.uint32 != null && message.hasOwnProperty("uint32"))
            if (!$util.isInteger(message.uint32))
                return "uint32: integer expected";
        if (message.inner != null && message.hasOwnProperty("inner")) {
            var error = $root.Test.Inner.verify(message.inner);
            if (error)
                return "inner." + error;
        }
        if (message.float != null && message.hasOwnProperty("float"))
            if (typeof message.float !== "number")
                return "float: number expected";
        if (message.nums != null && message.hasOwnProperty("nums")) {
            if (!Array.isArray(message.nums))
                return "nums: array expected";
            for (var i = 0; i < message.nums.length; ++i)
                if (!$util.isInteger(message.nums[i]))
                    return "nums: integer[] expected";
        }
        if (message.strs != null && message.hasOwnProperty("strs")) {
            if (!Array.isArray(message.strs))
                return "strs: array expected";
            for (var i = 0; i < message.strs.length; ++i)
                if (!$util.isString(message.strs[i]))
                    return "strs: string[] expected";
        }
        return null;
    };

    Test.fromObject = function fromObject(object) {
        if (object instanceof $root.Test)
            return object;
        var message = new $root.Test();
        if (object.string != null)
            message.string = String(object.string);
        if (object.uint32 != null)
            message.uint32 = object.uint32 >>> 0;
        if (object.inner != null) {
            if (typeof object.inner !== "object")
                throw TypeError(".Test.inner: object expected");
            message.inner = $root.Test.Inner.fromObject(object.inner);
        }
        if (object.float != null)
            message.float = Number(object.float);
        if (object.nums) {
            if (!Array.isArray(object.nums))
                throw TypeError(".Test.nums: array expected");
            message.nums = [];
            for (var i = 0; i < object.nums.length; ++i)
                message.nums[i] = object.nums[i] | 0;
        }
        if (object.strs) {
            if (!Array.isArray(object.strs))
                throw TypeError(".Test.strs: array expected");
            message.strs = [];
            for (var i = 0; i < object.strs.length; ++i)
                message.strs[i] = String(object.strs[i]);
        }
        return message;
    };

    Test.from = Test.fromObject;

    Test.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.nums = [];
            object.strs = [];
        }
        if (options.defaults) {
            object.string = "";
            object.uint32 = 0;
            object.inner = null;
            object.float = 0;
        }
        if (message.string != null && message.hasOwnProperty("string"))
            object.string = message.string;
        if (message.uint32 != null && message.hasOwnProperty("uint32"))
            object.uint32 = message.uint32;
        if (message.inner != null && message.hasOwnProperty("inner"))
            object.inner = $root.Test.Inner.toObject(message.inner, options);
        if (message.float != null && message.hasOwnProperty("float"))
            object.float = message.float;
        if (message.nums && message.nums.length) {
            object.nums = [];
            for (var j = 0; j < message.nums.length; ++j)
                object.nums[j] = message.nums[j];
        }
        if (message.strs && message.strs.length) {
            object.strs = [];
            for (var j = 0; j < message.strs.length; ++j)
                object.strs[j] = message.strs[j];
        }
        return object;
    };

    Test.prototype.toObject = function toObject(options) {
        return this.constructor.toObject(this, options);
    };

    Test.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Test.Inner = (function() {

        function Inner(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Inner.prototype.int32 = 0;
        Inner.prototype.innerInner = null;
        Inner.prototype.outer = null;

        Inner.create = function create(properties) {
            return new Inner(properties);
        };

        Inner.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.int32 != null && message.hasOwnProperty("int32"))
                writer.uint32(8).int32(message.int32);
            if (message.innerInner != null && message.hasOwnProperty("innerInner"))
                $root.Test.Inner.InnerInner.encode(message.innerInner, writer.uint32(18).fork()).ldelim();
            if (message.outer != null && message.hasOwnProperty("outer"))
                $root.Outer.encode(message.outer, writer.uint32(26).fork()).ldelim();
            return writer;
        };

        Inner.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Inner.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test.Inner();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.int32 = reader.int32();
                    break;
                case 2:
                    message.innerInner = $root.Test.Inner.InnerInner.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.outer = $root.Outer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Inner.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Inner.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.int32 != null && message.hasOwnProperty("int32"))
                if (!$util.isInteger(message.int32))
                    return "int32: integer expected";
            if (message.innerInner != null && message.hasOwnProperty("innerInner")) {
                var error = $root.Test.Inner.InnerInner.verify(message.innerInner);
                if (error)
                    return "innerInner." + error;
            }
            if (message.outer != null && message.hasOwnProperty("outer")) {
                var error = $root.Outer.verify(message.outer);
                if (error)
                    return "outer." + error;
            }
            return null;
        };

        Inner.fromObject = function fromObject(object) {
            if (object instanceof $root.Test.Inner)
                return object;
            var message = new $root.Test.Inner();
            if (object.int32 != null)
                message.int32 = object.int32 | 0;
            if (object.innerInner != null) {
                if (typeof object.innerInner !== "object")
                    throw TypeError(".Test.Inner.innerInner: object expected");
                message.innerInner = $root.Test.Inner.InnerInner.fromObject(object.innerInner);
            }
            if (object.outer != null) {
                if (typeof object.outer !== "object")
                    throw TypeError(".Test.Inner.outer: object expected");
                message.outer = $root.Outer.fromObject(object.outer);
            }
            return message;
        };

        Inner.from = Inner.fromObject;

        Inner.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.int32 = 0;
                object.innerInner = null;
                object.outer = null;
            }
            if (message.int32 != null && message.hasOwnProperty("int32"))
                object.int32 = message.int32;
            if (message.innerInner != null && message.hasOwnProperty("innerInner"))
                object.innerInner = $root.Test.Inner.InnerInner.toObject(message.innerInner, options);
            if (message.outer != null && message.hasOwnProperty("outer"))
                object.outer = $root.Outer.toObject(message.outer, options);
            return object;
        };

        Inner.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        Inner.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Inner.InnerInner = (function() {

            function InnerInner(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            InnerInner.prototype.long = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            InnerInner.prototype["enum"] = 0;
            InnerInner.prototype.sint32 = 0;

            InnerInner.create = function create(properties) {
                return new InnerInner(properties);
            };

            InnerInner.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.long != null && message.hasOwnProperty("long"))
                    writer.uint32(8).int64(message.long);
                if (message["enum"] != null && message.hasOwnProperty("enum"))
                    writer.uint32(16).uint32(message["enum"]);
                if (message.sint32 != null && message.hasOwnProperty("sint32"))
                    writer.uint32(24).sint32(message.sint32);
                return writer;
            };

            InnerInner.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            InnerInner.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test.Inner.InnerInner();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.long = reader.int64();
                        break;
                    case 2:
                        message["enum"] = reader.uint32();
                        break;
                    case 3:
                        message.sint32 = reader.sint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            InnerInner.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            InnerInner.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.long != null && message.hasOwnProperty("long"))
                    if (!$util.isInteger(message.long) && !(message.long && $util.isInteger(message.long.low) && $util.isInteger(message.long.high)))
                        return "long: integer|Long expected";
                if (message["enum"] != null && message.hasOwnProperty("enum"))
                    switch (message["enum"]) {
                    default:
                        return "enum: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.sint32 != null && message.hasOwnProperty("sint32"))
                    if (!$util.isInteger(message.sint32))
                        return "sint32: integer expected";
                return null;
            };

            InnerInner.fromObject = function fromObject(object) {
                if (object instanceof $root.Test.Inner.InnerInner)
                    return object;
                var message = new $root.Test.Inner.InnerInner();
                if (object.long != null)
                    if ($util.Long)
                        (message.long = $util.Long.fromValue(object.long)).unsigned = false;
                    else if (typeof object.long === "string")
                        message.long = parseInt(object.long, 10);
                    else if (typeof object.long === "number")
                        message.long = object.long;
                    else if (typeof object.long === "object")
                        message.long = new $util.LongBits(object.long.low >>> 0, object.long.high >>> 0).toNumber();
                switch (object["enum"]) {
                case "ONE":
                case 0:
                    message["enum"] = 0;
                    break;
                case "TWO":
                case 1:
                    message["enum"] = 1;
                    break;
                case "THREE":
                case 2:
                    message["enum"] = 2;
                    break;
                case "FOUR":
                case 3:
                    message["enum"] = 3;
                    break;
                case "FIVE":
                case 4:
                    message["enum"] = 4;
                    break;
                }
                if (object.sint32 != null)
                    message.sint32 = object.sint32 | 0;
                return message;
            };

            InnerInner.from = InnerInner.fromObject;

            InnerInner.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.long = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.long = options.longs === String ? "0" : 0;
                    object["enum"] = options.enums === String ? "ONE" : 0;
                    object.sint32 = 0;
                }
                if (message.long != null && message.hasOwnProperty("long"))
                    if (typeof message.long === "number")
                        object.long = options.longs === String ? String(message.long) : message.long;
                    else
                        object.long = options.longs === String ? $util.Long.prototype.toString.call(message.long) : options.longs === Number ? new $util.LongBits(message.long.low >>> 0, message.long.high >>> 0).toNumber() : message.long;
                if (message["enum"] != null && message.hasOwnProperty("enum"))
                    object["enum"] = options.enums === String ? $root.Test.Enum[message["enum"]] : message["enum"];
                if (message.sint32 != null && message.hasOwnProperty("sint32"))
                    object.sint32 = message.sint32;
                return object;
            };

            InnerInner.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            InnerInner.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return InnerInner;
        })();

        return Inner;
    })();

    Test.Enum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ONE"] = 0;
        values[valuesById[1] = "TWO"] = 1;
        values[valuesById[2] = "THREE"] = 2;
        values[valuesById[3] = "FOUR"] = 3;
        values[valuesById[4] = "FIVE"] = 4;
        return values;
    })();

    return Test;
})();

$root.Outer = (function() {

    function Outer(properties) {
        this.bool = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Outer.prototype.bool = $util.emptyArray;
    Outer.prototype.double = 0;

    Outer.create = function create(properties) {
        return new Outer(properties);
    };

    Outer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bool != null && message.bool.length) {
            writer.uint32(10).fork();
            for (var i = 0; i < message.bool.length; ++i)
                writer.bool(message.bool[i]);
            writer.ldelim();
        }
        if (message.double != null && message.hasOwnProperty("double"))
            writer.uint32(17).double(message.double);
        return writer;
    };

    Outer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Outer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Outer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.bool && message.bool.length))
                    message.bool = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.bool.push(reader.bool());
                } else
                    message.bool.push(reader.bool());
                break;
            case 2:
                message.double = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Outer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Outer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.bool != null && message.hasOwnProperty("bool")) {
            if (!Array.isArray(message.bool))
                return "bool: array expected";
            for (var i = 0; i < message.bool.length; ++i)
                if (typeof message.bool[i] !== "boolean")
                    return "bool: boolean[] expected";
        }
        if (message.double != null && message.hasOwnProperty("double"))
            if (typeof message.double !== "number")
                return "double: number expected";
        return null;
    };

    Outer.fromObject = function fromObject(object) {
        if (object instanceof $root.Outer)
            return object;
        var message = new $root.Outer();
        if (object.bool) {
            if (!Array.isArray(object.bool))
                throw TypeError(".Outer.bool: array expected");
            message.bool = [];
            for (var i = 0; i < object.bool.length; ++i)
                message.bool[i] = Boolean(object.bool[i]);
        }
        if (object.double != null)
            message.double = Number(object.double);
        return message;
    };

    Outer.from = Outer.fromObject;

    Outer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.bool = [];
        if (options.defaults)
            object.double = 0;
        if (message.bool && message.bool.length) {
            object.bool = [];
            for (var j = 0; j < message.bool.length; ++j)
                object.bool[j] = message.bool[j];
        }
        if (message.double != null && message.hasOwnProperty("double"))
            object.double = message.double;
        return object;
    };

    Outer.prototype.toObject = function toObject(options) {
        return this.constructor.toObject(this, options);
    };

    Outer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Outer;
})();

module.exports = $root;
