import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import hoistNonReactStatics from 'hoist-non-react-statics'

import {Formik, Field as FormikField, connect as connectFormik, useField} from 'formik'

import DoneIcon from '@material-ui/icons/Done'
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'

const formikTextFieldStyles = {
  revertButton: {},
}

const eFormikContext = React.createContext()
const {Provider: EFormikProvider, Consumer: EFormikConsumer} = eFormikContext

export const EFormikTextField = withStyles(formikTextFieldStyles)(({classes, name, ...props}) => {
  const eFormikCtx = React.useContext(eFormikContext)
  const [
    {value, onBlur, onChange},
    {value: rawValue, error, touched, initialValue},
  ] = useField(name, props.type)
  const isChanged = initialValue !== rawValue
  function handleFieldReset(event) {
    onChange(name)(initialValue)
  }
  return <TextField
    {...props}
    name={name}
    value={value}
    error={(eFormikCtx.validateOnInitial || touched) && error !== undefined}
    helperText={error}
    onChange={onChange}
    onBlur={onBlur}
    InputProps={{
      endAdornment: eFormikCtx.perFieldReset && <InputAdornment position='end'>
        <IconButton disabled={!isChanged} onClick={handleFieldReset} className={classes.revertButton}>
          {isChanged ? <SettingsBackupRestoreIcon/> : <DoneIcon style={{color: 'green'}}/>}
        </IconButton>
      </InputAdornment>,
    }}
  />
})

const formikButtonInfo = {
  reset: {
    handler: (ev, formik) => formik.handleReset(),
    enabled: formik => formik.dirty,
  },
  submit: {
    handler: (ev, formik) => formik.handleSubmit(ev),
    enabled: formik => formik.isValid && !formik.isSubmitting,
  },
}

export const EFormikButton = connectFormik(class EFormikButton extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['reset', 'submit']).isRequired,
  }

  handleOnClick = ev => {
    const {formik, type} = this.props
    const info = formikButtonInfo[type]
    info.handler(ev, formik)
  }

  render() {
    const {formik, type, ...props} = this.props
    const info = formikButtonInfo[type]
    return <Button {...props} type={type} onClick={this.handleOnClick} disabled={!info.enabled(formik)}/>
  }
})

class EFormik extends React.Component {
  static propTypes = {
    validateOnInitial: PropTypes.bool,
    validateOnReset: PropTypes.bool,
    perFieldReset: PropTypes.bool,
  }

  static defaultProps = {
    validateOnInitial: true,
    validateOnReset: true,
    perFieldReset: true,
  }

  state = {
    initialMount: true,
  }

  handleOnReset = (values, formik) => {
    const {validateOnReset, onReset} = this.props
    if (validateOnReset) {
      formik.validateForm().then(onReset)
    } else {
      onReset(values, formik)
    }
  }

  formikRender = formik => {
    this.setState((state, props) => {
      const {initialMount} = state
      if (initialMount) {
        const {validateOnInitial} = this.props
        if (validateOnInitial) {
          const {isValid, validateForm} = formik
          if (!isValid) {
            validateForm()
          }
        }
        return {initialMount: false}
      }
    })
    const {children} = this.props
    return React.Children.only(children)
  }

  render() {
    const {perFieldReset, validateOnInitial, validateOnReset, component, render, children, onReset,  ...props} = this.props
    const eFormikCtx = {perFieldReset, validateOnInitial, validateOnReset}
    return <EFormikProvider value={eFormikCtx}><Formik {...props} onReset={this.handleOnReset} render={this.formikRender}/></EFormikProvider>
  }
}

export function withEFormik(formikProps) {
  function componentName(Component) {
    return Component.displayName || Component.name || (Component.constructor && Component.constructor.name) || 'Component'
  }

  const {
    mapPropsToValues = props => Object.getOwnPropertyNames(props).reduce((values, key) => {
      const {[key]: value} = props
      if (typeof value !== 'function') {
        values[key] = value
      }
      return values
    }),
    mapPropsToStatus = props => undefined,
  } = formikProps
  return Component => {
    const Wrapped = props => {
      const initialValues = mapPropsToValues(props)
      const initialStatus = mapPropsToStatus(props)
      return <EFormik {...formikProps} initialValues={initialValues} initialStatus={initialStatus}><Component {...props}/></EFormik>
    }
    Wrapped.displayName = 'EFormik(' + componentName(Component) + ')'
    return hoistNonReactStatics(Wrapped, Component)
  }
}
