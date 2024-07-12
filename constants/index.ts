import LanguageSub from '@/components/LanguageSub'
import PortfolioSub from '@/components/PortfolioSub'
import ServiceSub from '@/components/ServiceSub'
import {
  ChevronDown,
  Database,
  GitGraph,
  Monitor,
  Settings,
  Smartphone,
} from 'lucide-react'

export const navLinks = [
  {
    name: 'Direction',
    href: '#',
  },
  {
    name: 'Command',
    href: '#command',
  },
  {
    name: 'Services',
    href: '#services',
    icon: ChevronDown,
    dropDown: ServiceSub,
  },
  {
    name: 'Tools',
    href: '#tools',
  },
  {
    name: 'Clients',
    href: '#clients',
  },
  {
    name: 'Portfolio',
    href: '#portfoilo',
    icon: ChevronDown,
    dropDown: PortfolioSub,
  },
  {
    name: 'Language',
    href: '#language',
    icon: ChevronDown,
    dropDown: LanguageSub,
  },
]

export const serviceSub = [
  {
    name: 'Development of mobile applications',
    icon: Smartphone,
    href: '#',
  },
  {
    name: 'Development and implementation ERP systems',
    icon: GitGraph,
    href: '#',
  },
  {
    name: 'User interface, User experience design',
    icon: Database,
    href: '#',
  },
  {
    name: 'IT consulting',
    icon: Monitor,
    href: '#',
  },
  {
    name: 'Optimization IT consulting infrastructure',
    icon: Settings,
    href: '#',
  },
]
export const portfolioSub = [
  {
    name: 'Delever',
    icon: 'D',
    href: '#',
    bg: '#FFDDD3',
    text: '#FF5722',
  },
  {
    name: 'Sms.uz',
    icon: 'S',
    href: '#',
    bg: '#F4F7FF',
    text: '#1B5BF7',
  },
  {
    name: 'Goodzone',
    icon: 'G',
    href: '#',
    bg: '#FDCCCC',
    text: '#F50000',
  },
  {
    name: 'Iman',
    icon: 'I',
    href: '#',
    bg: '#CCF4Ef',
    text: '#01CAB0',
  },
]
