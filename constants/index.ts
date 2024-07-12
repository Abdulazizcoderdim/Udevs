import LanguageSub from '@/components/LanguageSub'
import PortfolioSub from '@/components/PortfolioSub'
import ServiceSub from '@/components/ServiceSub'
import { ChevronDown } from 'lucide-react'

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
        dropDown: ServiceSub
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
        dropDown: PortfolioSub
    },
    {
        name: 'Language',
        href: '#language',
        icon: ChevronDown,
        dropDown: LanguageSub
    },
]