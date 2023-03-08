// source: google/iam/admin/v1/audit_data.proto
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

goog.exportSymbol('proto.google.iam.admin.v1.AuditData', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.AuditData.PermissionDelta', null, global);
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
proto.google.iam.admin.v1.AuditData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.AuditData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.AuditData.displayName = 'proto.google.iam.admin.v1.AuditData';
}
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
proto.google.iam.admin.v1.AuditData.PermissionDelta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.admin.v1.AuditData.PermissionDelta.repeatedFields_, null);
};
goog.inherits(proto.google.iam.admin.v1.AuditData.PermissionDelta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.AuditData.PermissionDelta.displayName = 'proto.google.iam.admin.v1.AuditData.PermissionDelta';
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
proto.google.iam.admin.v1.AuditData.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.AuditData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.AuditData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.AuditData.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionDelta: (f = msg.getPermissionDelta()) && proto.google.iam.admin.v1.AuditData.PermissionDelta.toObject(includeInstance, f)
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
 * @return {!proto.google.iam.admin.v1.AuditData}
 */
proto.google.iam.admin.v1.AuditData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.AuditData;
  return proto.google.iam.admin.v1.AuditData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.AuditData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.AuditData}
 */
proto.google.iam.admin.v1.AuditData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.admin.v1.AuditData.PermissionDelta;
      reader.readMessage(value,proto.google.iam.admin.v1.AuditData.PermissionDelta.deserializeBinaryFromReader);
      msg.setPermissionDelta(value);
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
proto.google.iam.admin.v1.AuditData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.AuditData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.AuditData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.AuditData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionDelta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.iam.admin.v1.AuditData.PermissionDelta.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.repeatedFields_ = [1,2];



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
proto.google.iam.admin.v1.AuditData.PermissionDelta.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.AuditData.PermissionDelta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.AuditData.PermissionDelta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.toObject = function(includeInstance, msg) {
  var f, obj = {
    addedPermissionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    removedPermissionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.google.iam.admin.v1.AuditData.PermissionDelta}
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.AuditData.PermissionDelta;
  return proto.google.iam.admin.v1.AuditData.PermissionDelta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.AuditData.PermissionDelta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.AuditData.PermissionDelta}
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddedPermissions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRemovedPermissions(value);
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
proto.google.iam.admin.v1.AuditData.PermissionDelta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.AuditData.PermissionDelta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.AuditData.PermissionDelta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddedPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRemovedPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string added_permissions = 1;
 * @return {!Array<string>}
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.prototype.getAddedPermissionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.iam.admin.v1.AuditData.PermissionDelta} returns this
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.prototype.setAddedPermissionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.AuditData.PermissionDelta} returns this
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.prototype.addAddedPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.AuditData.PermissionDelta} returns this
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.prototype.clearAddedPermissionsList = function() {
  return this.setAddedPermissionsList([]);
};


/**
 * repeated string removed_permissions = 2;
 * @return {!Array<string>}
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.prototype.getRemovedPermissionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.iam.admin.v1.AuditData.PermissionDelta} returns this
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.prototype.setRemovedPermissionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.AuditData.PermissionDelta} returns this
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.prototype.addRemovedPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.AuditData.PermissionDelta} returns this
 */
proto.google.iam.admin.v1.AuditData.PermissionDelta.prototype.clearRemovedPermissionsList = function() {
  return this.setRemovedPermissionsList([]);
};


/**
 * optional PermissionDelta permission_delta = 1;
 * @return {?proto.google.iam.admin.v1.AuditData.PermissionDelta}
 */
proto.google.iam.admin.v1.AuditData.prototype.getPermissionDelta = function() {
  return /** @type{?proto.google.iam.admin.v1.AuditData.PermissionDelta} */ (
    jspb.Message.getWrapperField(this, proto.google.iam.admin.v1.AuditData.PermissionDelta, 1));
};


/**
 * @param {?proto.google.iam.admin.v1.AuditData.PermissionDelta|undefined} value
 * @return {!proto.google.iam.admin.v1.AuditData} returns this
*/
proto.google.iam.admin.v1.AuditData.prototype.setPermissionDelta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.AuditData} returns this
 */
proto.google.iam.admin.v1.AuditData.prototype.clearPermissionDelta = function() {
  return this.setPermissionDelta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.AuditData.prototype.hasPermissionDelta = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.google.iam.admin.v1);
