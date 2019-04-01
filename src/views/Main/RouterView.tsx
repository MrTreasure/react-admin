import Flow from '@/views/Editor/GGEditor/Flow'
import Mind from '@/views/Editor/GGEditor/Mind'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const RouterView = (props: any) => {
  return (
    <Switch>
      <Route path="/editor/flow" component={Flow}/>
      <Route path="/editor/mind" component={Mind}/>
    </Switch>
  )
}

export default RouterView