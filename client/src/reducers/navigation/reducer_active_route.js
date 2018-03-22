export default function(state, action) {
  switch(action.type) {
    case 'ROUTE_SELECTED':
      return action.payload
  }
  return state;
}
