import * as grpcWeb from 'grpc-web';

import * as google_iam_admin_v1_iam_pb from '../../../../google/iam/admin/v1/iam_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class IAMClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listServiceAccounts(
    request: google_iam_admin_v1_iam_pb.ListServiceAccountsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.ListServiceAccountsResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.ListServiceAccountsResponse>;

  getServiceAccount(
    request: google_iam_admin_v1_iam_pb.GetServiceAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.ServiceAccount) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.ServiceAccount>;

  createServiceAccount(
    request: google_iam_admin_v1_iam_pb.CreateServiceAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.ServiceAccount) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.ServiceAccount>;

  updateServiceAccount(
    request: google_iam_admin_v1_iam_pb.ServiceAccount,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.ServiceAccount) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.ServiceAccount>;

  patchServiceAccount(
    request: google_iam_admin_v1_iam_pb.PatchServiceAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.ServiceAccount) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.ServiceAccount>;

  deleteServiceAccount(
    request: google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  undeleteServiceAccount(
    request: google_iam_admin_v1_iam_pb.UndeleteServiceAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.UndeleteServiceAccountResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.UndeleteServiceAccountResponse>;

  enableServiceAccount(
    request: google_iam_admin_v1_iam_pb.EnableServiceAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  disableServiceAccount(
    request: google_iam_admin_v1_iam_pb.DisableServiceAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listServiceAccountKeys(
    request: google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse>;

  getServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.ServiceAccountKey) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.ServiceAccountKey>;

  createServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.ServiceAccountKey) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.ServiceAccountKey>;

  uploadServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.UploadServiceAccountKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.ServiceAccountKey) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.ServiceAccountKey>;

  deleteServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  disableServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.DisableServiceAccountKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  enableServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.EnableServiceAccountKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  signBlob(
    request: google_iam_admin_v1_iam_pb.SignBlobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.SignBlobResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.SignBlobResponse>;

  signJwt(
    request: google_iam_admin_v1_iam_pb.SignJwtRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.SignJwtResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.SignJwtResponse>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  queryGrantableRoles(
    request: google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse>;

  listRoles(
    request: google_iam_admin_v1_iam_pb.ListRolesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.ListRolesResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.ListRolesResponse>;

  getRole(
    request: google_iam_admin_v1_iam_pb.GetRoleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.Role) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.Role>;

  createRole(
    request: google_iam_admin_v1_iam_pb.CreateRoleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.Role) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.Role>;

  updateRole(
    request: google_iam_admin_v1_iam_pb.UpdateRoleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.Role) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.Role>;

  deleteRole(
    request: google_iam_admin_v1_iam_pb.DeleteRoleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.Role) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.Role>;

  undeleteRole(
    request: google_iam_admin_v1_iam_pb.UndeleteRoleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.Role) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.Role>;

  queryTestablePermissions(
    request: google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse>;

  queryAuditableServices(
    request: google_iam_admin_v1_iam_pb.QueryAuditableServicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.QueryAuditableServicesResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.QueryAuditableServicesResponse>;

  lintPolicy(
    request: google_iam_admin_v1_iam_pb.LintPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_admin_v1_iam_pb.LintPolicyResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_admin_v1_iam_pb.LintPolicyResponse>;

}

export class IAMPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listServiceAccounts(
    request: google_iam_admin_v1_iam_pb.ListServiceAccountsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.ListServiceAccountsResponse>;

  getServiceAccount(
    request: google_iam_admin_v1_iam_pb.GetServiceAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.ServiceAccount>;

  createServiceAccount(
    request: google_iam_admin_v1_iam_pb.CreateServiceAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.ServiceAccount>;

  updateServiceAccount(
    request: google_iam_admin_v1_iam_pb.ServiceAccount,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.ServiceAccount>;

  patchServiceAccount(
    request: google_iam_admin_v1_iam_pb.PatchServiceAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.ServiceAccount>;

  deleteServiceAccount(
    request: google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  undeleteServiceAccount(
    request: google_iam_admin_v1_iam_pb.UndeleteServiceAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.UndeleteServiceAccountResponse>;

  enableServiceAccount(
    request: google_iam_admin_v1_iam_pb.EnableServiceAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  disableServiceAccount(
    request: google_iam_admin_v1_iam_pb.DisableServiceAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listServiceAccountKeys(
    request: google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse>;

  getServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.ServiceAccountKey>;

  createServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.ServiceAccountKey>;

  uploadServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.UploadServiceAccountKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.ServiceAccountKey>;

  deleteServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  disableServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.DisableServiceAccountKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  enableServiceAccountKey(
    request: google_iam_admin_v1_iam_pb.EnableServiceAccountKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  signBlob(
    request: google_iam_admin_v1_iam_pb.SignBlobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.SignBlobResponse>;

  signJwt(
    request: google_iam_admin_v1_iam_pb.SignJwtRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.SignJwtResponse>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  queryGrantableRoles(
    request: google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse>;

  listRoles(
    request: google_iam_admin_v1_iam_pb.ListRolesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.ListRolesResponse>;

  getRole(
    request: google_iam_admin_v1_iam_pb.GetRoleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.Role>;

  createRole(
    request: google_iam_admin_v1_iam_pb.CreateRoleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.Role>;

  updateRole(
    request: google_iam_admin_v1_iam_pb.UpdateRoleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.Role>;

  deleteRole(
    request: google_iam_admin_v1_iam_pb.DeleteRoleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.Role>;

  undeleteRole(
    request: google_iam_admin_v1_iam_pb.UndeleteRoleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.Role>;

  queryTestablePermissions(
    request: google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse>;

  queryAuditableServices(
    request: google_iam_admin_v1_iam_pb.QueryAuditableServicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.QueryAuditableServicesResponse>;

  lintPolicy(
    request: google_iam_admin_v1_iam_pb.LintPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_admin_v1_iam_pb.LintPolicyResponse>;

}

