import _ from 'lodash'
import { readEvents, READ_EVENTS, DELETE_EVENT } from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id') // 配列をidをキーとしたハッシュに変換
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events } // スプレッド演算子
        default:
            return events
    }
}