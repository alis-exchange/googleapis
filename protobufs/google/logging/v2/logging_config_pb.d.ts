import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class LogBucket extends jspb.Message {
  getName(): string;
  setName(value: string): LogBucket;

  getDescription(): string;
  setDescription(value: string): LogBucket;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): LogBucket;
  hasCreateTime(): boolean;
  clearCreateTime(): LogBucket;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): LogBucket;
  hasUpdateTime(): boolean;
  clearUpdateTime(): LogBucket;

  getRetentionDays(): number;
  setRetentionDays(value: number): LogBucket;

  getLocked(): boolean;
  setLocked(value: boolean): LogBucket;

  getLifecycleState(): LifecycleState;
  setLifecycleState(value: LifecycleState): LogBucket;

  getRestrictedFieldsList(): Array<string>;
  setRestrictedFieldsList(value: Array<string>): LogBucket;
  clearRestrictedFieldsList(): LogBucket;
  addRestrictedFields(value: string, index?: number): LogBucket;

  getCmekSettings(): CmekSettings | undefined;
  setCmekSettings(value?: CmekSettings): LogBucket;
  hasCmekSettings(): boolean;
  clearCmekSettings(): LogBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogBucket.AsObject;
  static toObject(includeInstance: boolean, msg: LogBucket): LogBucket.AsObject;
  static serializeBinaryToWriter(message: LogBucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogBucket;
  static deserializeBinaryFromReader(message: LogBucket, reader: jspb.BinaryReader): LogBucket;
}

export namespace LogBucket {
  export type AsObject = {
    name: string,
    description: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    retentionDays: number,
    locked: boolean,
    lifecycleState: LifecycleState,
    restrictedFieldsList: Array<string>,
    cmekSettings?: CmekSettings.AsObject,
  }
}

export class LogView extends jspb.Message {
  getName(): string;
  setName(value: string): LogView;

  getDescription(): string;
  setDescription(value: string): LogView;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): LogView;
  hasCreateTime(): boolean;
  clearCreateTime(): LogView;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): LogView;
  hasUpdateTime(): boolean;
  clearUpdateTime(): LogView;

  getFilter(): string;
  setFilter(value: string): LogView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogView.AsObject;
  static toObject(includeInstance: boolean, msg: LogView): LogView.AsObject;
  static serializeBinaryToWriter(message: LogView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogView;
  static deserializeBinaryFromReader(message: LogView, reader: jspb.BinaryReader): LogView;
}

export namespace LogView {
  export type AsObject = {
    name: string,
    description: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    filter: string,
  }
}

export class LogSink extends jspb.Message {
  getName(): string;
  setName(value: string): LogSink;

  getDestination(): string;
  setDestination(value: string): LogSink;

  getFilter(): string;
  setFilter(value: string): LogSink;

  getDescription(): string;
  setDescription(value: string): LogSink;

  getDisabled(): boolean;
  setDisabled(value: boolean): LogSink;

  getExclusionsList(): Array<LogExclusion>;
  setExclusionsList(value: Array<LogExclusion>): LogSink;
  clearExclusionsList(): LogSink;
  addExclusions(value?: LogExclusion, index?: number): LogExclusion;

  getOutputVersionFormat(): LogSink.VersionFormat;
  setOutputVersionFormat(value: LogSink.VersionFormat): LogSink;

  getWriterIdentity(): string;
  setWriterIdentity(value: string): LogSink;

  getIncludeChildren(): boolean;
  setIncludeChildren(value: boolean): LogSink;

  getBigqueryOptions(): BigQueryOptions | undefined;
  setBigqueryOptions(value?: BigQueryOptions): LogSink;
  hasBigqueryOptions(): boolean;
  clearBigqueryOptions(): LogSink;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): LogSink;
  hasCreateTime(): boolean;
  clearCreateTime(): LogSink;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): LogSink;
  hasUpdateTime(): boolean;
  clearUpdateTime(): LogSink;

  getOptionsCase(): LogSink.OptionsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogSink.AsObject;
  static toObject(includeInstance: boolean, msg: LogSink): LogSink.AsObject;
  static serializeBinaryToWriter(message: LogSink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogSink;
  static deserializeBinaryFromReader(message: LogSink, reader: jspb.BinaryReader): LogSink;
}

export namespace LogSink {
  export type AsObject = {
    name: string,
    destination: string,
    filter: string,
    description: string,
    disabled: boolean,
    exclusionsList: Array<LogExclusion.AsObject>,
    outputVersionFormat: LogSink.VersionFormat,
    writerIdentity: string,
    includeChildren: boolean,
    bigqueryOptions?: BigQueryOptions.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum VersionFormat { 
    VERSION_FORMAT_UNSPECIFIED = 0,
    V2 = 1,
    V1 = 2,
  }

  export enum OptionsCase { 
    OPTIONS_NOT_SET = 0,
    BIGQUERY_OPTIONS = 12,
  }
}

export class BigQueryOptions extends jspb.Message {
  getUsePartitionedTables(): boolean;
  setUsePartitionedTables(value: boolean): BigQueryOptions;

  getUsesTimestampColumnPartitioning(): boolean;
  setUsesTimestampColumnPartitioning(value: boolean): BigQueryOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryOptions.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryOptions): BigQueryOptions.AsObject;
  static serializeBinaryToWriter(message: BigQueryOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryOptions;
  static deserializeBinaryFromReader(message: BigQueryOptions, reader: jspb.BinaryReader): BigQueryOptions;
}

export namespace BigQueryOptions {
  export type AsObject = {
    usePartitionedTables: boolean,
    usesTimestampColumnPartitioning: boolean,
  }
}

export class ListBucketsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListBucketsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBucketsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBucketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBucketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBucketsRequest): ListBucketsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBucketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBucketsRequest;
  static deserializeBinaryFromReader(message: ListBucketsRequest, reader: jspb.BinaryReader): ListBucketsRequest;
}

export namespace ListBucketsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListBucketsResponse extends jspb.Message {
  getBucketsList(): Array<LogBucket>;
  setBucketsList(value: Array<LogBucket>): ListBucketsResponse;
  clearBucketsList(): ListBucketsResponse;
  addBuckets(value?: LogBucket, index?: number): LogBucket;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBucketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBucketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBucketsResponse): ListBucketsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBucketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBucketsResponse;
  static deserializeBinaryFromReader(message: ListBucketsResponse, reader: jspb.BinaryReader): ListBucketsResponse;
}

export namespace ListBucketsResponse {
  export type AsObject = {
    bucketsList: Array<LogBucket.AsObject>,
    nextPageToken: string,
  }
}

export class CreateBucketRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateBucketRequest;

  getBucketId(): string;
  setBucketId(value: string): CreateBucketRequest;

  getBucket(): LogBucket | undefined;
  setBucket(value?: LogBucket): CreateBucketRequest;
  hasBucket(): boolean;
  clearBucket(): CreateBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBucketRequest): CreateBucketRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBucketRequest;
  static deserializeBinaryFromReader(message: CreateBucketRequest, reader: jspb.BinaryReader): CreateBucketRequest;
}

export namespace CreateBucketRequest {
  export type AsObject = {
    parent: string,
    bucketId: string,
    bucket?: LogBucket.AsObject,
  }
}

export class UpdateBucketRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateBucketRequest;

  getBucket(): LogBucket | undefined;
  setBucket(value?: LogBucket): UpdateBucketRequest;
  hasBucket(): boolean;
  clearBucket(): UpdateBucketRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateBucketRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBucketRequest): UpdateBucketRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBucketRequest;
  static deserializeBinaryFromReader(message: UpdateBucketRequest, reader: jspb.BinaryReader): UpdateBucketRequest;
}

export namespace UpdateBucketRequest {
  export type AsObject = {
    name: string,
    bucket?: LogBucket.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetBucketRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBucketRequest): GetBucketRequest.AsObject;
  static serializeBinaryToWriter(message: GetBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBucketRequest;
  static deserializeBinaryFromReader(message: GetBucketRequest, reader: jspb.BinaryReader): GetBucketRequest;
}

export namespace GetBucketRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteBucketRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBucketRequest): DeleteBucketRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBucketRequest;
  static deserializeBinaryFromReader(message: DeleteBucketRequest, reader: jspb.BinaryReader): DeleteBucketRequest;
}

export namespace DeleteBucketRequest {
  export type AsObject = {
    name: string,
  }
}

export class UndeleteBucketRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UndeleteBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteBucketRequest): UndeleteBucketRequest.AsObject;
  static serializeBinaryToWriter(message: UndeleteBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteBucketRequest;
  static deserializeBinaryFromReader(message: UndeleteBucketRequest, reader: jspb.BinaryReader): UndeleteBucketRequest;
}

export namespace UndeleteBucketRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListViewsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListViewsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListViewsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListViewsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListViewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListViewsRequest): ListViewsRequest.AsObject;
  static serializeBinaryToWriter(message: ListViewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListViewsRequest;
  static deserializeBinaryFromReader(message: ListViewsRequest, reader: jspb.BinaryReader): ListViewsRequest;
}

export namespace ListViewsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListViewsResponse extends jspb.Message {
  getViewsList(): Array<LogView>;
  setViewsList(value: Array<LogView>): ListViewsResponse;
  clearViewsList(): ListViewsResponse;
  addViews(value?: LogView, index?: number): LogView;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListViewsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListViewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListViewsResponse): ListViewsResponse.AsObject;
  static serializeBinaryToWriter(message: ListViewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListViewsResponse;
  static deserializeBinaryFromReader(message: ListViewsResponse, reader: jspb.BinaryReader): ListViewsResponse;
}

export namespace ListViewsResponse {
  export type AsObject = {
    viewsList: Array<LogView.AsObject>,
    nextPageToken: string,
  }
}

export class CreateViewRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateViewRequest;

  getViewId(): string;
  setViewId(value: string): CreateViewRequest;

  getView(): LogView | undefined;
  setView(value?: LogView): CreateViewRequest;
  hasView(): boolean;
  clearView(): CreateViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateViewRequest): CreateViewRequest.AsObject;
  static serializeBinaryToWriter(message: CreateViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateViewRequest;
  static deserializeBinaryFromReader(message: CreateViewRequest, reader: jspb.BinaryReader): CreateViewRequest;
}

export namespace CreateViewRequest {
  export type AsObject = {
    parent: string,
    viewId: string,
    view?: LogView.AsObject,
  }
}

export class UpdateViewRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateViewRequest;

  getView(): LogView | undefined;
  setView(value?: LogView): UpdateViewRequest;
  hasView(): boolean;
  clearView(): UpdateViewRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateViewRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateViewRequest): UpdateViewRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateViewRequest;
  static deserializeBinaryFromReader(message: UpdateViewRequest, reader: jspb.BinaryReader): UpdateViewRequest;
}

export namespace UpdateViewRequest {
  export type AsObject = {
    name: string,
    view?: LogView.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetViewRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetViewRequest): GetViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetViewRequest;
  static deserializeBinaryFromReader(message: GetViewRequest, reader: jspb.BinaryReader): GetViewRequest;
}

export namespace GetViewRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteViewRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteViewRequest): DeleteViewRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteViewRequest;
  static deserializeBinaryFromReader(message: DeleteViewRequest, reader: jspb.BinaryReader): DeleteViewRequest;
}

export namespace DeleteViewRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListSinksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListSinksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSinksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListSinksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSinksRequest): ListSinksRequest.AsObject;
  static serializeBinaryToWriter(message: ListSinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSinksRequest;
  static deserializeBinaryFromReader(message: ListSinksRequest, reader: jspb.BinaryReader): ListSinksRequest;
}

export namespace ListSinksRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListSinksResponse extends jspb.Message {
  getSinksList(): Array<LogSink>;
  setSinksList(value: Array<LogSink>): ListSinksResponse;
  clearSinksList(): ListSinksResponse;
  addSinks(value?: LogSink, index?: number): LogSink;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSinksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSinksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSinksResponse): ListSinksResponse.AsObject;
  static serializeBinaryToWriter(message: ListSinksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSinksResponse;
  static deserializeBinaryFromReader(message: ListSinksResponse, reader: jspb.BinaryReader): ListSinksResponse;
}

export namespace ListSinksResponse {
  export type AsObject = {
    sinksList: Array<LogSink.AsObject>,
    nextPageToken: string,
  }
}

export class GetSinkRequest extends jspb.Message {
  getSinkName(): string;
  setSinkName(value: string): GetSinkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSinkRequest): GetSinkRequest.AsObject;
  static serializeBinaryToWriter(message: GetSinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSinkRequest;
  static deserializeBinaryFromReader(message: GetSinkRequest, reader: jspb.BinaryReader): GetSinkRequest;
}

export namespace GetSinkRequest {
  export type AsObject = {
    sinkName: string,
  }
}

export class CreateSinkRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateSinkRequest;

  getSink(): LogSink | undefined;
  setSink(value?: LogSink): CreateSinkRequest;
  hasSink(): boolean;
  clearSink(): CreateSinkRequest;

  getUniqueWriterIdentity(): boolean;
  setUniqueWriterIdentity(value: boolean): CreateSinkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSinkRequest): CreateSinkRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSinkRequest;
  static deserializeBinaryFromReader(message: CreateSinkRequest, reader: jspb.BinaryReader): CreateSinkRequest;
}

export namespace CreateSinkRequest {
  export type AsObject = {
    parent: string,
    sink?: LogSink.AsObject,
    uniqueWriterIdentity: boolean,
  }
}

export class UpdateSinkRequest extends jspb.Message {
  getSinkName(): string;
  setSinkName(value: string): UpdateSinkRequest;

  getSink(): LogSink | undefined;
  setSink(value?: LogSink): UpdateSinkRequest;
  hasSink(): boolean;
  clearSink(): UpdateSinkRequest;

  getUniqueWriterIdentity(): boolean;
  setUniqueWriterIdentity(value: boolean): UpdateSinkRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSinkRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateSinkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSinkRequest): UpdateSinkRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSinkRequest;
  static deserializeBinaryFromReader(message: UpdateSinkRequest, reader: jspb.BinaryReader): UpdateSinkRequest;
}

export namespace UpdateSinkRequest {
  export type AsObject = {
    sinkName: string,
    sink?: LogSink.AsObject,
    uniqueWriterIdentity: boolean,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteSinkRequest extends jspb.Message {
  getSinkName(): string;
  setSinkName(value: string): DeleteSinkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSinkRequest): DeleteSinkRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSinkRequest;
  static deserializeBinaryFromReader(message: DeleteSinkRequest, reader: jspb.BinaryReader): DeleteSinkRequest;
}

export namespace DeleteSinkRequest {
  export type AsObject = {
    sinkName: string,
  }
}

export class LogExclusion extends jspb.Message {
  getName(): string;
  setName(value: string): LogExclusion;

  getDescription(): string;
  setDescription(value: string): LogExclusion;

  getFilter(): string;
  setFilter(value: string): LogExclusion;

  getDisabled(): boolean;
  setDisabled(value: boolean): LogExclusion;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): LogExclusion;
  hasCreateTime(): boolean;
  clearCreateTime(): LogExclusion;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): LogExclusion;
  hasUpdateTime(): boolean;
  clearUpdateTime(): LogExclusion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogExclusion.AsObject;
  static toObject(includeInstance: boolean, msg: LogExclusion): LogExclusion.AsObject;
  static serializeBinaryToWriter(message: LogExclusion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogExclusion;
  static deserializeBinaryFromReader(message: LogExclusion, reader: jspb.BinaryReader): LogExclusion;
}

export namespace LogExclusion {
  export type AsObject = {
    name: string,
    description: string,
    filter: string,
    disabled: boolean,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListExclusionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListExclusionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListExclusionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListExclusionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExclusionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExclusionsRequest): ListExclusionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListExclusionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExclusionsRequest;
  static deserializeBinaryFromReader(message: ListExclusionsRequest, reader: jspb.BinaryReader): ListExclusionsRequest;
}

export namespace ListExclusionsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListExclusionsResponse extends jspb.Message {
  getExclusionsList(): Array<LogExclusion>;
  setExclusionsList(value: Array<LogExclusion>): ListExclusionsResponse;
  clearExclusionsList(): ListExclusionsResponse;
  addExclusions(value?: LogExclusion, index?: number): LogExclusion;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListExclusionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExclusionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExclusionsResponse): ListExclusionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListExclusionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExclusionsResponse;
  static deserializeBinaryFromReader(message: ListExclusionsResponse, reader: jspb.BinaryReader): ListExclusionsResponse;
}

export namespace ListExclusionsResponse {
  export type AsObject = {
    exclusionsList: Array<LogExclusion.AsObject>,
    nextPageToken: string,
  }
}

export class GetExclusionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetExclusionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExclusionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExclusionRequest): GetExclusionRequest.AsObject;
  static serializeBinaryToWriter(message: GetExclusionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExclusionRequest;
  static deserializeBinaryFromReader(message: GetExclusionRequest, reader: jspb.BinaryReader): GetExclusionRequest;
}

export namespace GetExclusionRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateExclusionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateExclusionRequest;

  getExclusion(): LogExclusion | undefined;
  setExclusion(value?: LogExclusion): CreateExclusionRequest;
  hasExclusion(): boolean;
  clearExclusion(): CreateExclusionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExclusionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExclusionRequest): CreateExclusionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateExclusionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExclusionRequest;
  static deserializeBinaryFromReader(message: CreateExclusionRequest, reader: jspb.BinaryReader): CreateExclusionRequest;
}

export namespace CreateExclusionRequest {
  export type AsObject = {
    parent: string,
    exclusion?: LogExclusion.AsObject,
  }
}

export class UpdateExclusionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateExclusionRequest;

  getExclusion(): LogExclusion | undefined;
  setExclusion(value?: LogExclusion): UpdateExclusionRequest;
  hasExclusion(): boolean;
  clearExclusion(): UpdateExclusionRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateExclusionRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateExclusionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateExclusionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateExclusionRequest): UpdateExclusionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateExclusionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateExclusionRequest;
  static deserializeBinaryFromReader(message: UpdateExclusionRequest, reader: jspb.BinaryReader): UpdateExclusionRequest;
}

export namespace UpdateExclusionRequest {
  export type AsObject = {
    name: string,
    exclusion?: LogExclusion.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteExclusionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteExclusionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExclusionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExclusionRequest): DeleteExclusionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteExclusionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExclusionRequest;
  static deserializeBinaryFromReader(message: DeleteExclusionRequest, reader: jspb.BinaryReader): DeleteExclusionRequest;
}

export namespace DeleteExclusionRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetCmekSettingsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetCmekSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCmekSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCmekSettingsRequest): GetCmekSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetCmekSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCmekSettingsRequest;
  static deserializeBinaryFromReader(message: GetCmekSettingsRequest, reader: jspb.BinaryReader): GetCmekSettingsRequest;
}

export namespace GetCmekSettingsRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateCmekSettingsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateCmekSettingsRequest;

  getCmekSettings(): CmekSettings | undefined;
  setCmekSettings(value?: CmekSettings): UpdateCmekSettingsRequest;
  hasCmekSettings(): boolean;
  clearCmekSettings(): UpdateCmekSettingsRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCmekSettingsRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateCmekSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCmekSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCmekSettingsRequest): UpdateCmekSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCmekSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCmekSettingsRequest;
  static deserializeBinaryFromReader(message: UpdateCmekSettingsRequest, reader: jspb.BinaryReader): UpdateCmekSettingsRequest;
}

export namespace UpdateCmekSettingsRequest {
  export type AsObject = {
    name: string,
    cmekSettings?: CmekSettings.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CmekSettings extends jspb.Message {
  getName(): string;
  setName(value: string): CmekSettings;

  getKmsKeyName(): string;
  setKmsKeyName(value: string): CmekSettings;

  getServiceAccountId(): string;
  setServiceAccountId(value: string): CmekSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CmekSettings.AsObject;
  static toObject(includeInstance: boolean, msg: CmekSettings): CmekSettings.AsObject;
  static serializeBinaryToWriter(message: CmekSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CmekSettings;
  static deserializeBinaryFromReader(message: CmekSettings, reader: jspb.BinaryReader): CmekSettings;
}

export namespace CmekSettings {
  export type AsObject = {
    name: string,
    kmsKeyName: string,
    serviceAccountId: string,
  }
}

export class GetSettingsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSettingsRequest): GetSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSettingsRequest;
  static deserializeBinaryFromReader(message: GetSettingsRequest, reader: jspb.BinaryReader): GetSettingsRequest;
}

export namespace GetSettingsRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateSettingsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateSettingsRequest;

  getSettings(): Settings | undefined;
  setSettings(value?: Settings): UpdateSettingsRequest;
  hasSettings(): boolean;
  clearSettings(): UpdateSettingsRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSettingsRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSettingsRequest): UpdateSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSettingsRequest;
  static deserializeBinaryFromReader(message: UpdateSettingsRequest, reader: jspb.BinaryReader): UpdateSettingsRequest;
}

export namespace UpdateSettingsRequest {
  export type AsObject = {
    name: string,
    settings?: Settings.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class Settings extends jspb.Message {
  getName(): string;
  setName(value: string): Settings;

  getKmsKeyName(): string;
  setKmsKeyName(value: string): Settings;

  getKmsServiceAccountId(): string;
  setKmsServiceAccountId(value: string): Settings;

  getStorageLocation(): string;
  setStorageLocation(value: string): Settings;

  getDisableDefaultSink(): boolean;
  setDisableDefaultSink(value: boolean): Settings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Settings.AsObject;
  static toObject(includeInstance: boolean, msg: Settings): Settings.AsObject;
  static serializeBinaryToWriter(message: Settings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Settings;
  static deserializeBinaryFromReader(message: Settings, reader: jspb.BinaryReader): Settings;
}

export namespace Settings {
  export type AsObject = {
    name: string,
    kmsKeyName: string,
    kmsServiceAccountId: string,
    storageLocation: string,
    disableDefaultSink: boolean,
  }
}

export class CopyLogEntriesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CopyLogEntriesRequest;

  getFilter(): string;
  setFilter(value: string): CopyLogEntriesRequest;

  getDestination(): string;
  setDestination(value: string): CopyLogEntriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyLogEntriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyLogEntriesRequest): CopyLogEntriesRequest.AsObject;
  static serializeBinaryToWriter(message: CopyLogEntriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyLogEntriesRequest;
  static deserializeBinaryFromReader(message: CopyLogEntriesRequest, reader: jspb.BinaryReader): CopyLogEntriesRequest;
}

export namespace CopyLogEntriesRequest {
  export type AsObject = {
    name: string,
    filter: string,
    destination: string,
  }
}

export class CopyLogEntriesMetadata extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CopyLogEntriesMetadata;
  hasStartTime(): boolean;
  clearStartTime(): CopyLogEntriesMetadata;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CopyLogEntriesMetadata;
  hasEndTime(): boolean;
  clearEndTime(): CopyLogEntriesMetadata;

  getState(): OperationState;
  setState(value: OperationState): CopyLogEntriesMetadata;

  getCancellationRequested(): boolean;
  setCancellationRequested(value: boolean): CopyLogEntriesMetadata;

  getRequest(): CopyLogEntriesRequest | undefined;
  setRequest(value?: CopyLogEntriesRequest): CopyLogEntriesMetadata;
  hasRequest(): boolean;
  clearRequest(): CopyLogEntriesMetadata;

  getProgress(): number;
  setProgress(value: number): CopyLogEntriesMetadata;

  getWriterIdentity(): string;
  setWriterIdentity(value: string): CopyLogEntriesMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyLogEntriesMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CopyLogEntriesMetadata): CopyLogEntriesMetadata.AsObject;
  static serializeBinaryToWriter(message: CopyLogEntriesMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyLogEntriesMetadata;
  static deserializeBinaryFromReader(message: CopyLogEntriesMetadata, reader: jspb.BinaryReader): CopyLogEntriesMetadata;
}

export namespace CopyLogEntriesMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: OperationState,
    cancellationRequested: boolean,
    request?: CopyLogEntriesRequest.AsObject,
    progress: number,
    writerIdentity: string,
  }
}

export class CopyLogEntriesResponse extends jspb.Message {
  getLogEntriesCopiedCount(): number;
  setLogEntriesCopiedCount(value: number): CopyLogEntriesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyLogEntriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyLogEntriesResponse): CopyLogEntriesResponse.AsObject;
  static serializeBinaryToWriter(message: CopyLogEntriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyLogEntriesResponse;
  static deserializeBinaryFromReader(message: CopyLogEntriesResponse, reader: jspb.BinaryReader): CopyLogEntriesResponse;
}

export namespace CopyLogEntriesResponse {
  export type AsObject = {
    logEntriesCopiedCount: number,
  }
}

export enum LifecycleState { 
  LIFECYCLE_STATE_UNSPECIFIED = 0,
  ACTIVE = 1,
  DELETE_REQUESTED = 2,
}
export enum OperationState { 
  OPERATION_STATE_UNSPECIFIED = 0,
  OPERATION_STATE_SCHEDULED = 1,
  OPERATION_STATE_WAITING_FOR_PERMISSIONS = 2,
  OPERATION_STATE_RUNNING = 3,
  OPERATION_STATE_SUCCEEDED = 4,
  OPERATION_STATE_FAILED = 5,
  OPERATION_STATE_CANCELLED = 6,
}
