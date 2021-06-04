(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("obj_FileUpDown_E");
                this.set_titletext("Object::obj_FileUpDown_E");
                this._setFormPosition(0,0,760,851);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COL0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new FileUpload("fup_input", "absolute", "30", "64", "300", "113", null, null, this);
            obj.set_taborder("7");
            obj.getSetter("retry").set("0");
            obj.style.set_buttonsize("100");
            obj.style.set_buttontext("Select a file");
            obj.set_multiselect("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "50.39%", "62", null, "33", "20.92%", null, this);
            obj.set_taborder("8");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "50.13%", "20", null, "30", "21.97%", null, this);
            obj.set_taborder("9");
            obj.set_text("append Item");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 760, 851, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FileUpload");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("Object::obj_FileUpDown_E");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Z201708_2017080119-fileUpload_20170811.xfdl", function(exports) {
        this.obj_FileUpDown_onload = function(obj,e)
        {
        }

        this.btn_input0_onclick = function(obj,e)
        {
        	
            var nArow = -1;
        	for (var i = 0; i < this.fup_input.getItemCount(false); i++)
        	{
        		if (this.fup_input.hasValue(i))
        		{
        			nArow = this.ds_data.addRow();
        			this.ds_data.setColumn(nArow , "COL0", this.fup_input.getValue(i));        		
        		}
        	}
        	var sUrl  = "SvcJsp::fileUpload.jsp?PATH=upload";
        	var bSucc = this.fup_input.upload(sUrl);
        }

        this.fup_input_onsuccess = function(obj,e)
        {
            var sUrl = "";
        	this.setWaitCursor(false, true);
        	
        	trace(e.datasets[0].saveXML());
        	
            for (var i = 0; i < e.datasets[0].rowcount; i++)
            {
        		//trace(">>>>> " + e.datasets[0].getColumn(i,"fileSize"));
                //sUrl = "SvcJsp::fileDownload.jsp?file=" + e.datasets[0].getColumn(i,"fileName");
                //this.components["Edit00"].set_value(e.datasets[0].getColumn(i,"fileName"));
                //this.components["fdn_input" + i].set_text(e.datasets[0].getColumn(i,"fileName"));
                //this.components["fdn_input" + i].set_downloadurl(sUrl);
            }
        }

        this.fup_input_onerror = function(obj,e)
        {
        	alert(e.errormsg+"-"+e.errortype+"-"+e.requesturi+"-"+e.statuscode);
        }

        this.fup_input_onitemchanged = function(obj,e)
        {
        	//this.setWaitCursor(true, true);
        // 	var sUrl  = "SvcJsp::fileUpload.jsp?PATH=upload";
        // 	var bSucc = this.fup_input.upload(sUrl);
        // 	this.fup_input.deleteItem(0);     //업로드 후 업로드 항목 초기화
        //     this.fup_input.appendItem();
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.fup_input.appendItem();
        }

        this.Button00_onclick = function(obj,e)
        {
        	var bSucc = this.fup_input.upload("http://localhost:8080/fileUpload.jsp?PATH=fileupload&&DS=ds_data");
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.ReadCookie();
        }

        this.ReadCookie = function()
        {

           var allcookies = document.cookie;

           //alert("모든쿠키값 : " + allcookies );

         

           // Get all the cookies pairs in an array

           cookiearray  = allcookies.split(';');

         

           // Now take key value pair out of this array

           for(var i=0; i<cookiearray.length; i++){

              name = cookiearray[i].split('=')[0];

              value = cookiearray[i].split('=')[1];

              alert("키 : " + name + " , 값 : " + value);

           }

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.obj_FileUpDown_onload, this);
            this.fup_input.addEventHandler("onsuccess", this.fup_input_onsuccess, this);
            this.fup_input.addEventHandler("onerror", this.fup_input_onerror, this);
            this.fup_input.addEventHandler("onitemchanged", this.fup_input_onitemchanged, this);
            this.fup_input.addEventHandler("onfindclick", this.fup_input_onfindclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("Z201708_2017080119-fileUpload_20170811.xfdl", true);

       
    };
}
)();
