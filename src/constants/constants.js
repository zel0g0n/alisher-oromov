const idGenerator = () => {
  return Math.ceil(Math.random()*10000000)
}
export const navbarData = [
  {
    title: 'Home',
    path: '/',
    id: idGenerator()
  },
  {
    title: 'About',
    path: '/about',
    id: idGenerator()
  },
  {
    title: 'Skills',
    path: '/skills',
    id: idGenerator()
  },
  {
    title: 'Projects',
    path: '/projects',
    id: idGenerator()
  },
  {
    title: 'Contact',
    path: '/contact',
    id: idGenerator()
  }
]
