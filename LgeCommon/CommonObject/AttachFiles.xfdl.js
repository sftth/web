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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GROUP_ID\" type=\"string\" size=\"256\"/><Column id=\"FILE_ID\" type=\"string\" size=\"256\"/><Column id=\"ORIGINAL_FILE_NAME\" type=\"string\" size=\"256\"/><Column id=\"SERVER_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"string\" size=\"256\"/><Column id=\"EXT_FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_file", "absolute", "0", "0", null, null, "0", "36", this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_attachFile");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("noleft");
            obj.set_autoupdatetype("none");
            obj.set_nodatatext("no attached file.");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"299\"/><Column size=\"132\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"File Name\"/><Cell col=\"1\" text=\"Size(byte)\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;padding:0 0 0 5;\" cssclass=\"padding7\" text=\"bind:ORIGINAL_FILE_NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" cssclass=\"padding7\" text=\"bind:FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "37", "0", "1", this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Fliebg");
            this.addChild(obj.name, obj);

            obj = new ExtFileUpload("ExtFileUp", "absolute", "1069", "9", "163", "39", null, null, this);
            obj.set_multiselect("true");
            this.addChild(obj.name, obj);

            obj = new ExtFileDownload("ExtFileDownload", "absolute", "1237", "9", "163", "39", null, null, this);
            obj.style.set_color("pink");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addFile", "absolute", "0", null, "74", "26", null, "7", this);
            obj.set_taborder("3");
            obj.set_text("파일추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delFile", "absolute", "77", null, "74", "26", null, "7", this);
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
        * DATE        : 2018-05-03
        * DESCRIPTION : Attach File
                        본화면은 NCD or DevOn 환경에 따라 변경될수 있습니다.
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
         * ds_attachFile    : 그리드내 표현된 첨부파일 정보
         * ds_delfiles      : 삭제대상 파일정보
         * ds_attachFileId  : 부모창과 주고받을 파일 정보
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        // Library include 
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        // Form Variables
        this.sFileGroupID = "";

        // Form onload
        this.form_onload = function(obj,e)
        {
        	this.ds_attachFile.clearData()  ;	//그리드내 표현된 첨부파일 정보
        	this.ds_delfiles.clearData()    ;	//삭제대상 파일정보
        	this.ds_attachFileId.clearData();	//부모창과 주고받을 파일 정보
        }

        // 입력된 파일아이디에 따른 데이터 조회
        this.fn_retrieveAttachFiles = function(sFileGroupID) 
        {
        	this.sFileGroupID = sFileGroupID;

        	// DataSet 관련 부분
        	this.ds_attachFileId.clearData();
        	this.ds_attachFileId.addRow();
        	this.ds_attachFileId.setColumn(0, "FILE_GROUP_ID", sFileGroupID);
        	
        	// Devon용
        	var sSvcId			= "FileListInfo";
        	var sUrl			= "sample/second/fileListDo.do";
        	var sInDs			= "dsInput2=ds_attachFileId";
        	var sOutDs			= "ds_attachFile=dsResult2";
        	var sArg			= "";
        	var sCallback 		= "fn_fileSearchcallBack";	
        	
        	LGE.Core.tranDo(this, sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback);	
        };

        this.fn_fileSearchcallBack = function(strSvcID,nErrorCode,strErrorMag)
        {
        	if (nErrorCode < 0)
        	{
        		alert("[" + nErrorCode + "] " + strErrorMag);
        		return;
        	}
        }

        // 파일 추가 클릭시
        this.btn_addFile_onclick = function(obj,e)
        {
        	this.ExtFileUp.addFiles();
        }

        // 파일 업로드 컴포넌트 변경시
        this.ExtFileUp_onchange = function(obj,e)
        {
        	var fileSupport = (obj.support.XHR2 && obj.support.FileAPI);
        	for (var i=0; i<e.files.length; i++) 
        	{
        		var file = e.files[i];
        		var fileId   = file.id;
        		var fileName = file.name;
                var fileSize = file.size;
                var fileType = file.type;
                var fileFullpath = file.fullpath; 			

        		var row = this.ds_attachFile.addRow();
        		this.ds_attachFile.setColumn(row, "FILE_GROUP_ID"      , this.ds_attachFileId.getColumn(0,"FILE_GROUP_ID") );
        		this.ds_attachFile.setColumn(row, "ORIGINAL_FILE_NAME" , fileName);
        		this.ds_attachFile.setColumn(row, "FILE_SIZE"          , fileSize);
        		this.ds_attachFile.setColumn(row, "EXT_FILE_ID"        , fileId);
         	}
        }

        // 파일 삭제 클릭시
        this.btn_delFile_onclick = function(obj,e)
        {

        	var nRow = this.ds_attachFile.rowposition;
        	
        	if (this.ds_attachFile.getRowType(nRow) == 1 || this.ds_attachFile.getRowType(nRow) == 4) 
        	{
        		var nNewRow = this.ds_delfiles.addRow();
        		this.ds_delfiles.setColumn(nNewRow,"FILE_GROUP_ID" ,this.ds_attachFile.getColumn(nRow, "FILE_GROUP_ID"));
        		this.ds_delfiles.setColumn(nNewRow,"FILE_ID"       ,this.ds_attachFile.getColumn(nRow, "FILE_ID"));
        	}
        	
        	var sFileId = this.ds_attachFile.getColumn(nRow, "EXT_FILE_ID");
        		
        	this.ExtFileUp.removeFile(sFileId);
        	this.ds_attachFile.deleteRow(nRow);
        }

        // 파일을 서버로 업로드 함
        this.fn_uploadAttachFile = function(sFileGroupID) 
        {
        	this.sFileGroupID = sFileGroupID;

        	if (Base.isEmpty(sFileGroupID))
        	{
        		sFileGroupID = "";
        	}
        	
        	this.uploadFiles(sFileGroupID); // upload_file
        };

        // [upload_file] 파일 업로드 처리
        this.uploadFiles = function(sFileGroupID)
        {
        	var service = application.services["host"];
        	var sURL 	= service.url + "sample/second/fileUpload.do?fileGroupId=" + sFileGroupID;
        	var retVal 	= this.ExtFileUp.upload(sURL, "IN_FILE_ATTACH=ds_attachFile:U", "ds_attachFile=OUT_FILEINFO", "all", 0);
        }

        // 파일 업로드 완료시
        this.ExtFileUp_onsuccess = function(obj,e)
        {
        	var oDs 	= e.datasets[0];
        	var oParent = this.parent;
        	var bFind 	= true;
        	
        	if (oDs) 
        	{
        		this.ds_attachFile.copyData(oDs);
        	}

        	while(bFind)
        	{
        		if (oParent["fn_ExtFileUp_onsuccess"])
        		{
        			bFind = false;
        			oParent.fn_ExtFileUp_onsuccess(this.sFileGroupID);
        		} 
        		else 
        		{
        			oParent = oParent.parent;
        			if (oParent.name == "bizFrame")
        			{
        				bFind = false;
        			}
        		}
        	}
        }

        // 파일 업로드 에러 발생시
        this.ExtFileUp_onerror = function(obj,e)
        {
        	
        }

        // 파일 업로드 진행시
        this.ExtFileUp_onprogress = function(obj,e)
        {
        	
        }

        this.grd_file_oncelldblclick = function(obj,e)
        {
        	//파일 다운로드 수행
        	this.downloadFile(e.row);
        }

        /* 파일 다운로드 함수
         * @param {number} row 다운로드 대상 row */
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
        	var serverFileName    = ds_attachFile.getColumn(row, "SERVER_FILE_NAME");
        	var extFileId    = ds_attachFile.getColumn(row, "EXT_FILE_ID");
        	
        	var service = application.services["host"];
        	var sActId = "BRS_COM_RetrieveFileData";
        	//var sURL = service.url + "service/" + sActId + "/nexacrodownload.ncd?FILE_GROUP_ID=" + fileGroupId + "&FILE_ID=" + fileId;
        	var sURL =  service.url + "sample/second/FileDownload.do?FILE_GROUP_ID=" + fileGroupId + "&FILE_ID=" + fileId+"&pageCount=1";
        	
        	/*
        	 * download file
        	 * @param {string} url 다운로드 fullPath url
        	 * @param {string} filename 파일저장시 적용할 file name.(지원가능한 브라우저만 적용됨. 런타임 미지원)
        	 * @return {boolean} 다운로드 성공여부
        	 */
        	this.ExtFileDownload.download(sURL, fileName);		
        } 

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

        //-------------------------------------------------------------------------------------------------
        // 화면 이미지 관련 
        //-------------------------------------------------------------------------------------------------

        // 화면에 보이는이미지 업로드 수행시 함수
        this.fn_imageFileUpload = function() 
        {
        	this.form_onload();	
        	this.fn_deleteAllFiles();	//기존 첨부파일 삭제
        	this.btn_addFile_onclick();	//첨부파일 추가
        	this.fn_uploadAttachFile();	// 첨부파일 업로드
        }

        // 기존의 첨부파일 데이터 모두 삭제
        this.fn_deleteAllFiles = function() 
        {
        	var rowCnt = this.ds_attachFile.getRowCount();
        	for (var nRow=0; nRow < rowCnt; nRow++) 
        	{
        		//최초조회된 경우 Row Type = 1, 체크박스로 변경된 경우 Row Type = 4
        		if (this.ds_attachFile.getRowType(nRow) == 1 || this.ds_attachFile.getRowType(nRow) == 4) 
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

        // 초기화후 파일을 서버로 업로드 함
        this.fn_uploadResetAttachFile = function() 
        {
        	this.form_onload();
        	this.uploadFiles();
        };
        
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
