import * as jspb from 'google-protobuf'

import * as google_api_client_pb from '../../../../../google/api/client_pb';
import * as google_api_expr_v1alpha1_checked_pb from '../../../../../google/api/expr/v1alpha1/checked_pb';
import * as google_api_expr_v1alpha1_eval_pb from '../../../../../google/api/expr/v1alpha1/eval_pb';
import * as google_api_expr_v1alpha1_syntax_pb from '../../../../../google/api/expr/v1alpha1/syntax_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';


export class ParseRequest extends jspb.Message {
  getCelSource(): string;
  setCelSource(value: string): ParseRequest;

  getSyntaxVersion(): string;
  setSyntaxVersion(value: string): ParseRequest;

  getSourceLocation(): string;
  setSourceLocation(value: string): ParseRequest;

  getDisableMacros(): boolean;
  setDisableMacros(value: boolean): ParseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ParseRequest): ParseRequest.AsObject;
  static serializeBinaryToWriter(message: ParseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseRequest;
  static deserializeBinaryFromReader(message: ParseRequest, reader: jspb.BinaryReader): ParseRequest;
}

export namespace ParseRequest {
  export type AsObject = {
    celSource: string,
    syntaxVersion: string,
    sourceLocation: string,
    disableMacros: boolean,
  }
}

export class ParseResponse extends jspb.Message {
  getParsedExpr(): google_api_expr_v1alpha1_syntax_pb.ParsedExpr | undefined;
  setParsedExpr(value?: google_api_expr_v1alpha1_syntax_pb.ParsedExpr): ParseResponse;
  hasParsedExpr(): boolean;
  clearParsedExpr(): ParseResponse;

  getIssuesList(): Array<google_rpc_status_pb.Status>;
  setIssuesList(value: Array<google_rpc_status_pb.Status>): ParseResponse;
  clearIssuesList(): ParseResponse;
  addIssues(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ParseResponse): ParseResponse.AsObject;
  static serializeBinaryToWriter(message: ParseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseResponse;
  static deserializeBinaryFromReader(message: ParseResponse, reader: jspb.BinaryReader): ParseResponse;
}

export namespace ParseResponse {
  export type AsObject = {
    parsedExpr?: google_api_expr_v1alpha1_syntax_pb.ParsedExpr.AsObject,
    issuesList: Array<google_rpc_status_pb.Status.AsObject>,
  }
}

export class CheckRequest extends jspb.Message {
  getParsedExpr(): google_api_expr_v1alpha1_syntax_pb.ParsedExpr | undefined;
  setParsedExpr(value?: google_api_expr_v1alpha1_syntax_pb.ParsedExpr): CheckRequest;
  hasParsedExpr(): boolean;
  clearParsedExpr(): CheckRequest;

  getTypeEnvList(): Array<google_api_expr_v1alpha1_checked_pb.Decl>;
  setTypeEnvList(value: Array<google_api_expr_v1alpha1_checked_pb.Decl>): CheckRequest;
  clearTypeEnvList(): CheckRequest;
  addTypeEnv(value?: google_api_expr_v1alpha1_checked_pb.Decl, index?: number): google_api_expr_v1alpha1_checked_pb.Decl;

  getContainer(): string;
  setContainer(value: string): CheckRequest;

  getNoStdEnv(): boolean;
  setNoStdEnv(value: boolean): CheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRequest): CheckRequest.AsObject;
  static serializeBinaryToWriter(message: CheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRequest;
  static deserializeBinaryFromReader(message: CheckRequest, reader: jspb.BinaryReader): CheckRequest;
}

export namespace CheckRequest {
  export type AsObject = {
    parsedExpr?: google_api_expr_v1alpha1_syntax_pb.ParsedExpr.AsObject,
    typeEnvList: Array<google_api_expr_v1alpha1_checked_pb.Decl.AsObject>,
    container: string,
    noStdEnv: boolean,
  }
}

export class CheckResponse extends jspb.Message {
  getCheckedExpr(): google_api_expr_v1alpha1_checked_pb.CheckedExpr | undefined;
  setCheckedExpr(value?: google_api_expr_v1alpha1_checked_pb.CheckedExpr): CheckResponse;
  hasCheckedExpr(): boolean;
  clearCheckedExpr(): CheckResponse;

  getIssuesList(): Array<google_rpc_status_pb.Status>;
  setIssuesList(value: Array<google_rpc_status_pb.Status>): CheckResponse;
  clearIssuesList(): CheckResponse;
  addIssues(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResponse): CheckResponse.AsObject;
  static serializeBinaryToWriter(message: CheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResponse;
  static deserializeBinaryFromReader(message: CheckResponse, reader: jspb.BinaryReader): CheckResponse;
}

export namespace CheckResponse {
  export type AsObject = {
    checkedExpr?: google_api_expr_v1alpha1_checked_pb.CheckedExpr.AsObject,
    issuesList: Array<google_rpc_status_pb.Status.AsObject>,
  }
}

export class EvalRequest extends jspb.Message {
  getParsedExpr(): google_api_expr_v1alpha1_syntax_pb.ParsedExpr | undefined;
  setParsedExpr(value?: google_api_expr_v1alpha1_syntax_pb.ParsedExpr): EvalRequest;
  hasParsedExpr(): boolean;
  clearParsedExpr(): EvalRequest;

  getCheckedExpr(): google_api_expr_v1alpha1_checked_pb.CheckedExpr | undefined;
  setCheckedExpr(value?: google_api_expr_v1alpha1_checked_pb.CheckedExpr): EvalRequest;
  hasCheckedExpr(): boolean;
  clearCheckedExpr(): EvalRequest;

  getBindingsMap(): jspb.Map<string, google_api_expr_v1alpha1_eval_pb.ExprValue>;
  clearBindingsMap(): EvalRequest;

  getContainer(): string;
  setContainer(value: string): EvalRequest;

  getExprKindCase(): EvalRequest.ExprKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EvalRequest): EvalRequest.AsObject;
  static serializeBinaryToWriter(message: EvalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalRequest;
  static deserializeBinaryFromReader(message: EvalRequest, reader: jspb.BinaryReader): EvalRequest;
}

export namespace EvalRequest {
  export type AsObject = {
    parsedExpr?: google_api_expr_v1alpha1_syntax_pb.ParsedExpr.AsObject,
    checkedExpr?: google_api_expr_v1alpha1_checked_pb.CheckedExpr.AsObject,
    bindingsMap: Array<[string, google_api_expr_v1alpha1_eval_pb.ExprValue.AsObject]>,
    container: string,
  }

  export enum ExprKindCase { 
    EXPR_KIND_NOT_SET = 0,
    PARSED_EXPR = 1,
    CHECKED_EXPR = 2,
  }
}

export class EvalResponse extends jspb.Message {
  getResult(): google_api_expr_v1alpha1_eval_pb.ExprValue | undefined;
  setResult(value?: google_api_expr_v1alpha1_eval_pb.ExprValue): EvalResponse;
  hasResult(): boolean;
  clearResult(): EvalResponse;

  getIssuesList(): Array<google_rpc_status_pb.Status>;
  setIssuesList(value: Array<google_rpc_status_pb.Status>): EvalResponse;
  clearIssuesList(): EvalResponse;
  addIssues(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EvalResponse): EvalResponse.AsObject;
  static serializeBinaryToWriter(message: EvalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalResponse;
  static deserializeBinaryFromReader(message: EvalResponse, reader: jspb.BinaryReader): EvalResponse;
}

export namespace EvalResponse {
  export type AsObject = {
    result?: google_api_expr_v1alpha1_eval_pb.ExprValue.AsObject,
    issuesList: Array<google_rpc_status_pb.Status.AsObject>,
  }
}

export class SourcePosition extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): SourcePosition;

  getOffset(): number;
  setOffset(value: number): SourcePosition;

  getLine(): number;
  setLine(value: number): SourcePosition;

  getColumn(): number;
  setColumn(value: number): SourcePosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourcePosition.AsObject;
  static toObject(includeInstance: boolean, msg: SourcePosition): SourcePosition.AsObject;
  static serializeBinaryToWriter(message: SourcePosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourcePosition;
  static deserializeBinaryFromReader(message: SourcePosition, reader: jspb.BinaryReader): SourcePosition;
}

export namespace SourcePosition {
  export type AsObject = {
    location: string,
    offset: number,
    line: number,
    column: number,
  }
}

export class IssueDetails extends jspb.Message {
  getSeverity(): IssueDetails.Severity;
  setSeverity(value: IssueDetails.Severity): IssueDetails;

  getPosition(): SourcePosition | undefined;
  setPosition(value?: SourcePosition): IssueDetails;
  hasPosition(): boolean;
  clearPosition(): IssueDetails;

  getId(): number;
  setId(value: number): IssueDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueDetails.AsObject;
  static toObject(includeInstance: boolean, msg: IssueDetails): IssueDetails.AsObject;
  static serializeBinaryToWriter(message: IssueDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueDetails;
  static deserializeBinaryFromReader(message: IssueDetails, reader: jspb.BinaryReader): IssueDetails;
}

export namespace IssueDetails {
  export type AsObject = {
    severity: IssueDetails.Severity,
    position?: SourcePosition.AsObject,
    id: number,
  }

  export enum Severity { 
    SEVERITY_UNSPECIFIED = 0,
    DEPRECATION = 1,
    WARNING = 2,
    ERROR = 3,
  }
}

