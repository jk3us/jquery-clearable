jQuery.fn.clearable = function() {
  return this.each(function() {
	jQuery(this)
		.wrap('<div id="sq" class="divclearable"></div>')
		.parent()
		.attr('class', jQuery(this).attr('class') + ' divclearable')
		.append('<span class="clearlink ui-icon ui-icon-close"></span>');

	jQuery('.clearlink')
		.attr('title', 'Clear')
		.click(function() {
			jQuery(this).prev().val('').focus();

	});
  });
}
