import "core-js/modules/es.function.name";
import _Object$getOwnPropertyNames from "@babel/runtime-corejs3/core-js/object/get-own-property-names";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/reduce";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _slicedToArray from "@babel/runtime-corejs3/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Formik, Field as FormikField, connect as connectFormik, useField, useFormikContext } from 'formik';
import DoneIcon from '@material-ui/icons/Done';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
var formikTextFieldStyles = {
  revertButton: {}
};
var eFormikContext = React.createContext();
var EFormikProvider = eFormikContext.Provider,
    EFormikConsumer = eFormikContext.Consumer;
export var EFormikTextField = withStyles(formikTextFieldStyles)(function (_ref) {
  var classes = _ref.classes,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["classes", "name"]);

  var eFormikCtx = React.useContext(eFormikContext);

  var _useField = useField(name, props.type),
      _useField2 = _slicedToArray(_useField, 2),
      _useField2$ = _useField2[0],
      value = _useField2$.value,
      onBlur = _useField2$.onBlur,
      onChange = _useField2$.onChange,
      _useField2$2 = _useField2[1],
      rawValue = _useField2$2.value,
      error = _useField2$2.error,
      touched = _useField2$2.touched,
      initialValue = _useField2$2.initialValue;

  var isChanged = initialValue !== rawValue;

  function handleFieldReset(event) {
    onChange(name)(initialValue);
  }

  return React.createElement(TextField, _extends({}, props, {
    name: name,
    value: value,
    error: (eFormikCtx.validateOnInitial || touched) && error !== undefined,
    helperText: error,
    onChange: onChange,
    onBlur: onBlur,
    InputProps: {
      endAdornment: eFormikCtx.perFieldReset && React.createElement(InputAdornment, {
        position: "end"
      }, React.createElement(IconButton, {
        disabled: !isChanged,
        onClick: handleFieldReset,
        className: classes.revertButton
      }, isChanged ? React.createElement(SettingsBackupRestoreIcon, null) : React.createElement(DoneIcon, {
        style: {
          color: 'green'
        }
      })))
    }
  }));
});
var formikButtonInfo = {
  reset: {
    handler: function handler(ev, formik) {
      return formik.handleReset();
    },
    enabled: function enabled(formik) {
      return formik.dirty;
    }
  },
  submit: {
    handler: function handler(ev, formik) {
      return formik.handleSubmit(ev);
    },
    enabled: function enabled(formik) {
      return formik.isValid && !formik.isSubmitting;
    }
  }
};
export var EFormikButton = connectFormik((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EFormikButton, _React$Component);

  function EFormikButton() {
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, EFormikButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EFormikButton)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

    _defineProperty(_assertThisInitialized(_this), "handleOnClick", function (ev) {
      var _this$props = _this.props,
          formik = _this$props.formik,
          type = _this$props.type;
      var info = formikButtonInfo[type];
      info.handler(ev, formik);
    });

    return _this;
  }

  _createClass(EFormikButton, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          formik = _this$props2.formik,
          type = _this$props2.type,
          props = _objectWithoutProperties(_this$props2, ["formik", "type"]);

      var info = formikButtonInfo[type];
      return React.createElement(Button, _extends({}, props, {
        type: type,
        onClick: this.handleOnClick,
        disabled: !info.enabled(formik)
      }));
    }
  }]);

  return EFormikButton;
}(React.Component), _defineProperty(_class, "propTypes", {
  type: PropTypes.oneOf(['reset', 'submit']).isRequired
}), _temp));

function EFormikRender(props) {
  var children = props.children;

  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      initialMount = _React$useState2[0],
      setInitialMount = _React$useState2[1];

  if (initialMount) {
    setInitialMount(false);
    var validateOnInitial = props.validateOnInitial;

    if (validateOnInitial) {
      var formik = useFormikContext();
      var isValid = formik.isValid,
          validateForm = formik.validateForm;

      if (!isValid) {
        validateForm();
      }
    }
  }

  return React.Children.only(children);
}

var EFormik =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(EFormik, _React$Component2);

  function EFormik() {
    var _getPrototypeOf3, _context2;

    var _this2;

    _classCallCheck(this, EFormik);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(EFormik)).call.apply(_getPrototypeOf3, _concatInstanceProperty(_context2 = [this]).call(_context2, args)));

    _defineProperty(_assertThisInitialized(_this2), "handleOnReset", function (values, formik) {
      var _this2$props = _this2.props,
          validateOnReset = _this2$props.validateOnReset,
          onReset = _this2$props.onReset;

      if (validateOnReset) {
        formik.validateForm().then(onReset);
      } else {
        onReset(values, formik);
      }
    });

    return _this2;
  }

  _createClass(EFormik, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          perFieldReset = _this$props3.perFieldReset,
          validateOnInitial = _this$props3.validateOnInitial,
          validateOnReset = _this$props3.validateOnReset,
          component = _this$props3.component,
          render = _this$props3.render,
          children = _this$props3.children,
          onReset = _this$props3.onReset,
          props = _objectWithoutProperties(_this$props3, ["perFieldReset", "validateOnInitial", "validateOnReset", "component", "render", "children", "onReset"]);

      var eFormikCtx = {
        perFieldReset: perFieldReset,
        validateOnInitial: validateOnInitial,
        validateOnReset: validateOnReset
      };
      return React.createElement(EFormikProvider, {
        value: eFormikCtx
      }, React.createElement(Formik, _extends({}, props, {
        onReset: this.handleOnReset
      }), React.createElement(EFormikRender, {
        validateOnInitial: validateOnInitial,
        children: children
      })));
    }
  }]);

  return EFormik;
}(React.Component);

_defineProperty(EFormik, "propTypes", {
  validateOnInitial: PropTypes.bool,
  validateOnReset: PropTypes.bool,
  perFieldReset: PropTypes.bool
});

_defineProperty(EFormik, "defaultProps", {
  validateOnInitial: true,
  validateOnReset: true,
  perFieldReset: true
});

export function withEFormik(formikProps) {
  function componentName(Component) {
    return Component.displayName || Component.name || Component.constructor && Component.constructor.name || 'Component';
  }

  var _formikProps$mapProps = formikProps.mapPropsToValues,
      mapPropsToValues = _formikProps$mapProps === void 0 ? function (props) {
    var _context3;

    return _reduceInstanceProperty(_context3 = _Object$getOwnPropertyNames(props)).call(_context3, function (values, key) {
      var value = props[key];

      if (typeof value !== 'function') {
        values[key] = value;
      }

      return values;
    });
  } : _formikProps$mapProps,
      _formikProps$mapProps2 = formikProps.mapPropsToStatus,
      mapPropsToStatus = _formikProps$mapProps2 === void 0 ? function (props) {
    return undefined;
  } : _formikProps$mapProps2;
  return function (Component) {
    var Wrapped = function Wrapped(props) {
      var initialValues = mapPropsToValues(props);
      var initialStatus = mapPropsToStatus(props);
      return React.createElement(EFormik, _extends({}, formikProps, {
        initialValues: initialValues,
        initialStatus: initialStatus
      }), React.createElement(Component, props));
    };

    Wrapped.displayName = 'EFormik(' + componentName(Component) + ')';
    return hoistNonReactStatics(Wrapped, Component);
  };
}
//# sourceMappingURL=index.js.map