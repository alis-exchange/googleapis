import * as grpcWeb from 'grpc-web';

import * as google_iam_v2_policy_pb from '../../../google/iam/v2/policy_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';


export class PoliciesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listPolicies(
    request: google_iam_v2_policy_pb.ListPoliciesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v2_policy_pb.ListPoliciesResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_v2_policy_pb.ListPoliciesResponse>;

  getPolicy(
    request: google_iam_v2_policy_pb.GetPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v2_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v2_policy_pb.Policy>;

  createPolicy(
    request: google_iam_v2_policy_pb.CreatePolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updatePolicy(
    request: google_iam_v2_policy_pb.UpdatePolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deletePolicy(
    request: google_iam_v2_policy_pb.DeletePolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class PoliciesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listPolicies(
    request: google_iam_v2_policy_pb.ListPoliciesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v2_policy_pb.ListPoliciesResponse>;

  getPolicy(
    request: google_iam_v2_policy_pb.GetPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v2_policy_pb.Policy>;

  createPolicy(
    request: google_iam_v2_policy_pb.CreatePolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updatePolicy(
    request: google_iam_v2_policy_pb.UpdatePolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deletePolicy(
    request: google_iam_v2_policy_pb.DeletePolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

