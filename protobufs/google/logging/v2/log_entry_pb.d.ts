import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_logging_type_http_request_pb from '../../../google/logging/type/http_request_pb';
import * as google_logging_type_log_severity_pb from '../../../google/logging/type/log_severity_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class LogEntry extends jspb.Message {
  getLogName(): string;
  setLogName(value: string): LogEntry;

  getResource(): google_api_monitored_resource_pb.MonitoredResource | undefined;
  setResource(value?: google_api_monitored_resource_pb.MonitoredResource): LogEntry;
  hasResource(): boolean;
  clearResource(): LogEntry;

  getProtoPayload(): google_protobuf_any_pb.Any | undefined;
  setProtoPayload(value?: google_protobuf_any_pb.Any): LogEntry;
  hasProtoPayload(): boolean;
  clearProtoPayload(): LogEntry;

  getTextPayload(): string;
  setTextPayload(value: string): LogEntry;

  getJsonPayload(): google_protobuf_struct_pb.Struct | undefined;
  setJsonPayload(value?: google_protobuf_struct_pb.Struct): LogEntry;
  hasJsonPayload(): boolean;
  clearJsonPayload(): LogEntry;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): LogEntry;
  hasTimestamp(): boolean;
  clearTimestamp(): LogEntry;

  getReceiveTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReceiveTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): LogEntry;
  hasReceiveTimestamp(): boolean;
  clearReceiveTimestamp(): LogEntry;

  getSeverity(): google_logging_type_log_severity_pb.LogSeverity;
  setSeverity(value: google_logging_type_log_severity_pb.LogSeverity): LogEntry;

  getInsertId(): string;
  setInsertId(value: string): LogEntry;

  getHttpRequest(): google_logging_type_http_request_pb.HttpRequest | undefined;
  setHttpRequest(value?: google_logging_type_http_request_pb.HttpRequest): LogEntry;
  hasHttpRequest(): boolean;
  clearHttpRequest(): LogEntry;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): LogEntry;

  getOperation(): LogEntryOperation | undefined;
  setOperation(value?: LogEntryOperation): LogEntry;
  hasOperation(): boolean;
  clearOperation(): LogEntry;

  getTrace(): string;
  setTrace(value: string): LogEntry;

  getSpanId(): string;
  setSpanId(value: string): LogEntry;

  getTraceSampled(): boolean;
  setTraceSampled(value: boolean): LogEntry;

  getSourceLocation(): LogEntrySourceLocation | undefined;
  setSourceLocation(value?: LogEntrySourceLocation): LogEntry;
  hasSourceLocation(): boolean;
  clearSourceLocation(): LogEntry;

  getSplit(): LogSplit | undefined;
  setSplit(value?: LogSplit): LogEntry;
  hasSplit(): boolean;
  clearSplit(): LogEntry;

  getPayloadCase(): LogEntry.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: LogEntry): LogEntry.AsObject;
  static serializeBinaryToWriter(message: LogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEntry;
  static deserializeBinaryFromReader(message: LogEntry, reader: jspb.BinaryReader): LogEntry;
}

export namespace LogEntry {
  export type AsObject = {
    logName: string,
    resource?: google_api_monitored_resource_pb.MonitoredResource.AsObject,
    protoPayload?: google_protobuf_any_pb.Any.AsObject,
    textPayload: string,
    jsonPayload?: google_protobuf_struct_pb.Struct.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    receiveTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    severity: google_logging_type_log_severity_pb.LogSeverity,
    insertId: string,
    httpRequest?: google_logging_type_http_request_pb.HttpRequest.AsObject,
    labelsMap: Array<[string, string]>,
    operation?: LogEntryOperation.AsObject,
    trace: string,
    spanId: string,
    traceSampled: boolean,
    sourceLocation?: LogEntrySourceLocation.AsObject,
    split?: LogSplit.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    PROTO_PAYLOAD = 2,
    TEXT_PAYLOAD = 3,
    JSON_PAYLOAD = 6,
  }
}

export class LogEntryOperation extends jspb.Message {
  getId(): string;
  setId(value: string): LogEntryOperation;

  getProducer(): string;
  setProducer(value: string): LogEntryOperation;

  getFirst(): boolean;
  setFirst(value: boolean): LogEntryOperation;

  getLast(): boolean;
  setLast(value: boolean): LogEntryOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEntryOperation.AsObject;
  static toObject(includeInstance: boolean, msg: LogEntryOperation): LogEntryOperation.AsObject;
  static serializeBinaryToWriter(message: LogEntryOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEntryOperation;
  static deserializeBinaryFromReader(message: LogEntryOperation, reader: jspb.BinaryReader): LogEntryOperation;
}

export namespace LogEntryOperation {
  export type AsObject = {
    id: string,
    producer: string,
    first: boolean,
    last: boolean,
  }
}

export class LogEntrySourceLocation extends jspb.Message {
  getFile(): string;
  setFile(value: string): LogEntrySourceLocation;

  getLine(): number;
  setLine(value: number): LogEntrySourceLocation;

  getFunction(): string;
  setFunction(value: string): LogEntrySourceLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEntrySourceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: LogEntrySourceLocation): LogEntrySourceLocation.AsObject;
  static serializeBinaryToWriter(message: LogEntrySourceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEntrySourceLocation;
  static deserializeBinaryFromReader(message: LogEntrySourceLocation, reader: jspb.BinaryReader): LogEntrySourceLocation;
}

export namespace LogEntrySourceLocation {
  export type AsObject = {
    file: string,
    line: number,
    pb_function: string,
  }
}

export class LogSplit extends jspb.Message {
  getUid(): string;
  setUid(value: string): LogSplit;

  getIndex(): number;
  setIndex(value: number): LogSplit;

  getTotalSplits(): number;
  setTotalSplits(value: number): LogSplit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogSplit.AsObject;
  static toObject(includeInstance: boolean, msg: LogSplit): LogSplit.AsObject;
  static serializeBinaryToWriter(message: LogSplit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogSplit;
  static deserializeBinaryFromReader(message: LogSplit, reader: jspb.BinaryReader): LogSplit;
}

export namespace LogSplit {
  export type AsObject = {
    uid: string,
    index: number,
    totalSplits: number,
  }
}

