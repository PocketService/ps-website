export interface NavLink {
  id: string
  label: string
  targetId: string
}

export const navLinks: NavLink[] = [
  {
    id: 'hero',
    label: 'Start',
    targetId: 'hero',
  },
  {
    id: 'services',
    label: 'Leistungen',
    targetId: 'leistungen',
  },
  {
    id: 'process',
    label: 'Prozess',
    targetId: 'prozess',
  },
  {
    id: 'about',
    label: 'Über uns',
    targetId: 'ueber-uns',
  },
  {
    id: 'contact',
    label: 'Kontakt',
    targetId: 'kontakt',
  },
]
