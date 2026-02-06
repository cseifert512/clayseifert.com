/**
 * Utility function to combine class names
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format date to readable string
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

/**
 * Smooth scroll to element by ID
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Email obfuscation for spam prevention
 */
export function obfuscateEmail(email: string): string {
  return email.split('').reverse().join('')
}

/**
 * Decode obfuscated email
 */
export function decodeEmail(obfuscated: string): string {
  return obfuscated.split('').reverse().join('')
}

