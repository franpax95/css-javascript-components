;
(function ($, window, document, undefined) {

    $.fn.btnInteraction = function (options) {

        // Setup default options
        var pluginName = 'btnInteraction',
            defaults = {
                'saveIcon': 'fa-cog',
                'verbing': 'Saving...',
                'verbed': 'Saved',
                'delay': 4000,
                'duration': 1800
            };

        return this.each(function () {

            // Store the object
            var self = this,
                $this = $(this),
                ogHtml = $this.html();

            var settings = $.extend({}, defaults, options, $this.data());

            $this.on('click', function () {
                start();
            })


            var start = function () {
                var iconHtml = (settings.saveIcon !== false) ? '<i class="fa fa-spin ' + settings.saveIcon + '"></i> ' : '';
                $this.attr('disabled', 'disabled').html(iconHtml + settings.verbing);

                setTimeout(function () {
                    processed();
                }, settings.delay);
            };

            var processed = function () {
                $this.removeAttr('disabled').addClass('completed').html(settings.verbed);

                setTimeout(function () {
                    done();
                }, settings.duration);
            };

            var done = function () {
                $this.removeClass('completed').html(ogHtml);
                $this.trigger('btn.interaction.done');
            };

        });

    };

})(jQuery, window, document);

// You can define all options as data attributes
jQuery("[data-btn-interaction]").btnInteraction();

// Or however you'd like!
jQuery("[data-event='delete:animate']").btnInteraction({
    verbing: 'Deleting...',
    verbed: 'Deleted'
});
jQuery("[data-event='cancel:animate']").btnInteraction({
    verbing: 'Cancelling...',
    verbed: 'Cancelled'
});
jQuery("[data-event='revise:animate']").btnInteraction({
    saveIcon: 'fa-refresh',
    verbing: 'Revising...',
    verbed: 'Revised'
});
jQuery("[data-event='noicon:animate']").btnInteraction({
    saveIcon: false,
    verbing: 'Processing...',
    verbed: 'Processed'
});

// Example of event trigger :done
jQuery('#btn-save').on('btn.interaction.done', function (e) {
    alert("I'm done! event triggered via 'btn.interaction.done'");
});