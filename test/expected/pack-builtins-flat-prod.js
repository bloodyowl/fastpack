(function() {

/* builtin$$COLON$$__fastpack_runtime__ */

let $n__builtin$$COLON$$__fastpack_runtime__ = { id: "builtin$$COLON$$__fastpack_runtime__", exports: {}};

function $i__builtin$$COLON$$__fastpack_runtime____applyDecorator(decorator, proto, property, descriptor) {
  var ret = decorator(proto, property, descriptor);
  // TODO: assert all descriptor properties;
  return ret;
}

function $i__builtin$$COLON$$__fastpack_runtime____decorateProperty(cls, property, decorators) {
  var proto = cls.prototype;
  var descriptor = Object.assign(
    {},
    Object.getOwnPropertyDescriptor(proto, property)
  );

  for(var i = 0, reversed = decorators.reverse(), l = reversed.length;
      i < l;
      i++) {
    descriptor = $i__builtin$$COLON$$__fastpack_runtime____applyDecorator(reversed[i], proto, property, descriptor);
  }

  Object.defineProperty(proto, property, descriptor);
}

$n__builtin$$COLON$$__fastpack_runtime__.exports = {
  omitProps: function(target, props) {
    var ret = {};
    for(var prop in target) {
      if(target.hasOwnProperty(prop) && props.indexOf(prop) == -1) {
        ret[prop] = target[prop];
      }
    }
    return ret;
  },

  defineClass: function(cls, statics, classDecorators, propertyDecorators) {
    for(var i = 0, l = propertyDecorators.length; i < l; i++) {
      $i__builtin$$COLON$$__fastpack_runtime____decorateProperty(cls,
                       propertyDecorators[i].method,
                       propertyDecorators[i].decorators);
    }

    for(var i = 0, l = statics.length; i < l; i++) {
      Object.defineProperty(cls, statics[i].name, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: statics[i].value
      })
    }

    var _cls = cls;
    classDecorators = classDecorators.reverse();
    for(var i = 0; i < classDecorators.length; i++) {
      _cls = classDecorators[i](_cls);
    }
    return _cls;
  }
};

try{$n__builtin$$COLON$$__fastpack_runtime__.exports.__esModule = $n__builtin$$COLON$$__fastpack_runtime__.exports.__esModule || false;}catch(_){}

/* builtin$$COLON$$__empty_module__ */

let $n__builtin$$COLON$$__empty_module__ = { id: "builtin$$COLON$$__empty_module__", exports: {}};
$n__builtin$$COLON$$__empty_module__.exports = {};
try{$n__builtin$$COLON$$__empty_module__.exports.__esModule = $n__builtin$$COLON$$__empty_module__.exports.__esModule || false;}catch(_){}

/* builtin$$B$$esm */

let $n__builtin$$B$$esm = { id: "builtin$$B$$esm", exports: {}};

const $e__builtin$$B$$esm__default = $n__builtin$$COLON$$__empty_module__.exports.delimiter;

try{$n__builtin$$B$$esm.exports.default = $e__builtin$$B$$esm__default;
$n__builtin$$B$$esm.exports.__esModule = $n__builtin$$B$$esm.exports.__esModule || true;}catch(_){}

/* builtin$$B$$index */

let $n__builtin$$B$$index = { id: "builtin$$B$$index", exports: {}};
const $i__builtin$$B$$index__$__fpack__ = ($n__builtin$$COLON$$__fastpack_runtime__.exports);
const $i__builtin$$B$$index__path = ($n__builtin$$COLON$$__empty_module__.exports);
const $i__builtin$$B$$index__module = ($n__builtin$$COLON$$__empty_module__.exports);
const $i__builtin$$B$$index__esm = ($n__builtin$$B$$esm.exports);
const {delimiter: $i__builtin$$B$$index__delimiter} = $i__builtin$$B$$index__path,
  $i__builtin$$B$$index__rest = $i__builtin$$B$$index__$__fpack__.omitProps($i__builtin$$B$$index__path, ["delimiter"]);
console.log($i__builtin$$B$$index__path, $i__builtin$$B$$index__module, $i__builtin$$B$$index__delimiter, $i__builtin$$B$$index__rest, $i__builtin$$B$$index__esm);
// The following test makes sure that builtin transpiler strips type annotations
// from inside JSX
const $i__builtin$$B$$index__Component = props => React.createElement("div", null, item => {
    
  }
  );

try{$n__builtin$$B$$index.exports.__esModule = $n__builtin$$B$$index.exports.__esModule || false;}catch(_){}
})()
