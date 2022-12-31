function errorMessage(errorCode) {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "Email already in use";
    case "auth/invalid-email":
      return "Invalid email";
    default:
      return "network error";
  }
}
export default errorMessage;
