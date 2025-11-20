export function isHTMLElement(element: Element | null): element is HTMLElement {
  return element !== null && element instanceof HTMLElement;
}

export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

export function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export function isInputElement(
  target: EventTarget | null
): target is HTMLInputElement {
  return target !== null && target instanceof HTMLInputElement;
}

export function isTextAreaElement(
  target: EventTarget | null
): target is HTMLTextAreaElement {
  return target !== null && target instanceof HTMLTextAreaElement;
}