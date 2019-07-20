/*
* @ file
* @ des 定义 state 的 getter，可在组件中通过 mapGetters 获取这里 state 的 getter 缓存属性值，简单来说就是供组件获取状态
*/
export const threads = state => state.threads

export const currentThread = state => {
  return state.currentThreadID
    ? state.threads[state.currentThreadID]
    : {}
}

export const currentMessages = state => {
  const thread = currentThread(state)
  return thread.messages
    ? thread.messages.map(id => state.messages[id])
    : []
}

export const unreadCount = ({ threads }) => {
  return Object.keys(threads).reduce((count, id) => {
    return threads[id].lastMessage.isRead ? count : count + 1
  }, 0)
}

export const sortedMessages = (state, getters) => {
  const messages = getters.currentMessages
  return messages.slice().sort((a, b) => a.timestamp - b.timestamp)
}
