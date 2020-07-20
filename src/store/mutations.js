export default {
    PUSH_NOTIFICATION: (state, payload) => {
        state.notifications.push(payload)
    },
    REMOVE_NOTIFICATION: (state, payload) => {
        state.notifications = state.notifications.filter((notification) => {
            return notification.id != payload.id
        })
    }

}