import * as grpcWeb from 'grpc-web';

import * as google_iam_v1beta_workload_identity_pool_pb from '../../../google/iam/v1beta/workload_identity_pool_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';


export class WorkloadIdentityPoolsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listWorkloadIdentityPools(
    request: google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsResponse>;

  getWorkloadIdentityPool(
    request: google_iam_v1beta_workload_identity_pool_pb.GetWorkloadIdentityPoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPool) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPool>;

  createWorkloadIdentityPool(
    request: google_iam_v1beta_workload_identity_pool_pb.CreateWorkloadIdentityPoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateWorkloadIdentityPool(
    request: google_iam_v1beta_workload_identity_pool_pb.UpdateWorkloadIdentityPoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteWorkloadIdentityPool(
    request: google_iam_v1beta_workload_identity_pool_pb.DeleteWorkloadIdentityPoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  undeleteWorkloadIdentityPool(
    request: google_iam_v1beta_workload_identity_pool_pb.UndeleteWorkloadIdentityPoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listWorkloadIdentityPoolProviders(
    request: google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersResponse>;

  getWorkloadIdentityPoolProvider(
    request: google_iam_v1beta_workload_identity_pool_pb.GetWorkloadIdentityPoolProviderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPoolProvider) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPoolProvider>;

  createWorkloadIdentityPoolProvider(
    request: google_iam_v1beta_workload_identity_pool_pb.CreateWorkloadIdentityPoolProviderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateWorkloadIdentityPoolProvider(
    request: google_iam_v1beta_workload_identity_pool_pb.UpdateWorkloadIdentityPoolProviderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteWorkloadIdentityPoolProvider(
    request: google_iam_v1beta_workload_identity_pool_pb.DeleteWorkloadIdentityPoolProviderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  undeleteWorkloadIdentityPoolProvider(
    request: google_iam_v1beta_workload_identity_pool_pb.UndeleteWorkloadIdentityPoolProviderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class WorkloadIdentityPoolsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listWorkloadIdentityPools(
    request: google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsResponse>;

  getWorkloadIdentityPool(
    request: google_iam_v1beta_workload_identity_pool_pb.GetWorkloadIdentityPoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPool>;

  createWorkloadIdentityPool(
    request: google_iam_v1beta_workload_identity_pool_pb.CreateWorkloadIdentityPoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateWorkloadIdentityPool(
    request: google_iam_v1beta_workload_identity_pool_pb.UpdateWorkloadIdentityPoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteWorkloadIdentityPool(
    request: google_iam_v1beta_workload_identity_pool_pb.DeleteWorkloadIdentityPoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  undeleteWorkloadIdentityPool(
    request: google_iam_v1beta_workload_identity_pool_pb.UndeleteWorkloadIdentityPoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listWorkloadIdentityPoolProviders(
    request: google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersResponse>;

  getWorkloadIdentityPoolProvider(
    request: google_iam_v1beta_workload_identity_pool_pb.GetWorkloadIdentityPoolProviderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPoolProvider>;

  createWorkloadIdentityPoolProvider(
    request: google_iam_v1beta_workload_identity_pool_pb.CreateWorkloadIdentityPoolProviderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateWorkloadIdentityPoolProvider(
    request: google_iam_v1beta_workload_identity_pool_pb.UpdateWorkloadIdentityPoolProviderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteWorkloadIdentityPoolProvider(
    request: google_iam_v1beta_workload_identity_pool_pb.DeleteWorkloadIdentityPoolProviderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  undeleteWorkloadIdentityPoolProvider(
    request: google_iam_v1beta_workload_identity_pool_pb.UndeleteWorkloadIdentityPoolProviderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

