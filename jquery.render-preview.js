/**
 * jQuery Render Preview Plugin
 *
 * Copyright (c) 2012 Michael Mayernick
 * http://github.com/mmayernick/jquery-render-preview
 *
 * Version : 0.0.1
 * Released: 23 July, 2012
 *
 * Licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */

;(function($, doc, win) {
  "use strict";

  function RenderPreview(el, target, opts) {
    this.$el  		= $(el);
    this.$target 	= $(target);

    this.defaults = {
    	paragraphRegExp: 	new RegExp("(.*)\n\n([^#*\n\n].*)", "g"),
      lineBreakRegExp: 	new RegExp("(.*)\n([^#*\n].*)", "g"),
      allowedTags: 			['a', 'b', 'img', 'strong', 'blockquote', 'p', 'i', 'em', 'u', 'strike', 'super', 'sub', 'code', 'span']
    };

    this.opts = $.extend(this.defaults, opts);
    this.$el.data("render-preview", this)

    this.init();
  }

  RenderPreview.prototype.init = function() {
  	var self = this

  	self.$el.live('input propertychange', function(e) {
      var text = self.sanatize($(this).val());
      $(self.$target).html(text);
    });
  };

  RenderPreview.prototype.sanatize = function(text) {
    var allowedTagsRegExp = new RegExp("&lt;(/?(" + this.opts.allowedTags.join("|") + ")(\\s+.*?)?)&gt;", "ig");

    if (text.length > 0) {
      text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      text = text.replace(this.opts.paragraphRegExp, "<p>$1</p><p>$2</p>");
      text = text.replace(this.opts.lineBreakRegExp, "$1<br />$2");
      text = text.replace(allowedTagsRegExp, "<$1>");
      if (typeof this.opts.processor == 'function') {
        text = this.opts.processor(text);
      };
    }

    return text
  };

  $.fn.renderPreview = function(target, opts) {
    return this.each(function() {
      new RenderPreview(this, target, opts);
    });
  };

})(jQuery, document, window);