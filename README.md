Doxbars
=======

Generates javascript api documentation.


Usage
-----

    $ doxbars <api_file> <handlebars_template> --title 'My awesome lib name!' > output.html


Template sample
---------------

    <!DOCTYPE html>
    <html>
        <body>
            <h1>{{ title }}</h1>
            {{#api }}
            <section>
                <h1>{{ ctx.string }}</h1>
                {{#tags}}
                <dl>
                    <dt>{{ type }} {{ types }}<dt>
                    {{#if description }}<dd>{{ description }}</dd>{{/if }}
                </dl>
                {{/tags}}
                {{{ description.full }}}
                <pre>
                    <code>{{{ code }}}</code>
                </pre>
            </section>
            {{/api }}
        </body>
    </html>
