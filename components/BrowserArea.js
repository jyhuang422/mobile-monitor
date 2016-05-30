import React, { propTypes } from 'react'
import { connect } from 'react-redux'

const BrowserList = ({pageData, env, refresh, onload}) => {
  let markup = [];
  pageData.forEach(data => {
    if(data.type === 'page' && data.showed) {
      env.forEach(env => {
        if(env.isShow) {
          markup.push(
            <li key={data.id+"_"+env.id} style={{display: data.isShow ? 'inline-block' : 'none'}}>
              <h2>{data.page_name+"--"+env.id}(<a className="btn-refresh" href="#" onClick={refresh}>refresh</a>)</h2>
              <iframe 
                width="320"
                height="568"
                src={window.rtConfig(env.id).host+data.page_url+(window.rtConfig(env.id)[data.url_param] || "")}
              />
            </li>
          )
        }
      })
    }
  })
  return (
    <div id="display-area">
    <ul>
      {markup}
    </ul>
    </div>
  )
}
  

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: (e) => {
      e.preventDefault();
      let target = e.target;
      let ifr = target.parentNode.parentNode.children[1];
      ifr.src = ifr.src;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    pageData: state.filters,
    env: state.envs
  }
}

const BrowserArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowserList)

export default BrowserArea