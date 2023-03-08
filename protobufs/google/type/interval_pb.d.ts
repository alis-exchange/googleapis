import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Interval extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Interval;
  hasStartTime(): boolean;
  clearStartTime(): Interval;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Interval;
  hasEndTime(): boolean;
  clearEndTime(): Interval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Interval.AsObject;
  static toObject(includeInstance: boolean, msg: Interval): Interval.AsObject;
  static serializeBinaryToWriter(message: Interval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Interval;
  static deserializeBinaryFromReader(message: Interval, reader: jspb.BinaryReader): Interval;
}

export namespace Interval {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

