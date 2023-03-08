// source: google/iam/admin/v1/iam.proto
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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_client_pb = require('../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
goog.object.extend(proto, google_iam_v1_iam_policy_pb);
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
goog.object.extend(proto, google_iam_v1_policy_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_type_expr_pb = require('../../../../google/type/expr_pb.js');
goog.object.extend(proto, google_type_expr_pb);
goog.exportSymbol('proto.google.iam.admin.v1.CreateRoleRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.CreateServiceAccountKeyRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.CreateServiceAccountRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.DeleteRoleRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.DeleteServiceAccountRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.DisableServiceAccountKeyRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.DisableServiceAccountRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.EnableServiceAccountKeyRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.EnableServiceAccountRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.GetRoleRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.GetServiceAccountKeyRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.GetServiceAccountRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.LintPolicyRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.LintPolicyRequest.LintObjectCase', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.LintPolicyResponse', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.LintResult', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.LintResult.Level', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.LintResult.Severity', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ListRolesRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ListRolesResponse', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ListServiceAccountKeysRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ListServiceAccountKeysResponse', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ListServiceAccountsRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ListServiceAccountsResponse', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.PatchServiceAccountRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.Permission', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.Permission.CustomRolesSupportLevel', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.Permission.PermissionLaunchStage', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.QueryAuditableServicesRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.QueryAuditableServicesResponse', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.QueryGrantableRolesRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.QueryGrantableRolesResponse', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.QueryTestablePermissionsRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.QueryTestablePermissionsResponse', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.Role', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.Role.RoleLaunchStage', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.RoleView', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ServiceAccount', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ServiceAccountKey', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ServiceAccountKeyAlgorithm', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ServiceAccountKeyOrigin', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ServiceAccountPrivateKeyType', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.ServiceAccountPublicKeyType', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.SignBlobRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.SignBlobResponse', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.SignJwtRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.SignJwtResponse', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.UndeleteRoleRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.UndeleteServiceAccountRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.UndeleteServiceAccountResponse', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.UpdateRoleRequest', null, global);
goog.exportSymbol('proto.google.iam.admin.v1.UploadServiceAccountKeyRequest', null, global);
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
proto.google.iam.admin.v1.ServiceAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.ServiceAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.ServiceAccount.displayName = 'proto.google.iam.admin.v1.ServiceAccount';
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
proto.google.iam.admin.v1.CreateServiceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.CreateServiceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.CreateServiceAccountRequest.displayName = 'proto.google.iam.admin.v1.CreateServiceAccountRequest';
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
proto.google.iam.admin.v1.ListServiceAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.ListServiceAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.ListServiceAccountsRequest.displayName = 'proto.google.iam.admin.v1.ListServiceAccountsRequest';
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
proto.google.iam.admin.v1.ListServiceAccountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.admin.v1.ListServiceAccountsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.iam.admin.v1.ListServiceAccountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.ListServiceAccountsResponse.displayName = 'proto.google.iam.admin.v1.ListServiceAccountsResponse';
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
proto.google.iam.admin.v1.GetServiceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.GetServiceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.GetServiceAccountRequest.displayName = 'proto.google.iam.admin.v1.GetServiceAccountRequest';
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
proto.google.iam.admin.v1.DeleteServiceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.DeleteServiceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.DeleteServiceAccountRequest.displayName = 'proto.google.iam.admin.v1.DeleteServiceAccountRequest';
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
proto.google.iam.admin.v1.PatchServiceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.PatchServiceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.PatchServiceAccountRequest.displayName = 'proto.google.iam.admin.v1.PatchServiceAccountRequest';
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
proto.google.iam.admin.v1.UndeleteServiceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.UndeleteServiceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.UndeleteServiceAccountRequest.displayName = 'proto.google.iam.admin.v1.UndeleteServiceAccountRequest';
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
proto.google.iam.admin.v1.UndeleteServiceAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.UndeleteServiceAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.UndeleteServiceAccountResponse.displayName = 'proto.google.iam.admin.v1.UndeleteServiceAccountResponse';
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
proto.google.iam.admin.v1.EnableServiceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.EnableServiceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.EnableServiceAccountRequest.displayName = 'proto.google.iam.admin.v1.EnableServiceAccountRequest';
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
proto.google.iam.admin.v1.DisableServiceAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.DisableServiceAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.DisableServiceAccountRequest.displayName = 'proto.google.iam.admin.v1.DisableServiceAccountRequest';
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
proto.google.iam.admin.v1.ListServiceAccountKeysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.admin.v1.ListServiceAccountKeysRequest.repeatedFields_, null);
};
goog.inherits(proto.google.iam.admin.v1.ListServiceAccountKeysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.ListServiceAccountKeysRequest.displayName = 'proto.google.iam.admin.v1.ListServiceAccountKeysRequest';
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
proto.google.iam.admin.v1.ListServiceAccountKeysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.admin.v1.ListServiceAccountKeysResponse.repeatedFields_, null);
};
goog.inherits(proto.google.iam.admin.v1.ListServiceAccountKeysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.ListServiceAccountKeysResponse.displayName = 'proto.google.iam.admin.v1.ListServiceAccountKeysResponse';
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
proto.google.iam.admin.v1.GetServiceAccountKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.GetServiceAccountKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.GetServiceAccountKeyRequest.displayName = 'proto.google.iam.admin.v1.GetServiceAccountKeyRequest';
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
proto.google.iam.admin.v1.ServiceAccountKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.ServiceAccountKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.ServiceAccountKey.displayName = 'proto.google.iam.admin.v1.ServiceAccountKey';
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
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.CreateServiceAccountKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.displayName = 'proto.google.iam.admin.v1.CreateServiceAccountKeyRequest';
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
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.UploadServiceAccountKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.displayName = 'proto.google.iam.admin.v1.UploadServiceAccountKeyRequest';
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
proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.displayName = 'proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest';
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
proto.google.iam.admin.v1.DisableServiceAccountKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.DisableServiceAccountKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.displayName = 'proto.google.iam.admin.v1.DisableServiceAccountKeyRequest';
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
proto.google.iam.admin.v1.EnableServiceAccountKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.EnableServiceAccountKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.displayName = 'proto.google.iam.admin.v1.EnableServiceAccountKeyRequest';
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
proto.google.iam.admin.v1.SignBlobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.SignBlobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.SignBlobRequest.displayName = 'proto.google.iam.admin.v1.SignBlobRequest';
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
proto.google.iam.admin.v1.SignBlobResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.SignBlobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.SignBlobResponse.displayName = 'proto.google.iam.admin.v1.SignBlobResponse';
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
proto.google.iam.admin.v1.SignJwtRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.SignJwtRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.SignJwtRequest.displayName = 'proto.google.iam.admin.v1.SignJwtRequest';
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
proto.google.iam.admin.v1.SignJwtResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.SignJwtResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.SignJwtResponse.displayName = 'proto.google.iam.admin.v1.SignJwtResponse';
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
proto.google.iam.admin.v1.Role = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.admin.v1.Role.repeatedFields_, null);
};
goog.inherits(proto.google.iam.admin.v1.Role, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.Role.displayName = 'proto.google.iam.admin.v1.Role';
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
proto.google.iam.admin.v1.QueryGrantableRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.QueryGrantableRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.QueryGrantableRolesRequest.displayName = 'proto.google.iam.admin.v1.QueryGrantableRolesRequest';
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
proto.google.iam.admin.v1.QueryGrantableRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.admin.v1.QueryGrantableRolesResponse.repeatedFields_, null);
};
goog.inherits(proto.google.iam.admin.v1.QueryGrantableRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.QueryGrantableRolesResponse.displayName = 'proto.google.iam.admin.v1.QueryGrantableRolesResponse';
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
proto.google.iam.admin.v1.ListRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.ListRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.ListRolesRequest.displayName = 'proto.google.iam.admin.v1.ListRolesRequest';
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
proto.google.iam.admin.v1.ListRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.admin.v1.ListRolesResponse.repeatedFields_, null);
};
goog.inherits(proto.google.iam.admin.v1.ListRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.ListRolesResponse.displayName = 'proto.google.iam.admin.v1.ListRolesResponse';
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
proto.google.iam.admin.v1.GetRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.GetRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.GetRoleRequest.displayName = 'proto.google.iam.admin.v1.GetRoleRequest';
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
proto.google.iam.admin.v1.CreateRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.CreateRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.CreateRoleRequest.displayName = 'proto.google.iam.admin.v1.CreateRoleRequest';
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
proto.google.iam.admin.v1.UpdateRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.UpdateRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.UpdateRoleRequest.displayName = 'proto.google.iam.admin.v1.UpdateRoleRequest';
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
proto.google.iam.admin.v1.DeleteRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.DeleteRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.DeleteRoleRequest.displayName = 'proto.google.iam.admin.v1.DeleteRoleRequest';
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
proto.google.iam.admin.v1.UndeleteRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.UndeleteRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.UndeleteRoleRequest.displayName = 'proto.google.iam.admin.v1.UndeleteRoleRequest';
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
proto.google.iam.admin.v1.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.Permission.displayName = 'proto.google.iam.admin.v1.Permission';
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
proto.google.iam.admin.v1.QueryTestablePermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.QueryTestablePermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.QueryTestablePermissionsRequest.displayName = 'proto.google.iam.admin.v1.QueryTestablePermissionsRequest';
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
proto.google.iam.admin.v1.QueryTestablePermissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.admin.v1.QueryTestablePermissionsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.iam.admin.v1.QueryTestablePermissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.QueryTestablePermissionsResponse.displayName = 'proto.google.iam.admin.v1.QueryTestablePermissionsResponse';
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
proto.google.iam.admin.v1.QueryAuditableServicesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.QueryAuditableServicesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.QueryAuditableServicesRequest.displayName = 'proto.google.iam.admin.v1.QueryAuditableServicesRequest';
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
proto.google.iam.admin.v1.QueryAuditableServicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.admin.v1.QueryAuditableServicesResponse.repeatedFields_, null);
};
goog.inherits(proto.google.iam.admin.v1.QueryAuditableServicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.QueryAuditableServicesResponse.displayName = 'proto.google.iam.admin.v1.QueryAuditableServicesResponse';
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
proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.displayName = 'proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService';
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
proto.google.iam.admin.v1.LintPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.iam.admin.v1.LintPolicyRequest.oneofGroups_);
};
goog.inherits(proto.google.iam.admin.v1.LintPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.LintPolicyRequest.displayName = 'proto.google.iam.admin.v1.LintPolicyRequest';
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
proto.google.iam.admin.v1.LintResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.admin.v1.LintResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.LintResult.displayName = 'proto.google.iam.admin.v1.LintResult';
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
proto.google.iam.admin.v1.LintPolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.admin.v1.LintPolicyResponse.repeatedFields_, null);
};
goog.inherits(proto.google.iam.admin.v1.LintPolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.admin.v1.LintPolicyResponse.displayName = 'proto.google.iam.admin.v1.LintPolicyResponse';
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
proto.google.iam.admin.v1.ServiceAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.ServiceAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.ServiceAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ServiceAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    etag: msg.getEtag_asB64(),
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    oauth2ClientId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
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
 * @return {!proto.google.iam.admin.v1.ServiceAccount}
 */
proto.google.iam.admin.v1.ServiceAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.ServiceAccount;
  return proto.google.iam.admin.v1.ServiceAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.ServiceAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.ServiceAccount}
 */
proto.google.iam.admin.v1.ServiceAccount.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProjectId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEtag(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOauth2ClientId(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
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
proto.google.iam.admin.v1.ServiceAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.ServiceAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.ServiceAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ServiceAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEtag_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOauth2ClientId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ServiceAccount} returns this
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ServiceAccount} returns this
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ServiceAccount} returns this
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ServiceAccount} returns this
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string display_name = 6;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ServiceAccount} returns this
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bytes etag = 7;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes etag = 7;
 * This is a type-conversion wrapper around `getEtag()`
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getEtag_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEtag()));
};


/**
 * optional bytes etag = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEtag()`
 * @return {!Uint8Array}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getEtag_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEtag()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.iam.admin.v1.ServiceAccount} returns this
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.setEtag = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ServiceAccount} returns this
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string oauth2_client_id = 9;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getOauth2ClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ServiceAccount} returns this
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.setOauth2ClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool disabled = 11;
 * @return {boolean}
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.iam.admin.v1.ServiceAccount} returns this
 */
proto.google.iam.admin.v1.ServiceAccount.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
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
proto.google.iam.admin.v1.CreateServiceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.CreateServiceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.CreateServiceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceAccount: (f = msg.getServiceAccount()) && proto.google.iam.admin.v1.ServiceAccount.toObject(includeInstance, f)
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
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountRequest}
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.CreateServiceAccountRequest;
  return proto.google.iam.admin.v1.CreateServiceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.CreateServiceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountRequest}
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAccountId(value);
      break;
    case 3:
      var value = new proto.google.iam.admin.v1.ServiceAccount;
      reader.readMessage(value,proto.google.iam.admin.v1.ServiceAccount.deserializeBinaryFromReader);
      msg.setServiceAccount(value);
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
proto.google.iam.admin.v1.CreateServiceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.CreateServiceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.CreateServiceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getServiceAccount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.iam.admin.v1.ServiceAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountRequest} returns this
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string account_id = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountRequest} returns this
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ServiceAccount service_account = 3;
 * @return {?proto.google.iam.admin.v1.ServiceAccount}
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.prototype.getServiceAccount = function() {
  return /** @type{?proto.google.iam.admin.v1.ServiceAccount} */ (
    jspb.Message.getWrapperField(this, proto.google.iam.admin.v1.ServiceAccount, 3));
};


/**
 * @param {?proto.google.iam.admin.v1.ServiceAccount|undefined} value
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountRequest} returns this
*/
proto.google.iam.admin.v1.CreateServiceAccountRequest.prototype.setServiceAccount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountRequest} returns this
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.prototype.clearServiceAccount = function() {
  return this.setServiceAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.CreateServiceAccountRequest.prototype.hasServiceAccount = function() {
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
proto.google.iam.admin.v1.ListServiceAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.ListServiceAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.ListServiceAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListServiceAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.iam.admin.v1.ListServiceAccountsRequest}
 */
proto.google.iam.admin.v1.ListServiceAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.ListServiceAccountsRequest;
  return proto.google.iam.admin.v1.ListServiceAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.ListServiceAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.ListServiceAccountsRequest}
 */
proto.google.iam.admin.v1.ListServiceAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.google.iam.admin.v1.ListServiceAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.ListServiceAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.ListServiceAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListServiceAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
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
proto.google.iam.admin.v1.ListServiceAccountsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ListServiceAccountsRequest} returns this
 */
proto.google.iam.admin.v1.ListServiceAccountsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.iam.admin.v1.ListServiceAccountsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.iam.admin.v1.ListServiceAccountsRequest} returns this
 */
proto.google.iam.admin.v1.ListServiceAccountsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.iam.admin.v1.ListServiceAccountsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ListServiceAccountsRequest} returns this
 */
proto.google.iam.admin.v1.ListServiceAccountsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.admin.v1.ListServiceAccountsResponse.repeatedFields_ = [1];



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
proto.google.iam.admin.v1.ListServiceAccountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.ListServiceAccountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.ListServiceAccountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListServiceAccountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    proto.google.iam.admin.v1.ServiceAccount.toObject, includeInstance),
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
 * @return {!proto.google.iam.admin.v1.ListServiceAccountsResponse}
 */
proto.google.iam.admin.v1.ListServiceAccountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.ListServiceAccountsResponse;
  return proto.google.iam.admin.v1.ListServiceAccountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.ListServiceAccountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.ListServiceAccountsResponse}
 */
proto.google.iam.admin.v1.ListServiceAccountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.admin.v1.ServiceAccount;
      reader.readMessage(value,proto.google.iam.admin.v1.ServiceAccount.deserializeBinaryFromReader);
      msg.addAccounts(value);
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
proto.google.iam.admin.v1.ListServiceAccountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.ListServiceAccountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.ListServiceAccountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListServiceAccountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.iam.admin.v1.ServiceAccount.serializeBinaryToWriter
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
 * repeated ServiceAccount accounts = 1;
 * @return {!Array<!proto.google.iam.admin.v1.ServiceAccount>}
 */
proto.google.iam.admin.v1.ListServiceAccountsResponse.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.google.iam.admin.v1.ServiceAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.iam.admin.v1.ServiceAccount, 1));
};


/**
 * @param {!Array<!proto.google.iam.admin.v1.ServiceAccount>} value
 * @return {!proto.google.iam.admin.v1.ListServiceAccountsResponse} returns this
*/
proto.google.iam.admin.v1.ListServiceAccountsResponse.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.iam.admin.v1.ServiceAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.ServiceAccount}
 */
proto.google.iam.admin.v1.ListServiceAccountsResponse.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.iam.admin.v1.ServiceAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.ListServiceAccountsResponse} returns this
 */
proto.google.iam.admin.v1.ListServiceAccountsResponse.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.ListServiceAccountsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ListServiceAccountsResponse} returns this
 */
proto.google.iam.admin.v1.ListServiceAccountsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.iam.admin.v1.GetServiceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.GetServiceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.GetServiceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.GetServiceAccountRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.iam.admin.v1.GetServiceAccountRequest}
 */
proto.google.iam.admin.v1.GetServiceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.GetServiceAccountRequest;
  return proto.google.iam.admin.v1.GetServiceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.GetServiceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.GetServiceAccountRequest}
 */
proto.google.iam.admin.v1.GetServiceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.iam.admin.v1.GetServiceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.GetServiceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.GetServiceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.GetServiceAccountRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.iam.admin.v1.GetServiceAccountRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.GetServiceAccountRequest} returns this
 */
proto.google.iam.admin.v1.GetServiceAccountRequest.prototype.setName = function(value) {
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
proto.google.iam.admin.v1.DeleteServiceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.DeleteServiceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.DeleteServiceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.DeleteServiceAccountRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.iam.admin.v1.DeleteServiceAccountRequest}
 */
proto.google.iam.admin.v1.DeleteServiceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.DeleteServiceAccountRequest;
  return proto.google.iam.admin.v1.DeleteServiceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.DeleteServiceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.DeleteServiceAccountRequest}
 */
proto.google.iam.admin.v1.DeleteServiceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.iam.admin.v1.DeleteServiceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.DeleteServiceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.DeleteServiceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.DeleteServiceAccountRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.iam.admin.v1.DeleteServiceAccountRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.DeleteServiceAccountRequest} returns this
 */
proto.google.iam.admin.v1.DeleteServiceAccountRequest.prototype.setName = function(value) {
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
proto.google.iam.admin.v1.PatchServiceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.PatchServiceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.PatchServiceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.PatchServiceAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceAccount: (f = msg.getServiceAccount()) && proto.google.iam.admin.v1.ServiceAccount.toObject(includeInstance, f),
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
 * @return {!proto.google.iam.admin.v1.PatchServiceAccountRequest}
 */
proto.google.iam.admin.v1.PatchServiceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.PatchServiceAccountRequest;
  return proto.google.iam.admin.v1.PatchServiceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.PatchServiceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.PatchServiceAccountRequest}
 */
proto.google.iam.admin.v1.PatchServiceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.admin.v1.ServiceAccount;
      reader.readMessage(value,proto.google.iam.admin.v1.ServiceAccount.deserializeBinaryFromReader);
      msg.setServiceAccount(value);
      break;
    case 2:
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
proto.google.iam.admin.v1.PatchServiceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.PatchServiceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.PatchServiceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.PatchServiceAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.iam.admin.v1.ServiceAccount.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServiceAccount service_account = 1;
 * @return {?proto.google.iam.admin.v1.ServiceAccount}
 */
proto.google.iam.admin.v1.PatchServiceAccountRequest.prototype.getServiceAccount = function() {
  return /** @type{?proto.google.iam.admin.v1.ServiceAccount} */ (
    jspb.Message.getWrapperField(this, proto.google.iam.admin.v1.ServiceAccount, 1));
};


/**
 * @param {?proto.google.iam.admin.v1.ServiceAccount|undefined} value
 * @return {!proto.google.iam.admin.v1.PatchServiceAccountRequest} returns this
*/
proto.google.iam.admin.v1.PatchServiceAccountRequest.prototype.setServiceAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.PatchServiceAccountRequest} returns this
 */
proto.google.iam.admin.v1.PatchServiceAccountRequest.prototype.clearServiceAccount = function() {
  return this.setServiceAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.PatchServiceAccountRequest.prototype.hasServiceAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.iam.admin.v1.PatchServiceAccountRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.iam.admin.v1.PatchServiceAccountRequest} returns this
*/
proto.google.iam.admin.v1.PatchServiceAccountRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.PatchServiceAccountRequest} returns this
 */
proto.google.iam.admin.v1.PatchServiceAccountRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.PatchServiceAccountRequest.prototype.hasUpdateMask = function() {
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
proto.google.iam.admin.v1.UndeleteServiceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.UndeleteServiceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.UndeleteServiceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.UndeleteServiceAccountRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.iam.admin.v1.UndeleteServiceAccountRequest}
 */
proto.google.iam.admin.v1.UndeleteServiceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.UndeleteServiceAccountRequest;
  return proto.google.iam.admin.v1.UndeleteServiceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.UndeleteServiceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.UndeleteServiceAccountRequest}
 */
proto.google.iam.admin.v1.UndeleteServiceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.iam.admin.v1.UndeleteServiceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.UndeleteServiceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.UndeleteServiceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.UndeleteServiceAccountRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.iam.admin.v1.UndeleteServiceAccountRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.UndeleteServiceAccountRequest} returns this
 */
proto.google.iam.admin.v1.UndeleteServiceAccountRequest.prototype.setName = function(value) {
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
proto.google.iam.admin.v1.UndeleteServiceAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.UndeleteServiceAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.UndeleteServiceAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.UndeleteServiceAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    restoredAccount: (f = msg.getRestoredAccount()) && proto.google.iam.admin.v1.ServiceAccount.toObject(includeInstance, f)
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
 * @return {!proto.google.iam.admin.v1.UndeleteServiceAccountResponse}
 */
proto.google.iam.admin.v1.UndeleteServiceAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.UndeleteServiceAccountResponse;
  return proto.google.iam.admin.v1.UndeleteServiceAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.UndeleteServiceAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.UndeleteServiceAccountResponse}
 */
proto.google.iam.admin.v1.UndeleteServiceAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.admin.v1.ServiceAccount;
      reader.readMessage(value,proto.google.iam.admin.v1.ServiceAccount.deserializeBinaryFromReader);
      msg.setRestoredAccount(value);
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
proto.google.iam.admin.v1.UndeleteServiceAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.UndeleteServiceAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.UndeleteServiceAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.UndeleteServiceAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRestoredAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.iam.admin.v1.ServiceAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServiceAccount restored_account = 1;
 * @return {?proto.google.iam.admin.v1.ServiceAccount}
 */
proto.google.iam.admin.v1.UndeleteServiceAccountResponse.prototype.getRestoredAccount = function() {
  return /** @type{?proto.google.iam.admin.v1.ServiceAccount} */ (
    jspb.Message.getWrapperField(this, proto.google.iam.admin.v1.ServiceAccount, 1));
};


/**
 * @param {?proto.google.iam.admin.v1.ServiceAccount|undefined} value
 * @return {!proto.google.iam.admin.v1.UndeleteServiceAccountResponse} returns this
*/
proto.google.iam.admin.v1.UndeleteServiceAccountResponse.prototype.setRestoredAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.UndeleteServiceAccountResponse} returns this
 */
proto.google.iam.admin.v1.UndeleteServiceAccountResponse.prototype.clearRestoredAccount = function() {
  return this.setRestoredAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.UndeleteServiceAccountResponse.prototype.hasRestoredAccount = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.google.iam.admin.v1.EnableServiceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.EnableServiceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.EnableServiceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.EnableServiceAccountRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.iam.admin.v1.EnableServiceAccountRequest}
 */
proto.google.iam.admin.v1.EnableServiceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.EnableServiceAccountRequest;
  return proto.google.iam.admin.v1.EnableServiceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.EnableServiceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.EnableServiceAccountRequest}
 */
proto.google.iam.admin.v1.EnableServiceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.iam.admin.v1.EnableServiceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.EnableServiceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.EnableServiceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.EnableServiceAccountRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.iam.admin.v1.EnableServiceAccountRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.EnableServiceAccountRequest} returns this
 */
proto.google.iam.admin.v1.EnableServiceAccountRequest.prototype.setName = function(value) {
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
proto.google.iam.admin.v1.DisableServiceAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.DisableServiceAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.DisableServiceAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.DisableServiceAccountRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.iam.admin.v1.DisableServiceAccountRequest}
 */
proto.google.iam.admin.v1.DisableServiceAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.DisableServiceAccountRequest;
  return proto.google.iam.admin.v1.DisableServiceAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.DisableServiceAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.DisableServiceAccountRequest}
 */
proto.google.iam.admin.v1.DisableServiceAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.iam.admin.v1.DisableServiceAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.DisableServiceAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.DisableServiceAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.DisableServiceAccountRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.iam.admin.v1.DisableServiceAccountRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.DisableServiceAccountRequest} returns this
 */
proto.google.iam.admin.v1.DisableServiceAccountRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.repeatedFields_ = [2];



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
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.ListServiceAccountKeysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    keyTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest}
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.ListServiceAccountKeysRequest;
  return proto.google.iam.admin.v1.ListServiceAccountKeysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest}
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<!proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addKeyTypes(values[i]);
      }
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
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.ListServiceAccountKeysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeyTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType = {
  KEY_TYPE_UNSPECIFIED: 0,
  USER_MANAGED: 1,
  SYSTEM_MANAGED: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} returns this
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated KeyType key_types = 2;
 * @return {!Array<!proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType>}
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.prototype.getKeyTypesList = function() {
  return /** @type {!Array<!proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType>} value
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} returns this
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.prototype.setKeyTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType} value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} returns this
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.prototype.addKeyTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} returns this
 */
proto.google.iam.admin.v1.ListServiceAccountKeysRequest.prototype.clearKeyTypesList = function() {
  return this.setKeyTypesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.repeatedFields_ = [1];



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
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.ListServiceAccountKeysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    keysList: jspb.Message.toObjectList(msg.getKeysList(),
    proto.google.iam.admin.v1.ServiceAccountKey.toObject, includeInstance)
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
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysResponse}
 */
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.ListServiceAccountKeysResponse;
  return proto.google.iam.admin.v1.ListServiceAccountKeysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysResponse}
 */
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.admin.v1.ServiceAccountKey;
      reader.readMessage(value,proto.google.iam.admin.v1.ServiceAccountKey.deserializeBinaryFromReader);
      msg.addKeys(value);
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
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.ListServiceAccountKeysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.iam.admin.v1.ServiceAccountKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ServiceAccountKey keys = 1;
 * @return {!Array<!proto.google.iam.admin.v1.ServiceAccountKey>}
 */
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.prototype.getKeysList = function() {
  return /** @type{!Array<!proto.google.iam.admin.v1.ServiceAccountKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.iam.admin.v1.ServiceAccountKey, 1));
};


/**
 * @param {!Array<!proto.google.iam.admin.v1.ServiceAccountKey>} value
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysResponse} returns this
*/
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.prototype.setKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.iam.admin.v1.ServiceAccountKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey}
 */
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.prototype.addKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.iam.admin.v1.ServiceAccountKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysResponse} returns this
 */
proto.google.iam.admin.v1.ListServiceAccountKeysResponse.prototype.clearKeysList = function() {
  return this.setKeysList([]);
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
proto.google.iam.admin.v1.GetServiceAccountKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.GetServiceAccountKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.GetServiceAccountKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    publicKeyType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.GetServiceAccountKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.GetServiceAccountKeyRequest;
  return proto.google.iam.admin.v1.GetServiceAccountKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.GetServiceAccountKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.google.iam.admin.v1.ServiceAccountPublicKeyType} */ (reader.readEnum());
      msg.setPublicKeyType(value);
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
proto.google.iam.admin.v1.GetServiceAccountKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.GetServiceAccountKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.GetServiceAccountKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPublicKeyType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.GetServiceAccountKeyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest} returns this
 */
proto.google.iam.admin.v1.GetServiceAccountKeyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ServiceAccountPublicKeyType public_key_type = 2;
 * @return {!proto.google.iam.admin.v1.ServiceAccountPublicKeyType}
 */
proto.google.iam.admin.v1.GetServiceAccountKeyRequest.prototype.getPublicKeyType = function() {
  return /** @type {!proto.google.iam.admin.v1.ServiceAccountPublicKeyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.ServiceAccountPublicKeyType} value
 * @return {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest} returns this
 */
proto.google.iam.admin.v1.GetServiceAccountKeyRequest.prototype.setPublicKeyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.google.iam.admin.v1.ServiceAccountKey.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.ServiceAccountKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.ServiceAccountKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ServiceAccountKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    privateKeyType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    keyAlgorithm: jspb.Message.getFieldWithDefault(msg, 8, 0),
    privateKeyData: msg.getPrivateKeyData_asB64(),
    publicKeyData: msg.getPublicKeyData_asB64(),
    validAfterTime: (f = msg.getValidAfterTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    validBeforeTime: (f = msg.getValidBeforeTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    keyOrigin: jspb.Message.getFieldWithDefault(msg, 9, 0),
    keyType: jspb.Message.getFieldWithDefault(msg, 10, 0),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
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
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey}
 */
proto.google.iam.admin.v1.ServiceAccountKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.ServiceAccountKey;
  return proto.google.iam.admin.v1.ServiceAccountKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.ServiceAccountKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey}
 */
proto.google.iam.admin.v1.ServiceAccountKey.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.google.iam.admin.v1.ServiceAccountPrivateKeyType} */ (reader.readEnum());
      msg.setPrivateKeyType(value);
      break;
    case 8:
      var value = /** @type {!proto.google.iam.admin.v1.ServiceAccountKeyAlgorithm} */ (reader.readEnum());
      msg.setKeyAlgorithm(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrivateKeyData(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKeyData(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setValidAfterTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setValidBeforeTime(value);
      break;
    case 9:
      var value = /** @type {!proto.google.iam.admin.v1.ServiceAccountKeyOrigin} */ (reader.readEnum());
      msg.setKeyOrigin(value);
      break;
    case 10:
      var value = /** @type {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType} */ (reader.readEnum());
      msg.setKeyType(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
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
proto.google.iam.admin.v1.ServiceAccountKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.ServiceAccountKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.ServiceAccountKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ServiceAccountKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrivateKeyType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getKeyAlgorithm();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getPrivateKeyData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getPublicKeyData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getValidAfterTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getValidBeforeTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getKeyOrigin();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getKeyType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ServiceAccountPrivateKeyType private_key_type = 2;
 * @return {!proto.google.iam.admin.v1.ServiceAccountPrivateKeyType}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getPrivateKeyType = function() {
  return /** @type {!proto.google.iam.admin.v1.ServiceAccountPrivateKeyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.ServiceAccountPrivateKeyType} value
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.setPrivateKeyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ServiceAccountKeyAlgorithm key_algorithm = 8;
 * @return {!proto.google.iam.admin.v1.ServiceAccountKeyAlgorithm}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getKeyAlgorithm = function() {
  return /** @type {!proto.google.iam.admin.v1.ServiceAccountKeyAlgorithm} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.ServiceAccountKeyAlgorithm} value
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.setKeyAlgorithm = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bytes private_key_data = 3;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getPrivateKeyData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes private_key_data = 3;
 * This is a type-conversion wrapper around `getPrivateKeyData()`
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getPrivateKeyData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrivateKeyData()));
};


/**
 * optional bytes private_key_data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrivateKeyData()`
 * @return {!Uint8Array}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getPrivateKeyData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrivateKeyData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.setPrivateKeyData = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes public_key_data = 7;
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getPublicKeyData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes public_key_data = 7;
 * This is a type-conversion wrapper around `getPublicKeyData()`
 * @return {string}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getPublicKeyData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKeyData()));
};


/**
 * optional bytes public_key_data = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKeyData()`
 * @return {!Uint8Array}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getPublicKeyData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKeyData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.setPublicKeyData = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp valid_after_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getValidAfterTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
*/
proto.google.iam.admin.v1.ServiceAccountKey.prototype.setValidAfterTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.clearValidAfterTime = function() {
  return this.setValidAfterTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.hasValidAfterTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp valid_before_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getValidBeforeTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
*/
proto.google.iam.admin.v1.ServiceAccountKey.prototype.setValidBeforeTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.clearValidBeforeTime = function() {
  return this.setValidBeforeTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.hasValidBeforeTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ServiceAccountKeyOrigin key_origin = 9;
 * @return {!proto.google.iam.admin.v1.ServiceAccountKeyOrigin}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getKeyOrigin = function() {
  return /** @type {!proto.google.iam.admin.v1.ServiceAccountKeyOrigin} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.ServiceAccountKeyOrigin} value
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.setKeyOrigin = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional ListServiceAccountKeysRequest.KeyType key_type = 10;
 * @return {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getKeyType = function() {
  return /** @type {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest.KeyType} value
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.setKeyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional bool disabled = 11;
 * @return {boolean}
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.iam.admin.v1.ServiceAccountKey} returns this
 */
proto.google.iam.admin.v1.ServiceAccountKey.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
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
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    privateKeyType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    keyAlgorithm: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.CreateServiceAccountKeyRequest;
  return proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.google.iam.admin.v1.ServiceAccountPrivateKeyType} */ (reader.readEnum());
      msg.setPrivateKeyType(value);
      break;
    case 3:
      var value = /** @type {!proto.google.iam.admin.v1.ServiceAccountKeyAlgorithm} */ (reader.readEnum());
      msg.setKeyAlgorithm(value);
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
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrivateKeyType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getKeyAlgorithm();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest} returns this
 */
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ServiceAccountPrivateKeyType private_key_type = 2;
 * @return {!proto.google.iam.admin.v1.ServiceAccountPrivateKeyType}
 */
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.prototype.getPrivateKeyType = function() {
  return /** @type {!proto.google.iam.admin.v1.ServiceAccountPrivateKeyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.ServiceAccountPrivateKeyType} value
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest} returns this
 */
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.prototype.setPrivateKeyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ServiceAccountKeyAlgorithm key_algorithm = 3;
 * @return {!proto.google.iam.admin.v1.ServiceAccountKeyAlgorithm}
 */
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.prototype.getKeyAlgorithm = function() {
  return /** @type {!proto.google.iam.admin.v1.ServiceAccountKeyAlgorithm} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.ServiceAccountKeyAlgorithm} value
 * @return {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest} returns this
 */
proto.google.iam.admin.v1.CreateServiceAccountKeyRequest.prototype.setKeyAlgorithm = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.UploadServiceAccountKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    publicKeyData: msg.getPublicKeyData_asB64()
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
 * @return {!proto.google.iam.admin.v1.UploadServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.UploadServiceAccountKeyRequest;
  return proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.UploadServiceAccountKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.UploadServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKeyData(value);
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
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.UploadServiceAccountKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPublicKeyData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.UploadServiceAccountKeyRequest} returns this
 */
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes public_key_data = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.prototype.getPublicKeyData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes public_key_data = 2;
 * This is a type-conversion wrapper around `getPublicKeyData()`
 * @return {string}
 */
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.prototype.getPublicKeyData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKeyData()));
};


/**
 * optional bytes public_key_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKeyData()`
 * @return {!Uint8Array}
 */
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.prototype.getPublicKeyData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKeyData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.iam.admin.v1.UploadServiceAccountKeyRequest} returns this
 */
proto.google.iam.admin.v1.UploadServiceAccountKeyRequest.prototype.setPublicKeyData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest;
  return proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest} returns this
 */
proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest.prototype.setName = function(value) {
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
proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.DisableServiceAccountKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.iam.admin.v1.DisableServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.DisableServiceAccountKeyRequest;
  return proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.DisableServiceAccountKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.DisableServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.DisableServiceAccountKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.DisableServiceAccountKeyRequest} returns this
 */
proto.google.iam.admin.v1.DisableServiceAccountKeyRequest.prototype.setName = function(value) {
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
proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.EnableServiceAccountKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.iam.admin.v1.EnableServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.EnableServiceAccountKeyRequest;
  return proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.EnableServiceAccountKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.EnableServiceAccountKeyRequest}
 */
proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.EnableServiceAccountKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.EnableServiceAccountKeyRequest} returns this
 */
proto.google.iam.admin.v1.EnableServiceAccountKeyRequest.prototype.setName = function(value) {
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
proto.google.iam.admin.v1.SignBlobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.SignBlobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.SignBlobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.SignBlobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bytesToSign: msg.getBytesToSign_asB64()
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
 * @return {!proto.google.iam.admin.v1.SignBlobRequest}
 */
proto.google.iam.admin.v1.SignBlobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.SignBlobRequest;
  return proto.google.iam.admin.v1.SignBlobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.SignBlobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.SignBlobRequest}
 */
proto.google.iam.admin.v1.SignBlobRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytesToSign(value);
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
proto.google.iam.admin.v1.SignBlobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.SignBlobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.SignBlobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.SignBlobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBytesToSign_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.SignBlobRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.SignBlobRequest} returns this
 */
proto.google.iam.admin.v1.SignBlobRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes bytes_to_sign = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.SignBlobRequest.prototype.getBytesToSign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes bytes_to_sign = 2;
 * This is a type-conversion wrapper around `getBytesToSign()`
 * @return {string}
 */
proto.google.iam.admin.v1.SignBlobRequest.prototype.getBytesToSign_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytesToSign()));
};


/**
 * optional bytes bytes_to_sign = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytesToSign()`
 * @return {!Uint8Array}
 */
proto.google.iam.admin.v1.SignBlobRequest.prototype.getBytesToSign_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytesToSign()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.iam.admin.v1.SignBlobRequest} returns this
 */
proto.google.iam.admin.v1.SignBlobRequest.prototype.setBytesToSign = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.google.iam.admin.v1.SignBlobResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.SignBlobResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.SignBlobResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.SignBlobResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signature: msg.getSignature_asB64()
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
 * @return {!proto.google.iam.admin.v1.SignBlobResponse}
 */
proto.google.iam.admin.v1.SignBlobResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.SignBlobResponse;
  return proto.google.iam.admin.v1.SignBlobResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.SignBlobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.SignBlobResponse}
 */
proto.google.iam.admin.v1.SignBlobResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
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
proto.google.iam.admin.v1.SignBlobResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.SignBlobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.SignBlobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.SignBlobResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string key_id = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.SignBlobResponse.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.SignBlobResponse} returns this
 */
proto.google.iam.admin.v1.SignBlobResponse.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.SignBlobResponse.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.google.iam.admin.v1.SignBlobResponse.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.google.iam.admin.v1.SignBlobResponse.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.iam.admin.v1.SignBlobResponse} returns this
 */
proto.google.iam.admin.v1.SignBlobResponse.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.google.iam.admin.v1.SignJwtRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.SignJwtRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.SignJwtRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.SignJwtRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.iam.admin.v1.SignJwtRequest}
 */
proto.google.iam.admin.v1.SignJwtRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.SignJwtRequest;
  return proto.google.iam.admin.v1.SignJwtRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.SignJwtRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.SignJwtRequest}
 */
proto.google.iam.admin.v1.SignJwtRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPayload(value);
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
proto.google.iam.admin.v1.SignJwtRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.SignJwtRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.SignJwtRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.SignJwtRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.SignJwtRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.SignJwtRequest} returns this
 */
proto.google.iam.admin.v1.SignJwtRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payload = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.SignJwtRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.SignJwtRequest} returns this
 */
proto.google.iam.admin.v1.SignJwtRequest.prototype.setPayload = function(value) {
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
proto.google.iam.admin.v1.SignJwtResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.SignJwtResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.SignJwtResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.SignJwtResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signedJwt: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.iam.admin.v1.SignJwtResponse}
 */
proto.google.iam.admin.v1.SignJwtResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.SignJwtResponse;
  return proto.google.iam.admin.v1.SignJwtResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.SignJwtResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.SignJwtResponse}
 */
proto.google.iam.admin.v1.SignJwtResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignedJwt(value);
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
proto.google.iam.admin.v1.SignJwtResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.SignJwtResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.SignJwtResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.SignJwtResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignedJwt();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key_id = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.SignJwtResponse.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.SignJwtResponse} returns this
 */
proto.google.iam.admin.v1.SignJwtResponse.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string signed_jwt = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.SignJwtResponse.prototype.getSignedJwt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.SignJwtResponse} returns this
 */
proto.google.iam.admin.v1.SignJwtResponse.prototype.setSignedJwt = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.admin.v1.Role.repeatedFields_ = [7];



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
proto.google.iam.admin.v1.Role.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.Role.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.Role} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.Role.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    includedPermissionsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    stage: jspb.Message.getFieldWithDefault(msg, 8, 0),
    etag: msg.getEtag_asB64(),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
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
 * @return {!proto.google.iam.admin.v1.Role}
 */
proto.google.iam.admin.v1.Role.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.Role;
  return proto.google.iam.admin.v1.Role.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.Role} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.Role}
 */
proto.google.iam.admin.v1.Role.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addIncludedPermissions(value);
      break;
    case 8:
      var value = /** @type {!proto.google.iam.admin.v1.Role.RoleLaunchStage} */ (reader.readEnum());
      msg.setStage(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEtag(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
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
proto.google.iam.admin.v1.Role.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.Role.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.Role} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.Role.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
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
  f = message.getIncludedPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getStage();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getEtag_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.iam.admin.v1.Role.RoleLaunchStage = {
  ALPHA: 0,
  BETA: 1,
  GA: 2,
  DEPRECATED: 4,
  DISABLED: 5,
  EAP: 6
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.Role.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.Role} returns this
 */
proto.google.iam.admin.v1.Role.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.Role.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.Role} returns this
 */
proto.google.iam.admin.v1.Role.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.iam.admin.v1.Role.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.Role} returns this
 */
proto.google.iam.admin.v1.Role.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string included_permissions = 7;
 * @return {!Array<string>}
 */
proto.google.iam.admin.v1.Role.prototype.getIncludedPermissionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.iam.admin.v1.Role} returns this
 */
proto.google.iam.admin.v1.Role.prototype.setIncludedPermissionsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.Role} returns this
 */
proto.google.iam.admin.v1.Role.prototype.addIncludedPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.Role} returns this
 */
proto.google.iam.admin.v1.Role.prototype.clearIncludedPermissionsList = function() {
  return this.setIncludedPermissionsList([]);
};


/**
 * optional RoleLaunchStage stage = 8;
 * @return {!proto.google.iam.admin.v1.Role.RoleLaunchStage}
 */
proto.google.iam.admin.v1.Role.prototype.getStage = function() {
  return /** @type {!proto.google.iam.admin.v1.Role.RoleLaunchStage} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.Role.RoleLaunchStage} value
 * @return {!proto.google.iam.admin.v1.Role} returns this
 */
proto.google.iam.admin.v1.Role.prototype.setStage = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bytes etag = 9;
 * @return {string}
 */
proto.google.iam.admin.v1.Role.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes etag = 9;
 * This is a type-conversion wrapper around `getEtag()`
 * @return {string}
 */
proto.google.iam.admin.v1.Role.prototype.getEtag_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEtag()));
};


/**
 * optional bytes etag = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEtag()`
 * @return {!Uint8Array}
 */
proto.google.iam.admin.v1.Role.prototype.getEtag_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEtag()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.iam.admin.v1.Role} returns this
 */
proto.google.iam.admin.v1.Role.prototype.setEtag = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional bool deleted = 11;
 * @return {boolean}
 */
proto.google.iam.admin.v1.Role.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.iam.admin.v1.Role} returns this
 */
proto.google.iam.admin.v1.Role.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
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
proto.google.iam.admin.v1.QueryGrantableRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.QueryGrantableRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fullResourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    view: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesRequest}
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.QueryGrantableRolesRequest;
  return proto.google.iam.admin.v1.QueryGrantableRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesRequest}
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullResourceName(value);
      break;
    case 2:
      var value = /** @type {!proto.google.iam.admin.v1.RoleView} */ (reader.readEnum());
      msg.setView(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.google.iam.admin.v1.QueryGrantableRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.QueryGrantableRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFullResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string full_resource_name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.prototype.getFullResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} returns this
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.prototype.setFullResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RoleView view = 2;
 * @return {!proto.google.iam.admin.v1.RoleView}
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.prototype.getView = function() {
  return /** @type {!proto.google.iam.admin.v1.RoleView} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.RoleView} value
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} returns this
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} returns this
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} returns this
 */
proto.google.iam.admin.v1.QueryGrantableRolesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.admin.v1.QueryGrantableRolesResponse.repeatedFields_ = [1];



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
proto.google.iam.admin.v1.QueryGrantableRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.QueryGrantableRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.QueryGrantableRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryGrantableRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.google.iam.admin.v1.Role.toObject, includeInstance),
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
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesResponse}
 */
proto.google.iam.admin.v1.QueryGrantableRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.QueryGrantableRolesResponse;
  return proto.google.iam.admin.v1.QueryGrantableRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.QueryGrantableRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesResponse}
 */
proto.google.iam.admin.v1.QueryGrantableRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.admin.v1.Role;
      reader.readMessage(value,proto.google.iam.admin.v1.Role.deserializeBinaryFromReader);
      msg.addRoles(value);
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
proto.google.iam.admin.v1.QueryGrantableRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.QueryGrantableRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.QueryGrantableRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryGrantableRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.iam.admin.v1.Role.serializeBinaryToWriter
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
 * repeated Role roles = 1;
 * @return {!Array<!proto.google.iam.admin.v1.Role>}
 */
proto.google.iam.admin.v1.QueryGrantableRolesResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.google.iam.admin.v1.Role>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.iam.admin.v1.Role, 1));
};


/**
 * @param {!Array<!proto.google.iam.admin.v1.Role>} value
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesResponse} returns this
*/
proto.google.iam.admin.v1.QueryGrantableRolesResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.iam.admin.v1.Role=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.Role}
 */
proto.google.iam.admin.v1.QueryGrantableRolesResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.iam.admin.v1.Role, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesResponse} returns this
 */
proto.google.iam.admin.v1.QueryGrantableRolesResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.QueryGrantableRolesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.QueryGrantableRolesResponse} returns this
 */
proto.google.iam.admin.v1.QueryGrantableRolesResponse.prototype.setNextPageToken = function(value) {
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
proto.google.iam.admin.v1.ListRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.ListRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.ListRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    view: jspb.Message.getFieldWithDefault(msg, 4, 0),
    showDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.google.iam.admin.v1.ListRolesRequest}
 */
proto.google.iam.admin.v1.ListRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.ListRolesRequest;
  return proto.google.iam.admin.v1.ListRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.ListRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.ListRolesRequest}
 */
proto.google.iam.admin.v1.ListRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 4:
      var value = /** @type {!proto.google.iam.admin.v1.RoleView} */ (reader.readEnum());
      msg.setView(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowDeleted(value);
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
proto.google.iam.admin.v1.ListRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.ListRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.ListRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListRolesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getShowDeleted();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.ListRolesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ListRolesRequest} returns this
 */
proto.google.iam.admin.v1.ListRolesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.iam.admin.v1.ListRolesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.iam.admin.v1.ListRolesRequest} returns this
 */
proto.google.iam.admin.v1.ListRolesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.iam.admin.v1.ListRolesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ListRolesRequest} returns this
 */
proto.google.iam.admin.v1.ListRolesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RoleView view = 4;
 * @return {!proto.google.iam.admin.v1.RoleView}
 */
proto.google.iam.admin.v1.ListRolesRequest.prototype.getView = function() {
  return /** @type {!proto.google.iam.admin.v1.RoleView} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.RoleView} value
 * @return {!proto.google.iam.admin.v1.ListRolesRequest} returns this
 */
proto.google.iam.admin.v1.ListRolesRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool show_deleted = 6;
 * @return {boolean}
 */
proto.google.iam.admin.v1.ListRolesRequest.prototype.getShowDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.iam.admin.v1.ListRolesRequest} returns this
 */
proto.google.iam.admin.v1.ListRolesRequest.prototype.setShowDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.admin.v1.ListRolesResponse.repeatedFields_ = [1];



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
proto.google.iam.admin.v1.ListRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.ListRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.ListRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.google.iam.admin.v1.Role.toObject, includeInstance),
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
 * @return {!proto.google.iam.admin.v1.ListRolesResponse}
 */
proto.google.iam.admin.v1.ListRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.ListRolesResponse;
  return proto.google.iam.admin.v1.ListRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.ListRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.ListRolesResponse}
 */
proto.google.iam.admin.v1.ListRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.admin.v1.Role;
      reader.readMessage(value,proto.google.iam.admin.v1.Role.deserializeBinaryFromReader);
      msg.addRoles(value);
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
proto.google.iam.admin.v1.ListRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.ListRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.ListRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.ListRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.iam.admin.v1.Role.serializeBinaryToWriter
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
 * repeated Role roles = 1;
 * @return {!Array<!proto.google.iam.admin.v1.Role>}
 */
proto.google.iam.admin.v1.ListRolesResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.google.iam.admin.v1.Role>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.iam.admin.v1.Role, 1));
};


/**
 * @param {!Array<!proto.google.iam.admin.v1.Role>} value
 * @return {!proto.google.iam.admin.v1.ListRolesResponse} returns this
*/
proto.google.iam.admin.v1.ListRolesResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.iam.admin.v1.Role=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.Role}
 */
proto.google.iam.admin.v1.ListRolesResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.iam.admin.v1.Role, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.ListRolesResponse} returns this
 */
proto.google.iam.admin.v1.ListRolesResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.ListRolesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.ListRolesResponse} returns this
 */
proto.google.iam.admin.v1.ListRolesResponse.prototype.setNextPageToken = function(value) {
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
proto.google.iam.admin.v1.GetRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.GetRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.GetRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.GetRoleRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.iam.admin.v1.GetRoleRequest}
 */
proto.google.iam.admin.v1.GetRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.GetRoleRequest;
  return proto.google.iam.admin.v1.GetRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.GetRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.GetRoleRequest}
 */
proto.google.iam.admin.v1.GetRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.iam.admin.v1.GetRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.GetRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.GetRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.GetRoleRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.iam.admin.v1.GetRoleRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.GetRoleRequest} returns this
 */
proto.google.iam.admin.v1.GetRoleRequest.prototype.setName = function(value) {
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
proto.google.iam.admin.v1.CreateRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.CreateRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.CreateRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.CreateRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roleId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    role: (f = msg.getRole()) && proto.google.iam.admin.v1.Role.toObject(includeInstance, f)
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
 * @return {!proto.google.iam.admin.v1.CreateRoleRequest}
 */
proto.google.iam.admin.v1.CreateRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.CreateRoleRequest;
  return proto.google.iam.admin.v1.CreateRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.CreateRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.CreateRoleRequest}
 */
proto.google.iam.admin.v1.CreateRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRoleId(value);
      break;
    case 3:
      var value = new proto.google.iam.admin.v1.Role;
      reader.readMessage(value,proto.google.iam.admin.v1.Role.deserializeBinaryFromReader);
      msg.setRole(value);
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
proto.google.iam.admin.v1.CreateRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.CreateRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.CreateRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.CreateRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoleId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.iam.admin.v1.Role.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.CreateRoleRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.CreateRoleRequest} returns this
 */
proto.google.iam.admin.v1.CreateRoleRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string role_id = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.CreateRoleRequest.prototype.getRoleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.CreateRoleRequest} returns this
 */
proto.google.iam.admin.v1.CreateRoleRequest.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Role role = 3;
 * @return {?proto.google.iam.admin.v1.Role}
 */
proto.google.iam.admin.v1.CreateRoleRequest.prototype.getRole = function() {
  return /** @type{?proto.google.iam.admin.v1.Role} */ (
    jspb.Message.getWrapperField(this, proto.google.iam.admin.v1.Role, 3));
};


/**
 * @param {?proto.google.iam.admin.v1.Role|undefined} value
 * @return {!proto.google.iam.admin.v1.CreateRoleRequest} returns this
*/
proto.google.iam.admin.v1.CreateRoleRequest.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.CreateRoleRequest} returns this
 */
proto.google.iam.admin.v1.CreateRoleRequest.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.CreateRoleRequest.prototype.hasRole = function() {
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
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.UpdateRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.UpdateRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.UpdateRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    role: (f = msg.getRole()) && proto.google.iam.admin.v1.Role.toObject(includeInstance, f),
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
 * @return {!proto.google.iam.admin.v1.UpdateRoleRequest}
 */
proto.google.iam.admin.v1.UpdateRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.UpdateRoleRequest;
  return proto.google.iam.admin.v1.UpdateRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.UpdateRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.UpdateRoleRequest}
 */
proto.google.iam.admin.v1.UpdateRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.iam.admin.v1.Role;
      reader.readMessage(value,proto.google.iam.admin.v1.Role.deserializeBinaryFromReader);
      msg.setRole(value);
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
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.UpdateRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.UpdateRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.UpdateRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.iam.admin.v1.Role.serializeBinaryToWriter
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
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.UpdateRoleRequest} returns this
 */
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Role role = 2;
 * @return {?proto.google.iam.admin.v1.Role}
 */
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.getRole = function() {
  return /** @type{?proto.google.iam.admin.v1.Role} */ (
    jspb.Message.getWrapperField(this, proto.google.iam.admin.v1.Role, 2));
};


/**
 * @param {?proto.google.iam.admin.v1.Role|undefined} value
 * @return {!proto.google.iam.admin.v1.UpdateRoleRequest} returns this
*/
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.UpdateRoleRequest} returns this
 */
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.hasRole = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.iam.admin.v1.UpdateRoleRequest} returns this
*/
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.UpdateRoleRequest} returns this
 */
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.UpdateRoleRequest.prototype.hasUpdateMask = function() {
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
proto.google.iam.admin.v1.DeleteRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.DeleteRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.DeleteRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.DeleteRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    etag: msg.getEtag_asB64()
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
 * @return {!proto.google.iam.admin.v1.DeleteRoleRequest}
 */
proto.google.iam.admin.v1.DeleteRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.DeleteRoleRequest;
  return proto.google.iam.admin.v1.DeleteRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.DeleteRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.DeleteRoleRequest}
 */
proto.google.iam.admin.v1.DeleteRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEtag(value);
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
proto.google.iam.admin.v1.DeleteRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.DeleteRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.DeleteRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.DeleteRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEtag_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.DeleteRoleRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.DeleteRoleRequest} returns this
 */
proto.google.iam.admin.v1.DeleteRoleRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes etag = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.DeleteRoleRequest.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes etag = 2;
 * This is a type-conversion wrapper around `getEtag()`
 * @return {string}
 */
proto.google.iam.admin.v1.DeleteRoleRequest.prototype.getEtag_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEtag()));
};


/**
 * optional bytes etag = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEtag()`
 * @return {!Uint8Array}
 */
proto.google.iam.admin.v1.DeleteRoleRequest.prototype.getEtag_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEtag()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.iam.admin.v1.DeleteRoleRequest} returns this
 */
proto.google.iam.admin.v1.DeleteRoleRequest.prototype.setEtag = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.google.iam.admin.v1.UndeleteRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.UndeleteRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.UndeleteRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.UndeleteRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    etag: msg.getEtag_asB64()
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
 * @return {!proto.google.iam.admin.v1.UndeleteRoleRequest}
 */
proto.google.iam.admin.v1.UndeleteRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.UndeleteRoleRequest;
  return proto.google.iam.admin.v1.UndeleteRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.UndeleteRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.UndeleteRoleRequest}
 */
proto.google.iam.admin.v1.UndeleteRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEtag(value);
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
proto.google.iam.admin.v1.UndeleteRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.UndeleteRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.UndeleteRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.UndeleteRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEtag_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.UndeleteRoleRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.UndeleteRoleRequest} returns this
 */
proto.google.iam.admin.v1.UndeleteRoleRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes etag = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.UndeleteRoleRequest.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes etag = 2;
 * This is a type-conversion wrapper around `getEtag()`
 * @return {string}
 */
proto.google.iam.admin.v1.UndeleteRoleRequest.prototype.getEtag_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEtag()));
};


/**
 * optional bytes etag = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEtag()`
 * @return {!Uint8Array}
 */
proto.google.iam.admin.v1.UndeleteRoleRequest.prototype.getEtag_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEtag()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.iam.admin.v1.UndeleteRoleRequest} returns this
 */
proto.google.iam.admin.v1.UndeleteRoleRequest.prototype.setEtag = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.google.iam.admin.v1.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.Permission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    onlyInPredefinedRoles: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    stage: jspb.Message.getFieldWithDefault(msg, 5, 0),
    customRolesSupportLevel: jspb.Message.getFieldWithDefault(msg, 6, 0),
    apiDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    primaryPermission: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.google.iam.admin.v1.Permission}
 */
proto.google.iam.admin.v1.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.Permission;
  return proto.google.iam.admin.v1.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.Permission}
 */
proto.google.iam.admin.v1.Permission.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyInPredefinedRoles(value);
      break;
    case 5:
      var value = /** @type {!proto.google.iam.admin.v1.Permission.PermissionLaunchStage} */ (reader.readEnum());
      msg.setStage(value);
      break;
    case 6:
      var value = /** @type {!proto.google.iam.admin.v1.Permission.CustomRolesSupportLevel} */ (reader.readEnum());
      msg.setCustomRolesSupportLevel(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setApiDisabled(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryPermission(value);
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
proto.google.iam.admin.v1.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.Permission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.Permission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.Permission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
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
  f = message.getOnlyInPredefinedRoles();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getStage();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getCustomRolesSupportLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getApiDisabled();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPrimaryPermission();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.iam.admin.v1.Permission.PermissionLaunchStage = {
  ALPHA: 0,
  BETA: 1,
  GA: 2,
  DEPRECATED: 3
};

/**
 * @enum {number}
 */
proto.google.iam.admin.v1.Permission.CustomRolesSupportLevel = {
  SUPPORTED: 0,
  TESTING: 1,
  NOT_SUPPORTED: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.Permission.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.Permission} returns this
 */
proto.google.iam.admin.v1.Permission.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.Permission.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.Permission} returns this
 */
proto.google.iam.admin.v1.Permission.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.iam.admin.v1.Permission.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.Permission} returns this
 */
proto.google.iam.admin.v1.Permission.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool only_in_predefined_roles = 4;
 * @return {boolean}
 */
proto.google.iam.admin.v1.Permission.prototype.getOnlyInPredefinedRoles = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.iam.admin.v1.Permission} returns this
 */
proto.google.iam.admin.v1.Permission.prototype.setOnlyInPredefinedRoles = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional PermissionLaunchStage stage = 5;
 * @return {!proto.google.iam.admin.v1.Permission.PermissionLaunchStage}
 */
proto.google.iam.admin.v1.Permission.prototype.getStage = function() {
  return /** @type {!proto.google.iam.admin.v1.Permission.PermissionLaunchStage} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.Permission.PermissionLaunchStage} value
 * @return {!proto.google.iam.admin.v1.Permission} returns this
 */
proto.google.iam.admin.v1.Permission.prototype.setStage = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional CustomRolesSupportLevel custom_roles_support_level = 6;
 * @return {!proto.google.iam.admin.v1.Permission.CustomRolesSupportLevel}
 */
proto.google.iam.admin.v1.Permission.prototype.getCustomRolesSupportLevel = function() {
  return /** @type {!proto.google.iam.admin.v1.Permission.CustomRolesSupportLevel} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.Permission.CustomRolesSupportLevel} value
 * @return {!proto.google.iam.admin.v1.Permission} returns this
 */
proto.google.iam.admin.v1.Permission.prototype.setCustomRolesSupportLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional bool api_disabled = 7;
 * @return {boolean}
 */
proto.google.iam.admin.v1.Permission.prototype.getApiDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.iam.admin.v1.Permission} returns this
 */
proto.google.iam.admin.v1.Permission.prototype.setApiDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string primary_permission = 8;
 * @return {string}
 */
proto.google.iam.admin.v1.Permission.prototype.getPrimaryPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.Permission} returns this
 */
proto.google.iam.admin.v1.Permission.prototype.setPrimaryPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.QueryTestablePermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fullResourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest}
 */
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.QueryTestablePermissionsRequest;
  return proto.google.iam.admin.v1.QueryTestablePermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest}
 */
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullResourceName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.QueryTestablePermissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFullResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string full_resource_name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.prototype.getFullResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest} returns this
 */
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.prototype.setFullResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest} returns this
 */
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest} returns this
 */
proto.google.iam.admin.v1.QueryTestablePermissionsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.repeatedFields_ = [1];



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
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.QueryTestablePermissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.QueryTestablePermissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.google.iam.admin.v1.Permission.toObject, includeInstance),
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
 * @return {!proto.google.iam.admin.v1.QueryTestablePermissionsResponse}
 */
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.QueryTestablePermissionsResponse;
  return proto.google.iam.admin.v1.QueryTestablePermissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.QueryTestablePermissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.QueryTestablePermissionsResponse}
 */
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.admin.v1.Permission;
      reader.readMessage(value,proto.google.iam.admin.v1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.QueryTestablePermissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.QueryTestablePermissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.iam.admin.v1.Permission.serializeBinaryToWriter
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
 * repeated Permission permissions = 1;
 * @return {!Array<!proto.google.iam.admin.v1.Permission>}
 */
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.google.iam.admin.v1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.iam.admin.v1.Permission, 1));
};


/**
 * @param {!Array<!proto.google.iam.admin.v1.Permission>} value
 * @return {!proto.google.iam.admin.v1.QueryTestablePermissionsResponse} returns this
*/
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.iam.admin.v1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.Permission}
 */
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.iam.admin.v1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.QueryTestablePermissionsResponse} returns this
 */
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.QueryTestablePermissionsResponse} returns this
 */
proto.google.iam.admin.v1.QueryTestablePermissionsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.iam.admin.v1.QueryAuditableServicesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.QueryAuditableServicesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.QueryAuditableServicesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryAuditableServicesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fullResourceName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesRequest}
 */
proto.google.iam.admin.v1.QueryAuditableServicesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.QueryAuditableServicesRequest;
  return proto.google.iam.admin.v1.QueryAuditableServicesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.QueryAuditableServicesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesRequest}
 */
proto.google.iam.admin.v1.QueryAuditableServicesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullResourceName(value);
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
proto.google.iam.admin.v1.QueryAuditableServicesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.QueryAuditableServicesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.QueryAuditableServicesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryAuditableServicesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFullResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string full_resource_name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.QueryAuditableServicesRequest.prototype.getFullResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesRequest} returns this
 */
proto.google.iam.admin.v1.QueryAuditableServicesRequest.prototype.setFullResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.repeatedFields_ = [1];



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
proto.google.iam.admin.v1.QueryAuditableServicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.QueryAuditableServicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.QueryAuditableServicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    servicesList: jspb.Message.toObjectList(msg.getServicesList(),
    proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.toObject, includeInstance)
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
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesResponse}
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.QueryAuditableServicesResponse;
  return proto.google.iam.admin.v1.QueryAuditableServicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.QueryAuditableServicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesResponse}
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService;
      reader.readMessage(value,proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.deserializeBinaryFromReader);
      msg.addServices(value);
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
proto.google.iam.admin.v1.QueryAuditableServicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.QueryAuditableServicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.QueryAuditableServicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.serializeBinaryToWriter
    );
  }
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
proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService}
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService;
  return proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService}
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.serializeBinaryToWriter = function(message, writer) {
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
proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService} returns this
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated AuditableService services = 1;
 * @return {!Array<!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService>}
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.prototype.getServicesList = function() {
  return /** @type{!Array<!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService, 1));
};


/**
 * @param {!Array<!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService>} value
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesResponse} returns this
*/
proto.google.iam.admin.v1.QueryAuditableServicesResponse.prototype.setServicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService}
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.prototype.addServices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.iam.admin.v1.QueryAuditableServicesResponse.AuditableService, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.QueryAuditableServicesResponse} returns this
 */
proto.google.iam.admin.v1.QueryAuditableServicesResponse.prototype.clearServicesList = function() {
  return this.setServicesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.iam.admin.v1.LintPolicyRequest.oneofGroups_ = [[5]];

/**
 * @enum {number}
 */
proto.google.iam.admin.v1.LintPolicyRequest.LintObjectCase = {
  LINT_OBJECT_NOT_SET: 0,
  CONDITION: 5
};

/**
 * @return {proto.google.iam.admin.v1.LintPolicyRequest.LintObjectCase}
 */
proto.google.iam.admin.v1.LintPolicyRequest.prototype.getLintObjectCase = function() {
  return /** @type {proto.google.iam.admin.v1.LintPolicyRequest.LintObjectCase} */(jspb.Message.computeOneofCase(this, proto.google.iam.admin.v1.LintPolicyRequest.oneofGroups_[0]));
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
proto.google.iam.admin.v1.LintPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.LintPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.LintPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.LintPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fullResourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    condition: (f = msg.getCondition()) && google_type_expr_pb.Expr.toObject(includeInstance, f)
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
 * @return {!proto.google.iam.admin.v1.LintPolicyRequest}
 */
proto.google.iam.admin.v1.LintPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.LintPolicyRequest;
  return proto.google.iam.admin.v1.LintPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.LintPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.LintPolicyRequest}
 */
proto.google.iam.admin.v1.LintPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullResourceName(value);
      break;
    case 5:
      var value = new google_type_expr_pb.Expr;
      reader.readMessage(value,google_type_expr_pb.Expr.deserializeBinaryFromReader);
      msg.setCondition(value);
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
proto.google.iam.admin.v1.LintPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.LintPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.LintPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.LintPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFullResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_type_expr_pb.Expr.serializeBinaryToWriter
    );
  }
};


/**
 * optional string full_resource_name = 1;
 * @return {string}
 */
proto.google.iam.admin.v1.LintPolicyRequest.prototype.getFullResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.LintPolicyRequest} returns this
 */
proto.google.iam.admin.v1.LintPolicyRequest.prototype.setFullResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.type.Expr condition = 5;
 * @return {?proto.google.type.Expr}
 */
proto.google.iam.admin.v1.LintPolicyRequest.prototype.getCondition = function() {
  return /** @type{?proto.google.type.Expr} */ (
    jspb.Message.getWrapperField(this, google_type_expr_pb.Expr, 5));
};


/**
 * @param {?proto.google.type.Expr|undefined} value
 * @return {!proto.google.iam.admin.v1.LintPolicyRequest} returns this
*/
proto.google.iam.admin.v1.LintPolicyRequest.prototype.setCondition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.google.iam.admin.v1.LintPolicyRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.admin.v1.LintPolicyRequest} returns this
 */
proto.google.iam.admin.v1.LintPolicyRequest.prototype.clearCondition = function() {
  return this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.admin.v1.LintPolicyRequest.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.google.iam.admin.v1.LintResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.LintResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.LintResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.LintResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFieldWithDefault(msg, 1, 0),
    validationUnitName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    severity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fieldName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    locationOffset: jspb.Message.getFieldWithDefault(msg, 6, 0),
    debugMessage: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.google.iam.admin.v1.LintResult}
 */
proto.google.iam.admin.v1.LintResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.LintResult;
  return proto.google.iam.admin.v1.LintResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.LintResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.LintResult}
 */
proto.google.iam.admin.v1.LintResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.iam.admin.v1.LintResult.Level} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidationUnitName(value);
      break;
    case 3:
      var value = /** @type {!proto.google.iam.admin.v1.LintResult.Severity} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLocationOffset(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDebugMessage(value);
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
proto.google.iam.admin.v1.LintResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.LintResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.LintResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.LintResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValidationUnitName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getFieldName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocationOffset();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getDebugMessage();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.iam.admin.v1.LintResult.Level = {
  LEVEL_UNSPECIFIED: 0,
  CONDITION: 3
};

/**
 * @enum {number}
 */
proto.google.iam.admin.v1.LintResult.Severity = {
  SEVERITY_UNSPECIFIED: 0,
  ERROR: 1,
  WARNING: 2,
  NOTICE: 3,
  INFO: 4,
  DEPRECATED: 5
};

/**
 * optional Level level = 1;
 * @return {!proto.google.iam.admin.v1.LintResult.Level}
 */
proto.google.iam.admin.v1.LintResult.prototype.getLevel = function() {
  return /** @type {!proto.google.iam.admin.v1.LintResult.Level} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.LintResult.Level} value
 * @return {!proto.google.iam.admin.v1.LintResult} returns this
 */
proto.google.iam.admin.v1.LintResult.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string validation_unit_name = 2;
 * @return {string}
 */
proto.google.iam.admin.v1.LintResult.prototype.getValidationUnitName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.LintResult} returns this
 */
proto.google.iam.admin.v1.LintResult.prototype.setValidationUnitName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Severity severity = 3;
 * @return {!proto.google.iam.admin.v1.LintResult.Severity}
 */
proto.google.iam.admin.v1.LintResult.prototype.getSeverity = function() {
  return /** @type {!proto.google.iam.admin.v1.LintResult.Severity} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.iam.admin.v1.LintResult.Severity} value
 * @return {!proto.google.iam.admin.v1.LintResult} returns this
 */
proto.google.iam.admin.v1.LintResult.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string field_name = 5;
 * @return {string}
 */
proto.google.iam.admin.v1.LintResult.prototype.getFieldName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.LintResult} returns this
 */
proto.google.iam.admin.v1.LintResult.prototype.setFieldName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 location_offset = 6;
 * @return {number}
 */
proto.google.iam.admin.v1.LintResult.prototype.getLocationOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.iam.admin.v1.LintResult} returns this
 */
proto.google.iam.admin.v1.LintResult.prototype.setLocationOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string debug_message = 7;
 * @return {string}
 */
proto.google.iam.admin.v1.LintResult.prototype.getDebugMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.iam.admin.v1.LintResult} returns this
 */
proto.google.iam.admin.v1.LintResult.prototype.setDebugMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.admin.v1.LintPolicyResponse.repeatedFields_ = [1];



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
proto.google.iam.admin.v1.LintPolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.admin.v1.LintPolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.admin.v1.LintPolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.LintPolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    lintResultsList: jspb.Message.toObjectList(msg.getLintResultsList(),
    proto.google.iam.admin.v1.LintResult.toObject, includeInstance)
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
 * @return {!proto.google.iam.admin.v1.LintPolicyResponse}
 */
proto.google.iam.admin.v1.LintPolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.admin.v1.LintPolicyResponse;
  return proto.google.iam.admin.v1.LintPolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.admin.v1.LintPolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.admin.v1.LintPolicyResponse}
 */
proto.google.iam.admin.v1.LintPolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.admin.v1.LintResult;
      reader.readMessage(value,proto.google.iam.admin.v1.LintResult.deserializeBinaryFromReader);
      msg.addLintResults(value);
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
proto.google.iam.admin.v1.LintPolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.admin.v1.LintPolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.admin.v1.LintPolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.admin.v1.LintPolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLintResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.iam.admin.v1.LintResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LintResult lint_results = 1;
 * @return {!Array<!proto.google.iam.admin.v1.LintResult>}
 */
proto.google.iam.admin.v1.LintPolicyResponse.prototype.getLintResultsList = function() {
  return /** @type{!Array<!proto.google.iam.admin.v1.LintResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.iam.admin.v1.LintResult, 1));
};


/**
 * @param {!Array<!proto.google.iam.admin.v1.LintResult>} value
 * @return {!proto.google.iam.admin.v1.LintPolicyResponse} returns this
*/
proto.google.iam.admin.v1.LintPolicyResponse.prototype.setLintResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.iam.admin.v1.LintResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.iam.admin.v1.LintResult}
 */
proto.google.iam.admin.v1.LintPolicyResponse.prototype.addLintResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.iam.admin.v1.LintResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.iam.admin.v1.LintPolicyResponse} returns this
 */
proto.google.iam.admin.v1.LintPolicyResponse.prototype.clearLintResultsList = function() {
  return this.setLintResultsList([]);
};


/**
 * @enum {number}
 */
proto.google.iam.admin.v1.ServiceAccountKeyAlgorithm = {
  KEY_ALG_UNSPECIFIED: 0,
  KEY_ALG_RSA_1024: 1,
  KEY_ALG_RSA_2048: 2
};

/**
 * @enum {number}
 */
proto.google.iam.admin.v1.ServiceAccountPrivateKeyType = {
  TYPE_UNSPECIFIED: 0,
  TYPE_PKCS12_FILE: 1,
  TYPE_GOOGLE_CREDENTIALS_FILE: 2
};

/**
 * @enum {number}
 */
proto.google.iam.admin.v1.ServiceAccountPublicKeyType = {
  TYPE_NONE: 0,
  TYPE_X509_PEM_FILE: 1,
  TYPE_RAW_PUBLIC_KEY: 2
};

/**
 * @enum {number}
 */
proto.google.iam.admin.v1.ServiceAccountKeyOrigin = {
  ORIGIN_UNSPECIFIED: 0,
  USER_PROVIDED: 1,
  GOOGLE_PROVIDED: 2
};

/**
 * @enum {number}
 */
proto.google.iam.admin.v1.RoleView = {
  BASIC: 0,
  FULL: 1
};

goog.object.extend(exports, proto.google.iam.admin.v1);
