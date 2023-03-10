/**
 * @fileoverview gRPC-Web generated client stub for google.iam.v2beta
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.19.1
// source: google/iam/v2beta/policy.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_api_client_pb = require('../../../google/api/client_pb.js')

var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js')

var google_iam_v2beta_deny_pb = require('../../../google/iam/v2beta/deny_pb.js')

var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.iam = {};
proto.google.iam.v2beta = require('./policy_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.google.iam.v2beta.PoliciesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.google.iam.v2beta.PoliciesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v2beta.ListPoliciesRequest,
 *   !proto.google.iam.v2beta.ListPoliciesResponse>}
 */
const methodDescriptor_Policies_ListPolicies = new grpc.web.MethodDescriptor(
  '/google.iam.v2beta.Policies/ListPolicies',
  grpc.web.MethodType.UNARY,
  proto.google.iam.v2beta.ListPoliciesRequest,
  proto.google.iam.v2beta.ListPoliciesResponse,
  /**
   * @param {!proto.google.iam.v2beta.ListPoliciesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.v2beta.ListPoliciesResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.v2beta.ListPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.iam.v2beta.ListPoliciesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v2beta.ListPoliciesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.v2beta.PoliciesClient.prototype.listPolicies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.v2beta.Policies/ListPolicies',
      request,
      metadata || {},
      methodDescriptor_Policies_ListPolicies,
      callback);
};


/**
 * @param {!proto.google.iam.v2beta.ListPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v2beta.ListPoliciesResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.v2beta.PoliciesPromiseClient.prototype.listPolicies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.v2beta.Policies/ListPolicies',
      request,
      metadata || {},
      methodDescriptor_Policies_ListPolicies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v2beta.GetPolicyRequest,
 *   !proto.google.iam.v2beta.Policy>}
 */
const methodDescriptor_Policies_GetPolicy = new grpc.web.MethodDescriptor(
  '/google.iam.v2beta.Policies/GetPolicy',
  grpc.web.MethodType.UNARY,
  proto.google.iam.v2beta.GetPolicyRequest,
  proto.google.iam.v2beta.Policy,
  /**
   * @param {!proto.google.iam.v2beta.GetPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.v2beta.Policy.deserializeBinary
);


/**
 * @param {!proto.google.iam.v2beta.GetPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.iam.v2beta.Policy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v2beta.Policy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.v2beta.PoliciesClient.prototype.getPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.v2beta.Policies/GetPolicy',
      request,
      metadata || {},
      methodDescriptor_Policies_GetPolicy,
      callback);
};


/**
 * @param {!proto.google.iam.v2beta.GetPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v2beta.Policy>}
 *     Promise that resolves to the response
 */
proto.google.iam.v2beta.PoliciesPromiseClient.prototype.getPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.v2beta.Policies/GetPolicy',
      request,
      metadata || {},
      methodDescriptor_Policies_GetPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v2beta.CreatePolicyRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Policies_CreatePolicy = new grpc.web.MethodDescriptor(
  '/google.iam.v2beta.Policies/CreatePolicy',
  grpc.web.MethodType.UNARY,
  proto.google.iam.v2beta.CreatePolicyRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.iam.v2beta.CreatePolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.iam.v2beta.CreatePolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.v2beta.PoliciesClient.prototype.createPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.v2beta.Policies/CreatePolicy',
      request,
      metadata || {},
      methodDescriptor_Policies_CreatePolicy,
      callback);
};


/**
 * @param {!proto.google.iam.v2beta.CreatePolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.iam.v2beta.PoliciesPromiseClient.prototype.createPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.v2beta.Policies/CreatePolicy',
      request,
      metadata || {},
      methodDescriptor_Policies_CreatePolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v2beta.UpdatePolicyRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Policies_UpdatePolicy = new grpc.web.MethodDescriptor(
  '/google.iam.v2beta.Policies/UpdatePolicy',
  grpc.web.MethodType.UNARY,
  proto.google.iam.v2beta.UpdatePolicyRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.iam.v2beta.UpdatePolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.iam.v2beta.UpdatePolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.v2beta.PoliciesClient.prototype.updatePolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.v2beta.Policies/UpdatePolicy',
      request,
      metadata || {},
      methodDescriptor_Policies_UpdatePolicy,
      callback);
};


/**
 * @param {!proto.google.iam.v2beta.UpdatePolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.iam.v2beta.PoliciesPromiseClient.prototype.updatePolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.v2beta.Policies/UpdatePolicy',
      request,
      metadata || {},
      methodDescriptor_Policies_UpdatePolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v2beta.DeletePolicyRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Policies_DeletePolicy = new grpc.web.MethodDescriptor(
  '/google.iam.v2beta.Policies/DeletePolicy',
  grpc.web.MethodType.UNARY,
  proto.google.iam.v2beta.DeletePolicyRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.iam.v2beta.DeletePolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.iam.v2beta.DeletePolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.v2beta.PoliciesClient.prototype.deletePolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.v2beta.Policies/DeletePolicy',
      request,
      metadata || {},
      methodDescriptor_Policies_DeletePolicy,
      callback);
};


/**
 * @param {!proto.google.iam.v2beta.DeletePolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.iam.v2beta.PoliciesPromiseClient.prototype.deletePolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.v2beta.Policies/DeletePolicy',
      request,
      metadata || {},
      methodDescriptor_Policies_DeletePolicy);
};


module.exports = proto.google.iam.v2beta;

