export class HttpResponse<T> {
  statusCode: number;
  statusMessage: string;
  headers: Record<string, string>;
  body: T;

  constructor(statusCode: number, statusMessage: string, headers: Record<string, string>, body: T) {
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
    this.headers = headers;
    this.body = body;
  }
}

