export function getError(error) {
  return error.response && error.response.data
    ? error.response.data
    : error.message;
}
