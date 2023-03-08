import * as grpcWeb from 'grpc-web';

import * as google_api_apikeys_v2_apikeys_pb from '../../../../google/api/apikeys/v2/apikeys_pb';
import * as google_api_apikeys_v2_resources_pb from '../../../../google/api/apikeys/v2/resources_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';


export class ApiKeysClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createKey(
    request: google_api_apikeys_v2_apikeys_pb.CreateKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listKeys(
    request: google_api_apikeys_v2_apikeys_pb.ListKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_apikeys_v2_apikeys_pb.ListKeysResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_apikeys_v2_apikeys_pb.ListKeysResponse>;

  getKey(
    request: google_api_apikeys_v2_apikeys_pb.GetKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_apikeys_v2_resources_pb.Key) => void
  ): grpcWeb.ClientReadableStream<google_api_apikeys_v2_resources_pb.Key>;

  getKeyString(
    request: google_api_apikeys_v2_apikeys_pb.GetKeyStringRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse>;

  updateKey(
    request: google_api_apikeys_v2_apikeys_pb.UpdateKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteKey(
    request: google_api_apikeys_v2_apikeys_pb.DeleteKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  undeleteKey(
    request: google_api_apikeys_v2_apikeys_pb.UndeleteKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  lookupKey(
    request: google_api_apikeys_v2_apikeys_pb.LookupKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_apikeys_v2_apikeys_pb.LookupKeyResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_apikeys_v2_apikeys_pb.LookupKeyResponse>;

}

export class ApiKeysPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createKey(
    request: google_api_apikeys_v2_apikeys_pb.CreateKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listKeys(
    request: google_api_apikeys_v2_apikeys_pb.ListKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_apikeys_v2_apikeys_pb.ListKeysResponse>;

  getKey(
    request: google_api_apikeys_v2_apikeys_pb.GetKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_apikeys_v2_resources_pb.Key>;

  getKeyString(
    request: google_api_apikeys_v2_apikeys_pb.GetKeyStringRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse>;

  updateKey(
    request: google_api_apikeys_v2_apikeys_pb.UpdateKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteKey(
    request: google_api_apikeys_v2_apikeys_pb.DeleteKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  undeleteKey(
    request: google_api_apikeys_v2_apikeys_pb.UndeleteKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  lookupKey(
    request: google_api_apikeys_v2_apikeys_pb.LookupKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_apikeys_v2_apikeys_pb.LookupKeyResponse>;

}

