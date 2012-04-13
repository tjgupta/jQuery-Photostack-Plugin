/*!
 * jQuery Photostack Plugin
 * https://github.com/tjgupta/jQuery-Photostack-Plugin
 *
 * Copyright 2012, Tim Gupta
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
	// Photostack plugin
	$.fn.photoStack = function(options) {

		return this.each(function() {
			var $this = $(this),
				settings = $.extend({
					spacing: 10
				}, options),
								
				// Get size of photo and set size of photo stack divs
				width = $this.width() + settings.spacing,
				height = $this.height() + settings.spacing,

				stack = '<div class="photoStack first" style="width:' + width + 'px; height:' + height + 'px"></div> \
						 <div class="photoStack second" style="width:' + width + 'px; height:' + height + 'px"></div> \
						 <div class="photoStack third" style="width:' + width + 'px; height:' + height + 'px"></div>';

				$this.wrap('<div class="photoStackWrap" />');
				$this.parent().prepend(stack);
				$this.css({'position': 'relative'});
		});

	};
})(jQuery);