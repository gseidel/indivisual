HC.plugins.pattern.atom = _class(
    function () {
        this.next = {x: 0, y: 0, z: 0};
    }, HC.PatternPlugin, {
        name: 'atom',
        injections: {
            current: {x: 0, y: 0, z: 0}
        },

        apply: function (shape) {
            var layer = this.layer;

            var speed = layer.getShapeSpeed(shape);
            var params = this.params(shape);

            if (!params.tween && speed.prc == 0) {

                if (this.isFirstShape(shape)) {
                    this.next = layer.random3dPosition(.5, layer.shapeSize(1));
                }

                var tween = this.tweenShape(shape, params.current, this.next);
                tween.easing(TWEEN.Easing.Quadratic.InOut);
                tween.onUpdate(function () {
                    layer.positionIn3dSpace(shape, params.current.x, params.current.y, params.current.z);
                });
                tween.onComplete(function () {
                    params.tween = false;
                });
                this.tweenStart(tween);

                params.tween = tween;
            }
        }
    }
);
