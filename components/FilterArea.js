import React, { propTypes } from 'react'
import { connect } from 'react-redux'
import { setVisibility, setGroupVisibility, setEnv } from '../actions'

const FilterList = ({pageData, envs, onEnvChange, onChange, onGroupChange}) => (
  <div id="filter-area">
    <h1>Mobile Monitor</h1>
    <h3>PAGE</h3>
    <ul>
      {pageData.map(data =>
        <li key={data.id}>
          <input
            id={data.id}
            type="checkbox" 
            onChange={() => data.type === 'page' ? onChange(data.id) : onGroupChange(data.id, data.isShow)}
            checked={data.isShow ? 'checked' : false}
          />
          <label 
            style={{color: data.type === 'page' ? '#000' : '#0097FF'}}
            htmlFor={data.id}
          >{data.type === 'page' ? data.page_name : data.group_name}
          </label>
        </li>
      )}
    </ul>
    <h3>Environment</h3>
    <ul>
      {envs.map(env =>
        <li key={'env_'+env.id}>
          <input
            id={env.id}
            type="checkbox" 
            checked={env.isShow ? 'checked' : false}
            onChange={() => onEnvChange(env.id)}
          />
          <label 
            style={{color: '#48cfad'}}
            htmlFor={env.id}
          >{env.id}
          </label>
        </li>
      )}
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  return {
    pageData: state.filters,
    envs: state.envs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (id) => {
      dispatch(setVisibility(id))
    },
    onGroupChange: (group_id, is_show) => {
      dispatch(setGroupVisibility(group_id, is_show))
    },
    onEnvChange: (env_id) => {
      dispatch(setEnv(env_id))
    }
  }
}

const FilterArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList)

export default FilterArea