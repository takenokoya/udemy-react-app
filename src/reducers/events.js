import _ from 'lodash'
import { READ_EVENTS, READ_EVENT, UPDATE_EVENT, DELETE_EVENT, CREATE_EVENT } from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id') // 配列をidをキーとしたハッシュに変換
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events } // スプレッド演算子
        default:
            return events
    }
}