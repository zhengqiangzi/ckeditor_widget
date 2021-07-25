const path = CKEDITOR.plugins.getPath('simplebox');

CKEDITOR.plugins.add( 'simplebox', {
    requires: 'widget',
    icons: 'simplebox',
    init: function( editor ) {
 		CKEDITOR.dialog.add( 'simplebox', path + 'dialogs/simplebox.js' );
        editor.widgets.add( 'simplebox', {
       	    button: 'Create a simple box',
       	    draggable:true,
       	    dialog: 'simplebox',
 			template:function(){
 				return `<div style="box-sizing:border-box;width:100%;height:200px;overflow:hidden;">
 						<div style="margin-right:32px;
 							position:relative;
				 			height:200px;float:right;
				 			display:flex;
				 			align-items:center;
				 			justify-content:center;
				 			flex-direction:column;">
					 			<div style="font-size:16px;font-weight:bolder;" class="company_name" id="company_name">
					 				安徽寻梦投资集团有限公司
					 			</div>
					 			<div style="font-weight:bold;" class="date">
					 				2021年7月25日
					 			</div>
					 			<div style="position:absolute;left:0;bottom:0"><img src="${path}/GZ.png"/></div>
 						</div></div>`
 			},
		  //   editables: {
		  //       compnayName: {
		  //           selector: '.company_name'
		  //       },
		  //       date: {
		  //           selector: '.date'
		  //       }
			 // },
			 data:function(){
			 	this.element.findOne("img").setAttribute('src',`${path}/${this.data.category}.png`)
			 	this.element.findOne("#company_name").setHtml( this.data.company_name) 
			 	this.element.findOne(".date").setHtml( this.data.date) 
			 }
			
   		} );
	


    }
} );