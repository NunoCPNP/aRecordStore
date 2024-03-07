export const toBase64 = (str: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: 'string'): string }) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str as string)
