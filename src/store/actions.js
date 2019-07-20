/*
* @ file
* @ des 定义动作，在组件中通过派发（dispatch）动作执行这里定义的 action
*/
import * as api from '../api'

/*
* 
*/
export const getAllMessages = ({ commit }) => {
  api.getAllMessages(messages => {
    commit('receiveAll', messages)
  })
}

export const sendMessage = ({ commit }, payload) => {
  api.createMessage(payload, message => {
    commit('receiveMessage', message)
  })
}

export const switchThread = ({ commit }, payload) => {
  commit('switchThread', payload)
}
