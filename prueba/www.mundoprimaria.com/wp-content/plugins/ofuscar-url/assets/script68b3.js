function b64_to_utf8(str) {
	return unescape(decodeURIComponent(window.atob(str)));
}
jQuery(document).ready(function(){
	jQuery('.ourl').click(function(){
		window.location.href=b64_to_utf8(jQuery(this).data("destino"));
	});
});

