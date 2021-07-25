CKEDITOR.stylesSet.add( 'my_styles', [
    // Block-level styles
    // { name: 'Blue Title', element: 'h2', styles: { 'color': 'Blue' } },
    // { name: 'Red Title' , element: 'h3', styles: { 'color': 'Red' } },

    // // Inline styles
    // { name: 'CSS Style', element: 'span', attributes: { 'class': 'my_style' } },
    // { name: 'Marker: Yellow', element: 'span', styles: { 'background-color': 'Yellow' } },
    { name: '设置图片响应式', element: 'img', styles: { 'max-width': '100%',"height":"auto" } },
    { name: '清除缩进', element: 'p', styles: { 'text-indent':"0" } }
] );

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];
	config.stylesSet = 'my_styles';

};	


