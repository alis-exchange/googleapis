import * as jspb from 'google-protobuf'



export class LocalizedText extends jspb.Message {
  getText(): string;
  setText(value: string): LocalizedText;

  getLanguageCode(): string;
  setLanguageCode(value: string): LocalizedText;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizedText.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizedText): LocalizedText.AsObject;
  static serializeBinaryToWriter(message: LocalizedText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizedText;
  static deserializeBinaryFromReader(message: LocalizedText, reader: jspb.BinaryReader): LocalizedText;
}

export namespace LocalizedText {
  export type AsObject = {
    text: string,
    languageCode: string,
  }
}

