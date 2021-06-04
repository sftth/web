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
                this.set_name("sample_download");
                this.set_classname("sample_innerCallback");
                this.set_titletext("파일 다운로드");
                this._setFormPosition(0,0,1051,120);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_delfiles", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_download", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ATTCH_FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_NO\" type=\"INT\" size=\"256\"/><Column id=\"ATTCH_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_attachFileId", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_GROUP_ID\" type=\"string\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_attachFile", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GROUP_ID\" type=\"string\" size=\"256\"/><Column id=\"FILE_ID\" type=\"string\" size=\"256\"/><Column id=\"ORIGINAL_FILE_NAME\" type=\"string\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"string\" size=\"256\"/><Column id=\"EXT_FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_file", "absolute", "0", "0", null, null, "0", "36", this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_attachFile");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("noleft");
            obj.set_autoupdatetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"299\"/><Column size=\"132\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"File Name\"/><Cell col=\"1\" text=\"Size(byte)\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;padding:0 0 0 5;\" cssclass=\"padding7\" text=\"bind:ORIGINAL_FILE_NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" cssclass=\"padding7\" text=\"bind:FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "37", "0", "1", this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Fliebg");
            this.addChild(obj.name, obj);

            obj = new ExtFileUpload("ExtFileUp", "absolute", "5", "127", "163", "39", null, null, this);
            this.addChild(obj.name, obj);

            obj = new ExtFileDownload("ExtFileDownload", "absolute", "173", "127", "163", "39", null, null, this);
            obj.style.set_color("pink");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addFile", "absolute", "0", "87", "74", "26", null, null, this);
            obj.set_taborder("3");
            obj.set_text("파일추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delFile", "absolute", "77", "87", "74", "26", null, null, this);
            obj.set_taborder("6");
            obj.set_text("파일삭제");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 120, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_innerCallback");
            		p.set_titletext("파일 다운로드");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","grd_file","binddataset","ds_attachFile","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AttachFiles.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("AttachFiles.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : AttachFiles.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : Attach File
                        본화면은 NCD or DevOn 환경에 따라 변경될수 있습니다.
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        
        /*--------------------------------------------------------------------------------------------
         * xjs include 
         --------------------------------------------------------------------------------------------*/
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        
        //
        /*******************************************************************
         * ds_attachFile    : 그리드내 표현된 첨부파일 정보
         * ds_delfiles      : 삭제대상 파일정보
         * ds_download      : 
         * ds_attachFileId  : 부모창과 주고받을 파일 정보
         *
         *******************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.ds_attachFile.clearData()  ; //그리드내 표현된 첨부파일 정보
        	this.ds_delfiles.clearData()    ; //삭제대상 파일정보
        	this.ds_download.clearData()    ; //
        	this.ds_attachFileId.clearData(); //부모창과 주고받을 파일 정보
        }

        // 화면에 보이는이미지 업로드 수행시 함수
        this.fn_imageFileUpload = function() {
        	this.form_onload();	
        	this.fn_deleteAllFiles();   //기존 첨부파일 삭제
        	this.btn_addFile_onclick(); //첨부파일 추가
        	this.fn_uploadAttachFile(); // 첨부파일 업로드
        }

        

        

        // 기존의 첨부파일 데이터 모두 삭제
        this.fn_deleteAllFiles = function() {
        	var rowCnt = this.ds_attachFile.getRowCount();
        	for(var nRow=0; nRow < rowCnt; nRow++) {
        		//최초조회된 경우 Row Type = 1, 체크박스로 변경된 경우 Row Type = 4
        		if(this.ds_attachFile.getRowType(nRow) == 1 || this.ds_attachFile.getRowType(nRow) == 4) 
        		{
        			var nNewRow = this.ds_delfiles.addRow();
        			this.ds_delfiles.setColumn(nNewRow,"FILE_GROUP_ID" ,this.ds_attachFile.getColumn(nRow, "FILE_GROUP_ID"));
        			this.ds_delfiles.setColumn(nNewRow,"FILE_ID"       ,this.ds_attachFile.getColumn(nRow, "FILE_ID"));
        		}
        		
        		var sFileId = this.ds_attachFile.getColumn(nRow, "EXT_FILE_ID");
        			
        		this.ExtFileUp.removeFile(sFileId);
        		this.ds_attachFile.deleteRow(nRow);
        	}
        }

        // 파일을 서버로 업로드 함.
        this.fn_uploadAttachFile = function() {
        	this.uploadFiles();
        };

        // 초기화후 파일을 서버로 업로드 함
        this.fn_uploadResetAttachFile = function() {
        	this.form_onload();
        	this.uploadFiles();
        };

        
        // 입력된 파일아이디에 따른 데이터 조회
        this.fn_retrieveAttachFiles = function(fileGroupId) {
        	//DataSet 관련 부분
        	this.ds_attachFileId.clearData();
        	this.ds_attachFileId.addRow();
        	this.ds_attachFileId.setColumn(0, "FILE_GROUP_ID", fileGroupId);
        	
        	//Transaction 관련부분
        	var sSvcId = "BRS_COM_RetrieveFileInfoList";
        	var sActId = "BRS_COM_RetrieveFileInfoList";
        	var sInDs  = "IN_SEARCH=ds_attachFileId"; //서버명칭=nexa명칭
        	var sOutDs = "ds_attachFile=OUT_FILEINFO"; //nexa명칭=서버명칭
        	var sArg   = "";   //"corporationCode="+sCorpCd+" dealerCode="+"4IN";
        	var sCallback = "";
        	var bShowProgress = true;
        	var bAsync = true;

        	LGE.Core.tran(this, sSvcId, sActId, sInDs, sOutDs, sArg, sCallback, bShowProgress, bAsync);
        	
        };

        
        //-------------------------------------------------------------------------------------------------
        // 파일 업로드 및 다운로드 컴포넌트 관련
        //-------------------------------------------------------------------------------------------------
        /* 파일 얼로드 처리 */
        this.uploadFiles = function()
        {
        	var service = application.services["host"];
        	var sActId = "BRS_COM_SaveFileInfoList";
        	//var sURL = service.url + "service/" + sActId + "/nexacroUpload.ncd?baRq=IN_FILE_GROUP_ID,IN_DEL_FILES&baRs=OUT_FILEINFO";
        	var sURL = service.url + "sample/second/fileUpload.do?baRq=IN_FILE_GROUP_ID,IN_DEL_FILES&baRs=OUT_FILEINFO";
        	var retVal = this.ExtFileUp.upload( sURL, "IN_FILE_GROUP_ID=ds_attachFileId IN_DEL_FILES=ds_delfiles", "ds_attachFile=OUT_FILEINFO", "all", 0); //파일 업로드시, 기존에 올려진 파일중 삭제대상은 삭제함.
        }

        
        /* 파일 업로드 컴포넌트 변경시 */
        this.ExtFileUp_onchange = function(obj,e)
        {
        	var fileSupport = (obj.support.XHR2 && obj.support.FileAPI);
        	for(var i=0; i<e.files.length; i++) {
        		var file = e.files[i];
        		var fileId   = file.id;
        		var fileName = file.name;
                var fileSize = file.size;
                var fileType = file.type;
                var fileFullpath = file.fullpath; 	//RUMTIME만 제공됨(HTML5는 빈문자열 반환). 2016.02.02
        		trace( "   fileId="+fileId + ",fileName="+fileName + ",fileSize="+fileSize + ",fileType="+fileType + ",fileFullpath="+fileFullpath);			

        		var row = this.ds_attachFile.addRow();
        		this.ds_attachFile.setColumn(row, "FILE_GROUP_ID"      , this.ds_attachFileId.getColumn(0,"FILE_GROUP_ID") );
        		this.ds_attachFile.setColumn(row, "ORIGINAL_FILE_NAME" , fileName);
        		this.ds_attachFile.setColumn(row, "FILE_SIZE"          , fileSize);
        		this.ds_attachFile.setColumn(row, "EXT_FILE_ID"        , fileId);
         	}
        }

        /* 파일 업로드 에러 발생시 */
        this.ExtFileUp_onerror = function(obj,e)
        {
        	alert("file upload error " )
        }

        /* 파일 업로드 진행시 */
        this.ExtFileUp_onprogress = function(obj,e)
        {
        	
        }

        /* 파일 업로드 완료시 */
        this.ExtFileUp_onsuccess = function(obj,e)
        {
        	//alert("file upload success " + this.ds_attachFile.getRowCount() );
        	//trace(e);
        	alert(e["errormsg"]);

        	var oDs = e.datasets[0];
        	

        	
        	var fileGroupId = oDs.getColumn(0,"FILE_GROUP_ID");
        	this.fn_retrieveAttachFiles(fileGroupId);
        	
        	// 임시로
        	// 부모창에 없을경우 조부모창을 찾는다....ㅋㅋㅋ
        	if(this.parent["fn_ExtFileUp_onsuccess"])
        	{
        		this.parent.fn_ExtFileUp_onsuccess(fileGroupId);
        	} else {
        		this.parent.parent.fn_ExtFileUp_onsuccess(fileGroupId);
        	}
        	
        	
        // 	if(this.parent.parent["fn_ExtFileUp_onsuccess"])
        // 	{
        // 		this.parent.fn_ExtFileUp_onsuccess(fileGroupId);
        // 	} 	
        // 	
        // 	
        // 	
        // 	var oParent = this.parent;
        // 	
        // 	while(this.fn_findCallback(oParent) == false)
        // 	{
        // 		oParent = oParent.parent;
        // 	
        // 		alert(oParent.name);
        // 		// oParent.fn_ExtFileUp_onsuccess(fileGroupId);
        // 
        // 	}
        	
        }

        
        // 
        // this.fn_findCallback = function(obj)
        // {
        // 	if(obj["fn_ExtFileUp_onsuccess"])
        // 	{
        // 		return true;
        // 	} else {
        // 		return false;
        // 	}
        // }

        
        /* 파일 다운로드 에러 발생시 */
        this.ExtFileDownload_onerror = function(obj,e)
        {
        	
        }

        /* 파일 다운로드 진행시 */
        this.ExtFileDownload_onprogress = function(obj,e)
        {
        	
        }

        /* 파일 다운로드 완료시 */
        this.ExtFileDownload_onsuccess = function(obj,e)
        {
        	
        }

        /**
         * 파일 다운로드 함수
         * @param {number} row 다운로드 대상 row
         */
        this.downloadFile = function(row)
        {
        	if (Base.isEmpty(row) || row < 0)
        	{
        		return;
        	}
        	
        	var ds_attachFile = this.ds_attachFile;
        	var fileGroupId = ds_attachFile.getColumn(row, "FILE_GROUP_ID");
        	var fileId      = ds_attachFile.getColumn(row, "FILE_ID");
        	var fileName    = ds_attachFile.getColumn(row, "ORIGINAL_FILE_NAME");
        	
        	var service = application.services["host"];
        	var sActId = "BRS_COM_RetrieveFileData";
        	var sURL = service.url + "service/" + sActId + "/nexacrodownload.ncd?FILE_GROUP_ID=" + fileGroupId + "&FILE_ID=" + fileId;
        	
        	/*
        	 * download file
        	 * @param {string} url 다운로드 fullPath url
        	 * @param {string} filename 파일저장시 적용할 file name.(지원가능한 브라우저만 적용됨. 런타임 미지원)
        	 * @return {boolean} 다운로드 성공여부
        	 */
        	 //alert("sURL = " + sURL + "\nfileName = " + fileName );
        	this.ExtFileDownload.download(sURL, fileName);		
        }

        //-------------------------------------------------------------------------------------------------
        // 화면 이벤트 관련
        //-------------------------------------------------------------------------------------------------
        /* 파일 추가 클릭시 */
        this.btn_addFile_onclick = function(obj,e)
        {
        	this.ExtFileUp.addFiles();
        	//파일 추가 완료 후, this.ExtFileUp_onchange 함수 수행됨.
        }

        /* 파일 삭제 클릭시 */
        this.btn_delFile_onclick = function(obj,e)
        {
        	var nRow = this.ds_attachFile.rowposition;
        	//최초조회된 경우 Row Type = 1, 체크박스로 변경된 경우 Row Type = 4
        	if(this.ds_attachFile.getRowType(nRow) == 1 || this.ds_attachFile.getRowType(nRow) == 4) 
        	{
        		var nNewRow = this.ds_delfiles.addRow();
        		this.ds_delfiles.setColumn(nNewRow,"FILE_GROUP_ID" ,this.ds_attachFile.getColumn(nRow, "FILE_GROUP_ID"));
        		this.ds_delfiles.setColumn(nNewRow,"FILE_ID"       ,this.ds_attachFile.getColumn(nRow, "FILE_ID"));
        	}
        	
        	var sFileId = this.ds_attachFile.getColumn(nRow, "EXT_FILE_ID");
        		
        	this.ExtFileUp.removeFile(sFileId);
        	this.ds_attachFile.deleteRow(nRow);
        }

        /* 그리드 cell 선택시 */
        this.grd_file_oncellclick = function(obj,e)
        {
        	
        }

        this.grd_file_oncelldblclick = function(obj,e)
        {
        	//파일 다운로드 수행
        	this.downloadFile(e.row);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_file.addEventHandler("oncellclick", this.grd_file_oncellclick, this);
            this.grd_file.addEventHandler("oncelldblclick", this.grd_file_oncelldblclick, this);
            this.ExtFileUp.addEventHandler("onchange", this.ExtFileUp_onchange, this);
            this.ExtFileUp.addEventHandler("onsuccess", this.ExtFileUp_onsuccess, this);
            this.ExtFileUp.addEventHandler("onprogress", this.ExtFileUp_onprogress, this);
            this.ExtFileUp.addEventHandler("onerror", this.ExtFileUp_onerror, this);
            this.ExtFileDownload.addEventHandler("onerror", this.ExtFileDownload_onerror, this);
            this.ExtFileDownload.addEventHandler("onprogress", this.ExtFileDownload_onprogress, this);
            this.ExtFileDownload.addEventHandler("onsuccess", this.ExtFileDownload_onsuccess, this);
            this.btn_addFile.addEventHandler("onclick", this.btn_addFile_onclick, this);
            this.btn_delFile.addEventHandler("onclick", this.btn_delFile_onclick, this);

        };

        this.loadIncludeScript("AttachFiles.xfdl", true);

       
    };
}
)();
