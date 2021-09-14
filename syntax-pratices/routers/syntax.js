export default [
  {
    path: '/syntax/deepclone',
    title: 'deepclone',
    component: () => import('@/pages/deep-clone'),
  },
  {
    path: '/syntax/throttle',
    title: 'throttle test',
    component: () => import('@/pages/throttle'),
  },
  {
    path: '/syntax/sync/promise',
    title: 'js同步方案-promise',
    component: () => import('@/pages/sync/promise'),
  },
  {
    path: '/syntax/sync/await',
    title: 'js同步方案-await',
    component: () => import('@/pages/sync/await'),
  },
  {
    path: '/syntax/sync/genarator',
    title: 'js同步方案-genarator',
    component: () => import('@/pages/sync/genarator'),
  },
  {
    path: '/syntax/algorithm',
    title: '算法测试',
    component: () => import('@/pages/algorithm'),
  },
]
