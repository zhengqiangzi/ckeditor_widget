var date=new Date()
var string_date= date.getFullYear()+"年"+(date.getMonth()+1)+"月" + date.getDate()+"日"
CKEDITOR.dialog.add( 'simplebox', function( editor ) {
    return {
        title: '版权信息',
        minWidth: 400,
        minHeight: 400,
        contents: [

            {
                id: 'info',
				elements: [

						{
							id:"company_name",
							type:"text",
							label:"公章名称",
							default:"安徽寻梦投资集团有限公司",
							 validate: function() {
						        if ( !this.getValue() ) {
						           
						            return false;
						        }
							},
							setup:function(widget){
				              this.setValue( widget.data.company_name || '安徽寻梦投资集团有限公司' );

							},
							commit:function(widget){
								//console.log(widget.data)
								widget.setData('company_name',this.getValue())
							}

						},
						{
							id:"date",
							type:"text",
							label:"公章日期",
							 validate: function() {
						        if ( !this.getValue() ) {
						            return false;
						        }
							},
							setup:function(widget){
				              this.setValue( widget.data.date || string_date );

							},
							commit:function(widget){
								//console.log(this.getValue())
								widget.setData('date',this.getValue())
							}
						},
						{
							id:"category",
							type:"radio",
							label:"公章类型",
							items: [ [ '公司公章', 'GZ' ], [ '办公室', 'BGS' ] ],
							default:"GZ",
							setup:function(widget){
				              this.setValue( widget.data.category||'GZ' );
							},
							commit:function(widget){
								widget.setData('category',this.getValue())
								// widget.setData( 'align', "left");
								//console.log()
								//console.log(widget.template.source())
							}
						}
				    // {
				    //     id: 'align',
				    //     type: 'select',
				    //     label: 'Align',
				    //     items: [
				    //         [ editor.lang.common.notSet, '' ],
				    //         [ editor.lang.common.alignLeft, 'left' ],
				    //         [ editor.lang.common.alignRight, 'right' ],
				    //         [ editor.lang.common.alignCenter, 'center' ]
				    //     ],
				    //     setup: function( widget ) {
				    //         this.setValue( widget.data.align );
				    //     },
				    //     commit: function( widget ) {
				    //     	console.log(widget)
				    //         widget.setData( 'align', this.getValue() );
				    //     }
				    // },
				    // {
				    //     id: 'width',
				    //     type: 'text',
				    //     label: 'Width',
				    //     width: '50px',
				    //     setup: function( widget ) {
				    //         this.setValue( widget.data.width );
				    //     },
				    //     commit: function( widget ) {
				    //         widget.setData( 'width', this.getValue() );
				    //     }
				    // }
				]
            }
        ],
        // onOk:function(){
        //     var company_name = this.getContentElement( 'info', 'company_name' ).getValue();
        //     var category = this.getContentElement( 'info', 'category' ).getValue();
        //     var date = this.getContentElement( 'info', 'date' ).getValue();
        //    // this.commitContent({company_name,category,date})
        //             	//console.log(company_name,category,date)
        // }
    };
} );