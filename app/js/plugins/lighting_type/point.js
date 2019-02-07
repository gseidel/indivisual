HC.plugins.lighting_type.point = _class(false, HC.LightingTypePlugin, {
    create: function () {
        var light = new THREE.PointLight(0xffffff);
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        // light.shadow.camera.fov = 90;
        light.shadow.camera.far = 10000;
        return light;
    }
});