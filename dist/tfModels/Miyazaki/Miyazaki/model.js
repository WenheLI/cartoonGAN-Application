// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"tfModels/Miyazaki/Miyazaki/model.json":[function(require,module,exports) {
module.exports = {
  "weightsManifest": [{
    "paths": ["group1-shard1of12.bin", "group1-shard2of12.bin", "group1-shard3of12.bin", "group1-shard4of12.bin", "group1-shard5of12.bin", "group1-shard6of12.bin", "group1-shard7of12.bin", "group1-shard8of12.bin", "group1-shard9of12.bin", "group1-shard10of12.bin", "group1-shard11of12.bin", "group1-shard12of12.bin"],
    "weights": [{
      "dtype": "float32",
      "shape": [3],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv3/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [7, 7, 128, 3],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv3/Conv2D/ReadVariableOp"
    }, {
      "dtype": "int32",
      "shape": [4, 2],
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d/Pad/paddings"
    }, {
      "dtype": "int32",
      "shape": [3],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"
    }, {
      "dtype": "float32",
      "shape": [128],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 128, 128],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [128],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "int32",
      "shape": [4, 2],
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 128, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [128],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_2/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 128, 128],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_2/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [128],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 64, 128],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [64],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv1/BiasAdd/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [7, 7, 3, 64],
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv1/Conv2D/ReadVariableOp"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 256, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/conv2d_transpose/ReadVariableOp"
    }, {
      "dtype": "int32",
      "shape": [],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/stack/3"
    }, {
      "dtype": "int32",
      "shape": [],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/mul/y"
    }, {
      "dtype": "int32",
      "shape": [1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1"
    }, {
      "dtype": "int32",
      "shape": [1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_2/stack_1"
    }, {
      "dtype": "int32",
      "shape": [1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_1/stack_1"
    }, {
      "dtype": "int32",
      "shape": [1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/Reshape_1"
    }, {
      "dtype": "float32",
      "shape": [3, 3, 128, 256],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/conv2d_transpose/ReadVariableOp"
    }, {
      "dtype": "int32",
      "shape": [],
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/stack/3"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Reshape"
    }, {
      "dtype": "float32",
      "shape": [1, 1, 1, 1],
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Reshape_1"
    }]
  }],
  "modelTopology": {
    "node": [{
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "shape": {
          "shape": {
            "dim": [{
              "size": "-1"
            }, {
              "size": "256"
            }, {
              "size": "256"
            }, {
              "size": "3"
            }]
          }
        }
      },
      "name": "input",
      "op": "Placeholder"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv3/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "7"
              }, {
                "size": "7"
              }, {
                "size": "128"
              }, {
                "size": "3"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv3/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_INT32"
        },
        "value": {
          "tensor": {
            "dtype": "DT_INT32",
            "tensorShape": {
              "dim": [{
                "size": "4"
              }, {
                "size": "2"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d/Pad/paddings",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_INT32"
        },
        "value": {
          "tensor": {
            "dtype": "DT_INT32",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "128"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "128"
              }, {
                "size": "128"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "128"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_INT32"
        },
        "value": {
          "tensor": {
            "dtype": "DT_INT32",
            "tensorShape": {
              "dim": [{
                "size": "4"
              }, {
                "size": "2"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {}
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "128"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "128"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_2/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "128"
              }, {
                "size": "128"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_2/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "128"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "64"
              }, {
                "size": "128"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "64"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv1/BiasAdd/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "7"
              }, {
                "size": "7"
              }, {
                "size": "3"
              }, {
                "size": "64"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv1/Conv2D/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "256"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/conv2d_transpose/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_INT32"
        },
        "value": {
          "tensor": {
            "dtype": "DT_INT32",
            "tensorShape": {}
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/stack/3",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_INT32"
        },
        "value": {
          "tensor": {
            "dtype": "DT_INT32",
            "tensorShape": {}
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/mul/y",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_INT32"
        },
        "value": {
          "tensor": {
            "dtype": "DT_INT32",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_INT32"
        },
        "value": {
          "tensor": {
            "dtype": "DT_INT32",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_2/stack_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_INT32"
        },
        "value": {
          "tensor": {
            "dtype": "DT_INT32",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_1/stack_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_INT32"
        },
        "value": {
          "tensor": {
            "dtype": "DT_INT32",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/Reshape_1",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "3"
              }, {
                "size": "3"
              }, {
                "size": "128"
              }, {
                "size": "256"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/conv2d_transpose/ReadVariableOp",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_INT32"
        },
        "value": {
          "tensor": {
            "dtype": "DT_INT32",
            "tensorShape": {}
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/stack/3",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Reshape",
      "op": "Const"
    }, {
      "input": ["^input"],
      "attr": {
        "dtype": {
          "type": "DT_FLOAT"
        },
        "value": {
          "tensor": {
            "dtype": "DT_FLOAT",
            "tensorShape": {
              "dim": [{
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }, {
                "size": "1"
              }]
            }
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Reshape_1",
      "op": "Const"
    }, {
      "input": ["input", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv1/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm1/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm1/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm1/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm1/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm1/reduce_std/Sqrt", "StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm1/sub", "StatefulPartitionedCall/Cartoon_Generator/norm1/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm1/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm1/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm1/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm1/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm1/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm1/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation/Relu", "StatefulPartitionedCall/Cartoon_Generator/conv2_1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "U0FNRQ=="
        },
        "strides": {
          "list": {
            "i": ["1", "2", "2", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv2_1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv2_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "data_format": {
          "s": "TkhXQw=="
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv2_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/conv2_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "U0FNRQ=="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv2_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv2_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv2_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv2_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv2_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm2/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm2/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm2/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm2/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm2/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm2/sub", "StatefulPartitionedCall/Cartoon_Generator/norm2/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm2/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm2/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm2/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm2/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm2/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm2/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_1/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_1/Relu", "StatefulPartitionedCall/Cartoon_Generator/conv3_1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "U0FNRQ=="
        },
        "strides": {
          "list": {
            "i": ["1", "2", "2", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv3_1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv3_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv3_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/conv3_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "U0FNRQ=="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv3_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv3_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv3_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv3_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv3_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm3/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm3/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm3/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm3/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm3/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm3/sub", "StatefulPartitionedCall/Cartoon_Generator/norm3/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm3/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm3/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm3/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm3/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm3/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm3/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_2/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_2/Relu", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_1/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_1/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv4_1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv4_1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv4_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv4_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv4_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm4_1/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_1/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_1/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_1/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm4_1/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_1/sub", "StatefulPartitionedCall/Cartoon_Generator/norm4_1/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_1/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm4_1/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_1/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm4_1/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_1/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_1/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_3/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_3/Relu", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_2/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_2/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv4_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv4_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv4_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv4_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv4_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv4_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm4_2/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_2/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_2/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_2/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm4_2/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_2/sub", "StatefulPartitionedCall/Cartoon_Generator/norm4_2/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_2/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm4_2/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm4_2/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm4_2/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm4_2/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_2/Relu", "StatefulPartitionedCall/Cartoon_Generator/norm4_2/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/add/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add/add", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_3/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_3/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv5_1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv5_1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv5_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "data_format": {
          "s": "TkhXQw=="
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv5_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv5_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm5_1/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_1/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_1/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_1/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm5_1/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_1/sub", "StatefulPartitionedCall/Cartoon_Generator/norm5_1/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_1/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm5_1/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_1/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm5_1/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_1/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_1/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_4/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_4/Relu", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_4/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_4/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv5_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv5_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv5_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "data_format": {
          "s": "TkhXQw=="
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv5_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv5_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv5_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm5_2/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_2/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_2/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_2/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm5_2/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_2/sub", "StatefulPartitionedCall/Cartoon_Generator/norm5_2/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_2/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm5_2/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm5_2/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm5_2/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm5_2/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add/add", "StatefulPartitionedCall/Cartoon_Generator/norm5_2/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/add_1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_1/add", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_5/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_5/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv6_1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv6_1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv6_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv6_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv6_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm6_1/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_1/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_1/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_1/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm6_1/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_1/sub", "StatefulPartitionedCall/Cartoon_Generator/norm6_1/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_1/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm6_1/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_1/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm6_1/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_1/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_1/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_5/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_5/Relu", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_6/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_6/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv6_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv6_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv6_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv6_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv6_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv6_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm6_2/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_2/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_2/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_2/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm6_2/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_2/sub", "StatefulPartitionedCall/Cartoon_Generator/norm6_2/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_2/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm6_2/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm6_2/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm6_2/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm6_2/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_1/add", "StatefulPartitionedCall/Cartoon_Generator/norm6_2/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/add_2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_2/add", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_7/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_7/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv7_1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv7_1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv7_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv7_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv7_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm7_1/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_1/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_1/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_1/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm7_1/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_1/sub", "StatefulPartitionedCall/Cartoon_Generator/norm7_1/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_1/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm7_1/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_1/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm7_1/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_1/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_1/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_6/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_6/Relu", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_8/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_8/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv7_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv7_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv7_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv7_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv7_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv7_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm7_2/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_2/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_2/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_2/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm7_2/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_2/sub", "StatefulPartitionedCall/Cartoon_Generator/norm7_2/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_2/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm7_2/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm7_2/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm7_2/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm7_2/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_2/add", "StatefulPartitionedCall/Cartoon_Generator/norm7_2/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/add_3/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_3/add", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_9/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_9/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv8_1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv8_1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv8_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv8_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv8_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm8_1/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_1/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_1/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_1/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm8_1/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_1/sub", "StatefulPartitionedCall/Cartoon_Generator/norm8_1/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_1/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm8_1/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_1/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm8_1/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_1/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_1/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_7/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_7/Relu", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_10/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_10/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv8_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv8_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv8_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv8_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv8_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv8_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm8_2/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_2/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_2/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_2/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm8_2/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_2/sub", "StatefulPartitionedCall/Cartoon_Generator/norm8_2/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_2/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm8_2/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm8_2/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm8_2/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm8_2/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_3/add", "StatefulPartitionedCall/Cartoon_Generator/norm8_2/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/add_4/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_4/add", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_11/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_11/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv9_1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv9_1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv9_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv9_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv9_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm9_1/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_1/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_1/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_1/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm9_1/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_1/sub", "StatefulPartitionedCall/Cartoon_Generator/norm9_1/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_1/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm9_1/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_1/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm9_1/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_1/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_1/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_8/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_8/Relu", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_12/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_12/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv9_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv9_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv9_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv9_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv9_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv9_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm9_2/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_2/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_2/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_2/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm9_2/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_2/sub", "StatefulPartitionedCall/Cartoon_Generator/norm9_2/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_2/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm9_2/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm9_2/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm9_2/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm9_2/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_4/add", "StatefulPartitionedCall/Cartoon_Generator/norm9_2/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/add_5/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_5/add", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_13/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_13/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv10_1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv10_1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv10_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv10_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv10_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm10_1/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_1/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_1/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_1/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_1/reduce_std/Sqrt", "StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_1/sub", "StatefulPartitionedCall/Cartoon_Generator/norm10_1/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_1/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm10_1/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_1/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm10_1/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_1/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_1/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_9/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_9/Relu", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_14/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_14/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv10_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv10_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv10_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv10_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv10_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv10_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm10_2/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_2/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_2/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_2/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_2/reduce_std/Sqrt", "StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_2/sub", "StatefulPartitionedCall/Cartoon_Generator/norm10_2/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_2/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm10_2/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm10_2/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm10_2/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm10_2/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_5/add", "StatefulPartitionedCall/Cartoon_Generator/norm10_2/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/add_6/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_6/add", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv11_1/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_1/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv11_1/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv11_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "data_format": {
          "s": "TkhXQw=="
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv11_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv11_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm11_1/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm11_1/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/sub", "StatefulPartitionedCall/Cartoon_Generator/norm11_1/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm11_1/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm11_1/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_1/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_10/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_10/Relu", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_15/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_16/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_16/Pad", "StatefulPartitionedCall/Cartoon_Generator/conv11_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv11_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/conv11_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/conv11_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv11_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/conv11_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm11_2/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_2/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_2/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_2/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm11_2/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_2/sub", "StatefulPartitionedCall/Cartoon_Generator/norm11_2/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_2/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm11_2/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_2/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm11_2/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm11_2/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_6/add", "StatefulPartitionedCall/Cartoon_Generator/norm11_2/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/add_7/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/add_7/add"],
      "attr": {
        "out_type": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/Shape",
      "op": "Shape"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_1/Shape", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_1/stack_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_2/stack_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1"],
      "attr": {
        "new_axis_mask": {
          "i": "0"
        },
        "Index": {
          "type": "DT_INT32"
        },
        "begin_mask": {
          "i": "0"
        },
        "ellipsis_mask": {
          "i": "0"
        },
        "end_mask": {
          "i": "0"
        },
        "T": {
          "type": "DT_INT32"
        },
        "shrink_axis_mask": {
          "i": "1"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/strided_slice_2",
      "op": "StridedSlice"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_1/Shape", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_1/stack_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1"],
      "attr": {
        "new_axis_mask": {
          "i": "0"
        },
        "Index": {
          "type": "DT_INT32"
        },
        "begin_mask": {
          "i": "0"
        },
        "ellipsis_mask": {
          "i": "0"
        },
        "end_mask": {
          "i": "0"
        },
        "T": {
          "type": "DT_INT32"
        },
        "shrink_axis_mask": {
          "i": "1"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/strided_slice_1",
      "op": "StridedSlice"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_1/Shape", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1"],
      "attr": {
        "new_axis_mask": {
          "i": "0"
        },
        "Index": {
          "type": "DT_INT32"
        },
        "begin_mask": {
          "i": "0"
        },
        "ellipsis_mask": {
          "i": "0"
        },
        "end_mask": {
          "i": "0"
        },
        "T": {
          "type": "DT_INT32"
        },
        "shrink_axis_mask": {
          "i": "1"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/strided_slice",
      "op": "StridedSlice"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_1/strided_slice_2", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/mul/y"],
      "attr": {
        "T": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/mul_1",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_1/strided_slice_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/mul/y"],
      "attr": {
        "T": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_1/strided_slice", "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/mul", "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/mul_1", "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/stack/3"],
      "attr": {
        "N": {
          "i": "4"
        },
        "T": {
          "type": "DT_INT32"
        },
        "axis": {
          "i": "0"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/stack",
      "op": "Pack"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_1/stack", "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/conv2d_transpose/ReadVariableOp", "StatefulPartitionedCall/Cartoon_Generator/add_7/add"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "U0FNRQ=="
        },
        "strides": {
          "list": {
            "i": ["1", "2", "2", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/conv2d_transpose",
      "op": "Conv2DBackpropInput"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_1/conv2d_transpose", "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "data_format": {
          "s": "TkhXQw=="
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/deconv1_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "U0FNRQ=="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/deconv1_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv1_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv1_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "keep_dims": {
          "b": true
        },
        "Tidx": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/sub", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv1/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_11/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_11/Relu"],
      "attr": {
        "out_type": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/Shape",
      "op": "Shape"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_1/Shape", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_1/stack_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_2/stack_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1"],
      "attr": {
        "new_axis_mask": {
          "i": "0"
        },
        "Index": {
          "type": "DT_INT32"
        },
        "begin_mask": {
          "i": "0"
        },
        "ellipsis_mask": {
          "i": "0"
        },
        "end_mask": {
          "i": "0"
        },
        "T": {
          "type": "DT_INT32"
        },
        "shrink_axis_mask": {
          "i": "1"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_2",
      "op": "StridedSlice"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_1/Shape", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_1/stack_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1"],
      "attr": {
        "new_axis_mask": {
          "i": "0"
        },
        "Index": {
          "type": "DT_INT32"
        },
        "begin_mask": {
          "i": "0"
        },
        "ellipsis_mask": {
          "i": "0"
        },
        "end_mask": {
          "i": "0"
        },
        "T": {
          "type": "DT_INT32"
        },
        "shrink_axis_mask": {
          "i": "1"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_1",
      "op": "StridedSlice"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_1/Shape", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice/stack_1"],
      "attr": {
        "new_axis_mask": {
          "i": "0"
        },
        "Index": {
          "type": "DT_INT32"
        },
        "begin_mask": {
          "i": "0"
        },
        "ellipsis_mask": {
          "i": "0"
        },
        "end_mask": {
          "i": "0"
        },
        "T": {
          "type": "DT_INT32"
        },
        "shrink_axis_mask": {
          "i": "1"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice",
      "op": "StridedSlice"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_1/mul/y", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_2"],
      "attr": {
        "T": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/mul_1",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_1/mul/y", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice_1"],
      "attr": {
        "T": {
          "type": "DT_INT32"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_1/strided_slice", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/mul", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/mul_1", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/stack/3"],
      "attr": {
        "N": {
          "i": "4"
        },
        "T": {
          "type": "DT_INT32"
        },
        "axis": {
          "i": "0"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/stack",
      "op": "Pack"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_1/stack", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/conv2d_transpose/ReadVariableOp", "StatefulPartitionedCall/Cartoon_Generator/activation_11/Relu"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "U0FNRQ=="
        },
        "strides": {
          "list": {
            "i": ["1", "2", "2", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/conv2d_transpose",
      "op": "Conv2DBackpropInput"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_1/conv2d_transpose", "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/BiasAdd/ReadVariableOp"],
      "attr": {
        "data_format": {
          "s": "TkhXQw=="
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_1/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_1/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/deconv2_2/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "U0FNRQ=="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_2/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_2/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/deconv2_2/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv2_2/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv2_2/BiasAdd", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/sub",
      "op": "Sub"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/sub"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/reduce_std/reduce_variance/Square",
      "op": "Square"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/reduce_std/reduce_variance/Square", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Mean/reduction_indices"],
      "attr": {
        "Tidx": {
          "type": "DT_INT32"
        },
        "keep_dims": {
          "b": true
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/reduce_std/reduce_variance/Mean_1",
      "op": "Mean"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/reduce_std/reduce_variance/Mean_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/reduce_std/Sqrt",
      "op": "Sqrt"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm11_1/add/y", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/reduce_std/Sqrt"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/add",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/sub", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/add"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/truediv",
      "op": "RealDiv"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Reshape", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/truediv"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/mul",
      "op": "Mul"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/Reshape_1", "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/mul"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/add_1",
      "op": "Add"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/norm_deconv2/add_1"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_12/Relu",
      "op": "Relu"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_12/Relu", "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d/Pad/paddings"],
      "attr": {
        "Tpaddings": {
          "type": "DT_INT32"
        },
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_17/Pad",
      "op": "Pad"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/zero_padding2d_17/Pad", "StatefulPartitionedCall/Cartoon_Generator/deconv3/Conv2D/ReadVariableOp"],
      "attr": {
        "explicit_paddings": {
          "list": {}
        },
        "data_format": {
          "s": "TkhXQw=="
        },
        "use_cudnn_on_gpu": {
          "b": true
        },
        "padding": {
          "s": "VkFMSUQ="
        },
        "strides": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        },
        "T": {
          "type": "DT_FLOAT"
        },
        "dilations": {
          "list": {
            "i": ["1", "1", "1", "1"]
          }
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv3/Conv2D",
      "op": "Conv2D"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv3/Conv2D", "StatefulPartitionedCall/Cartoon_Generator/deconv3/BiasAdd/ReadVariableOp"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        },
        "data_format": {
          "s": "TkhXQw=="
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/deconv3/BiasAdd",
      "op": "BiasAdd"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/deconv3/BiasAdd"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "StatefulPartitionedCall/Cartoon_Generator/activation_13/Tanh",
      "op": "Tanh"
    }, {
      "input": ["StatefulPartitionedCall/Cartoon_Generator/activation_13/Tanh"],
      "attr": {
        "T": {
          "type": "DT_FLOAT"
        }
      },
      "name": "Identity",
      "op": "Identity"
    }],
    "library": {},
    "versions": {
      "producer": 38
    }
  },
  "generatedBy": "1.14.0",
  "convertedBy": "TensorFlow.js Converter v1.2.2.1",
  "format": "graph-model"
};
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55113" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","tfModels/Miyazaki/Miyazaki/model.json"], null)
//# sourceMappingURL=/tfModels/Miyazaki/Miyazaki/model.js.map