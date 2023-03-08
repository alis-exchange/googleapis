// source: google/logging/v2/logging_config.proto
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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_client_pb = require('../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.logging.v2.BigQueryOptions', null, global);
goog.exportSymbol('proto.google.logging.v2.CmekSettings', null, global);
goog.exportSymbol('proto.google.logging.v2.CopyLogEntriesMetadata', null, global);
goog.exportSymbol('proto.google.logging.v2.CopyLogEntriesRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.CopyLogEntriesResponse', null, global);
goog.exportSymbol('proto.google.logging.v2.CreateBucketRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.CreateExclusionRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.CreateSinkRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.CreateViewRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.DeleteBucketRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.DeleteExclusionRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.DeleteSinkRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.DeleteViewRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.GetBucketRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.GetCmekSettingsRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.GetExclusionRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.GetSettingsRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.GetSinkRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.GetViewRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.LifecycleState', null, global);
goog.exportSymbol('proto.google.logging.v2.ListBucketsRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.ListBucketsResponse', null, global);
goog.exportSymbol('proto.google.logging.v2.ListExclusionsRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.ListExclusionsResponse', null, global);
goog.exportSymbol('proto.google.logging.v2.ListSinksRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.ListSinksResponse', null, global);
goog.exportSymbol('proto.google.logging.v2.ListViewsRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.ListViewsResponse', null, global);
goog.exportSymbol('proto.google.logging.v2.LogBucket', null, global);
goog.exportSymbol('proto.google.logging.v2.LogExclusion', null, global);
goog.exportSymbol('proto.google.logging.v2.LogSink', null, global);
goog.exportSymbol('proto.google.logging.v2.LogSink.OptionsCase', null, global);
goog.exportSymbol('proto.google.logging.v2.LogSink.VersionFormat', null, global);
goog.exportSymbol('proto.google.logging.v2.LogView', null, global);
goog.exportSymbol('proto.google.logging.v2.OperationState', null, global);
goog.exportSymbol('proto.google.logging.v2.Settings', null, global);
goog.exportSymbol('proto.google.logging.v2.UndeleteBucketRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.UpdateBucketRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.UpdateCmekSettingsRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.UpdateExclusionRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.UpdateSettingsRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.UpdateSinkRequest', null, global);
goog.exportSymbol('proto.google.logging.v2.UpdateViewRequest', null, global);
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
proto.google.logging.v2.LogBucket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.logging.v2.LogBucket.repeatedFields_, null);
};
goog.inherits(proto.google.logging.v2.LogBucket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.LogBucket.displayName = 'proto.google.logging.v2.LogBucket';
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
proto.google.logging.v2.LogView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.LogView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.LogView.displayName = 'proto.google.logging.v2.LogView';
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
proto.google.logging.v2.LogSink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.logging.v2.LogSink.repeatedFields_, proto.google.logging.v2.LogSink.oneofGroups_);
};
goog.inherits(proto.google.logging.v2.LogSink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.LogSink.displayName = 'proto.google.logging.v2.LogSink';
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
proto.google.logging.v2.BigQueryOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.BigQueryOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.BigQueryOptions.displayName = 'proto.google.logging.v2.BigQueryOptions';
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
proto.google.logging.v2.ListBucketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.ListBucketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.ListBucketsRequest.displayName = 'proto.google.logging.v2.ListBucketsRequest';
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
proto.google.logging.v2.ListBucketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.logging.v2.ListBucketsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.logging.v2.ListBucketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.ListBucketsResponse.displayName = 'proto.google.logging.v2.ListBucketsResponse';
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
proto.google.logging.v2.CreateBucketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.CreateBucketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.CreateBucketRequest.displayName = 'proto.google.logging.v2.CreateBucketRequest';
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
proto.google.logging.v2.UpdateBucketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.UpdateBucketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.UpdateBucketRequest.displayName = 'proto.google.logging.v2.UpdateBucketRequest';
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
proto.google.logging.v2.GetBucketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.GetBucketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.GetBucketRequest.displayName = 'proto.google.logging.v2.GetBucketRequest';
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
proto.google.logging.v2.DeleteBucketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.DeleteBucketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.DeleteBucketRequest.displayName = 'proto.google.logging.v2.DeleteBucketRequest';
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
proto.google.logging.v2.UndeleteBucketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.UndeleteBucketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.UndeleteBucketRequest.displayName = 'proto.google.logging.v2.UndeleteBucketRequest';
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
proto.google.logging.v2.ListViewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.ListViewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.ListViewsRequest.displayName = 'proto.google.logging.v2.ListViewsRequest';
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
proto.google.logging.v2.ListViewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.logging.v2.ListViewsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.logging.v2.ListViewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.ListViewsResponse.displayName = 'proto.google.logging.v2.ListViewsResponse';
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
proto.google.logging.v2.CreateViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.CreateViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.CreateViewRequest.displayName = 'proto.google.logging.v2.CreateViewRequest';
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
proto.google.logging.v2.UpdateViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.UpdateViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.UpdateViewRequest.displayName = 'proto.google.logging.v2.UpdateViewRequest';
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
proto.google.logging.v2.GetViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.GetViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.GetViewRequest.displayName = 'proto.google.logging.v2.GetViewRequest';
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
proto.google.logging.v2.DeleteViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.DeleteViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.DeleteViewRequest.displayName = 'proto.google.logging.v2.DeleteViewRequest';
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
proto.google.logging.v2.ListSinksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.ListSinksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.ListSinksRequest.displayName = 'proto.google.logging.v2.ListSinksRequest';
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
proto.google.logging.v2.ListSinksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.logging.v2.ListSinksResponse.repeatedFields_, null);
};
goog.inherits(proto.google.logging.v2.ListSinksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.ListSinksResponse.displayName = 'proto.google.logging.v2.ListSinksResponse';
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
proto.google.logging.v2.GetSinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.GetSinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.GetSinkRequest.displayName = 'proto.google.logging.v2.GetSinkRequest';
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
proto.google.logging.v2.CreateSinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.CreateSinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.CreateSinkRequest.displayName = 'proto.google.logging.v2.CreateSinkRequest';
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
proto.google.logging.v2.UpdateSinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.UpdateSinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.UpdateSinkRequest.displayName = 'proto.google.logging.v2.UpdateSinkRequest';
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
proto.google.logging.v2.DeleteSinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.DeleteSinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.DeleteSinkRequest.displayName = 'proto.google.logging.v2.DeleteSinkRequest';
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
proto.google.logging.v2.LogExclusion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.LogExclusion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.LogExclusion.displayName = 'proto.google.logging.v2.LogExclusion';
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
proto.google.logging.v2.ListExclusionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.ListExclusionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.ListExclusionsRequest.displayName = 'proto.google.logging.v2.ListExclusionsRequest';
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
proto.google.logging.v2.ListExclusionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.logging.v2.ListExclusionsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.logging.v2.ListExclusionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.ListExclusionsResponse.displayName = 'proto.google.logging.v2.ListExclusionsResponse';
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
proto.google.logging.v2.GetExclusionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.GetExclusionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.GetExclusionRequest.displayName = 'proto.google.logging.v2.GetExclusionRequest';
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
proto.google.logging.v2.CreateExclusionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.CreateExclusionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.CreateExclusionRequest.displayName = 'proto.google.logging.v2.CreateExclusionRequest';
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
proto.google.logging.v2.UpdateExclusionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.UpdateExclusionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.UpdateExclusionRequest.displayName = 'proto.google.logging.v2.UpdateExclusionRequest';
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
proto.google.logging.v2.DeleteExclusionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.DeleteExclusionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.DeleteExclusionRequest.displayName = 'proto.google.logging.v2.DeleteExclusionRequest';
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
proto.google.logging.v2.GetCmekSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.GetCmekSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.GetCmekSettingsRequest.displayName = 'proto.google.logging.v2.GetCmekSettingsRequest';
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
proto.google.logging.v2.UpdateCmekSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.UpdateCmekSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.UpdateCmekSettingsRequest.displayName = 'proto.google.logging.v2.UpdateCmekSettingsRequest';
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
proto.google.logging.v2.CmekSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.CmekSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.CmekSettings.displayName = 'proto.google.logging.v2.CmekSettings';
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
proto.google.logging.v2.GetSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.GetSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.GetSettingsRequest.displayName = 'proto.google.logging.v2.GetSettingsRequest';
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
proto.google.logging.v2.UpdateSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.UpdateSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.UpdateSettingsRequest.displayName = 'proto.google.logging.v2.UpdateSettingsRequest';
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
proto.google.logging.v2.Settings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.Settings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.Settings.displayName = 'proto.google.logging.v2.Settings';
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
proto.google.logging.v2.CopyLogEntriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.CopyLogEntriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.CopyLogEntriesRequest.displayName = 'proto.google.logging.v2.CopyLogEntriesRequest';
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
proto.google.logging.v2.CopyLogEntriesMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.CopyLogEntriesMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.CopyLogEntriesMetadata.displayName = 'proto.google.logging.v2.CopyLogEntriesMetadata';
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
proto.google.logging.v2.CopyLogEntriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.v2.CopyLogEntriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.v2.CopyLogEntriesResponse.displayName = 'proto.google.logging.v2.CopyLogEntriesResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.logging.v2.LogBucket.repeatedFields_ = [15];



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
proto.google.logging.v2.LogBucket.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.LogBucket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.LogBucket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.LogBucket.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    retentionDays: jspb.Message.getFieldWithDefault(msg, 11, 0),
    locked: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    lifecycleState: jspb.Message.getFieldWithDefault(msg, 12, 0),
    restrictedFieldsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    cmekSettings: (f = msg.getCmekSettings()) && proto.google.logging.v2.CmekSettings.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.LogBucket}
 */
proto.google.logging.v2.LogBucket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.LogBucket;
  return proto.google.logging.v2.LogBucket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.LogBucket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.LogBucket}
 */
proto.google.logging.v2.LogBucket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetentionDays(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocked(value);
      break;
    case 12:
      var value = /** @type {!proto.google.logging.v2.LifecycleState} */ (reader.readEnum());
      msg.setLifecycleState(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addRestrictedFields(value);
      break;
    case 19:
      var value = new proto.google.logging.v2.CmekSettings;
      reader.readMessage(value,proto.google.logging.v2.CmekSettings.deserializeBinaryFromReader);
      msg.setCmekSettings(value);
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
proto.google.logging.v2.LogBucket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.LogBucket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.LogBucket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.LogBucket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRetentionDays();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getLocked();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getLifecycleState();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getRestrictedFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getCmekSettings();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.google.logging.v2.CmekSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.LogBucket.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.logging.v2.LogBucket.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.logging.v2.LogBucket.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.logging.v2.LogBucket} returns this
*/
proto.google.logging.v2.LogBucket.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.LogBucket.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.logging.v2.LogBucket.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.logging.v2.LogBucket} returns this
*/
proto.google.logging.v2.LogBucket.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.LogBucket.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 retention_days = 11;
 * @return {number}
 */
proto.google.logging.v2.LogBucket.prototype.getRetentionDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.setRetentionDays = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional bool locked = 9;
 * @return {boolean}
 */
proto.google.logging.v2.LogBucket.prototype.getLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.setLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional LifecycleState lifecycle_state = 12;
 * @return {!proto.google.logging.v2.LifecycleState}
 */
proto.google.logging.v2.LogBucket.prototype.getLifecycleState = function() {
  return /** @type {!proto.google.logging.v2.LifecycleState} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.google.logging.v2.LifecycleState} value
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.setLifecycleState = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * repeated string restricted_fields = 15;
 * @return {!Array<string>}
 */
proto.google.logging.v2.LogBucket.prototype.getRestrictedFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.setRestrictedFieldsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.addRestrictedFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.clearRestrictedFieldsList = function() {
  return this.setRestrictedFieldsList([]);
};


/**
 * optional CmekSettings cmek_settings = 19;
 * @return {?proto.google.logging.v2.CmekSettings}
 */
proto.google.logging.v2.LogBucket.prototype.getCmekSettings = function() {
  return /** @type{?proto.google.logging.v2.CmekSettings} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.CmekSettings, 19));
};


/**
 * @param {?proto.google.logging.v2.CmekSettings|undefined} value
 * @return {!proto.google.logging.v2.LogBucket} returns this
*/
proto.google.logging.v2.LogBucket.prototype.setCmekSettings = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.LogBucket} returns this
 */
proto.google.logging.v2.LogBucket.prototype.clearCmekSettings = function() {
  return this.setCmekSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.LogBucket.prototype.hasCmekSettings = function() {
  return jspb.Message.getField(this, 19) != null;
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
proto.google.logging.v2.LogView.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.LogView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.LogView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.LogView.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    filter: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.google.logging.v2.LogView}
 */
proto.google.logging.v2.LogView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.LogView;
  return proto.google.logging.v2.LogView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.LogView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.LogView}
 */
proto.google.logging.v2.LogView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
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
proto.google.logging.v2.LogView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.LogView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.LogView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.LogView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.LogView.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogView} returns this
 */
proto.google.logging.v2.LogView.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.logging.v2.LogView.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogView} returns this
 */
proto.google.logging.v2.LogView.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.logging.v2.LogView.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.logging.v2.LogView} returns this
*/
proto.google.logging.v2.LogView.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.LogView} returns this
 */
proto.google.logging.v2.LogView.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.LogView.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.logging.v2.LogView.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.logging.v2.LogView} returns this
*/
proto.google.logging.v2.LogView.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.LogView} returns this
 */
proto.google.logging.v2.LogView.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.LogView.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string filter = 7;
 * @return {string}
 */
proto.google.logging.v2.LogView.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogView} returns this
 */
proto.google.logging.v2.LogView.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.logging.v2.LogSink.repeatedFields_ = [16];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.logging.v2.LogSink.oneofGroups_ = [[12]];

/**
 * @enum {number}
 */
proto.google.logging.v2.LogSink.OptionsCase = {
  OPTIONS_NOT_SET: 0,
  BIGQUERY_OPTIONS: 12
};

/**
 * @return {proto.google.logging.v2.LogSink.OptionsCase}
 */
proto.google.logging.v2.LogSink.prototype.getOptionsCase = function() {
  return /** @type {proto.google.logging.v2.LogSink.OptionsCase} */(jspb.Message.computeOneofCase(this, proto.google.logging.v2.LogSink.oneofGroups_[0]));
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
proto.google.logging.v2.LogSink.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.LogSink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.LogSink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.LogSink.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destination: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 18, ""),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    exclusionsList: jspb.Message.toObjectList(msg.getExclusionsList(),
    proto.google.logging.v2.LogExclusion.toObject, includeInstance),
    outputVersionFormat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    writerIdentity: jspb.Message.getFieldWithDefault(msg, 8, ""),
    includeChildren: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    bigqueryOptions: (f = msg.getBigqueryOptions()) && proto.google.logging.v2.BigQueryOptions.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.LogSink}
 */
proto.google.logging.v2.LogSink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.LogSink;
  return proto.google.logging.v2.LogSink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.LogSink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.LogSink}
 */
proto.google.logging.v2.LogSink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 16:
      var value = new proto.google.logging.v2.LogExclusion;
      reader.readMessage(value,proto.google.logging.v2.LogExclusion.deserializeBinaryFromReader);
      msg.addExclusions(value);
      break;
    case 6:
      var value = /** @type {!proto.google.logging.v2.LogSink.VersionFormat} */ (reader.readEnum());
      msg.setOutputVersionFormat(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setWriterIdentity(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeChildren(value);
      break;
    case 12:
      var value = new proto.google.logging.v2.BigQueryOptions;
      reader.readMessage(value,proto.google.logging.v2.BigQueryOptions.deserializeBinaryFromReader);
      msg.setBigqueryOptions(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.google.logging.v2.LogSink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.LogSink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.LogSink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.LogSink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getExclusionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.google.logging.v2.LogExclusion.serializeBinaryToWriter
    );
  }
  f = message.getOutputVersionFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getWriterIdentity();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIncludeChildren();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getBigqueryOptions();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.google.logging.v2.BigQueryOptions.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.logging.v2.LogSink.VersionFormat = {
  VERSION_FORMAT_UNSPECIFIED: 0,
  V2: 1,
  V1: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.LogSink.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destination = 3;
 * @return {string}
 */
proto.google.logging.v2.LogSink.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.setDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filter = 5;
 * @return {string}
 */
proto.google.logging.v2.LogSink.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 18;
 * @return {string}
 */
proto.google.logging.v2.LogSink.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional bool disabled = 19;
 * @return {boolean}
 */
proto.google.logging.v2.LogSink.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * repeated LogExclusion exclusions = 16;
 * @return {!Array<!proto.google.logging.v2.LogExclusion>}
 */
proto.google.logging.v2.LogSink.prototype.getExclusionsList = function() {
  return /** @type{!Array<!proto.google.logging.v2.LogExclusion>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.logging.v2.LogExclusion, 16));
};


/**
 * @param {!Array<!proto.google.logging.v2.LogExclusion>} value
 * @return {!proto.google.logging.v2.LogSink} returns this
*/
proto.google.logging.v2.LogSink.prototype.setExclusionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.google.logging.v2.LogExclusion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.logging.v2.LogExclusion}
 */
proto.google.logging.v2.LogSink.prototype.addExclusions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.google.logging.v2.LogExclusion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.clearExclusionsList = function() {
  return this.setExclusionsList([]);
};


/**
 * optional VersionFormat output_version_format = 6;
 * @return {!proto.google.logging.v2.LogSink.VersionFormat}
 */
proto.google.logging.v2.LogSink.prototype.getOutputVersionFormat = function() {
  return /** @type {!proto.google.logging.v2.LogSink.VersionFormat} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.google.logging.v2.LogSink.VersionFormat} value
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.setOutputVersionFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string writer_identity = 8;
 * @return {string}
 */
proto.google.logging.v2.LogSink.prototype.getWriterIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.setWriterIdentity = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool include_children = 9;
 * @return {boolean}
 */
proto.google.logging.v2.LogSink.prototype.getIncludeChildren = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.setIncludeChildren = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional BigQueryOptions bigquery_options = 12;
 * @return {?proto.google.logging.v2.BigQueryOptions}
 */
proto.google.logging.v2.LogSink.prototype.getBigqueryOptions = function() {
  return /** @type{?proto.google.logging.v2.BigQueryOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.BigQueryOptions, 12));
};


/**
 * @param {?proto.google.logging.v2.BigQueryOptions|undefined} value
 * @return {!proto.google.logging.v2.LogSink} returns this
*/
proto.google.logging.v2.LogSink.prototype.setBigqueryOptions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.google.logging.v2.LogSink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.clearBigqueryOptions = function() {
  return this.setBigqueryOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.LogSink.prototype.hasBigqueryOptions = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.logging.v2.LogSink.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.logging.v2.LogSink} returns this
*/
proto.google.logging.v2.LogSink.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.LogSink.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.logging.v2.LogSink.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.logging.v2.LogSink} returns this
*/
proto.google.logging.v2.LogSink.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.LogSink} returns this
 */
proto.google.logging.v2.LogSink.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.LogSink.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.google.logging.v2.BigQueryOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.BigQueryOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.BigQueryOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.BigQueryOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    usePartitionedTables: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    usesTimestampColumnPartitioning: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.google.logging.v2.BigQueryOptions}
 */
proto.google.logging.v2.BigQueryOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.BigQueryOptions;
  return proto.google.logging.v2.BigQueryOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.BigQueryOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.BigQueryOptions}
 */
proto.google.logging.v2.BigQueryOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsePartitionedTables(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsesTimestampColumnPartitioning(value);
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
proto.google.logging.v2.BigQueryOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.BigQueryOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.BigQueryOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.BigQueryOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsePartitionedTables();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getUsesTimestampColumnPartitioning();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool use_partitioned_tables = 1;
 * @return {boolean}
 */
proto.google.logging.v2.BigQueryOptions.prototype.getUsePartitionedTables = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.v2.BigQueryOptions} returns this
 */
proto.google.logging.v2.BigQueryOptions.prototype.setUsePartitionedTables = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool uses_timestamp_column_partitioning = 3;
 * @return {boolean}
 */
proto.google.logging.v2.BigQueryOptions.prototype.getUsesTimestampColumnPartitioning = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.v2.BigQueryOptions} returns this
 */
proto.google.logging.v2.BigQueryOptions.prototype.setUsesTimestampColumnPartitioning = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.google.logging.v2.ListBucketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.ListBucketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.ListBucketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListBucketsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.logging.v2.ListBucketsRequest}
 */
proto.google.logging.v2.ListBucketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.ListBucketsRequest;
  return proto.google.logging.v2.ListBucketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.ListBucketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.ListBucketsRequest}
 */
proto.google.logging.v2.ListBucketsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.google.logging.v2.ListBucketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.ListBucketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.ListBucketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListBucketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.logging.v2.ListBucketsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListBucketsRequest} returns this
 */
proto.google.logging.v2.ListBucketsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.google.logging.v2.ListBucketsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListBucketsRequest} returns this
 */
proto.google.logging.v2.ListBucketsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.logging.v2.ListBucketsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.v2.ListBucketsRequest} returns this
 */
proto.google.logging.v2.ListBucketsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.logging.v2.ListBucketsResponse.repeatedFields_ = [1];



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
proto.google.logging.v2.ListBucketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.ListBucketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.ListBucketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListBucketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketsList: jspb.Message.toObjectList(msg.getBucketsList(),
    proto.google.logging.v2.LogBucket.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.logging.v2.ListBucketsResponse}
 */
proto.google.logging.v2.ListBucketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.ListBucketsResponse;
  return proto.google.logging.v2.ListBucketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.ListBucketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.ListBucketsResponse}
 */
proto.google.logging.v2.ListBucketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.logging.v2.LogBucket;
      reader.readMessage(value,proto.google.logging.v2.LogBucket.deserializeBinaryFromReader);
      msg.addBuckets(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.google.logging.v2.ListBucketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.ListBucketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.ListBucketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListBucketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.logging.v2.LogBucket.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated LogBucket buckets = 1;
 * @return {!Array<!proto.google.logging.v2.LogBucket>}
 */
proto.google.logging.v2.ListBucketsResponse.prototype.getBucketsList = function() {
  return /** @type{!Array<!proto.google.logging.v2.LogBucket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.logging.v2.LogBucket, 1));
};


/**
 * @param {!Array<!proto.google.logging.v2.LogBucket>} value
 * @return {!proto.google.logging.v2.ListBucketsResponse} returns this
*/
proto.google.logging.v2.ListBucketsResponse.prototype.setBucketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.logging.v2.LogBucket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.logging.v2.LogBucket}
 */
proto.google.logging.v2.ListBucketsResponse.prototype.addBuckets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.logging.v2.LogBucket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.logging.v2.ListBucketsResponse} returns this
 */
proto.google.logging.v2.ListBucketsResponse.prototype.clearBucketsList = function() {
  return this.setBucketsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.logging.v2.ListBucketsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListBucketsResponse} returns this
 */
proto.google.logging.v2.ListBucketsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.google.logging.v2.CreateBucketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.CreateBucketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.CreateBucketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CreateBucketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bucketId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bucket: (f = msg.getBucket()) && proto.google.logging.v2.LogBucket.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.CreateBucketRequest}
 */
proto.google.logging.v2.CreateBucketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.CreateBucketRequest;
  return proto.google.logging.v2.CreateBucketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.CreateBucketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.CreateBucketRequest}
 */
proto.google.logging.v2.CreateBucketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketId(value);
      break;
    case 3:
      var value = new proto.google.logging.v2.LogBucket;
      reader.readMessage(value,proto.google.logging.v2.LogBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
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
proto.google.logging.v2.CreateBucketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.CreateBucketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.CreateBucketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CreateBucketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBucketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.logging.v2.LogBucket.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.logging.v2.CreateBucketRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CreateBucketRequest} returns this
 */
proto.google.logging.v2.CreateBucketRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string bucket_id = 2;
 * @return {string}
 */
proto.google.logging.v2.CreateBucketRequest.prototype.getBucketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CreateBucketRequest} returns this
 */
proto.google.logging.v2.CreateBucketRequest.prototype.setBucketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LogBucket bucket = 3;
 * @return {?proto.google.logging.v2.LogBucket}
 */
proto.google.logging.v2.CreateBucketRequest.prototype.getBucket = function() {
  return /** @type{?proto.google.logging.v2.LogBucket} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.LogBucket, 3));
};


/**
 * @param {?proto.google.logging.v2.LogBucket|undefined} value
 * @return {!proto.google.logging.v2.CreateBucketRequest} returns this
*/
proto.google.logging.v2.CreateBucketRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.CreateBucketRequest} returns this
 */
proto.google.logging.v2.CreateBucketRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.CreateBucketRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.google.logging.v2.UpdateBucketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.UpdateBucketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.UpdateBucketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateBucketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bucket: (f = msg.getBucket()) && proto.google.logging.v2.LogBucket.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.UpdateBucketRequest}
 */
proto.google.logging.v2.UpdateBucketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.UpdateBucketRequest;
  return proto.google.logging.v2.UpdateBucketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.UpdateBucketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.UpdateBucketRequest}
 */
proto.google.logging.v2.UpdateBucketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.logging.v2.LogBucket;
      reader.readMessage(value,proto.google.logging.v2.LogBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.google.logging.v2.UpdateBucketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.UpdateBucketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.UpdateBucketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateBucketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.logging.v2.LogBucket.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.UpdateBucketRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.UpdateBucketRequest} returns this
 */
proto.google.logging.v2.UpdateBucketRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LogBucket bucket = 2;
 * @return {?proto.google.logging.v2.LogBucket}
 */
proto.google.logging.v2.UpdateBucketRequest.prototype.getBucket = function() {
  return /** @type{?proto.google.logging.v2.LogBucket} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.LogBucket, 2));
};


/**
 * @param {?proto.google.logging.v2.LogBucket|undefined} value
 * @return {!proto.google.logging.v2.UpdateBucketRequest} returns this
*/
proto.google.logging.v2.UpdateBucketRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateBucketRequest} returns this
 */
proto.google.logging.v2.UpdateBucketRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateBucketRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.logging.v2.UpdateBucketRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.logging.v2.UpdateBucketRequest} returns this
*/
proto.google.logging.v2.UpdateBucketRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateBucketRequest} returns this
 */
proto.google.logging.v2.UpdateBucketRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateBucketRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.google.logging.v2.GetBucketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.GetBucketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.GetBucketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetBucketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.GetBucketRequest}
 */
proto.google.logging.v2.GetBucketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.GetBucketRequest;
  return proto.google.logging.v2.GetBucketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.GetBucketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.GetBucketRequest}
 */
proto.google.logging.v2.GetBucketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.google.logging.v2.GetBucketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.GetBucketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.GetBucketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetBucketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.GetBucketRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.GetBucketRequest} returns this
 */
proto.google.logging.v2.GetBucketRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.DeleteBucketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.DeleteBucketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.DeleteBucketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.DeleteBucketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.DeleteBucketRequest}
 */
proto.google.logging.v2.DeleteBucketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.DeleteBucketRequest;
  return proto.google.logging.v2.DeleteBucketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.DeleteBucketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.DeleteBucketRequest}
 */
proto.google.logging.v2.DeleteBucketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.google.logging.v2.DeleteBucketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.DeleteBucketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.DeleteBucketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.DeleteBucketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.DeleteBucketRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.DeleteBucketRequest} returns this
 */
proto.google.logging.v2.DeleteBucketRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.UndeleteBucketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.UndeleteBucketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.UndeleteBucketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UndeleteBucketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.UndeleteBucketRequest}
 */
proto.google.logging.v2.UndeleteBucketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.UndeleteBucketRequest;
  return proto.google.logging.v2.UndeleteBucketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.UndeleteBucketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.UndeleteBucketRequest}
 */
proto.google.logging.v2.UndeleteBucketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.google.logging.v2.UndeleteBucketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.UndeleteBucketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.UndeleteBucketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UndeleteBucketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.UndeleteBucketRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.UndeleteBucketRequest} returns this
 */
proto.google.logging.v2.UndeleteBucketRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.ListViewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.ListViewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.ListViewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListViewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.logging.v2.ListViewsRequest}
 */
proto.google.logging.v2.ListViewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.ListViewsRequest;
  return proto.google.logging.v2.ListViewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.ListViewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.ListViewsRequest}
 */
proto.google.logging.v2.ListViewsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.google.logging.v2.ListViewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.ListViewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.ListViewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListViewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.logging.v2.ListViewsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListViewsRequest} returns this
 */
proto.google.logging.v2.ListViewsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.google.logging.v2.ListViewsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListViewsRequest} returns this
 */
proto.google.logging.v2.ListViewsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.logging.v2.ListViewsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.v2.ListViewsRequest} returns this
 */
proto.google.logging.v2.ListViewsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.logging.v2.ListViewsResponse.repeatedFields_ = [1];



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
proto.google.logging.v2.ListViewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.ListViewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.ListViewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListViewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    viewsList: jspb.Message.toObjectList(msg.getViewsList(),
    proto.google.logging.v2.LogView.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.logging.v2.ListViewsResponse}
 */
proto.google.logging.v2.ListViewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.ListViewsResponse;
  return proto.google.logging.v2.ListViewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.ListViewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.ListViewsResponse}
 */
proto.google.logging.v2.ListViewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.logging.v2.LogView;
      reader.readMessage(value,proto.google.logging.v2.LogView.deserializeBinaryFromReader);
      msg.addViews(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.google.logging.v2.ListViewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.ListViewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.ListViewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListViewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getViewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.logging.v2.LogView.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated LogView views = 1;
 * @return {!Array<!proto.google.logging.v2.LogView>}
 */
proto.google.logging.v2.ListViewsResponse.prototype.getViewsList = function() {
  return /** @type{!Array<!proto.google.logging.v2.LogView>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.logging.v2.LogView, 1));
};


/**
 * @param {!Array<!proto.google.logging.v2.LogView>} value
 * @return {!proto.google.logging.v2.ListViewsResponse} returns this
*/
proto.google.logging.v2.ListViewsResponse.prototype.setViewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.logging.v2.LogView=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.logging.v2.LogView}
 */
proto.google.logging.v2.ListViewsResponse.prototype.addViews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.logging.v2.LogView, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.logging.v2.ListViewsResponse} returns this
 */
proto.google.logging.v2.ListViewsResponse.prototype.clearViewsList = function() {
  return this.setViewsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.logging.v2.ListViewsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListViewsResponse} returns this
 */
proto.google.logging.v2.ListViewsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.google.logging.v2.CreateViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.CreateViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.CreateViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CreateViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    viewId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    view: (f = msg.getView()) && proto.google.logging.v2.LogView.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.CreateViewRequest}
 */
proto.google.logging.v2.CreateViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.CreateViewRequest;
  return proto.google.logging.v2.CreateViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.CreateViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.CreateViewRequest}
 */
proto.google.logging.v2.CreateViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setViewId(value);
      break;
    case 3:
      var value = new proto.google.logging.v2.LogView;
      reader.readMessage(value,proto.google.logging.v2.LogView.deserializeBinaryFromReader);
      msg.setView(value);
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
proto.google.logging.v2.CreateViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.CreateViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.CreateViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CreateViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getViewId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getView();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.logging.v2.LogView.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.logging.v2.CreateViewRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CreateViewRequest} returns this
 */
proto.google.logging.v2.CreateViewRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string view_id = 2;
 * @return {string}
 */
proto.google.logging.v2.CreateViewRequest.prototype.getViewId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CreateViewRequest} returns this
 */
proto.google.logging.v2.CreateViewRequest.prototype.setViewId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LogView view = 3;
 * @return {?proto.google.logging.v2.LogView}
 */
proto.google.logging.v2.CreateViewRequest.prototype.getView = function() {
  return /** @type{?proto.google.logging.v2.LogView} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.LogView, 3));
};


/**
 * @param {?proto.google.logging.v2.LogView|undefined} value
 * @return {!proto.google.logging.v2.CreateViewRequest} returns this
*/
proto.google.logging.v2.CreateViewRequest.prototype.setView = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.CreateViewRequest} returns this
 */
proto.google.logging.v2.CreateViewRequest.prototype.clearView = function() {
  return this.setView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.CreateViewRequest.prototype.hasView = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.google.logging.v2.UpdateViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.UpdateViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.UpdateViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    view: (f = msg.getView()) && proto.google.logging.v2.LogView.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.UpdateViewRequest}
 */
proto.google.logging.v2.UpdateViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.UpdateViewRequest;
  return proto.google.logging.v2.UpdateViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.UpdateViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.UpdateViewRequest}
 */
proto.google.logging.v2.UpdateViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.logging.v2.LogView;
      reader.readMessage(value,proto.google.logging.v2.LogView.deserializeBinaryFromReader);
      msg.setView(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.google.logging.v2.UpdateViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.UpdateViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.UpdateViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getView();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.logging.v2.LogView.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.UpdateViewRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.UpdateViewRequest} returns this
 */
proto.google.logging.v2.UpdateViewRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LogView view = 2;
 * @return {?proto.google.logging.v2.LogView}
 */
proto.google.logging.v2.UpdateViewRequest.prototype.getView = function() {
  return /** @type{?proto.google.logging.v2.LogView} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.LogView, 2));
};


/**
 * @param {?proto.google.logging.v2.LogView|undefined} value
 * @return {!proto.google.logging.v2.UpdateViewRequest} returns this
*/
proto.google.logging.v2.UpdateViewRequest.prototype.setView = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateViewRequest} returns this
 */
proto.google.logging.v2.UpdateViewRequest.prototype.clearView = function() {
  return this.setView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateViewRequest.prototype.hasView = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.logging.v2.UpdateViewRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.logging.v2.UpdateViewRequest} returns this
*/
proto.google.logging.v2.UpdateViewRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateViewRequest} returns this
 */
proto.google.logging.v2.UpdateViewRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateViewRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.google.logging.v2.GetViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.GetViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.GetViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.GetViewRequest}
 */
proto.google.logging.v2.GetViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.GetViewRequest;
  return proto.google.logging.v2.GetViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.GetViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.GetViewRequest}
 */
proto.google.logging.v2.GetViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.google.logging.v2.GetViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.GetViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.GetViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.GetViewRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.GetViewRequest} returns this
 */
proto.google.logging.v2.GetViewRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.DeleteViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.DeleteViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.DeleteViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.DeleteViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.DeleteViewRequest}
 */
proto.google.logging.v2.DeleteViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.DeleteViewRequest;
  return proto.google.logging.v2.DeleteViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.DeleteViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.DeleteViewRequest}
 */
proto.google.logging.v2.DeleteViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.google.logging.v2.DeleteViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.DeleteViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.DeleteViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.DeleteViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.DeleteViewRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.DeleteViewRequest} returns this
 */
proto.google.logging.v2.DeleteViewRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.ListSinksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.ListSinksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.ListSinksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListSinksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.logging.v2.ListSinksRequest}
 */
proto.google.logging.v2.ListSinksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.ListSinksRequest;
  return proto.google.logging.v2.ListSinksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.ListSinksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.ListSinksRequest}
 */
proto.google.logging.v2.ListSinksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.google.logging.v2.ListSinksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.ListSinksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.ListSinksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListSinksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.logging.v2.ListSinksRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListSinksRequest} returns this
 */
proto.google.logging.v2.ListSinksRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.google.logging.v2.ListSinksRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListSinksRequest} returns this
 */
proto.google.logging.v2.ListSinksRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.logging.v2.ListSinksRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.v2.ListSinksRequest} returns this
 */
proto.google.logging.v2.ListSinksRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.logging.v2.ListSinksResponse.repeatedFields_ = [1];



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
proto.google.logging.v2.ListSinksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.ListSinksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.ListSinksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListSinksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sinksList: jspb.Message.toObjectList(msg.getSinksList(),
    proto.google.logging.v2.LogSink.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.logging.v2.ListSinksResponse}
 */
proto.google.logging.v2.ListSinksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.ListSinksResponse;
  return proto.google.logging.v2.ListSinksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.ListSinksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.ListSinksResponse}
 */
proto.google.logging.v2.ListSinksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.logging.v2.LogSink;
      reader.readMessage(value,proto.google.logging.v2.LogSink.deserializeBinaryFromReader);
      msg.addSinks(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.google.logging.v2.ListSinksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.ListSinksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.ListSinksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListSinksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.logging.v2.LogSink.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated LogSink sinks = 1;
 * @return {!Array<!proto.google.logging.v2.LogSink>}
 */
proto.google.logging.v2.ListSinksResponse.prototype.getSinksList = function() {
  return /** @type{!Array<!proto.google.logging.v2.LogSink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.logging.v2.LogSink, 1));
};


/**
 * @param {!Array<!proto.google.logging.v2.LogSink>} value
 * @return {!proto.google.logging.v2.ListSinksResponse} returns this
*/
proto.google.logging.v2.ListSinksResponse.prototype.setSinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.logging.v2.LogSink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.logging.v2.LogSink}
 */
proto.google.logging.v2.ListSinksResponse.prototype.addSinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.logging.v2.LogSink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.logging.v2.ListSinksResponse} returns this
 */
proto.google.logging.v2.ListSinksResponse.prototype.clearSinksList = function() {
  return this.setSinksList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.logging.v2.ListSinksResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListSinksResponse} returns this
 */
proto.google.logging.v2.ListSinksResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.google.logging.v2.GetSinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.GetSinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.GetSinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetSinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sinkName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.GetSinkRequest}
 */
proto.google.logging.v2.GetSinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.GetSinkRequest;
  return proto.google.logging.v2.GetSinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.GetSinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.GetSinkRequest}
 */
proto.google.logging.v2.GetSinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSinkName(value);
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
proto.google.logging.v2.GetSinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.GetSinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.GetSinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetSinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSinkName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sink_name = 1;
 * @return {string}
 */
proto.google.logging.v2.GetSinkRequest.prototype.getSinkName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.GetSinkRequest} returns this
 */
proto.google.logging.v2.GetSinkRequest.prototype.setSinkName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.CreateSinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.CreateSinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.CreateSinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CreateSinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sink: (f = msg.getSink()) && proto.google.logging.v2.LogSink.toObject(includeInstance, f),
    uniqueWriterIdentity: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.google.logging.v2.CreateSinkRequest}
 */
proto.google.logging.v2.CreateSinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.CreateSinkRequest;
  return proto.google.logging.v2.CreateSinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.CreateSinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.CreateSinkRequest}
 */
proto.google.logging.v2.CreateSinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.google.logging.v2.LogSink;
      reader.readMessage(value,proto.google.logging.v2.LogSink.deserializeBinaryFromReader);
      msg.setSink(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUniqueWriterIdentity(value);
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
proto.google.logging.v2.CreateSinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.CreateSinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.CreateSinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CreateSinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.logging.v2.LogSink.serializeBinaryToWriter
    );
  }
  f = message.getUniqueWriterIdentity();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.logging.v2.CreateSinkRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CreateSinkRequest} returns this
 */
proto.google.logging.v2.CreateSinkRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LogSink sink = 2;
 * @return {?proto.google.logging.v2.LogSink}
 */
proto.google.logging.v2.CreateSinkRequest.prototype.getSink = function() {
  return /** @type{?proto.google.logging.v2.LogSink} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.LogSink, 2));
};


/**
 * @param {?proto.google.logging.v2.LogSink|undefined} value
 * @return {!proto.google.logging.v2.CreateSinkRequest} returns this
*/
proto.google.logging.v2.CreateSinkRequest.prototype.setSink = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.CreateSinkRequest} returns this
 */
proto.google.logging.v2.CreateSinkRequest.prototype.clearSink = function() {
  return this.setSink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.CreateSinkRequest.prototype.hasSink = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool unique_writer_identity = 3;
 * @return {boolean}
 */
proto.google.logging.v2.CreateSinkRequest.prototype.getUniqueWriterIdentity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.v2.CreateSinkRequest} returns this
 */
proto.google.logging.v2.CreateSinkRequest.prototype.setUniqueWriterIdentity = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.google.logging.v2.UpdateSinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.UpdateSinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.UpdateSinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateSinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sinkName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sink: (f = msg.getSink()) && proto.google.logging.v2.LogSink.toObject(includeInstance, f),
    uniqueWriterIdentity: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.UpdateSinkRequest}
 */
proto.google.logging.v2.UpdateSinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.UpdateSinkRequest;
  return proto.google.logging.v2.UpdateSinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.UpdateSinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.UpdateSinkRequest}
 */
proto.google.logging.v2.UpdateSinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSinkName(value);
      break;
    case 2:
      var value = new proto.google.logging.v2.LogSink;
      reader.readMessage(value,proto.google.logging.v2.LogSink.deserializeBinaryFromReader);
      msg.setSink(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUniqueWriterIdentity(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.google.logging.v2.UpdateSinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.UpdateSinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.UpdateSinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateSinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSinkName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.logging.v2.LogSink.serializeBinaryToWriter
    );
  }
  f = message.getUniqueWriterIdentity();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sink_name = 1;
 * @return {string}
 */
proto.google.logging.v2.UpdateSinkRequest.prototype.getSinkName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.UpdateSinkRequest} returns this
 */
proto.google.logging.v2.UpdateSinkRequest.prototype.setSinkName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LogSink sink = 2;
 * @return {?proto.google.logging.v2.LogSink}
 */
proto.google.logging.v2.UpdateSinkRequest.prototype.getSink = function() {
  return /** @type{?proto.google.logging.v2.LogSink} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.LogSink, 2));
};


/**
 * @param {?proto.google.logging.v2.LogSink|undefined} value
 * @return {!proto.google.logging.v2.UpdateSinkRequest} returns this
*/
proto.google.logging.v2.UpdateSinkRequest.prototype.setSink = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateSinkRequest} returns this
 */
proto.google.logging.v2.UpdateSinkRequest.prototype.clearSink = function() {
  return this.setSink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateSinkRequest.prototype.hasSink = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool unique_writer_identity = 3;
 * @return {boolean}
 */
proto.google.logging.v2.UpdateSinkRequest.prototype.getUniqueWriterIdentity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.v2.UpdateSinkRequest} returns this
 */
proto.google.logging.v2.UpdateSinkRequest.prototype.setUniqueWriterIdentity = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.logging.v2.UpdateSinkRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.logging.v2.UpdateSinkRequest} returns this
*/
proto.google.logging.v2.UpdateSinkRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateSinkRequest} returns this
 */
proto.google.logging.v2.UpdateSinkRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateSinkRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.google.logging.v2.DeleteSinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.DeleteSinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.DeleteSinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.DeleteSinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sinkName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.DeleteSinkRequest}
 */
proto.google.logging.v2.DeleteSinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.DeleteSinkRequest;
  return proto.google.logging.v2.DeleteSinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.DeleteSinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.DeleteSinkRequest}
 */
proto.google.logging.v2.DeleteSinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSinkName(value);
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
proto.google.logging.v2.DeleteSinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.DeleteSinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.DeleteSinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.DeleteSinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSinkName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sink_name = 1;
 * @return {string}
 */
proto.google.logging.v2.DeleteSinkRequest.prototype.getSinkName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.DeleteSinkRequest} returns this
 */
proto.google.logging.v2.DeleteSinkRequest.prototype.setSinkName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.LogExclusion.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.LogExclusion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.LogExclusion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.LogExclusion.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.LogExclusion}
 */
proto.google.logging.v2.LogExclusion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.LogExclusion;
  return proto.google.logging.v2.LogExclusion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.LogExclusion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.LogExclusion}
 */
proto.google.logging.v2.LogExclusion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.google.logging.v2.LogExclusion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.LogExclusion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.LogExclusion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.LogExclusion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.LogExclusion.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogExclusion} returns this
 */
proto.google.logging.v2.LogExclusion.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.google.logging.v2.LogExclusion.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogExclusion} returns this
 */
proto.google.logging.v2.LogExclusion.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.google.logging.v2.LogExclusion.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.LogExclusion} returns this
 */
proto.google.logging.v2.LogExclusion.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool disabled = 4;
 * @return {boolean}
 */
proto.google.logging.v2.LogExclusion.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.v2.LogExclusion} returns this
 */
proto.google.logging.v2.LogExclusion.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.logging.v2.LogExclusion.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.logging.v2.LogExclusion} returns this
*/
proto.google.logging.v2.LogExclusion.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.LogExclusion} returns this
 */
proto.google.logging.v2.LogExclusion.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.LogExclusion.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.logging.v2.LogExclusion.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.logging.v2.LogExclusion} returns this
*/
proto.google.logging.v2.LogExclusion.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.LogExclusion} returns this
 */
proto.google.logging.v2.LogExclusion.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.LogExclusion.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.google.logging.v2.ListExclusionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.ListExclusionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.ListExclusionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListExclusionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.logging.v2.ListExclusionsRequest}
 */
proto.google.logging.v2.ListExclusionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.ListExclusionsRequest;
  return proto.google.logging.v2.ListExclusionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.ListExclusionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.ListExclusionsRequest}
 */
proto.google.logging.v2.ListExclusionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.google.logging.v2.ListExclusionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.ListExclusionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.ListExclusionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListExclusionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.logging.v2.ListExclusionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListExclusionsRequest} returns this
 */
proto.google.logging.v2.ListExclusionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.google.logging.v2.ListExclusionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListExclusionsRequest} returns this
 */
proto.google.logging.v2.ListExclusionsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.logging.v2.ListExclusionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.v2.ListExclusionsRequest} returns this
 */
proto.google.logging.v2.ListExclusionsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.logging.v2.ListExclusionsResponse.repeatedFields_ = [1];



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
proto.google.logging.v2.ListExclusionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.ListExclusionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.ListExclusionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListExclusionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    exclusionsList: jspb.Message.toObjectList(msg.getExclusionsList(),
    proto.google.logging.v2.LogExclusion.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.logging.v2.ListExclusionsResponse}
 */
proto.google.logging.v2.ListExclusionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.ListExclusionsResponse;
  return proto.google.logging.v2.ListExclusionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.ListExclusionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.ListExclusionsResponse}
 */
proto.google.logging.v2.ListExclusionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.logging.v2.LogExclusion;
      reader.readMessage(value,proto.google.logging.v2.LogExclusion.deserializeBinaryFromReader);
      msg.addExclusions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.google.logging.v2.ListExclusionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.ListExclusionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.ListExclusionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.ListExclusionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExclusionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.logging.v2.LogExclusion.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated LogExclusion exclusions = 1;
 * @return {!Array<!proto.google.logging.v2.LogExclusion>}
 */
proto.google.logging.v2.ListExclusionsResponse.prototype.getExclusionsList = function() {
  return /** @type{!Array<!proto.google.logging.v2.LogExclusion>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.logging.v2.LogExclusion, 1));
};


/**
 * @param {!Array<!proto.google.logging.v2.LogExclusion>} value
 * @return {!proto.google.logging.v2.ListExclusionsResponse} returns this
*/
proto.google.logging.v2.ListExclusionsResponse.prototype.setExclusionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.logging.v2.LogExclusion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.logging.v2.LogExclusion}
 */
proto.google.logging.v2.ListExclusionsResponse.prototype.addExclusions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.logging.v2.LogExclusion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.logging.v2.ListExclusionsResponse} returns this
 */
proto.google.logging.v2.ListExclusionsResponse.prototype.clearExclusionsList = function() {
  return this.setExclusionsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.logging.v2.ListExclusionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.ListExclusionsResponse} returns this
 */
proto.google.logging.v2.ListExclusionsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.google.logging.v2.GetExclusionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.GetExclusionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.GetExclusionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetExclusionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.GetExclusionRequest}
 */
proto.google.logging.v2.GetExclusionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.GetExclusionRequest;
  return proto.google.logging.v2.GetExclusionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.GetExclusionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.GetExclusionRequest}
 */
proto.google.logging.v2.GetExclusionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.google.logging.v2.GetExclusionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.GetExclusionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.GetExclusionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetExclusionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.GetExclusionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.GetExclusionRequest} returns this
 */
proto.google.logging.v2.GetExclusionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.CreateExclusionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.CreateExclusionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.CreateExclusionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CreateExclusionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    exclusion: (f = msg.getExclusion()) && proto.google.logging.v2.LogExclusion.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.CreateExclusionRequest}
 */
proto.google.logging.v2.CreateExclusionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.CreateExclusionRequest;
  return proto.google.logging.v2.CreateExclusionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.CreateExclusionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.CreateExclusionRequest}
 */
proto.google.logging.v2.CreateExclusionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.google.logging.v2.LogExclusion;
      reader.readMessage(value,proto.google.logging.v2.LogExclusion.deserializeBinaryFromReader);
      msg.setExclusion(value);
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
proto.google.logging.v2.CreateExclusionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.CreateExclusionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.CreateExclusionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CreateExclusionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExclusion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.logging.v2.LogExclusion.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.logging.v2.CreateExclusionRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CreateExclusionRequest} returns this
 */
proto.google.logging.v2.CreateExclusionRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LogExclusion exclusion = 2;
 * @return {?proto.google.logging.v2.LogExclusion}
 */
proto.google.logging.v2.CreateExclusionRequest.prototype.getExclusion = function() {
  return /** @type{?proto.google.logging.v2.LogExclusion} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.LogExclusion, 2));
};


/**
 * @param {?proto.google.logging.v2.LogExclusion|undefined} value
 * @return {!proto.google.logging.v2.CreateExclusionRequest} returns this
*/
proto.google.logging.v2.CreateExclusionRequest.prototype.setExclusion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.CreateExclusionRequest} returns this
 */
proto.google.logging.v2.CreateExclusionRequest.prototype.clearExclusion = function() {
  return this.setExclusion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.CreateExclusionRequest.prototype.hasExclusion = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.google.logging.v2.UpdateExclusionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.UpdateExclusionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.UpdateExclusionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateExclusionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    exclusion: (f = msg.getExclusion()) && proto.google.logging.v2.LogExclusion.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.UpdateExclusionRequest}
 */
proto.google.logging.v2.UpdateExclusionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.UpdateExclusionRequest;
  return proto.google.logging.v2.UpdateExclusionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.UpdateExclusionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.UpdateExclusionRequest}
 */
proto.google.logging.v2.UpdateExclusionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.logging.v2.LogExclusion;
      reader.readMessage(value,proto.google.logging.v2.LogExclusion.deserializeBinaryFromReader);
      msg.setExclusion(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.google.logging.v2.UpdateExclusionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.UpdateExclusionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.UpdateExclusionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateExclusionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExclusion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.logging.v2.LogExclusion.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.UpdateExclusionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.UpdateExclusionRequest} returns this
 */
proto.google.logging.v2.UpdateExclusionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LogExclusion exclusion = 2;
 * @return {?proto.google.logging.v2.LogExclusion}
 */
proto.google.logging.v2.UpdateExclusionRequest.prototype.getExclusion = function() {
  return /** @type{?proto.google.logging.v2.LogExclusion} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.LogExclusion, 2));
};


/**
 * @param {?proto.google.logging.v2.LogExclusion|undefined} value
 * @return {!proto.google.logging.v2.UpdateExclusionRequest} returns this
*/
proto.google.logging.v2.UpdateExclusionRequest.prototype.setExclusion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateExclusionRequest} returns this
 */
proto.google.logging.v2.UpdateExclusionRequest.prototype.clearExclusion = function() {
  return this.setExclusion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateExclusionRequest.prototype.hasExclusion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.logging.v2.UpdateExclusionRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.logging.v2.UpdateExclusionRequest} returns this
*/
proto.google.logging.v2.UpdateExclusionRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateExclusionRequest} returns this
 */
proto.google.logging.v2.UpdateExclusionRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateExclusionRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.google.logging.v2.DeleteExclusionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.DeleteExclusionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.DeleteExclusionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.DeleteExclusionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.DeleteExclusionRequest}
 */
proto.google.logging.v2.DeleteExclusionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.DeleteExclusionRequest;
  return proto.google.logging.v2.DeleteExclusionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.DeleteExclusionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.DeleteExclusionRequest}
 */
proto.google.logging.v2.DeleteExclusionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.google.logging.v2.DeleteExclusionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.DeleteExclusionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.DeleteExclusionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.DeleteExclusionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.DeleteExclusionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.DeleteExclusionRequest} returns this
 */
proto.google.logging.v2.DeleteExclusionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.GetCmekSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.GetCmekSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.GetCmekSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetCmekSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.GetCmekSettingsRequest}
 */
proto.google.logging.v2.GetCmekSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.GetCmekSettingsRequest;
  return proto.google.logging.v2.GetCmekSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.GetCmekSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.GetCmekSettingsRequest}
 */
proto.google.logging.v2.GetCmekSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.google.logging.v2.GetCmekSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.GetCmekSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.GetCmekSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetCmekSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.GetCmekSettingsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.GetCmekSettingsRequest} returns this
 */
proto.google.logging.v2.GetCmekSettingsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.UpdateCmekSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.UpdateCmekSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cmekSettings: (f = msg.getCmekSettings()) && proto.google.logging.v2.CmekSettings.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.UpdateCmekSettingsRequest}
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.UpdateCmekSettingsRequest;
  return proto.google.logging.v2.UpdateCmekSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.UpdateCmekSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.UpdateCmekSettingsRequest}
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.logging.v2.CmekSettings;
      reader.readMessage(value,proto.google.logging.v2.CmekSettings.deserializeBinaryFromReader);
      msg.setCmekSettings(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.UpdateCmekSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.UpdateCmekSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCmekSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.logging.v2.CmekSettings.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.UpdateCmekSettingsRequest} returns this
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CmekSettings cmek_settings = 2;
 * @return {?proto.google.logging.v2.CmekSettings}
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.getCmekSettings = function() {
  return /** @type{?proto.google.logging.v2.CmekSettings} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.CmekSettings, 2));
};


/**
 * @param {?proto.google.logging.v2.CmekSettings|undefined} value
 * @return {!proto.google.logging.v2.UpdateCmekSettingsRequest} returns this
*/
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.setCmekSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateCmekSettingsRequest} returns this
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.clearCmekSettings = function() {
  return this.setCmekSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.hasCmekSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.logging.v2.UpdateCmekSettingsRequest} returns this
*/
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateCmekSettingsRequest} returns this
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateCmekSettingsRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.google.logging.v2.CmekSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.CmekSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.CmekSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CmekSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kmsKeyName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceAccountId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.logging.v2.CmekSettings}
 */
proto.google.logging.v2.CmekSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.CmekSettings;
  return proto.google.logging.v2.CmekSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.CmekSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.CmekSettings}
 */
proto.google.logging.v2.CmekSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKmsKeyName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountId(value);
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
proto.google.logging.v2.CmekSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.CmekSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.CmekSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CmekSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKmsKeyName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.CmekSettings.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CmekSettings} returns this
 */
proto.google.logging.v2.CmekSettings.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string kms_key_name = 2;
 * @return {string}
 */
proto.google.logging.v2.CmekSettings.prototype.getKmsKeyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CmekSettings} returns this
 */
proto.google.logging.v2.CmekSettings.prototype.setKmsKeyName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string service_account_id = 3;
 * @return {string}
 */
proto.google.logging.v2.CmekSettings.prototype.getServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CmekSettings} returns this
 */
proto.google.logging.v2.CmekSettings.prototype.setServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.google.logging.v2.GetSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.GetSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.GetSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.logging.v2.GetSettingsRequest}
 */
proto.google.logging.v2.GetSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.GetSettingsRequest;
  return proto.google.logging.v2.GetSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.GetSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.GetSettingsRequest}
 */
proto.google.logging.v2.GetSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.google.logging.v2.GetSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.GetSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.GetSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.GetSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.GetSettingsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.GetSettingsRequest} returns this
 */
proto.google.logging.v2.GetSettingsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.logging.v2.UpdateSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.UpdateSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.UpdateSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    settings: (f = msg.getSettings()) && proto.google.logging.v2.Settings.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.google.logging.v2.UpdateSettingsRequest}
 */
proto.google.logging.v2.UpdateSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.UpdateSettingsRequest;
  return proto.google.logging.v2.UpdateSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.UpdateSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.UpdateSettingsRequest}
 */
proto.google.logging.v2.UpdateSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.logging.v2.Settings;
      reader.readMessage(value,proto.google.logging.v2.Settings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.google.logging.v2.UpdateSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.UpdateSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.UpdateSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.UpdateSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.logging.v2.Settings.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.UpdateSettingsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.UpdateSettingsRequest} returns this
 */
proto.google.logging.v2.UpdateSettingsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Settings settings = 2;
 * @return {?proto.google.logging.v2.Settings}
 */
proto.google.logging.v2.UpdateSettingsRequest.prototype.getSettings = function() {
  return /** @type{?proto.google.logging.v2.Settings} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.Settings, 2));
};


/**
 * @param {?proto.google.logging.v2.Settings|undefined} value
 * @return {!proto.google.logging.v2.UpdateSettingsRequest} returns this
*/
proto.google.logging.v2.UpdateSettingsRequest.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateSettingsRequest} returns this
 */
proto.google.logging.v2.UpdateSettingsRequest.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateSettingsRequest.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.logging.v2.UpdateSettingsRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.logging.v2.UpdateSettingsRequest} returns this
*/
proto.google.logging.v2.UpdateSettingsRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.UpdateSettingsRequest} returns this
 */
proto.google.logging.v2.UpdateSettingsRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.UpdateSettingsRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.google.logging.v2.Settings.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.Settings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.Settings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.Settings.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kmsKeyName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kmsServiceAccountId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    storageLocation: jspb.Message.getFieldWithDefault(msg, 4, ""),
    disableDefaultSink: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.google.logging.v2.Settings}
 */
proto.google.logging.v2.Settings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.Settings;
  return proto.google.logging.v2.Settings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.Settings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.Settings}
 */
proto.google.logging.v2.Settings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKmsKeyName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKmsServiceAccountId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorageLocation(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableDefaultSink(value);
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
proto.google.logging.v2.Settings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.Settings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.Settings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.Settings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKmsKeyName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKmsServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStorageLocation();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDisableDefaultSink();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.Settings.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.Settings} returns this
 */
proto.google.logging.v2.Settings.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string kms_key_name = 2;
 * @return {string}
 */
proto.google.logging.v2.Settings.prototype.getKmsKeyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.Settings} returns this
 */
proto.google.logging.v2.Settings.prototype.setKmsKeyName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string kms_service_account_id = 3;
 * @return {string}
 */
proto.google.logging.v2.Settings.prototype.getKmsServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.Settings} returns this
 */
proto.google.logging.v2.Settings.prototype.setKmsServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string storage_location = 4;
 * @return {string}
 */
proto.google.logging.v2.Settings.prototype.getStorageLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.Settings} returns this
 */
proto.google.logging.v2.Settings.prototype.setStorageLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool disable_default_sink = 5;
 * @return {boolean}
 */
proto.google.logging.v2.Settings.prototype.getDisableDefaultSink = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.v2.Settings} returns this
 */
proto.google.logging.v2.Settings.prototype.setDisableDefaultSink = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.google.logging.v2.CopyLogEntriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.CopyLogEntriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.CopyLogEntriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CopyLogEntriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    destination: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.google.logging.v2.CopyLogEntriesRequest}
 */
proto.google.logging.v2.CopyLogEntriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.CopyLogEntriesRequest;
  return proto.google.logging.v2.CopyLogEntriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.CopyLogEntriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.CopyLogEntriesRequest}
 */
proto.google.logging.v2.CopyLogEntriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
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
proto.google.logging.v2.CopyLogEntriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.CopyLogEntriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.CopyLogEntriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CopyLogEntriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.logging.v2.CopyLogEntriesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CopyLogEntriesRequest} returns this
 */
proto.google.logging.v2.CopyLogEntriesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.google.logging.v2.CopyLogEntriesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CopyLogEntriesRequest} returns this
 */
proto.google.logging.v2.CopyLogEntriesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string destination = 4;
 * @return {string}
 */
proto.google.logging.v2.CopyLogEntriesRequest.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CopyLogEntriesRequest} returns this
 */
proto.google.logging.v2.CopyLogEntriesRequest.prototype.setDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.CopyLogEntriesMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.CopyLogEntriesMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CopyLogEntriesMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cancellationRequested: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    request: (f = msg.getRequest()) && proto.google.logging.v2.CopyLogEntriesRequest.toObject(includeInstance, f),
    progress: jspb.Message.getFieldWithDefault(msg, 6, 0),
    writerIdentity: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.CopyLogEntriesMetadata;
  return proto.google.logging.v2.CopyLogEntriesMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.CopyLogEntriesMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 3:
      var value = /** @type {!proto.google.logging.v2.OperationState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancellationRequested(value);
      break;
    case 5:
      var value = new proto.google.logging.v2.CopyLogEntriesRequest;
      reader.readMessage(value,proto.google.logging.v2.CopyLogEntriesRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgress(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWriterIdentity(value);
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
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.CopyLogEntriesMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.CopyLogEntriesMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CopyLogEntriesMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCancellationRequested();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.logging.v2.CopyLogEntriesRequest.serializeBinaryToWriter
    );
  }
  f = message.getProgress();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getWriterIdentity();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp start_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata} returns this
*/
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata} returns this
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata} returns this
*/
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata} returns this
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OperationState state = 3;
 * @return {!proto.google.logging.v2.OperationState}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.getState = function() {
  return /** @type {!proto.google.logging.v2.OperationState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.logging.v2.OperationState} value
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata} returns this
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool cancellation_requested = 4;
 * @return {boolean}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.getCancellationRequested = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata} returns this
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.setCancellationRequested = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional CopyLogEntriesRequest request = 5;
 * @return {?proto.google.logging.v2.CopyLogEntriesRequest}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.getRequest = function() {
  return /** @type{?proto.google.logging.v2.CopyLogEntriesRequest} */ (
    jspb.Message.getWrapperField(this, proto.google.logging.v2.CopyLogEntriesRequest, 5));
};


/**
 * @param {?proto.google.logging.v2.CopyLogEntriesRequest|undefined} value
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata} returns this
*/
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata} returns this
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 progress = 6;
 * @return {number}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata} returns this
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string writer_identity = 7;
 * @return {string}
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.getWriterIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.v2.CopyLogEntriesMetadata} returns this
 */
proto.google.logging.v2.CopyLogEntriesMetadata.prototype.setWriterIdentity = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.google.logging.v2.CopyLogEntriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.v2.CopyLogEntriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.v2.CopyLogEntriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CopyLogEntriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    logEntriesCopiedCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.google.logging.v2.CopyLogEntriesResponse}
 */
proto.google.logging.v2.CopyLogEntriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.v2.CopyLogEntriesResponse;
  return proto.google.logging.v2.CopyLogEntriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.v2.CopyLogEntriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.v2.CopyLogEntriesResponse}
 */
proto.google.logging.v2.CopyLogEntriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLogEntriesCopiedCount(value);
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
proto.google.logging.v2.CopyLogEntriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.v2.CopyLogEntriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.v2.CopyLogEntriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.v2.CopyLogEntriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogEntriesCopiedCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 log_entries_copied_count = 1;
 * @return {number}
 */
proto.google.logging.v2.CopyLogEntriesResponse.prototype.getLogEntriesCopiedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.v2.CopyLogEntriesResponse} returns this
 */
proto.google.logging.v2.CopyLogEntriesResponse.prototype.setLogEntriesCopiedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.google.logging.v2.LifecycleState = {
  LIFECYCLE_STATE_UNSPECIFIED: 0,
  ACTIVE: 1,
  DELETE_REQUESTED: 2
};

/**
 * @enum {number}
 */
proto.google.logging.v2.OperationState = {
  OPERATION_STATE_UNSPECIFIED: 0,
  OPERATION_STATE_SCHEDULED: 1,
  OPERATION_STATE_WAITING_FOR_PERMISSIONS: 2,
  OPERATION_STATE_RUNNING: 3,
  OPERATION_STATE_SUCCEEDED: 4,
  OPERATION_STATE_FAILED: 5,
  OPERATION_STATE_CANCELLED: 6
};

goog.object.extend(exports, proto.google.logging.v2);
