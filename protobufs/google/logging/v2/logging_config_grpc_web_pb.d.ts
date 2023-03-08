import * as grpcWeb from 'grpc-web';

import * as google_logging_v2_logging_config_pb from '../../../google/logging/v2/logging_config_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ConfigServiceV2Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listBuckets(
    request: google_logging_v2_logging_config_pb.ListBucketsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.ListBucketsResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.ListBucketsResponse>;

  getBucket(
    request: google_logging_v2_logging_config_pb.GetBucketRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogBucket) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogBucket>;

  createBucket(
    request: google_logging_v2_logging_config_pb.CreateBucketRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogBucket) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogBucket>;

  updateBucket(
    request: google_logging_v2_logging_config_pb.UpdateBucketRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogBucket) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogBucket>;

  deleteBucket(
    request: google_logging_v2_logging_config_pb.DeleteBucketRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  undeleteBucket(
    request: google_logging_v2_logging_config_pb.UndeleteBucketRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listViews(
    request: google_logging_v2_logging_config_pb.ListViewsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.ListViewsResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.ListViewsResponse>;

  getView(
    request: google_logging_v2_logging_config_pb.GetViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogView) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogView>;

  createView(
    request: google_logging_v2_logging_config_pb.CreateViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogView) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogView>;

  updateView(
    request: google_logging_v2_logging_config_pb.UpdateViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogView) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogView>;

  deleteView(
    request: google_logging_v2_logging_config_pb.DeleteViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listSinks(
    request: google_logging_v2_logging_config_pb.ListSinksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.ListSinksResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.ListSinksResponse>;

  getSink(
    request: google_logging_v2_logging_config_pb.GetSinkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogSink) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogSink>;

  createSink(
    request: google_logging_v2_logging_config_pb.CreateSinkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogSink) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogSink>;

  updateSink(
    request: google_logging_v2_logging_config_pb.UpdateSinkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogSink) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogSink>;

  deleteSink(
    request: google_logging_v2_logging_config_pb.DeleteSinkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listExclusions(
    request: google_logging_v2_logging_config_pb.ListExclusionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.ListExclusionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.ListExclusionsResponse>;

  getExclusion(
    request: google_logging_v2_logging_config_pb.GetExclusionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogExclusion) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogExclusion>;

  createExclusion(
    request: google_logging_v2_logging_config_pb.CreateExclusionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogExclusion) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogExclusion>;

  updateExclusion(
    request: google_logging_v2_logging_config_pb.UpdateExclusionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.LogExclusion) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogExclusion>;

  deleteExclusion(
    request: google_logging_v2_logging_config_pb.DeleteExclusionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getCmekSettings(
    request: google_logging_v2_logging_config_pb.GetCmekSettingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.CmekSettings) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.CmekSettings>;

  updateCmekSettings(
    request: google_logging_v2_logging_config_pb.UpdateCmekSettingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.CmekSettings) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.CmekSettings>;

  getSettings(
    request: google_logging_v2_logging_config_pb.GetSettingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.Settings) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.Settings>;

  updateSettings(
    request: google_logging_v2_logging_config_pb.UpdateSettingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_logging_v2_logging_config_pb.Settings) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.Settings>;

  copyLogEntries(
    request: google_logging_v2_logging_config_pb.CopyLogEntriesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class ConfigServiceV2PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listBuckets(
    request: google_logging_v2_logging_config_pb.ListBucketsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.ListBucketsResponse>;

  getBucket(
    request: google_logging_v2_logging_config_pb.GetBucketRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogBucket>;

  createBucket(
    request: google_logging_v2_logging_config_pb.CreateBucketRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogBucket>;

  updateBucket(
    request: google_logging_v2_logging_config_pb.UpdateBucketRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogBucket>;

  deleteBucket(
    request: google_logging_v2_logging_config_pb.DeleteBucketRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  undeleteBucket(
    request: google_logging_v2_logging_config_pb.UndeleteBucketRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listViews(
    request: google_logging_v2_logging_config_pb.ListViewsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.ListViewsResponse>;

  getView(
    request: google_logging_v2_logging_config_pb.GetViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogView>;

  createView(
    request: google_logging_v2_logging_config_pb.CreateViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogView>;

  updateView(
    request: google_logging_v2_logging_config_pb.UpdateViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogView>;

  deleteView(
    request: google_logging_v2_logging_config_pb.DeleteViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listSinks(
    request: google_logging_v2_logging_config_pb.ListSinksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.ListSinksResponse>;

  getSink(
    request: google_logging_v2_logging_config_pb.GetSinkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogSink>;

  createSink(
    request: google_logging_v2_logging_config_pb.CreateSinkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogSink>;

  updateSink(
    request: google_logging_v2_logging_config_pb.UpdateSinkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogSink>;

  deleteSink(
    request: google_logging_v2_logging_config_pb.DeleteSinkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listExclusions(
    request: google_logging_v2_logging_config_pb.ListExclusionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.ListExclusionsResponse>;

  getExclusion(
    request: google_logging_v2_logging_config_pb.GetExclusionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogExclusion>;

  createExclusion(
    request: google_logging_v2_logging_config_pb.CreateExclusionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogExclusion>;

  updateExclusion(
    request: google_logging_v2_logging_config_pb.UpdateExclusionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogExclusion>;

  deleteExclusion(
    request: google_logging_v2_logging_config_pb.DeleteExclusionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getCmekSettings(
    request: google_logging_v2_logging_config_pb.GetCmekSettingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.CmekSettings>;

  updateCmekSettings(
    request: google_logging_v2_logging_config_pb.UpdateCmekSettingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.CmekSettings>;

  getSettings(
    request: google_logging_v2_logging_config_pb.GetSettingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.Settings>;

  updateSettings(
    request: google_logging_v2_logging_config_pb.UpdateSettingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.Settings>;

  copyLogEntries(
    request: google_logging_v2_logging_config_pb.CopyLogEntriesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

