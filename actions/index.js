export const setVisibility = (id) => {
  return {
    type: 'SET_VISIBILITY',
    id
  }
}
export const setGroupVisibility = (group_id, is_show) => {
  return {
    type: 'SET_GROUP_VISIBILITY',
    group_id,
    is_show
  }
}
export const setEnv = (env_id) => {
  return {
    type: 'SET_ENV',
    env_id
  }
}