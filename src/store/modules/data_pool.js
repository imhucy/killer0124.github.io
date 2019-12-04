import actions from '../action/data_pool.js'
import {
    ADD_POOL,
    ADD_POOL_DETAIL,
    DATA_MODULE_FOCUS_SUCCESS,
    DATA_MODULE_RECOMMEND_USERFUL,
    DATA_MODULE_FOCUS_FAILURE,
    UPDATE_TASK_STATE_SUCCESS
} from '../types'
const state = {
    // 数据模块，数据池
    data_module: {
    },
    // 任务数据池
    task: {
    },
    // 企业数据池
    enterprise: {
    }
}
const mutations = {
    // 设置数据池
    // @params poolName  数据池名称
    // @params uuid      UUID
    // @params object    数据
    [ADD_POOL] (state, {poolName, uuid, object}) {
        if (!state[poolName][uuid]) {
            state[poolName][uuid] = {}
        }
        state[poolName][uuid] = Object.assign({}, state[poolName][uuid], object)
        state[poolName] = Object.assign({}, state[poolName])
    },
    [ADD_POOL_DETAIL] (state, {poolName, uuid, object}) {
        if (!state[poolName][uuid]) {
            state[poolName][uuid] = {}
        }
        if (!state[poolName][uuid].detail) {
            state[poolName][uuid].detail = {}
        }
        state[poolName][uuid].detail = Object.assign({}, state[poolName][uuid].detail, object)
        state[poolName] = Object.assign({}, state[poolName])
    },
    // 关注状态改变
    // 区分详情和列表
    [DATA_MODULE_FOCUS_SUCCESS] (state, {response, isList, uuid}) {
        if (isList) {
            state.data_module[uuid].is_task = !state.data_module[uuid].is_task
        } else {
            state.data_module[uuid].is_task = !state.data_module[uuid].is_task
            state.data_module[uuid].detail.marks.task = !state.data_module[uuid].detail.marks.task
        }
    },
    // 相关推荐有用
    [DATA_MODULE_RECOMMEND_USERFUL] (state, {response, isList, uuid}) {
        if (isList) {
            state.data_module[uuid].is_useful = true
        }
    },
    [DATA_MODULE_FOCUS_FAILURE] (state, error) {
        console.error(error)
    },
    [UPDATE_TASK_STATE_SUCCESS] (state, {uuid, status}) {
        state.task[uuid].state = status
        state.task[uuid].detail.state = status
    }
}
export default {
    state,
    actions,
    mutations
}
