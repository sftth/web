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
                this.set_name("Guide07");
                this.set_classname("Guide01");
                this.set_titletext("File Upload");
                this._setFormPosition(0,0,1224,553);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("File Upload");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Div("div_fileAttach", "absolute", "4.17%", "140", "1051", "120", null, null, this);
            obj.set_taborder("10");
            obj.set_url("CommonObject::AttachFiles.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("pageSave", "absolute", "4.58%", "104", null, "22", "85.54%", null, this);
            obj.set_taborder("11");
            obj.set_text("Save (MultiUpload)");
            this.addChild(obj.name, obj);

            obj = new Edit("fileIdText", "absolute", "21.98%", "54", null, "21", "50.98%", null, this);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "16.34%", "56", null, "19", "78.51%", null, this);
            obj.set_taborder("13");
            obj.set_text("FILE_ID");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("search00", "absolute", "4.58%", "54", null, "22", "85.54%", null, this);
            obj.set_taborder("14");
            obj.set_text("Search");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 553, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide01");
            		p.set_titletext("File Upload");

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
        this.registerScript("Guide10.xfdl", function(exports) {

        // 파일업로드 저장
        this.pageSave_onclick = function(obj,e)
        {
        	// 데이터를 저장하기 전에 파일업로드를 먼저 수행함
        	this.div_fileAttach.fn_uploadAttachFile();
        	// 데이터 저장은 파일 업로드 완료 후 수행
        }

        
        this.search00_onclick = function(obj,e)
        {
        	//조회
        	this.div_fileAttach.fn_retrieveAttachFiles(this.fileIdText.value);
        }

        
        /* Excel Data Upload Example */
        this.excelUploadBtn_onclick = function(obj,e)
        {
            var actId = "BRS_AMC_RetrieveBBS";
        	var sUrl  = application.services["host"].url + "service/" + actId + "/nexacroExcelUpload.ncd" ;
        	var result = this.ExcelUpload.upload(sUrl);	
        }

        /* Excel Data Upload Example */

        this.fn_ExtFileUp_onsuccess = function (fileId)
        {
        	alert(fileId);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.pageSave.addEventHandler("onclick", this.pageSave_onclick, this);
            this.fileIdText.addEventHandler("oneditclick", this.fileIdText_oneditclick, this);
            this.search00.addEventHandler("onclick", this.search00_onclick, this);

        };

        this.loadIncludeScript("Guide10.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
