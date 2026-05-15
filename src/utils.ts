/**
 * Convert underscores to spaces in arbitrary values, unless escaped (`\_`).
 * Mirrors Tailwind/UnoCSS arbitrary value conventions.
 */
export function unescapeValue(value: string): string {
  return value
    .replace(/\\_/g, '\0')
    .replace(/_/g, ' ')
    .replace(/\0/g, '_')
}

/**
 * Identifier regex fragment used across rules (letters, digits, dash, underscore).
 */
export const IDENT = '[\\w-]+'
