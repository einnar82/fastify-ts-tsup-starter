import ApiError from "@/modules/errors/api.error"

class UnauthenticatedError extends ApiError {
  constructor() {
    super(401, "Unauthenticated.")
  }
}

export { UnauthenticatedError }