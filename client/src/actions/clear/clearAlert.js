export function clearMessage(success, type) {
  return {
    type,
    payload: success
  };
}
