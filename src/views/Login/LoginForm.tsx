import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Icon,
  Input
  } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'

interface OwnProps {
  onSubmit(form: any): void
}

class LoginForm extends Component<FormComponentProps & OwnProps, any> {
  static displayName = 'LoginForm'

  private handleSubmit(e: React.MouseEvent) {
    const { form, onSubmit } = this.props

    e.preventDefault()
    form.validateFields((err: Error, values: any) => {
      if (err) return
      onSubmit(values)
    })
  }

  public render() {
    const { getFieldDecorator } = this.props.form
    return (<Form onSubmit={this.handleSubmit.bind(this)}>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>Remember me</Checkbox>
        )}
        <a className="login-form-forgot" href="">Forgot password</a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>)
  }
}

export default Form.create({ name: 'login-form' })(LoginForm)