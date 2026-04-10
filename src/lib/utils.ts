export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/, '+$1 $2 $3 $4')
}

export function generateWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, '')
  const encodedMessage = message ? encodeURIComponent(message) : ''
  return 'https://wa.me/' + cleanPhone + (message ? '?text=' + encodedMessage : '')
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}