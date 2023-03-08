import * as jspb from 'google-protobuf'

import * as google_api_expr_v1alpha1_value_pb from '../../../../google/api/expr/v1alpha1/value_pb';


export class Explain extends jspb.Message {
  getValuesList(): Array<google_api_expr_v1alpha1_value_pb.Value>;
  setValuesList(value: Array<google_api_expr_v1alpha1_value_pb.Value>): Explain;
  clearValuesList(): Explain;
  addValues(value?: google_api_expr_v1alpha1_value_pb.Value, index?: number): google_api_expr_v1alpha1_value_pb.Value;

  getExprStepsList(): Array<Explain.ExprStep>;
  setExprStepsList(value: Array<Explain.ExprStep>): Explain;
  clearExprStepsList(): Explain;
  addExprSteps(value?: Explain.ExprStep, index?: number): Explain.ExprStep;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Explain.AsObject;
  static toObject(includeInstance: boolean, msg: Explain): Explain.AsObject;
  static serializeBinaryToWriter(message: Explain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Explain;
  static deserializeBinaryFromReader(message: Explain, reader: jspb.BinaryReader): Explain;
}

export namespace Explain {
  export type AsObject = {
    valuesList: Array<google_api_expr_v1alpha1_value_pb.Value.AsObject>,
    exprStepsList: Array<Explain.ExprStep.AsObject>,
  }

  export class ExprStep extends jspb.Message {
    getId(): number;
    setId(value: number): ExprStep;

    getValueIndex(): number;
    setValueIndex(value: number): ExprStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExprStep.AsObject;
    static toObject(includeInstance: boolean, msg: ExprStep): ExprStep.AsObject;
    static serializeBinaryToWriter(message: ExprStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExprStep;
    static deserializeBinaryFromReader(message: ExprStep, reader: jspb.BinaryReader): ExprStep;
  }

  export namespace ExprStep {
    export type AsObject = {
      id: number,
      valueIndex: number,
    }
  }

}

