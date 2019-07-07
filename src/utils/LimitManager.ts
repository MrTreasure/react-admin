import Axios from 'axios';

type PromiseGenerate = (...args: any) => Promise<any>

export default class LimitManager {
  private bucket: number = 6
  private jobQueue: PromiseGenerate[] = []

  public constructor(bucket?: number) {
    if (bucket) {
      this.bucket = bucket
    }
  }

  public async excute(func :PromiseGenerate) {
    console.log(this.bucket)
    this.jobQueue.push(func)
    await this.getBucket()
    const res = await func()
    await this.releaseBucket()
    return res
  }

  private async getBucket() {
    if (this.bucket > 0) {
      this.bucket--
      return
    } else {
      await this.checkQueue()
      this.bucket--
    }
  }

  private async releaseBucket() {
    this.bucket++
  }

  private async checkQueue() {
    return new Promise(resolve => {
      setInterval(() => {
        if (this.bucket > 0) {
          resolve()
        }
      }, 500)
    })
  }
}
