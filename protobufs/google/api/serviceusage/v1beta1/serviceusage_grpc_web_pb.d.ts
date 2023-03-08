import * as grpcWeb from 'grpc-web';

import * as google_api_serviceusage_v1beta1_serviceusage_pb from '../../../../google/api/serviceusage/v1beta1/serviceusage_pb';
import * as google_api_serviceusage_v1beta1_resources_pb from '../../../../google/api/serviceusage/v1beta1/resources_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';


export class ServiceUsageClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  enableService(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.EnableServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  disableService(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.DisableServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getService(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.GetServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_serviceusage_v1beta1_resources_pb.Service) => void
  ): grpcWeb.ClientReadableStream<google_api_serviceusage_v1beta1_resources_pb.Service>;

  listServices(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse>;

  batchEnableServices(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.BatchEnableServicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listConsumerQuotaMetrics(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse>;

  getConsumerQuotaMetric(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaMetricRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric) => void
  ): grpcWeb.ClientReadableStream<google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric>;

  getConsumerQuotaLimit(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaLimitRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit) => void
  ): grpcWeb.ClientReadableStream<google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit>;

  createAdminOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.CreateAdminOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateAdminOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateAdminOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteAdminOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteAdminOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listAdminOverrides(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse>;

  importAdminOverrides(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ImportAdminOverridesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  createConsumerOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.CreateConsumerOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateConsumerOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateConsumerOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteConsumerOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteConsumerOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listConsumerOverrides(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse>;

  importConsumerOverrides(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ImportConsumerOverridesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  generateServiceIdentity(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.GenerateServiceIdentityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class ServiceUsagePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  enableService(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.EnableServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  disableService(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.DisableServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getService(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.GetServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_serviceusage_v1beta1_resources_pb.Service>;

  listServices(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse>;

  batchEnableServices(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.BatchEnableServicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listConsumerQuotaMetrics(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse>;

  getConsumerQuotaMetric(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaMetricRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric>;

  getConsumerQuotaLimit(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaLimitRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit>;

  createAdminOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.CreateAdminOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateAdminOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateAdminOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteAdminOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteAdminOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listAdminOverrides(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse>;

  importAdminOverrides(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ImportAdminOverridesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  createConsumerOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.CreateConsumerOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateConsumerOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateConsumerOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteConsumerOverride(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteConsumerOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listConsumerOverrides(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse>;

  importConsumerOverrides(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.ImportConsumerOverridesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  generateServiceIdentity(
    request: google_api_serviceusage_v1beta1_serviceusage_pb.GenerateServiceIdentityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

