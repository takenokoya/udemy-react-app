import _ from 'lodash'
import { readEvents, READ_EVENTS } from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id') // 配列をidをキーとしたハッシュに変換
        default:
            return events
    }
}