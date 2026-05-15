export function startViewTransition(cb: () => void | Promise<void>): void {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void | Promise<void>) => unknown
  }
  if (typeof doc.startViewTransition === 'function')
    doc.startViewTransition(cb)
  else
    cb()
}
