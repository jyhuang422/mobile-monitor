const envs = (state = window.env, action) => {
  switch (action.type) {
    case 'SET_ENV':
      return state.map(env => {
        if(env.id === action.env_id) {
          return Object.assign({}, env, {isShow: !env.isShow})
        } else {
          return env
        }
      })
    default:
      return state
  }
}

export default envs