function landingCursosfixHeight(elSelector) {
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
(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
        // When the DOM is ready, run this function
        $(document).ready(function() {
          //Set the carousel options
          $('.page-template-template-landing-cursos #teachers-carousel-wrapper').carousel({            
            pauseOnHover: true,
            interval: 15000
          });
          $('.page-template-template-landing-cursos-v2 #quote-carousel').carousel({            
            pauseOnHover: true,
            interval: 4000
          });
          $('#landing-page-form-submit-link').click(function(evt){
              evt.preventDefault();
              //$(this).css('display','none'); 
              $(this).parents('div').first().html('Enviando...'); 
              $('#landing-cursos-subscription-form').submit(); 
          });
          landingCursosfixHeight('.thumbnail-course');
          $('.thumbnail-course .caption').addClass('bottom-positioned')
        });
})( jQuery );
