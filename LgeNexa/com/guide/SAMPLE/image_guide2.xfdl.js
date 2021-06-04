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
                this.set_name("image_guide");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"fileId\" type=\"STRING\" size=\"256\"/><Column id=\"fileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"fileimage\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"uploadicon\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fileId\">1</Col><Col id=\"fileSeq\">0</Col><Col id=\"content\">1월 이미지</Col><Col id=\"filetype\">N</Col><Col id=\"uploadicon\">URL('theme://images/btn_WF_FileUpload.png')</Col></Row><Row><Col id=\"fileId\">2</Col><Col id=\"fileSeq\">0</Col><Col id=\"content\">2월 이미지</Col><Col id=\"filetype\">N</Col><Col id=\"uploadicon\">images::aaa.jpg</Col><Col id=\"fileimage\">images::aaa.jpg</Col></Row><Row><Col id=\"fileId\">3</Col><Col id=\"fileSeq\">0</Col><Col id=\"content\">3월 이미지</Col><Col id=\"filetype\">N</Col><Col id=\"uploadicon\">URL('theme://images/btn_WF_FileUpload.png')</Col></Row><Row><Col id=\"fileId\">4</Col><Col id=\"fileSeq\">0</Col><Col id=\"content\">4월 이미지</Col><Col id=\"filetype\">N</Col><Col id=\"uploadicon\">URL('theme://images/btn_WF_FileUpload.png')</Col></Row><Row><Col id=\"fileId\">5</Col><Col id=\"fileSeq\">0</Col><Col id=\"content\">5월 이미지</Col><Col id=\"filetype\">N</Col><Col id=\"uploadicon\">URL('theme://images/btn_WF_FileUpload.png')</Col></Row><Row><Col id=\"content\">7번이미지</Col><Col id=\"fileId\">7</Col><Col id=\"fileSeq\">0</Col><Col id=\"filetype\">Y</Col><Col id=\"uploadicon\">URL('theme://images/btn_WF_FileUpload.png')</Col></Row><Row><Col id=\"content\">9번이미지</Col><Col id=\"fileId\">9</Col><Col id=\"fileSeq\">0</Col><Col id=\"filetype\">Y</Col><Col id=\"uploadicon\">URL('theme://images/btn_WF_FileUpload.png')</Col></Row><Row><Col id=\"content\">10번이미지</Col><Col id=\"fileId\">10</Col><Col id=\"fileSeq\">0</Col><Col id=\"filetype\">N</Col><Col id=\"uploadicon\">URL('theme://images/btn_WF_FileUpload.png')</Col></Row><Row><Col id=\"content\">11번이미지</Col><Col id=\"fileId\">11</Col><Col id=\"fileSeq\">0</Col><Col id=\"filetype\">N</Col><Col id=\"uploadicon\">URL('theme://images/btn_WF_FileUpload.png')</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "0.08%", "1", null, "231", "79.25%", null, this);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "20.92%", "2", null, "495", "0.08%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"348\"/><Column size=\"338\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"141\"/></Rows><Band id=\"head\"><Cell text=\"content\"/><Cell col=\"1\" text=\"fileId\"/><Cell col=\"2\" text=\"fileSeq\"/><Cell col=\"3\" text=\"upload\"/><Cell col=\"4\" text=\"image\"/><Cell col=\"5\" text=\"image url\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:content\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:fileId\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:fileSeq\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"3\" displaytype=\"image\" style=\"align:center;\" text=\"bind:uploadicon\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"4\" displaytype=\"normal\" style=\"align:left middle;background:stretch;background2:stretch;selectbackground:stretch;backgroundimage:BIND(fileimage);\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:fileimage\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1", "280", null, "68", "79.17%", null, this);
            obj.set_taborder("5");
            obj.set_text("grid\r\nautofittype : none\r\nautosizingtype : none");
            obj.style.set_background("aliceblue");
            obj.style.set_padding("0 0 0 10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "352", null, "83", "79.17%", null, this);
            obj.set_taborder("6");
            obj.set_text("cell\r\nbackground : stretch\r\nbackground2 : stretch\r\nselectbackground : stretch\r\nbackgroundimage : BIND(이미지 컬럼아이디)");
            obj.style.set_background("aliceblue");
            obj.style.set_padding("0 0 0 10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1", "240", null, "36", "79.17%", null, this);
            obj.set_taborder("7");
            obj.set_text("필수 설정");
            obj.style.set_background("aliceblue");
            obj.style.set_padding("0 0 0 10");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "24.43%", "547", null, "150", "59.23%", null, this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("div_fileAttach", "absolute", "-141.5%", "-24", "61", "42", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_url("CommonObject::AttachFiles.xfdl");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 150, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("image_guide");
            		p.set_titletext("New Form");

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
        this.addIncludeScript("image_guide2.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("image_guide2.xfdl", function(exports) {

        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        
        this.image_guide_onload = function(obj,e)
        {
        // 	var sFileId;
        // 	var sFileSeq;
        // 	var sUrl;
        // 
        // 	for(var i=0; i<this.Dataset00.rowcount; i++)
        // 	{
        // 		sFileId = this.Dataset00.getColumn(i,"fileId");
        // 		sFileSeq = this.Dataset00.getColumn(i,"fileSeq");
        // 		sUrl = application.services["host"].url + "/common/viewImage.do?fileId=#1&fileSeq=#2";
        // 		sUrl = sUrl.replace("#1",sFileId);
        // 		sUrl = sUrl.replace("#2",sFileSeq);	
        // 		this.Dataset00.setColumn(i,"fileimage",sUrl);
        // 	}
        }

        
        this.Dataset00_onrowposchanged = function(obj,e)
        {
        	var aaa = obj.getColumn(e.newrow,"fileimage");
        // 	var sFileId = obj.getColumn(e.newrow,"fileId");
        // 	var sFileSeq = obj.getColumn(e.newrow,"fileSeq");
        // 	var sUrl = application.services["host"].url + "/common/viewImage.do?fileId=#1&fileSeq=#2";
        // 	sUrl = sUrl.replace("#1",sFileId);
        // 	sUrl = sUrl.replace("#2",sFileSeq);

        	alert(aaa);

        	this.ImageViewer00.set_image(aaa);
        	
        	
        	
        }

        

        this.Grid03_oncellclick = function(obj,e)
        {
        	if(e.cell == 3)
        	{
        		//이미지이므로 1건만 존재하여야 하며, 기존의 첨부파일을 모두 삭제하고 추가하여야 함.
        		this.Div00.div_fileAttach.fn_imageFileUpload(); //아래 로직을 첨부파일 쪽에 통합함.
        		
        		
        		
        		//this.div_fileAttach.fn_deleteAllFiles();   //기존 첨부파일 삭제
        		//this.div_fileAttach.btn_addFile_onclick(); //첨부파일 추가
        		//this.div_fileAttach.fn_uploadAttachFile(); //첨부파일 업로드
        	}
        }

        // 업로드 성공후 File id를 리턴받는다.
        this.fn_ExtFileUp_onsuccess = function(sFileId)
        {
        		//alert("fn_ExtFileUp_onsuccess : " +  sFileId);

        	var oDs 		= this.Dataset00;
        	var sFileSeq 	= "1";
        	var sImageSrc 	= this.com_imagefile(sFileId, sFileSeq);
        	oDs.setColumn(oDs.rowposition, "fileimage", sImageSrc);
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Dataset00.addEventHandler("onrowposchanged", this.Dataset00_onrowposchanged, this);
            this.addEventHandler("onload", this.image_guide_onload, this);
            this.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.Grid03.addEventHandler("oncellclick", this.Grid03_oncellclick, this);

        };

        this.loadIncludeScript("image_guide2.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
