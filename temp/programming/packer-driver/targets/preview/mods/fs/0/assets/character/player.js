System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEventType, macro, Vec2, RigidBody2D, BoxCollider2D, Contact2DType, Label, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      macro = _cc.macro;
      Vec2 = _cc.Vec2;
      RigidBody2D = _cc.RigidBody2D;
      BoxCollider2D = _cc.BoxCollider2D;
      Contact2DType = _cc.Contact2DType;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96321jFZ6dFwpYTu9YhkTX9", "player", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Player, _Component);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "scoreLabel", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "score", 0);

          _defineProperty(_assertThisInitialized(_this), "collider", void 0);

          _defineProperty(_assertThisInitialized(_this), "rigidbody", void 0);

          _defineProperty(_assertThisInitialized(_this), "direction", 0);

          _defineProperty(_assertThisInitialized(_this), "walk_force", 1000);

          _defineProperty(_assertThisInitialized(_this), "jump_force", 35000);

          return _this;
        }

        var _proto = Player.prototype;

        _proto.onLoad = function onLoad() {
          systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);
          systemEvent.on(SystemEventType.KEY_UP, this.onKeyUp, this);
        };

        _proto.start = function start() {
          this.rigidbody = this.node.getComponent(RigidBody2D);
          this.collider = this.node.getComponent(BoxCollider2D);

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };

        _proto.update = function update(deltaTime) {
          this.rigidbody.applyForceToCenter(new Vec2(this.direction * this.walk_force, 0), true);
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.name == "star<BoxCollider2D>") {
            otherCollider.node.getComponent("Star").destroyStar();
            this.score++;
            this.scoreLabel.string = "Score: " + this.score;
          }
        };

        _proto.onKeyDown = function onKeyDown(event) {
          switch (event.keyCode) {
            case macro.KEY.a:
            case macro.KEY.left:
              {
                this.direction = -1;
                break;
              }

            case macro.KEY.d:
            case macro.KEY.right:
              {
                this.direction = 1;
                break;
              }

            case macro.KEY.space:
            case macro.KEY.up:
              {
                this.rigidbody.applyForceToCenter(new Vec2(0, this.jump_force), true);
                break;
              }

            default:
              break;
          }
        };

        _proto.onKeyUp = function onKeyUp(event) {
          switch (event.keyCode) {
            case macro.KEY.a:
            case macro.KEY.left:
              {
                this.direction = 0;
                break;
              }

            case macro.KEY.d:
            case macro.KEY.right:
              {
                this.direction = 0;
                break;
              }

            default:
              break;
          }
        };

        return Player;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=player.js.map