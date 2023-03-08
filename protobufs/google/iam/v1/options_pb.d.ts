import * as jspb from 'google-protobuf'



export class GetPolicyOptions extends jspb.Message {
  getRequestedPolicyVersion(): number;
  setRequestedPolicyVersion(value: number): GetPolicyOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPolicyOptions.AsObject;
  static toObject(includeInstance: boolean, msg: GetPolicyOptions): GetPolicyOptions.AsObject;
  static serializeBinaryToWriter(message: GetPolicyOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPolicyOptions;
  static deserializeBinaryFromReader(message: GetPolicyOptions, reader: jspb.BinaryReader): GetPolicyOptions;
}

export namespace GetPolicyOptions {
  export type AsObject = {
    requestedPolicyVersion: number,
  }
}

