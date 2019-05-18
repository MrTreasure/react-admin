import Code from '@/views/Editor/Code'
import Flow from '@/views/Editor/GGEditor/Flow'
import Markdown from '@/views/Editor/Markdown'
import Mind from '@/views/Editor/GGEditor/Mind'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BasicForm from '@/views/Form/BasicForm';

const RouterView = (props: any) => {
  return (
    <Switch>
      <Route path="/form/basicForm" component={BasicForm}/>
      <Route path="/editor/flow" component={Flow}/>
      <Route path="/editor/mind" component={Mind}/>
      <Route path="/editor/code" component={Code}/>
    </Switch>
  )
}

export default RouterView