import React, { useEffect } from 'react'
// import Promise from './promiseLibs'

export default function AsyncPage () {
  useEffect(() => {
    testPromise()
  }, [])

  const testPromise = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({
          a: 1,
          b: 2,
        })
      }, 2000)
    })
    promise.then(
      (res) => {
        console.log('res', res)
      },
      (error) => {
        console.log('error', error)
      },
    )
  }

  return (
    <div>测试异步执行逻辑</div>
  )
}
