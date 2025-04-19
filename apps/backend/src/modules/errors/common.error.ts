import ApiError from "@/modules/errors/api.error"

export class ValidationError<T = Record<string, unknown>> extends ApiError<T> {
  constructor(message: string, payload?: T) {
    super(400, message, payload);
    this.name = 'ValidationError';
  }
}
