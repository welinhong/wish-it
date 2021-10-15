export const deepCopy = (original: any): any => {
  return JSON.parse(JSON.stringify(original))
}
