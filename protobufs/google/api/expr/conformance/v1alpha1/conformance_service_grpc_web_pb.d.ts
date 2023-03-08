import * as grpcWeb from 'grpc-web';

import * as google_api_expr_conformance_v1alpha1_conformance_service_pb from '../../../../../google/api/expr/conformance/v1alpha1/conformance_service_pb';


export class ConformanceServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  parse(
    request: google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseResponse>;

  check(
    request: google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckResponse>;

  eval(
    request: google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalResponse>;

}

export class ConformanceServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  parse(
    request: google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseResponse>;

  check(
    request: google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckResponse>;

  eval(
    request: google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalResponse>;

}

