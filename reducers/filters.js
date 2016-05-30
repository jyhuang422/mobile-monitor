const filters = (state = window.context, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return state.map((item) => {
        if(item.id === action.id) {
          return Object.assign({}, item, {
            isShow: !item.isShow,
            showed: item.showed ? item.showed : !item.isShow
          })
        } else {
          return item
        }
      })
    case 'SET_GROUP_VISIBILITY':
      return state.map((item) => {
        if(action.group_id === 'all' || item.id === action.group_id || (item.group && item.group.indexOf(action.group_id) > -1)) {
          return Object.assign({}, item, {
            isShow: !action.is_show,
            showed: item.showed ? item.showed : !action.is_show
          })
        } else {
          return item
        }
      })
    default:
      return state.map(st => Object.assign({}, st, {showed: st.isShow}))
  }
}

export default filters