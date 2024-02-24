!(function() {
    window.Freeze = {};

    window.Freeze.load = function() {
        let keys = Object.keys(sessionStorage);
        let o = {};
        for (key of keys) {
            o[key] = JSON.parse(sessionStorage.getItem(key));
        }
        window.Freeze.memory = o;
    }

    window.Freeze.save = function() {
        let keys = Object.keys(window.Freeze.memory);
        for (key of keys) {
            sessionStorage.setItem(key, JSON.stringify(window.Freeze.memory[key]));
        }
    }

    window.Freeze.timer = function(interv) {
        return setInterval(() => {
            window.Freeze.save();
        }, interv);
    }

    window.Freeze.start = (interval) => {
        window.Freeze.load();
        let timer = window.Freeze.timer(interval);
        return [timer, window.Freeze.memory];
    }
    
})();