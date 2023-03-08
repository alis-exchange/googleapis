// source: google/rpc/context/audit_context.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.google.rpc.context.AuditContext', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.rpc.context.AuditContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.rpc.context.AuditContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.rpc.context.AuditContext.displayName = 'proto.google.rpc.context.AuditContext';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.rpc.context.AuditContext.prototype.toObject = function(opt_includeInstance) {
  return proto.google.rpc.context.AuditContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.rpc.context.AuditContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.rpc.context.AuditContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    auditLog: msg.getAuditLog_asB64(),
    scrubbedRequest: (f = msg.getScrubbedRequest()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    scrubbedResponse: (f = msg.getScrubbedResponse()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    scrubbedResponseItemCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    targetResource: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.rpc.context.AuditContext}
 */
proto.google.rpc.context.AuditContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.rpc.context.AuditContext;
  return proto.google.rpc.context.AuditContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.rpc.context.AuditContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.rpc.context.AuditContext}
 */
proto.google.rpc.context.AuditContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAuditLog(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setScrubbedRequest(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setScrubbedResponse(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScrubbedResponseItemCount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.rpc.context.AuditContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.rpc.context.AuditContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.rpc.context.AuditContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.rpc.context.AuditContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuditLog_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getScrubbedRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getScrubbedResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getScrubbedResponseItemCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTargetResource();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bytes audit_log = 1;
 * @return {string}
 */
proto.google.rpc.context.AuditContext.prototype.getAuditLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes audit_log = 1;
 * This is a type-conversion wrapper around `getAuditLog()`
 * @return {string}
 */
proto.google.rpc.context.AuditContext.prototype.getAuditLog_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAuditLog()));
};


/**
 * optional bytes audit_log = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuditLog()`
 * @return {!Uint8Array}
 */
proto.google.rpc.context.AuditContext.prototype.getAuditLog_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAuditLog()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.rpc.context.AuditContext} returns this
 */
proto.google.rpc.context.AuditContext.prototype.setAuditLog = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional google.protobuf.Struct scrubbed_request = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.rpc.context.AuditContext.prototype.getScrubbedRequest = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.google.rpc.context.AuditContext} returns this
*/
proto.google.rpc.context.AuditContext.prototype.setScrubbedRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.rpc.context.AuditContext} returns this
 */
proto.google.rpc.context.AuditContext.prototype.clearScrubbedRequest = function() {
  return this.setScrubbedRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.rpc.context.AuditContext.prototype.hasScrubbedRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Struct scrubbed_response = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.rpc.context.AuditContext.prototype.getScrubbedResponse = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.google.rpc.context.AuditContext} returns this
*/
proto.google.rpc.context.AuditContext.prototype.setScrubbedResponse = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.rpc.context.AuditContext} returns this
 */
proto.google.rpc.context.AuditContext.prototype.clearScrubbedResponse = function() {
  return this.setScrubbedResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.rpc.context.AuditContext.prototype.hasScrubbedResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 scrubbed_response_item_count = 4;
 * @return {number}
 */
proto.google.rpc.context.AuditContext.prototype.getScrubbedResponseItemCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.rpc.context.AuditContext} returns this
 */
proto.google.rpc.context.AuditContext.prototype.setScrubbedResponseItemCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string target_resource = 5;
 * @return {string}
 */
proto.google.rpc.context.AuditContext.prototype.getTargetResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.rpc.context.AuditContext} returns this
 */
proto.google.rpc.context.AuditContext.prototype.setTargetResource = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.google.rpc.context);