/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobuf"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.Msg = (function() {
    
        /**
         * Properties of a Msg.
         * @typedef Msg$Properties
         * @type {Object}
         * @property {Array.<number>} [nums] Msg nums.
         */
    
        /**
         * Constructs a new Msg.
         * @exports Msg
         * @constructor
         * @param {Msg$Properties=} [properties] Properties to set
         */
        function Msg(properties) {
            this.nums = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Msg nums.
         * @type {Array.<number>}
         */
        Msg.prototype.nums = $util.emptyArray;
    
        /**
         * Creates a new Msg instance using the specified properties.
         * @param {Msg$Properties=} [properties] Properties to set
         * @returns {Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };
    
        /**
         * Encodes the specified Msg message. Does not implicitly {@link Msg.verify|verify} messages.
         * @param {Msg$Properties} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nums != null && message.nums.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.nums.length; ++i)
                    writer.int32(message.nums[i]);
                writer.ldelim();
            }
            return writer;
        };
    
        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link Msg.verify|verify} messages.
         * @param {Msg$Properties} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Msg message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nums != null && message.hasOwnProperty("nums")) {
                if (!Array.isArray(message.nums))
                    return "nums: array expected";
                for (var i = 0; i < message.nums.length; ++i)
                    if (!$util.isInteger(message.nums[i]))
                        return "nums: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {Msg} Msg
         */
        Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.Msg)
                return object;
            var message = new $root.Msg();
            if (object.nums) {
                if (!Array.isArray(object.nums))
                    throw TypeError(".Msg.nums: array expected");
                message.nums = [];
                for (var i = 0; i < object.nums.length; ++i)
                    message.nums[i] = object.nums[i] | 0;
            }
            return message;
        };
    
        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Msg.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Msg} Msg
         */
        Msg.from = Msg.fromObject;
    
        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @param {Msg} message Msg
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nums = [];
            if (message.nums && message.nums.length) {
                object.nums = [];
                for (var j = 0; j < message.nums.length; ++j)
                    object.nums[j] = message.nums[j];
            }
            return object;
        };
    
        /**
         * Creates a plain object from this Msg message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this Msg to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Msg;
    })();

    return $root;
});
