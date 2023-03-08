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

export class ConsumerQuotaMetric extends jspb.Message {
  getName(): string;
  setName(value: string): ConsumerQuotaMetric;

  getMetric(): string;
  setMetric(value: string): ConsumerQuotaMetric;

  getDisplayName(): string;
  setDisplayName(value: string): ConsumerQuotaMetric;

  getConsumerQuotaLimitsList(): Array<ConsumerQuotaLimit>;
  setConsumerQuotaLimitsList(value: Array<ConsumerQuotaLimit>): ConsumerQuotaMetric;
  clearConsumerQuotaLimitsList(): ConsumerQuotaMetric;
  addConsumerQuotaLimits(value?: ConsumerQuotaLimit, index?: number): ConsumerQuotaLimit;

  getDescendantConsumerQuotaLimitsList(): Array<ConsumerQuotaLimit>;
  setDescendantConsumerQuotaLimitsList(value: Array<ConsumerQuotaLimit>): ConsumerQuotaMetric;
  clearDescendantConsumerQuotaLimitsList(): ConsumerQuotaMetric;
  addDescendantConsumerQuotaLimits(value?: ConsumerQuotaLimit, index?: number): ConsumerQuotaLimit;

  getUnit(): string;
  setUnit(value: string): ConsumerQuotaMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumerQuotaMetric.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumerQuotaMetric): ConsumerQuotaMetric.AsObject;
  static serializeBinaryToWriter(message: ConsumerQuotaMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumerQuotaMetric;
  static deserializeBinaryFromReader(message: ConsumerQuotaMetric, reader: jspb.BinaryReader): ConsumerQuotaMetric;
}

export namespace ConsumerQuotaMetric {
  export type AsObject = {
    name: string,
    metric: string,
    displayName: string,
    consumerQuotaLimitsList: Array<ConsumerQuotaLimit.AsObject>,
    descendantConsumerQuotaLimitsList: Array<ConsumerQuotaLimit.AsObject>,
    unit: string,
  }
}

export class ConsumerQuotaLimit extends jspb.Message {
  getName(): string;
  setName(value: string): ConsumerQuotaLimit;

  getMetric(): string;
  setMetric(value: string): ConsumerQuotaLimit;

  getUnit(): string;
  setUnit(value: string): ConsumerQuotaLimit;

  getIsPrecise(): boolean;
  setIsPrecise(value: boolean): ConsumerQuotaLimit;

  getAllowsAdminOverrides(): boolean;
  setAllowsAdminOverrides(value: boolean): ConsumerQuotaLimit;

  getQuotaBucketsList(): Array<QuotaBucket>;
  setQuotaBucketsList(value: Array<QuotaBucket>): ConsumerQuotaLimit;
  clearQuotaBucketsList(): ConsumerQuotaLimit;
  addQuotaBuckets(value?: QuotaBucket, index?: number): QuotaBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumerQuotaLimit.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumerQuotaLimit): ConsumerQuotaLimit.AsObject;
  static serializeBinaryToWriter(message: ConsumerQuotaLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumerQuotaLimit;
  static deserializeBinaryFromReader(message: ConsumerQuotaLimit, reader: jspb.BinaryReader): ConsumerQuotaLimit;
}

export namespace ConsumerQuotaLimit {
  export type AsObject = {
    name: string,
    metric: string,
    unit: string,
    isPrecise: boolean,
    allowsAdminOverrides: boolean,
    quotaBucketsList: Array<QuotaBucket.AsObject>,
  }
}

export class QuotaBucket extends jspb.Message {
  getEffectiveLimit(): number;
  setEffectiveLimit(value: number): QuotaBucket;

  getDefaultLimit(): number;
  setDefaultLimit(value: number): QuotaBucket;

  getProducerOverride(): QuotaOverride | undefined;
  setProducerOverride(value?: QuotaOverride): QuotaBucket;
  hasProducerOverride(): boolean;
  clearProducerOverride(): QuotaBucket;

  getConsumerOverride(): QuotaOverride | undefined;
  setConsumerOverride(value?: QuotaOverride): QuotaBucket;
  hasConsumerOverride(): boolean;
  clearConsumerOverride(): QuotaBucket;

  getAdminOverride(): QuotaOverride | undefined;
  setAdminOverride(value?: QuotaOverride): QuotaBucket;
  hasAdminOverride(): boolean;
  clearAdminOverride(): QuotaBucket;

  getDimensionsMap(): jspb.Map<string, string>;
  clearDimensionsMap(): QuotaBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaBucket.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaBucket): QuotaBucket.AsObject;
  static serializeBinaryToWriter(message: QuotaBucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaBucket;
  static deserializeBinaryFromReader(message: QuotaBucket, reader: jspb.BinaryReader): QuotaBucket;
}

export namespace QuotaBucket {
  export type AsObject = {
    effectiveLimit: number,
    defaultLimit: number,
    producerOverride?: QuotaOverride.AsObject,
    consumerOverride?: QuotaOverride.AsObject,
    adminOverride?: QuotaOverride.AsObject,
    dimensionsMap: Array<[string, string]>,
  }
}

export class QuotaOverride extends jspb.Message {
  getName(): string;
  setName(value: string): QuotaOverride;

  getOverrideValue(): number;
  setOverrideValue(value: number): QuotaOverride;

  getDimensionsMap(): jspb.Map<string, string>;
  clearDimensionsMap(): QuotaOverride;

  getMetric(): string;
  setMetric(value: string): QuotaOverride;

  getUnit(): string;
  setUnit(value: string): QuotaOverride;

  getAdminOverrideAncestor(): string;
  setAdminOverrideAncestor(value: string): QuotaOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaOverride.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaOverride): QuotaOverride.AsObject;
  static serializeBinaryToWriter(message: QuotaOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaOverride;
  static deserializeBinaryFromReader(message: QuotaOverride, reader: jspb.BinaryReader): QuotaOverride;
}

export namespace QuotaOverride {
  export type AsObject = {
    name: string,
    overrideValue: number,
    dimensionsMap: Array<[string, string]>,
    metric: string,
    unit: string,
    adminOverrideAncestor: string,
  }
}

export class OverrideInlineSource extends jspb.Message {
  getOverridesList(): Array<QuotaOverride>;
  setOverridesList(value: Array<QuotaOverride>): OverrideInlineSource;
  clearOverridesList(): OverrideInlineSource;
  addOverrides(value?: QuotaOverride, index?: number): QuotaOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverrideInlineSource.AsObject;
  static toObject(includeInstance: boolean, msg: OverrideInlineSource): OverrideInlineSource.AsObject;
  static serializeBinaryToWriter(message: OverrideInlineSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverrideInlineSource;
  static deserializeBinaryFromReader(message: OverrideInlineSource, reader: jspb.BinaryReader): OverrideInlineSource;
}

export namespace OverrideInlineSource {
  export type AsObject = {
    overridesList: Array<QuotaOverride.AsObject>,
  }
}

export class AdminQuotaPolicy extends jspb.Message {
  getName(): string;
  setName(value: string): AdminQuotaPolicy;

  getPolicyValue(): number;
  setPolicyValue(value: number): AdminQuotaPolicy;

  getDimensionsMap(): jspb.Map<string, string>;
  clearDimensionsMap(): AdminQuotaPolicy;

  getMetric(): string;
  setMetric(value: string): AdminQuotaPolicy;

  getUnit(): string;
  setUnit(value: string): AdminQuotaPolicy;

  getContainer(): string;
  setContainer(value: string): AdminQuotaPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminQuotaPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: AdminQuotaPolicy): AdminQuotaPolicy.AsObject;
  static serializeBinaryToWriter(message: AdminQuotaPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminQuotaPolicy;
  static deserializeBinaryFromReader(message: AdminQuotaPolicy, reader: jspb.BinaryReader): AdminQuotaPolicy;
}

export namespace AdminQuotaPolicy {
  export type AsObject = {
    name: string,
    policyValue: number,
    dimensionsMap: Array<[string, string]>,
    metric: string,
    unit: string,
    container: string,
  }
}

export class ServiceIdentity extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ServiceIdentity;

  getUniqueId(): string;
  setUniqueId(value: string): ServiceIdentity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceIdentity): ServiceIdentity.AsObject;
  static serializeBinaryToWriter(message: ServiceIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceIdentity;
  static deserializeBinaryFromReader(message: ServiceIdentity, reader: jspb.BinaryReader): ServiceIdentity;
}

export namespace ServiceIdentity {
  export type AsObject = {
    email: string,
    uniqueId: string,
  }
}

export enum State { 
  STATE_UNSPECIFIED = 0,
  DISABLED = 1,
  ENABLED = 2,
}
export enum QuotaView { 
  QUOTA_VIEW_UNSPECIFIED = 0,
  BASIC = 1,
  FULL = 2,
}
export enum QuotaSafetyCheck { 
  QUOTA_SAFETY_CHECK_UNSPECIFIED = 0,
  LIMIT_DECREASE_BELOW_USAGE = 1,
  LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = 2,
}
