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
                this.set_name("Form_Sample_FileUpload");
                this.set_titletext("Sample");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("File Upload");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Div("div_fileAttach", "absolute", "4.17%", "220", "1051", "120", null, null, this);
            obj.set_taborder("1");
            obj.set_url("CommonObject::AttachFiles.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save", "absolute", "4.58%", "144", null, "22", "85.54%", null, this);
            obj.set_taborder("2");
            obj.set_text("Save (MultiUpload)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FileID", "absolute", "21.98%", "94", null, "21", "50.98%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "16.34%", "96", null, "19", "78.51%", null, this);
            obj.set_taborder("4");
            obj.set_text("FILE_ID");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search", "absolute", "4.58%", "94", null, "22", "85.54%", null, this);
            obj.set_taborder("5");
            obj.set_text("Search");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Sample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CommonObject::AttachFiles.xfdl");
        };
        
        // User Script
        this.registerScript("Form_Sample_FileUpload.xfdl", function(exports) {

        this.btn_Search_onclick = function(obj,e)
        {
        	this.div_fileAttach.fn_retrieveAttachFiles(this.edt_FileID.value); 
        }

        this.btn_Save_onclick = function(obj,e)
        {
        	// 데이터를 저장하기 전에 파일업로드를 먼저 수행함
        	this.div_fileAttach.fn_uploadAttachFile();
        }

        this.fn_ExtFileUp_onsuccess = function(fileId)
        {
        	alert("File Upload Success!!");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Save.addEventHandler("onclick", this.btn_Save_onclick, this);
            this.edt_FileID.addEventHandler("oneditclick", this.fileIdText_oneditclick, this);
            this.btn_Search.addEventHandler("onclick", this.btn_Search_onclick, this);

        };

        this.loadIncludeScript("Form_Sample_FileUpload.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
