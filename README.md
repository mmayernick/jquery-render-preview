jQuery Render Preview
=====================
jQuery Render Preview is a plugin that displays a sanatized, HTML formatted, live preview of
the contents of a `textarea`. jQuery Render Preview supports custom HTML tag white lists,
new line formats, paragraph formats. Additionally, jQuery Render Preview supports custom filter
callbacks to support additional formatting filters, like Markdown, or your own.

Basic Setup
-----------
To get started you need to put [jQuery](http://jquery.com/),
[jquery.render-preview.js](https://github.com/mmayernick/jquery-render-preview/blob/master/jquery.render-preview.js)
 into the ``head`` of your page:

    <head>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
      <script src="/javascripts/jquery.render-preview.js" type="text/javascript"></script>
    </head>

Attach jQuery Render Preview to a `textarea` or `input` form field and pass in an
identifier of a `div` element where you'd like to display the output:

    <script language="javascript">
      $(function() {
        $('#source').renderPreview("#preview");
      });
    </script>

If you want to include custom options, such as your own white list of tags or custom filter,
pass them in as options:

    <script language="javascript">
      $(function() {
        $('#source').renderPreview("#preview", {allowedTags: ['strong'], processor: customFilter});
      });
    </script>

Options
-------
jQuery Render Preview takes several options.

`paragraphRegExp`
    Regular expression for inserting `p` tags in place of new lines.  Default:

        new RegExp("(.*)\n\n([^#*\n\n].*)", "g")

`linkBreakRegExp`
    Regular expression for inserting `br` tags in place of new lines.  Default:

        new RegExp("(.*)\n([^#*\n].*)", "g")

`allowedTags`
    Only tags in the allowed tag list will be rendered.  All others will be escaped.
    Default:

        ['a', 'b', 'img', 'strong', 'blockquote', 'p', 'i', 'em', 'u', 'strike', 'super', 'sub', 'code', 'span']

`processor`
    A function reference for custom filtering of the input text. This is called after all other
    text filtering has been finished.

Changelog
---------

### 0.1

* Release
