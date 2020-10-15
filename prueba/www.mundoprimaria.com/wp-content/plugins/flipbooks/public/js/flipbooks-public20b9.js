var isRunningVideo = false;
var Mp3Me = null;

(function ($) {
    'use strict';
    
    
    $(window).load(function () {
        $("#flipbook-loader-indicator").remove();
        //$("#flipbook-wrapper").removeAttr('style');
        $("#flipbook-wrapper").fadeIn('slow');
    });
    
    var isAudioSupported = Modernizr.audio;

    Mp3Me = document.getElementById('flipbook-audio-player');

    Mp3Me.onplay = function () {
        isRunningVideo = true;
    };


    /*jQuery("#flipbook").turn({
     width: 950,
     height: 671,
     autoCenter: true
     });*/

    $('#flipbook-playpause-btn').on('click', play321Pause);


    $('.flipbook-prev-page-btn').on('click', function (evt) {
        evt.preventDefault();
        $('#flipbook').turn('previous');
    });
    $('.flipbook-next-page-btn').on('click', function (evt) {
        evt.preventDefault();
        $('#flipbook').turn('next');
    });
    $('#flipbook-first-page').on('click', function (evt) {
        evt.preventDefault();
        $('#flipbook').turn('page', 2);
    });
    $('#flipbook-last-page').on('click', function (evt) {
        evt.preventDefault();
        var numberOfLastPage = $(this).data('lastpage');
        $('#flipbook').turn('page', numberOfLastPage);
    });

    /*
    $("#flipbook").bind("turned", function (event, page, view) {
        $(".page-wrapper").css({right: '1px'});
    });
    */
    $("#flipbook").bind("turning", function (event, page, view) {

        var hasThisPageAudio = Array.isArray(view) && (typeof flipbookAudioSources[view[0]] != 'undefined') && isAudioSupported;
        if (hasThisPageAudio) {
            //play audio
            set321Source(Mp3Me, flipbookAudioSources[view[0]]);
            /*Mp3Me.currentTime = 0;*/
            if (isRunningVideo) {
                Mp3Me.pause();
            }
            Mp3Me.load();
            Mp3Me.play();

//            $(".flipbook-audio-control").show();
            $(".flipbook-audio-control").attr('style','display:inline;');

        } else {
            //stop audio
            if (isRunningVideo) {
                Mp3Me.pause();
            }
//            $(".flipbook-audio-control").hide();
            $(".flipbook-audio-control").attr('style','display:none;');
        }
        $('#flipbook-playpause-btn').html("Pause");
    });

})(jQuery);


function set321Source(oAudio, sSource) {
    jQuery("#flipbook-audio-player source").remove();
    var source = document.createElement('source');
    if (oAudio.canPlayType('audio/mpeg')) {
        source.type = 'audio/mpeg';
        source.src = sSource + ".mp3";
    } else {
        source.type = 'audio/ogg';
        source.src = sSource + ".ogg";
    }
    oAudio.appendChild(source);
}

function play321Pause(evt) {
    evt.preventDefault();
    if (!isRunningVideo) {
        return false;
    }
    if (Mp3Me.paused) {
        Mp3Me.play();
        jQuery(evt.target).html("Pause");
    } else {
        Mp3Me.pause();
        jQuery(evt.target).html("Play");
    }
}
