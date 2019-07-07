import axios, { CancelTokenSource, AxiosInstance } from 'axios'
import { Bind } from 'lodash-decorators'
import qs from 'qs'
import { omit } from 'lodash'

const CancelToken = axios.CancelToken
const FILED = '__CANCEL_FILED__'
const ID_FILED = '__ID__'

export const DEFAULT_KEY = 'default'

interface cancel {
  id: string
  source: CancelTokenSource
}

export default class CancelManager {
  public map: Map<string, cancel[]> = new Map()

  static use(axios: AxiosInstance) {
    return new CancelManager(axios)
  }

  public constructor(axios: AxiosInstance) {
    this.configAxios(axios)
    this.map.set(DEFAULT_KEY, [])
  }

  public addSource(field: string, source: cancel) {
    const list = this.findList(field)
    list && list.push(source)
  }

  public removeSource(field: string, id: string) {
    const list = this.findList(field)
    if (!list) return
    const index = list.findIndex(item => item.id === id)
    if (index < 0) return
    list.splice(index, 1)
  }

  @Bind()
  public cancelMethod(field?: string) {
    return () => {
      this.cancelSource(field || DEFAULT_KEY)
    }
  }

  private cancelSource(field: string) {
    const list = this.findList(field)
    if (!list)  return
    list.forEach(cancel => cancel.source.cancel())
    this.map.set(field, [])
  }

  private findList(field: string) {
    if (this.map.has(field)) {
      const list = this.map.get(field)
      return list
    } else {
      const list = this.map.get(DEFAULT_KEY)
      if (!list) throw new Error('no list found')
      return list
    }
  }

  private configAxios(axios: AxiosInstance) {
    // 修改 Params 序列化
    const paramsSerializer = axios.defaults.paramsSerializer
    if (paramsSerializer) {
      axios.defaults.paramsSerializer = function(params) {
        const param = omit(params, [FILED, ID_FILED])
        return paramsSerializer(param)
      }
    } else {
      axios.defaults.paramsSerializer = function(params) {
        const param = omit(params, [FILED, ID_FILED])
        return qs.stringify(param, {arrayFormat: 'brackets'})
      }
    }

    axios.interceptors.request.use(config => {
      const source = CancelToken.source()

      let filed = 'default'
      let id = ''

      if (config.params && config.params[FILED]) {
        filed = config.params[FILED]
      }
    
      if (config.params && config.params[ID_FILED]) {
        id = config.params[ID_FILED]
      } else {
        id = Date.now() + ''
      }
    
      const cancel = {
        id,
        source
      }
      if (!config.params) {
        config.params = {}
      }
      config.params[ID_FILED] = id
    
      this.addSource(filed, cancel)
      config.cancelToken = source.token
      return config
    })
    
    axios.interceptors.response.use(res => {
      let filed = DEFAULT_KEY
      const config = res.config
    
      if (config.params && config.params[FILED]) {
        filed = res.config.params[FILED]
      }
    
      this.removeSource(filed, config.params[ID_FILED])
    
      return res
    })
  }
}