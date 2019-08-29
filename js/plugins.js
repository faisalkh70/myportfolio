// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//barfiller plugin

var skillsTopOffset = $('#skill').offset().top;
$(window).scroll(function(){
    if(window.pageYOffset > skillsTopOffset - $(window).height()+300){
        $('#bar1').barfiller({barColor: '#2f2f2f'});
        $('#bar2').barfiller({barColor: '#2f2f2f'});
        $('#bar3').barfiller({ barColor: '#2f2f2f' });
        $('#bar4').barfiller({ barColor: '#2f2f2f',});
        $('#bar5').barfiller({ barColor: '#2f2f2f', });
        $('#bar6').barfiller({ barColor: '#2f2f2f', });
        $('#bar7').barfiller({ barColor: '#2f2f2f', });
        $('#bar8').barfiller({ barColor: '#2f2f2f', });
    }
});

//timeline slider 



