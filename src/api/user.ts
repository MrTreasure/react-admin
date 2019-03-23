// import ajax from '@/utils/ajax'

const sleep = (dealy: number) => new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, dealy)
})

export const GET_USER_INFO = async () => {
  await sleep(500)
  return {
    workcode: 'E088433',
    name: 'Treasure',
    department: '大前端'
  }
}