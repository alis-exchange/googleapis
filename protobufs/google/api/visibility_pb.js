// source: google/api/visibility.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.google.api.Visibility', null, global);
goog.exportSymbol('proto.google.api.VisibilityRule', null, global);
goog.exportSymbol('proto.google.api.apiVisibility', null, global);
goog.exportSymbol('proto.google.api.enumVisibility', null, global);
goog.exportSymbol('proto.google.api.fieldVisibility', null, global);
goog.exportSymbol('proto.google.api.messageVisibility', null, global);
goog.exportSymbol('proto.google.api.methodVisibility', null, global);
goog.exportSymbol('proto.google.api.valueVisibility', null, global);
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
proto.google.api.Visibility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Visibility.repeatedFields_, null);
};
goog.inherits(proto.google.api.Visibility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.Visibility.displayName = 'proto.google.api.Visibility';
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
proto.google.api.VisibilityRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.VisibilityRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.VisibilityRule.displayName = 'proto.google.api.VisibilityRule';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Visibility.repeatedFields_ = [1];



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
proto.google.api.Visibility.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Visibility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Visibility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Visibility.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.google.api.VisibilityRule.toObject, includeInstance)
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
 * @return {!proto.google.api.Visibility}
 */
proto.google.api.Visibility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Visibility;
  return proto.google.api.Visibility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Visibility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Visibility}
 */
proto.google.api.Visibility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.api.VisibilityRule;
      reader.readMessage(value,proto.google.api.VisibilityRule.deserializeBinaryFromReader);
      msg.addRules(value);
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
proto.google.api.Visibility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Visibility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Visibility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Visibility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.api.VisibilityRule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VisibilityRule rules = 1;
 * @return {!Array<!proto.google.api.VisibilityRule>}
 */
proto.google.api.Visibility.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.google.api.VisibilityRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.VisibilityRule, 1));
};


/**
 * @param {!Array<!proto.google.api.VisibilityRule>} value
 * @return {!proto.google.api.Visibility} returns this
*/
proto.google.api.Visibility.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.api.VisibilityRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.VisibilityRule}
 */
proto.google.api.Visibility.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.api.VisibilityRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Visibility} returns this
 */
proto.google.api.Visibility.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};





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
proto.google.api.VisibilityRule.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.VisibilityRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.VisibilityRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.VisibilityRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
    restriction: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.api.VisibilityRule}
 */
proto.google.api.VisibilityRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.VisibilityRule;
  return proto.google.api.VisibilityRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.VisibilityRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.VisibilityRule}
 */
proto.google.api.VisibilityRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelector(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestriction(value);
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
proto.google.api.VisibilityRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.VisibilityRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.VisibilityRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.VisibilityRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRestriction();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string selector = 1;
 * @return {string}
 */
proto.google.api.VisibilityRule.prototype.getSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.VisibilityRule} returns this
 */
proto.google.api.VisibilityRule.prototype.setSelector = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string restriction = 2;
 * @return {string}
 */
proto.google.api.VisibilityRule.prototype.getRestriction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.VisibilityRule} returns this
 */
proto.google.api.VisibilityRule.prototype.setRestriction = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumVisibility`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.api.VisibilityRule>}
 */
proto.google.api.enumVisibility = new jspb.ExtensionFieldInfo(
    72295727,
    {enumVisibility: 0},
    proto.google.api.VisibilityRule,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.google.api.VisibilityRule.toObject),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[72295727] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.enumVisibility,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.api.VisibilityRule.serializeBinaryToWriter,
    proto.google.api.VisibilityRule.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[72295727] = proto.google.api.enumVisibility;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `valueVisibility`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.api.VisibilityRule>}
 */
proto.google.api.valueVisibility = new jspb.ExtensionFieldInfo(
    72295727,
    {valueVisibility: 0},
    proto.google.api.VisibilityRule,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.google.api.VisibilityRule.toObject),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[72295727] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.valueVisibility,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.api.VisibilityRule.serializeBinaryToWriter,
    proto.google.api.VisibilityRule.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[72295727] = proto.google.api.valueVisibility;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldVisibility`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.api.VisibilityRule>}
 */
proto.google.api.fieldVisibility = new jspb.ExtensionFieldInfo(
    72295727,
    {fieldVisibility: 0},
    proto.google.api.VisibilityRule,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.google.api.VisibilityRule.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[72295727] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.fieldVisibility,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.api.VisibilityRule.serializeBinaryToWriter,
    proto.google.api.VisibilityRule.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[72295727] = proto.google.api.fieldVisibility;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageVisibility`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.api.VisibilityRule>}
 */
proto.google.api.messageVisibility = new jspb.ExtensionFieldInfo(
    72295727,
    {messageVisibility: 0},
    proto.google.api.VisibilityRule,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.google.api.VisibilityRule.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[72295727] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.messageVisibility,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.api.VisibilityRule.serializeBinaryToWriter,
    proto.google.api.VisibilityRule.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[72295727] = proto.google.api.messageVisibility;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `methodVisibility`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.api.VisibilityRule>}
 */
proto.google.api.methodVisibility = new jspb.ExtensionFieldInfo(
    72295727,
    {methodVisibility: 0},
    proto.google.api.VisibilityRule,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.google.api.VisibilityRule.toObject),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[72295727] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.methodVisibility,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.api.VisibilityRule.serializeBinaryToWriter,
    proto.google.api.VisibilityRule.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[72295727] = proto.google.api.methodVisibility;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `apiVisibility`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.api.VisibilityRule>}
 */
proto.google.api.apiVisibility = new jspb.ExtensionFieldInfo(
    72295727,
    {apiVisibility: 0},
    proto.google.api.VisibilityRule,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.google.api.VisibilityRule.toObject),
    0);

google_protobuf_descriptor_pb.ServiceOptions.extensionsBinary[72295727] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.apiVisibility,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.api.VisibilityRule.serializeBinaryToWriter,
    proto.google.api.VisibilityRule.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.ServiceOptions.extensions[72295727] = proto.google.api.apiVisibility;

goog.object.extend(exports, proto.google.api);
