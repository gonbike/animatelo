/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.fadeInUpBig = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                transform: 'translate3d(0, 2000px, 0)',
                offset: 0
            },
            {
                opacity: 1,
                transform: 'none',
                offset: 1
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
