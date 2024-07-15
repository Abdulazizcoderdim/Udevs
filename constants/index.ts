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
  Users,
} from 'lucide-react'

export const navLinks = [
  {
    name: 'Direction',
    href: '#services',
  },
  {
    name: 'Command',
    href: '#team',
  },
  {
    name: 'Services',
    href: '#development',
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

export const servicesData = [
  {
    icon: Users,
    title: 'Team',
  },
  {
    icon: Smartphone,
    title: 'Development of mobile applications',
  },
  {
    icon: GitGraph,
    title: 'Development and implementation ERP systems',
  },
  {
    icon: Database,
    title: 'User interface, User experience design',
  },
  {
    icon: Settings,
    title: 'Optimization IT consulting infrastructure',
  },
  {
    icon: Monitor,
    title: 'IT consulting',
  },
]

export const erpSer = [
  {
    icon: '/crm.svg',
    title: 'CRM',
  },
  {
    icon: '/eLearn.svg',
    title: 'eLearning',
  },
  {
    icon: '/ecom.svg',
    title: 'E-Commerce',
  },
  {
    icon: '/pos.svg',
    title: 'POS',
  },
  {
    icon: '/sms.svg',
    title: 'Sms / Email',
  },
  {
    icon: '/war.svg',
    title: 'Warehouse',
  },
]

export const optimization = [
  {
    icon: '/art.svg',
    title: 'Architecture',
  },
  {
    icon: '/auto.svg',
    title: 'Auto testing',
  },
  {
    icon: '/stre.svg',
    title: 'Stress testing',
  },
  {
    icon: '/load.svg',
    title: 'Load testing',
  },
  {
    icon: '/dev.svg',
    title: 'Devops',
  },
  {
    icon: '/clo.svg',
    title: 'Cloud',
  },
  {
    icon: '/ci.svg',
    title: 'CI / CD',
  },
]

export const toolsLink = [
  {
    name: 'Frontend',
  },
  {
    name: 'Backend',
  },
  {
    name: 'Devops',
  },
  {
    name: 'Testing',
  },
  {
    name: 'UX/UI',
  },
  {
    name: 'Infrastructure',
  },
  {
    name: 'Mobile',
  },
]

export const toolsData = [
  {
    tip: 'Devops',
    icon: '/t1.svg',
    title: 'Promotheus',
    bg: '#a8bfff',
  },
  {
    tip: 'Devops',
    icon: '/t2.svg',
    title: 'Loki',
    bg: '#a8bfff',
  },
  {
    tip: 'Devops',
    icon: '/t3.svg',
    title: 'Bitbucket',
    bg: '#a8bfff',
  },
  {
    tip: 'Devops',
    icon: '/t4.svg',
    title: 'Gitlab',
    bg: '#a8bfff',
  },
  {
    tip: 'Mobile',
    icon: '/t5.svg',
    title: 'Kotlin',
    bg: '#dbe5ff',
  },
  {
    tip: 'Mobile',
    icon: '/t6.svg',
    title: 'Android',
    bg: '#dbe5ff',
  },
  {
    tip: 'Mobile',
    icon: '/t7.svg',
    title: 'Java',
    bg: '#dbe5ff',
  },
  {
    tip: 'Infrastructure',
    icon: '/t8.svg',
    title: 'Azure',
    bg: '#d1dde8',
  },
  {
    tip: 'Infrastructure',
    icon: '/t9.svg',
    title: 'GCP',
    bg: '#d1dde8',
  },
  {
    tip: 'Infrastructure',
    icon: '/t10.svg',
    title: 'DigitalOcean',
    bg: '#d1dde8',
  },
  {
    tip: 'Infrastructure',
    icon: '/t11.svg',
    title: 'AWS',
    bg: '#d1dde8',
  },
  {
    tip: 'Infrastructure',
    icon: '/t12.svg',
    title: 'Kubernetes',
    bg: '#d1dde8',
  },
  {
    tip: 'Devops',
    icon: '/t13.svg',
    title: 'ELK',
    bg: '#a8bfff',
  },
  {
    tip: 'Devops',
    icon: '/t14.svg',
    title: 'Grafana',
    bg: '#a8bfff',
  },
  {
    tip: 'Devops',
    icon: '/t15.svg',
    title: 'Terraform',
    bg: '#a8bfff',
  },
  {
    tip: 'Mobile',
    icon: '/t16.svg',
    title: 'IOS',
    bg: '#dbe5ff',
  },
  {
    tip: 'Mobile',
    icon: '/t17.svg',
    title: 'Swift',
    bg: '#dbe5ff',
  },
  {
    tip: 'Mobile',
    icon: '/t18.svg',
    title: 'Flutter',
    bg: '#dbe5ff',
  },
  {
    tip: 'Frontend',
    icon: '/t19.svg',
    title: 'Next.JS',
    bg: '#c6d6ff',
  },
  {
    tip: 'Frontend',
    icon: '/t20.svg',
    title: 'React.JS',
    bg: '#c6d6ff',
  },
  {
    tip: 'Frontend',
    icon: '/t21.svg',
    title: 'JavaScript',
    bg: '#c6d6ff',
  },
  {
    tip: 'UX/UI',
    icon: '/t22.svg',
    title: 'Balsamic',
    bg: '#ced6ee',
  },
  {
    tip: 'UX/UI',
    icon: '/t23.svg',
    title: 'Inision',
    bg: '#ced6ee',
  },
  {
    tip: 'UX/UI',
    icon: '/t24.svg',
    title: 'Figma',
    bg: '#ced6ee',
  },
  {
    tip: 'Devops',
    icon: '/t25.svg',
    title: 'Docker',
    bg: '#a8bfff',
  },
  {
    tip: 'Backend',
    icon: '/t26.svg',
    title: 'PostgreSQL',
    bg: '#bddaed',
  },
  {
    tip: 'Backend',
    icon: '/t27.svg',
    title: 'Python',
    bg: '#bddaed',
  },
  {
    tip: 'Backend',
    icon: '/t28.svg',
    title: 'Node.JS',
    bg: '#bddaed',
  },
  {
    tip: 'Backend',
    icon: '/t29.svg',
    title: 'PHP',
    bg: '#bddaed',
  },
  {
    tip: 'Backend',
    icon: '/t30.svg',
    title: 'GO',
    bg: '#bddaed',
  },
  {
    tip: 'Frontend',
    icon: '/t31.svg',
    title: 'Ant Design',
    bg: '#c6d6ff',
  },
  {
    tip: 'Frontend',
    icon: '/t32.png',
    title: 'Gatsby.JS',
    bg: '#c6d6ff',
  },
  {
    tip: 'Frontend',
    icon: '/t33.svg',
    title: 'Vue.JS',
    bg: '#c6d6ff',
  },
  {
    tip: 'UX/UI',
    icon: '/t34.svg',
    title: 'Principle',
    bg: '#ced6ee',
  },
  {
    tip: 'UX/UI',
    icon: '/t35.svg',
    title: 'Sketch',
    bg: '#ced6ee',
  },
  {
    tip: 'UX/UI',
    icon: '/t36.svg',
    title: 'Adobe suite',
    bg: '#ced6ee',
  },
  {
    tip: 'Testing',
    icon: '/t37.svg',
    title: 'YouTrack',
    bg: '#e1e9fe',
  },
  {
    tip: 'Testing',
    icon: '/t38.svg',
    title: 'Applium',
    bg: '#e1e9fe',
  },
  {
    tip: 'Testing',
    icon: '/t39.svg',
    title: 'Cypress',
    bg: '#e1e9fe',
  },
  {
    tip: 'Testing',
    icon: '/t40.svg',
    title: 'Jmeter',
    bg: '#e1e9fe',
  },
  {
    tip: 'Backend',
    icon: '/t41.svg',
    title: 'MongoDB',
    bg: '#bddaed',
  },
  {
    tip: 'Backend',
    icon: '/t42.svg',
    title: 'Cassandra',
    bg: '#bddaed',
  },
  {
    tip: 'Frontend',
    icon: '/t43.svg',
    title: 'Sass',
    bg: '#c6d6ff',
  },
  {
    tip: 'Frontend',
    icon: '/t44.svg',
    title: 'Material UI',
    bg: '#c6d6ff',
  },
  {
    tip: 'UX/UI',
    icon: '/t45.svg',
    title: 'Zeplin',
    bg: '#ced6ee',
  },
  {
    tip: 'UX/UI',
    icon: '/t46.svg',
    title: 'Illustrator',
    bg: '#ced6ee',
  },
  {
    tip: 'UX/UI',
    icon: '/t47.svg',
    title: 'Lottie',
    bg: '#ced6ee',
  },
  {
    tip: 'UX/UI',
    icon: '/t48.svg',
    title: 'Photoshop',
    bg: '#ced6ee',
  },
]

export const delever = [
  {
    icon: '/web1.svg',
    name: 'Website',
  },
  {
    icon: '/web2.svg',
    name: 'Admin panel',
  },
  {
    icon: '/web3.svg',
    name: 'Crossplatform',
  },
  {
    icon: '/web4.svg',
    name: 'Web design',
  },
  {
    icon: '/web5.svg',
    name: 'Mobile design',
  },
]

export const howWeWork = [
  {
    icon: '/c.svg',
    name: 'Сontact',
    text: 'Send us your project request or project idea.',
  },
  {
    icon: '/a.svg',
    name: 'Analysis',
    text: 'We will contact you to clarify your project requirements.',
  },
  {
    icon: '/o.svg',
    name: 'Offer',
    text: 'We will provide you with our free, non-binding application.',
  },
  {
    icon: '/t.svg',
    name: 'Team',
    text: 'We provide a team for your requirements.',
  },
  {
    icon: '/s.svg',
    name: 'Start',
    text: "You will get to know the team and we'll get started.",
  },
]
