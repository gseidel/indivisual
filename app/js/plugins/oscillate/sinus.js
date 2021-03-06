// todo alle sinus auch als cosinus

HC.plugins.oscillate.sinus = _class(false, HC.OscillatePlugin, {
    name: 'sinus -1/1 (current)',
    apply: function (key) {
        var layer = this.layer;
        var speed = layer.getCurrentSpeed();
        this.activate(key, HC.Osci.sinus(speed.prc));
    }
});

HC.plugins.oscillate.sininout = _class(false, HC.OscillatePlugin, {
    name: 'sinus 0/1 (current)',

    apply: function (key) {
        var layer = this.layer;
        var speed = layer.getCurrentSpeed();
        this.activate(key, HC.Osci.sinInOut(speed.prc));
    }
});

HC.plugins.oscillate.sininouthexa = _class(false, HC.OscillatePlugin, {
    name: 'sinus 0/1 (hexa)',

    apply: function (key) {
        var speed = beatkeeper.getSpeed('hexa');
        this.activate(key, HC.Osci.sinInOut(speed.prc));
    }
});

HC.plugins.oscillate.sininoutdotfivehexa = _class(false, HC.OscillatePlugin, {
    name: 'sinus 0.5/1.5 (hexa)',

    apply: function (key) {
        var speed = beatkeeper.getSpeed('hexa');
        this.activate(key, HC.Osci.sinInOut(speed.prc, .5));
    }
});

HC.plugins.oscillate.sininoutdotfive32 = _class(false, HC.OscillatePlugin, {
    name: 'sinus 0.5/1.5 (32)',

    apply: function (key) {
        var speed = beatkeeper.getSpeed('32');
        this.activate(key, HC.Osci.sinInOut(speed.prc, .5));
    }
});

HC.plugins.oscillate.sinusfulls = _class(false, HC.OscillatePlugin, {
    name: 'sinus -1/1 (fulls)',

    apply: function (key) {
        var speed = beatkeeper.getSpeed('full');
        this.activate(key, HC.Osci.sinus(speed.prc));
    }
});

HC.plugins.oscillate.oscillator = _class(false, HC.OscillatePlugin, {
    name: 'oscillate',

    apply: function (key) {
        var layer = this.layer;
        this.activate(key, HC.Osci.wobble(0, this.settings));
    }
});

HC.plugins.oscillate.sinusosci1 = _class(
    function () {
        this.settings = {
            osci1_period: 1,
            osci1_amp: 1,
            osci2_period: 1,
            osci2_amp: 0,
            osci3_period: 1,
            osci3_amp: 0,
            rhythm: 'half'
        };
    }, HC.OscillatePlugin, {
        name: 'sinus by osci1_period',
        apply: function (key) {
            var layer = this.layer;
            this.settings.osci1_period = this.settings.osci1_period;
            this.settings.rhythm = this.settings.rhythm;
            this.activate(key, HC.Osci.wobble(0, this.settings));

        }
    }
);

HC.plugins.oscillate.sinusosci2 = _class(
    function () {
        this.settings = {
            osci1_period: 1,
            osci1_amp: 0,
            osci2_period: 1,
            osci2_amp: 1,
            osci3_period: 1,
            osci3_amp: 0,
            rhythm: 'half'
        };
    }, HC.OscillatePlugin, {
        name: 'sinus by osci2_period',
        apply: function (key) {
            var layer = this.layer;
            this.settings.osci2_period = this.settings.osci2_period;
            this.settings.rhythm = this.settings.rhythm;
            this.activate(key, HC.Osci.wobble(0, this.settings));

        }
    }
);

HC.plugins.oscillate.sinusosci3 = _class(
    function () {
        this.settings = {
            osci1_period: 1,
            osci1_amp: 0,
            osci2_period: 1,
            osci2_amp: 0,
            osci3_period: 1,
            osci3_amp: 1,
            rhythm: 'half'
        };
    }, HC.OscillatePlugin, {
        name: 'sinus by osci3_period',
        apply: function (key) {
            var layer = this.layer;
            this.settings.osci3_period = this.settings.osci3_period;
            this.settings.rhythm = this.settings.rhythm;
            this.activate(key, HC.Osci.wobble(0, this.settings));

        }
    }
);