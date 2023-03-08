import * as jspb from 'google-protobuf'

import * as google_api_auth_pb from '../../../../google/api/auth_pb';
import * as google_api_documentation_pb from '../../../../google/api/documentation_pb';
import * as google_api_endpoint_pb from '../../../../google/api/endpoint_pb';
import * as google_api_monitored_resource_pb from '../../../../google/api/monitored_resource_pb';
import * as google_api_monitoring_pb from '../../../../google/api/monitoring_pb';
import * as google_api_quota_pb from '../../../../google/api/quota_pb';
import * as google_api_usage_pb from '../../../../google/api/usage_pb';
import * as google_protobuf_api_pb from 'google-protobuf/google/protobuf/api_pb';


export class Service extends jspb.Message {
  getName(): string;
  setName(value: string): Service;

  getParent(): string;
  setParent(value: string): Service;

  getConfig(): ServiceConfig | undefined;
  setConfig(value?: ServiceConfig): Service;
  hasConfig(): boolean;
  clearConfig(): Service;

  getState(): State;
  setState(value: State): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    name: string,
    parent: string,
    config?: ServiceConfig.AsObject,
    state: State,
  }
}

export class ServiceConfig extends jspb.Message {
  getName(): string;
  setName(value: string): ServiceConfig;

  getTitle(): string;
  setTitle(value: string): ServiceConfig;

  getApisList(): Array<google_protobuf_api_pb.Api>;
  setApisList(value: Array<google_protobuf_api_pb.Api>): ServiceConfig;
  clearApisList(): ServiceConfig;
  addApis(value?: google_protobuf_api_pb.Api, index?: number): google_protobuf_api_pb.Api;

  getDocumentation(): google_api_documentation_pb.Documentation | undefined;
  setDocumentation(value?: google_api_documentation_pb.Documentation): ServiceConfig;
  hasDocumentation(): boolean;
  clearDocumentation(): ServiceConfig;

  getQuota(): google_api_quota_pb.Quota | undefined;
  setQuota(value?: google_api_quota_pb.Quota): ServiceConfig;
  hasQuota(): boolean;
  clearQuota(): ServiceConfig;

  getAuthentication(): google_api_auth_pb.Authentication | undefined;
  setAuthentication(value?: google_api_auth_pb.Authentication): ServiceConfig;
  hasAuthentication(): boolean;
  clearAuthentication(): ServiceConfig;

  getUsage(): google_api_usage_pb.Usage | undefined;
  setUsage(value?: google_api_usage_pb.Usage): ServiceConfig;
  hasUsage(): boolean;
  clearUsage(): ServiceConfig;

  getEndpointsList(): Array<google_api_endpoint_pb.Endpoint>;
  setEndpointsList(value: Array<google_api_endpoint_pb.Endpoint>): ServiceConfig;
  clearEndpointsList(): ServiceConfig;
  addEndpoints(value?: google_api_endpoint_pb.Endpoint, index?: number): google_api_endpoint_pb.Endpoint;

  getMonitoredResourcesList(): Array<google_api_monitored_resource_pb.MonitoredResourceDescriptor>;
  setMonitoredResourcesList(value: Array<google_api_monitored_resource_pb.MonitoredResourceDescriptor>): ServiceConfig;
  clearMonitoredResourcesList(): ServiceConfig;
  addMonitoredResources(value?: google_api_monitored_resource_pb.MonitoredResourceDescriptor, index?: number): google_api_monitored_resource_pb.MonitoredResourceDescriptor;

  getMonitoring(): google_api_monitoring_pb.Monitoring | undefined;
  setMonitoring(value?: google_api_monitoring_pb.Monitoring): ServiceConfig;
  hasMonitoring(): boolean;
  clearMonitoring(): ServiceConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceConfig): ServiceConfig.AsObject;
  static serializeBinaryToWriter(message: ServiceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceConfig;
  static deserializeBinaryFromReader(message: ServiceConfig, reader: jspb.BinaryReader): ServiceConfig;
}

export namespace ServiceConfig {
  export type AsObject = {
    name: string,
    title: string,
    apisList: Array<google_protobuf_api_pb.Api.AsObject>,
    documentation?: google_api_documentation_pb.Documentation.AsObject,
    quota?: google_api_quota_pb.Quota.AsObject,
    authentication?: google_api_auth_pb.Authentication.AsObject,
    usage?: google_api_usage_pb.Usage.AsObject,
    endpointsList: Array<google_api_endpoint_pb.Endpoint.AsObject>,
    monitoredResourcesList: Array<google_api_monitored_resource_pb.MonitoredResourceDescriptor.AsObject>,
    monitoring?: google_api_monitoring_pb.Monitoring.AsObject,
  }
}

export class OperationMetadata extends jspb.Message {
  getResourceNamesList(): Array<string>;
  setResourceNamesList(value: Array<string>): OperationMetadata;
  clearResourceNamesList(): OperationMetadata;
  addResourceNames(value: string, index?: number): OperationMetadata;

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
  }
}

export enum State { 
  STATE_UNSPECIFIED = 0,
  DISABLED = 1,
  ENABLED = 2,
}
