import * as jspb from 'google-protobuf'

import * as google_api_config_change_pb from '../../../../google/api/config_change_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ManagedService extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): ManagedService;

  getProducerProjectId(): string;
  setProducerProjectId(value: string): ManagedService;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedService.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedService): ManagedService.AsObject;
  static serializeBinaryToWriter(message: ManagedService, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedService;
  static deserializeBinaryFromReader(message: ManagedService, reader: jspb.BinaryReader): ManagedService;
}

export namespace ManagedService {
  export type AsObject = {
    serviceName: string,
    producerProjectId: string,
  }
}

export class OperationMetadata extends jspb.Message {
  getResourceNamesList(): Array<string>;
  setResourceNamesList(value: Array<string>): OperationMetadata;
  clearResourceNamesList(): OperationMetadata;
  addResourceNames(value: string, index?: number): OperationMetadata;

  getStepsList(): Array<OperationMetadata.Step>;
  setStepsList(value: Array<OperationMetadata.Step>): OperationMetadata;
  clearStepsList(): OperationMetadata;
  addSteps(value?: OperationMetadata.Step, index?: number): OperationMetadata.Step;

  getProgressPercentage(): number;
  setProgressPercentage(value: number): OperationMetadata;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
  hasStartTime(): boolean;
  clearStartTime(): OperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
  static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadata;
  static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
  export type AsObject = {
    resourceNamesList: Array<string>,
    stepsList: Array<OperationMetadata.Step.AsObject>,
    progressPercentage: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class Step extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): Step;

    getStatus(): OperationMetadata.Status;
    setStatus(value: OperationMetadata.Status): Step;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Step.AsObject;
    static toObject(includeInstance: boolean, msg: Step): Step.AsObject;
    static serializeBinaryToWriter(message: Step, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Step;
    static deserializeBinaryFromReader(message: Step, reader: jspb.BinaryReader): Step;
  }

  export namespace Step {
    export type AsObject = {
      description: string,
      status: OperationMetadata.Status,
    }
  }


  export enum Status { 
    STATUS_UNSPECIFIED = 0,
    DONE = 1,
    NOT_STARTED = 2,
    IN_PROGRESS = 3,
    FAILED = 4,
    CANCELLED = 5,
  }
}

export class Diagnostic extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): Diagnostic;

  getKind(): Diagnostic.Kind;
  setKind(value: Diagnostic.Kind): Diagnostic;

  getMessage(): string;
  setMessage(value: string): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Diagnostic.AsObject;
  static toObject(includeInstance: boolean, msg: Diagnostic): Diagnostic.AsObject;
  static serializeBinaryToWriter(message: Diagnostic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Diagnostic;
  static deserializeBinaryFromReader(message: Diagnostic, reader: jspb.BinaryReader): Diagnostic;
}

export namespace Diagnostic {
  export type AsObject = {
    location: string,
    kind: Diagnostic.Kind,
    message: string,
  }

  export enum Kind { 
    WARNING = 0,
    ERROR = 1,
  }
}

export class ConfigSource extends jspb.Message {
  getId(): string;
  setId(value: string): ConfigSource;

  getFilesList(): Array<ConfigFile>;
  setFilesList(value: Array<ConfigFile>): ConfigSource;
  clearFilesList(): ConfigSource;
  addFiles(value?: ConfigFile, index?: number): ConfigFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSource.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSource): ConfigSource.AsObject;
  static serializeBinaryToWriter(message: ConfigSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSource;
  static deserializeBinaryFromReader(message: ConfigSource, reader: jspb.BinaryReader): ConfigSource;
}

export namespace ConfigSource {
  export type AsObject = {
    id: string,
    filesList: Array<ConfigFile.AsObject>,
  }
}

export class ConfigFile extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): ConfigFile;

  getFileContents(): Uint8Array | string;
  getFileContents_asU8(): Uint8Array;
  getFileContents_asB64(): string;
  setFileContents(value: Uint8Array | string): ConfigFile;

  getFileType(): ConfigFile.FileType;
  setFileType(value: ConfigFile.FileType): ConfigFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigFile.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigFile): ConfigFile.AsObject;
  static serializeBinaryToWriter(message: ConfigFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigFile;
  static deserializeBinaryFromReader(message: ConfigFile, reader: jspb.BinaryReader): ConfigFile;
}

export namespace ConfigFile {
  export type AsObject = {
    filePath: string,
    fileContents: Uint8Array | string,
    fileType: ConfigFile.FileType,
  }

  export enum FileType { 
    FILE_TYPE_UNSPECIFIED = 0,
    SERVICE_CONFIG_YAML = 1,
    OPEN_API_JSON = 2,
    OPEN_API_YAML = 3,
    FILE_DESCRIPTOR_SET_PROTO = 4,
    PROTO_FILE = 6,
  }
}

export class ConfigRef extends jspb.Message {
  getName(): string;
  setName(value: string): ConfigRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigRef.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigRef): ConfigRef.AsObject;
  static serializeBinaryToWriter(message: ConfigRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigRef;
  static deserializeBinaryFromReader(message: ConfigRef, reader: jspb.BinaryReader): ConfigRef;
}

export namespace ConfigRef {
  export type AsObject = {
    name: string,
  }
}

export class ChangeReport extends jspb.Message {
  getConfigChangesList(): Array<google_api_config_change_pb.ConfigChange>;
  setConfigChangesList(value: Array<google_api_config_change_pb.ConfigChange>): ChangeReport;
  clearConfigChangesList(): ChangeReport;
  addConfigChanges(value?: google_api_config_change_pb.ConfigChange, index?: number): google_api_config_change_pb.ConfigChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeReport.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeReport): ChangeReport.AsObject;
  static serializeBinaryToWriter(message: ChangeReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeReport;
  static deserializeBinaryFromReader(message: ChangeReport, reader: jspb.BinaryReader): ChangeReport;
}

export namespace ChangeReport {
  export type AsObject = {
    configChangesList: Array<google_api_config_change_pb.ConfigChange.AsObject>,
  }
}

export class Rollout extends jspb.Message {
  getRolloutId(): string;
  setRolloutId(value: string): Rollout;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Rollout;
  hasCreateTime(): boolean;
  clearCreateTime(): Rollout;

  getCreatedBy(): string;
  setCreatedBy(value: string): Rollout;

  getStatus(): Rollout.RolloutStatus;
  setStatus(value: Rollout.RolloutStatus): Rollout;

  getTrafficPercentStrategy(): Rollout.TrafficPercentStrategy | undefined;
  setTrafficPercentStrategy(value?: Rollout.TrafficPercentStrategy): Rollout;
  hasTrafficPercentStrategy(): boolean;
  clearTrafficPercentStrategy(): Rollout;

  getDeleteServiceStrategy(): Rollout.DeleteServiceStrategy | undefined;
  setDeleteServiceStrategy(value?: Rollout.DeleteServiceStrategy): Rollout;
  hasDeleteServiceStrategy(): boolean;
  clearDeleteServiceStrategy(): Rollout;

  getServiceName(): string;
  setServiceName(value: string): Rollout;

  getStrategyCase(): Rollout.StrategyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rollout.AsObject;
  static toObject(includeInstance: boolean, msg: Rollout): Rollout.AsObject;
  static serializeBinaryToWriter(message: Rollout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rollout;
  static deserializeBinaryFromReader(message: Rollout, reader: jspb.BinaryReader): Rollout;
}

export namespace Rollout {
  export type AsObject = {
    rolloutId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    status: Rollout.RolloutStatus,
    trafficPercentStrategy?: Rollout.TrafficPercentStrategy.AsObject,
    deleteServiceStrategy?: Rollout.DeleteServiceStrategy.AsObject,
    serviceName: string,
  }

  export class TrafficPercentStrategy extends jspb.Message {
    getPercentagesMap(): jspb.Map<string, number>;
    clearPercentagesMap(): TrafficPercentStrategy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrafficPercentStrategy.AsObject;
    static toObject(includeInstance: boolean, msg: TrafficPercentStrategy): TrafficPercentStrategy.AsObject;
    static serializeBinaryToWriter(message: TrafficPercentStrategy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrafficPercentStrategy;
    static deserializeBinaryFromReader(message: TrafficPercentStrategy, reader: jspb.BinaryReader): TrafficPercentStrategy;
  }

  export namespace TrafficPercentStrategy {
    export type AsObject = {
      percentagesMap: Array<[string, number]>,
    }
  }


  export class DeleteServiceStrategy extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteServiceStrategy.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteServiceStrategy): DeleteServiceStrategy.AsObject;
    static serializeBinaryToWriter(message: DeleteServiceStrategy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteServiceStrategy;
    static deserializeBinaryFromReader(message: DeleteServiceStrategy, reader: jspb.BinaryReader): DeleteServiceStrategy;
  }

  export namespace DeleteServiceStrategy {
    export type AsObject = {
    }
  }


  export enum RolloutStatus { 
    ROLLOUT_STATUS_UNSPECIFIED = 0,
    IN_PROGRESS = 1,
    SUCCESS = 2,
    CANCELLED = 3,
    FAILED = 4,
    PENDING = 5,
    FAILED_ROLLED_BACK = 6,
  }

  export enum StrategyCase { 
    STRATEGY_NOT_SET = 0,
    TRAFFIC_PERCENT_STRATEGY = 5,
    DELETE_SERVICE_STRATEGY = 200,
  }
}

