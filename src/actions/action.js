//  action creator
//  產生 action obj

export function setLogin() {
  return { type: "LOGIN" };
}

export function setInput(content) {
  return { type: "INPUT", content };
}
