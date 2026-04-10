// src/types/index.ts
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  image?: string
  imagePosition?: string
}

export interface Stat {
  value: string
  label: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  service: string
  message: string
}

export interface NavLink {
  name: string
  href: string
}

export interface WhyChooseUsItem {
  title: string
  description: string
  icon: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
