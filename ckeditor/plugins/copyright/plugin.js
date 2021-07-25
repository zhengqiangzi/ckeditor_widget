CKEDITOR.plugins.add( 'copyright', {
    icons: 'copyright',
    init: function( editor ) {
        //Plugin logic goes here.


		editor.addCommand( 'copyright', {
		    exec: function( editor ) {
		      

		      	editor.insertHtml('<p style="text-indent:100px"><img src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0724%2F374a0518j00qwqgc1000rc000hs00c2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg"/></p>')
		    }
		});

		editor.ui.addButton( 'copyright', {
		    label: 'Insert copyright',
		    command: 'copyright',
		    toolbar: 'insert'
		});





    }
});


