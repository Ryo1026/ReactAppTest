//  action creator

export function setLogin() {
  return { type: "LOGIN" };
}

export function setInput(content) {
  return { type: "INPUT", content };
}
