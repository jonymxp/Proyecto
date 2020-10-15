function fixHeight(elSelector) {
    jQuery(elSelector).height('auto');
    var t = 0; // the height of the highest element (after the function runs) 
    jQuery(elSelector).each(function () {
        if (jQuery(this).outerHeight(true) > t) {
            t = jQuery(this).outerHeight(true);
        }
    });
    //console.log(t);
    jQuery(elSelector).outerHeight(t);
    //jQuery(elSelector).parent('.galleta-cell').outerHeight(t);

}
jQuery(window).load(function () {
    fixHeight(".btn-text");
    fixHeight(".btn-icon");
    fixHeight(".btn-both");    
});
jQuery(window).resize(function () {

    fixHeight(".btn-text");
    fixHeight(".btn-icon");
    fixHeight(".btn-both");    
});