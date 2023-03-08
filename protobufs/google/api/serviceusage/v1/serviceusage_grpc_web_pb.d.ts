import * as grpcWeb from 'grpc-web';

import * as google_api_serviceusage_v1_serviceusage_pb from '../../../../google/api/serviceusage/v1/serviceusage_pb';
import * as google_api_serviceusage_v1_resources_pb from '../../../../google/api/serviceusage/v1/resources_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';


export class ServiceUsageClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  enableService(
    request: google_api_serviceusage_v1_serviceusage_pb.EnableServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  disableService(
    request: google_api_serviceusage_v1_serviceusage_pb.DisableServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getService(
    request: google_api_serviceusage_v1_serviceusage_pb.GetServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_serviceusage_v1_resources_pb.Service) => void
  ): grpcWeb.ClientReadableStream<google_api_serviceusage_v1_resources_pb.Service>;

  listServices(
    request: google_api_serviceusage_v1_serviceusage_pb.ListServicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse>;

  batchEnableServices(
    request: google_api_serviceusage_v1_serviceusage_pb.BatchEnableServicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  batchGetServices(
    request: google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse>;

}

export class ServiceUsagePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  enableService(
    request: google_api_serviceusage_v1_serviceusage_pb.EnableServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  disableService(
    request: google_api_serviceusage_v1_serviceusage_pb.DisableServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getService(
    request: google_api_serviceusage_v1_serviceusage_pb.GetServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_serviceusage_v1_resources_pb.Service>;

  listServices(
    request: google_api_serviceusage_v1_serviceusage_pb.ListServicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse>;

  batchEnableServices(
    request: google_api_serviceusage_v1_serviceusage_pb.BatchEnableServicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  batchGetServices(
    request: google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse>;

}

