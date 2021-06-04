/**
 * LG Electronics Core Library
 
 ● LGE.Core.exportExcelByDs	: Source Dataset으로 Grid 생성 후 Excel로 Export하는 함수
 ● LGE.Core.exportExcel		: Grid를 Excel로 Export하는 함수
 ● LGE.Core.importExcel		: Import Excel
 ● LGE.Core.showAlert			: Alert창 호출
 ● LGE.Core.showConfirm		: Confirm창 호출
 ● LGE.Core.showError			: Error창 호출
 ● LGE.Core.popup				: 팝업오픈
 ● LGE.Core.tran				: Ncd 트랜잭션 함수
 ● LGE.Core.tranDo				: Spring 트랜잭션 함수
 ● LGE.Core.tranDoPaging		: Spring 트랜잭션 함수 (Append Paging 전용)
 */
if (!JsNamespace.exist("LGE.Core")) {

	/*============================================================================================
	 * @define	 	JSLib.json	 
	 * @memberof 	LgeLibrary	 
	 * @namespace 	LGE.Core
	 * @author 		admin
	 =============================================================================================*/
	JsNamespace.declare("LGE.Core", {

		ct_sheet			: "Sheet",		// sheet명
		ffobj 				: undefined,	// 호출 form
		fv_exportObject 	: undefined,	// export 대상
		fv_exportFileName 	: undefined,	// export 파일명
		fv_importDs 		: undefined,	// import DS
		importObj			: null,			// import object
		


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	form
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/			 
		onload : function(obj) {
			this.ffobj = obj;
			LGE.Util.init(obj);
		},


		/*--------------------------------------------------------------------------------------------
		 * 사용금지
		 * loading 속도 경량화를 위해 배제
		 --------------------------------------------------------------------------------------------*/			 
		_set : function(obj, _height) {
			//this.sLocale = application.gds_UserInfo.getColumn(0, "localecode")
			var sCond = "typeOf == 'Button'";
			sCond += " || typeOf == 'Calendar'";
			sCond += " || typeOf == 'CheckBox'";
			sCond += " || typeOf == 'Combo'";
			sCond += " || typeOf == 'Edit'";
			sCond += " || typeOf == 'Grid'";
			sCond += " || typeOf == 'MaskEdit'";
			sCond += " || typeOf == 'Static'";
			sCond += " || typeOf == 'Tab'";
			sCond += " || typeOf == 'TextArea'";

			var oComp = Base.XComp.query(obj, sCond);

			for (var i=0; i<oComp.length; i++) {
				this._setDefault(oComp[i]);
			}
		},

		/*--------------------------------------------------------------------------------------------
		 * 사용금지
		 * loading 속도 경량화를 위해 배제
		 --------------------------------------------------------------------------------------------*/
		_setDefault : function (obj) {
			var strType = obj.toString().toUpperCase();

			switch (strType) {
				case "[OBJECT GRID]":
					var sVar = "";
					var nCellCnt = obj.getCellCount("Head");
					var nSubCellCnt = 0;

					for(var i=0; i<nCellCnt; i++) {
						nSubCellCnt = obj.getSubCellCount("Head", i);
						if(nSubCellCnt > 1) {
							for(var j=0; j<nSubCellCnt; j++) {
								sVar = String(obj.getSubCellProperty("Head", i, j, "text"));
								if(Base.isEmpty(sVar)) {
									continue;
								}
								obj.setSubCellProperty("Head", i, j, "text", LGE.Biz.getTranslateStr(sVar));
							}
						}
						sVar = String(obj.getCellProperty("Head", i, "text"));
						if(Base.isEmpty(sVar)) {
							continue;
						}
						obj.setCellProperty("Head", i, "text", LGE.Biz.getTranslateStr(sVar));
					}

					nCellCnt = obj.getCellCount("Body");
					for(var i=0; i<nCellCnt; i++) {
						switch(obj.getCellProperty("Body", i, "displaytype")) {
							case "date":
								obj.setCellProperty("Body", i, "mask", "SHORTDATE");
								obj.setCellProperty("Body", i, "calendardisplaynulltype", "none");
								obj.setCellProperty("Body", i, "align", "center middle");
								break;
							case "currency":
							case "number":
								obj.setCellProperty("Body", i, "align", "right middle");
								break;
						}
					}

					if (obj.autofittype == "none" || obj.cellsizingtype == "none") {
						obj.set_cellsizingtype("col");
					}

					obj.set_autoenter("select");
					obj.set_nodatatext("NO DATA");
					obj.set_locale(this.sLocale);

					if(!obj.hasOwnProperty("_useSort") || obj._useSort != "N") {
						obj.addEventHandler("onheadclick", this.ffobj._geh_gridSort, this.ffobj);
					}

					if(!obj.hasOwnProperty("_useAllCheck") || obj._useAllCheck != "N") {
						obj.addEventHandler("onheadclick", this.ffobj._geh_setGridCheckAll, this.ffobj);
					}

					if(!obj.hasOwnProperty("_useCopy") || obj._useCopy != "N") {
						obj.addEventHandler("onkeydown", this.ffobj._geh_gridOnkeydown, this.ffobj);
					}
					
					if(!obj.hasOwnProperty("_useContextMenu") || obj._useContextMenu != "N") {
						obj.addEventHandler("onrbuttondown", this.ffobj._geh_gridOnRButtonDown, this.ffobj);
					}

					if(!obj.hasOwnProperty("_useMovePos") || obj._useMovePos != "N") {
						obj.addEventHandler("onkeyup", this.ffobj._geh_gridOnkeyup, this.ffobj);
					}
					break;
				case "[OBJECT COMBO]":
					obj.set_autoselect('true');
					obj.set_type('filter');
					obj.set_displayrowcount(10);
					break;
				case "[OBJECT BUTTON]":
				case "[OBJECT CHECKBOX]":
				case "[OBJECT STATIC]":
					var sVar = obj.text;
					obj.set_text(LGE.Biz.getTranslateStr(sVar));
					break;
				case "[OBJECT TAB]":
					var nPageCnt = obj.getTabpageCount();
					var aComp = obj.components;
					var sVar = "";

					for(var i=0; i<nPageCnt; i++) {
						sVar = aComp[i].text;
						aComp[i].set_text(LGE.Biz.getTranslateStr(sVar));
					}

					obj.addEventHandler("canchange", this.ffobj._geh_tabCanChange, this.ffobj);
					break;
				case "[OBJECT CALENDAR]":
					obj.set_dateformat("SHORTDATE");
					obj.set_editformat("SHORTDATE");
					obj.set_locale(this.sLocale);
					break;
				case "[OBJECT MASKEDIT]":
					obj.set_locale(this.sLocale);
					if(obj.type == "number") {
						
					}
					break;
				case "[OBJECT EDIT]":
				case "[OBJECT TEXTAREA]":
					obj.set_autoselect(true);
					if(obj.hasOwnProperty("_useTooltip") && obj._useTooltip == "Y") {
						obj.addEventHandler("onmouseenter", this.ffobj._gef_showTooltip, this.ffobj);
						obj.addEventHandler("onmouseleave", this.ffobj._geh_hideTooltip, this.ffobj);
					}
					break;
				default:
					break;
			}
		},

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {object} 	dataset
		 * ⓟ param {string} 	export file name
		 * ⓟ param {string} 	head column name
		 * ⓟ param {string} 	bind column name
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/		 
		exportExcelByDs : function(objForm, objDs, sFileName, sHeadColName, sBindColName) {
			var objGrd = LGE.Ui.createGridByDs(objForm, "_grd_"+objDs.name, "0,0,100,100,,", objDs, sHeadColName, sBindColName);
			objGrd.set_visible(false);

			this.exportExcel(objForm, objGrd, sFileName);
		},
		
		
		
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {object} 	대상 object 단일:grid, 멀티:array
		 * ⓟ param {string} 	export file name
		 * ⓟ param {string} 	sheet name
		 * ⓡ return {string}	
		 --------------------------------------------------------------------------------------------*/			 
		exportExcel : function(objForm, obj, sFileName, strSheet) {
			this.ffobj = objForm;
			this.fv_exportObject = obj;
			this.fv_exportFileName = sFileName;

			//var sSelectType = obj.selecttype + "";
			
			//obj.set_selecttype("row");

			application.set_usewaitcursor(true, true);

			this.ct_sheet = Base.isEmpty(strSheet) ? "sheet" : strSheet;

			this._exportExcelProcess();
			
			//obj.set_selecttype(sSelectType);
		},


		/*--------------------------------------------------------------------------------------------
		 * exportExcel 실행
		 --------------------------------------------------------------------------------------------*/
		_exportExcelProcess : function() {
			var obj = this.fv_exportObject;
			var sFileName = this.fv_exportFileName;
			var dToday = new Date();
			var exportObj;
			var sSheetName;
			var strType = "";

			if(!Base.isEmpty(sFileName)) {
				sFileName = sFileName + "_" + dToday.getTime();
			}
			else {
				sFileName = dToday.getTime();
			}

			var exportObj = new ExcelExportObject();
			//var sSvcUrl = application.services["host"].url+"XExport";
			var sSvcUrl = application.services["host"].url+"XExportImport";

			this.ffobj.setWaitCursor(true, true);

			exportObj.addEventHandler("onsuccess", this._exportExcelEnd, this);
			exportObj.addEventHandler("onerror", this._exportExcelEnd, this);
			exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
			exportObj.set_exporturl(sSvcUrl);
			exportObj.set_exportfilename(sFileName);
			

			if(Base.isArray(obj)) {
				for(var i=0; i<obj.length; i++) {
					
					if(Base.isArray(this.ct_sheet)){
						sSheetName = this.ct_sheet[i];
					} else {
						sSheetName = this.ct_sheet+(i+1);
					}
					
					strType = obj[i].toString().toUpperCase();

					if(strType == "[OBJECT GRID]") {
						obj[i].org_selecttype = obj[i].selecttype;
						obj[i].set_selecttype("row");					
						exportObj.addExportItem(nexacro.ExportItemTypes.GRID, obj[i], sSheetName + "!A1", "allband", "allrecord", "suppress", "allstyle", "background", "font", "both");
					}
					else {
						exportObj.addExportItem(nexacro.ExportItemTypes.DATASET, obj[i], sSheetName + "!A1", "allband", "allrecord", "suppress", "allstyle", "background", "font", "both");
					}
				}
			}
			else {
				strType = obj.toString().toUpperCase();
				sSheetName = this.ct_sheet + "1";

				if(strType == "[OBJECT GRID]") {
					obj.org_selecttype = obj.selecttype;				
					obj.set_selecttype("row");				
					exportObj.addExportItem(nexacro.ExportItemTypes.GRID, obj, sSheetName + "!A1", "allband", "allrecord", "suppress", "allstyle", "background", "font", "both");
				}
				else {
					exportObj.addExportItem(nexacro.ExportItemTypes.DATASET, obj, sSheetName + "!A1", "allband", "allrecord", "suppress", "allstyle", "background", "font", "both");
				}
			}

			exportObj.exportData();
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {string} 	sheet name
		 * ⓟ param {object} 	반환할 dataset
		 * ⓟ param {number} 	시작 row
		 --------------------------------------------------------------------------------------------*/			 
		importExcel : function(objForm, sSheet, ds, nStartrow) {
			this.ffobj = objForm;
			this.fv_importDs = ds;
			this.ct_sheet = Base.isEmpty(sSheet) ? "Sheet1" : sSheet;				
			
			var sSvcUrl = application.services["host"].url+"XImport" ;
			
			if(!this.ffobj["_dsImportTemp"])
			{
				var dsTemp = new Dataset;
				objForm.addChild("_dsImportTemp", dsTemp); 
			}
			
			if(!this.ffobj["_importExcel"])
			{
				this.ffobj.importObj = new nexacro.ExcelImportObject("_importExcel",this.ffobj);
				this.ffobj.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
				this.ffobj.addChild("_importExcel",this.ffobj.importObj); // 추가
			}
			
			this.ffobj.importObj.addEventHandler("onsuccess", this._importExcel_onsuccess, this);
			this.ffobj.importObj.addEventHandler("onerror", this._importExcel_onerror, this);
			this.ffobj.importObj.set_importurl(sSvcUrl);
			var bRnt = this.ffobj.importObj.importData("", "[command=getsheetdata;output=outDs;Body=" + this.ct_sheet + "!A" + nStartrow + "", "[_dsImportTemp=outDs]");
		},		
		
		
		

		/*--------------------------------------------------------------------------------------------
		 * _importExcelProcess
		 --------------------------------------------------------------------------------------------*/	
		_importExcelProcess : function() {
			this.ffobj.setWaitCursor(false);
		},

		/*--------------------------------------------------------------------------------------------
		 * _exportExcelEnd
		 --------------------------------------------------------------------------------------------*/		 
		_exportExcelEnd : function(obj, e) {
			var obj = this.fv_exportObject;
			
			if(Base.isArray(obj)) {
				for(var i=0; i<obj.length; i++) {
					var strType = obj[i].toString().toUpperCase();
					var sSelectType = obj[i].selecttype.toString();
					if(strType == "[OBJECT GRID]") {
						obj[i].set_selecttype(obj[i].org_selecttype);
					} 
				}
			} else {
				strType = obj.toString().toUpperCase();			
				if(strType == "[OBJECT GRID]") {
					obj.set_selecttype(obj.org_selecttype);
				} 				
			}			
				
			this.ffobj.setWaitCursor(false);
			
		},


		/*--------------------------------------------------------------------------------------------
		 * _importExcel_onsuccess
		 --------------------------------------------------------------------------------------------*/			 
		_importExcel_onsuccess : function(obj, e) {
			var nColCnt = this.ffobj._dsImportTemp.getColCount();
			for(var i=0; i<nColCnt; i++){
				this.ffobj._dsImportTemp.updateColID(i,this.fv_importDs.getColID(i));
			}
			this.fv_importDs.copyData(this.ffobj._dsImportTemp);		
			this.ffobj.setWaitCursor(false);
		},

		/*--------------------------------------------------------------------------------------------
		 * _importExcel_onerror
		 --------------------------------------------------------------------------------------------*/			 
		_importExcel_onerror : function(obj,  e) {
			this.ffobj.setWaitCursor(false);
			
			alert(e.errorcode + " ::: " + e.errormsg);
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {string} 	message code
		 * ⓟ param {string} 	치환될 단어들
		 * ⓟ param {string} 	call back function
		 --------------------------------------------------------------------------------------------*/				 
		showAlert : function (obj, sMsgCode, sMsgArr, fCallback) {

		
			this.showMsg(
				obj,
				"Alert",
				"default",
				sMsgCode,
				sMsgArr,
				"information",
				"default",
				fCallback);
		},
		
		
		

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {string} 	message code
		 * ⓟ param {string} 	치환될 단어들
		 * ⓟ param {string} 	call back function
		 --------------------------------------------------------------------------------------------*/			 
		showConfirm : function (obj, sMsgCode, sMsgArr, fCallback) {
			
			sMsgType = "";
		
			return this.showMsg(
				obj,
				"Confirm",
				"default",
				sMsgCode,
				sMsgArr,
				sMsgType,
				"default",
				fCallback);
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {string} 	message code
		 * ⓟ param {string} 	치환될 단어들
		 * ⓟ param {string} 	call back function
		 --------------------------------------------------------------------------------------------*/		 
		showError : function (obj, sMsgCode, sMsgArr, fCallback) {
			this.showMsg(
				obj,
				"Error",
				"default",
				sMsgCode,
				sMsgArr,
				"error",
				"default",
				fCallback);
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {string} 	message flag
		 * ⓟ param {string} 	popup id
		 * ⓟ param {string} 	message code
		 * ⓟ param {object} 	치환될 단어들
		 * ⓟ param {string} 	message type
		 * ⓟ param {string} 	size type
		 * ⓟ param {string} 	call back function
		 --------------------------------------------------------------------------------------------*/		 
		showMsg : function (obj, strFlag, msgId, msgCode, msgArr, strMsgType, sSizeType, fCallback) {
			if(Base.isEmpty(strFlag)) {
				//trace.error({message:"UnKown message flag :" + strFlag, stack:true, elapsed:true});
			}
			if(Base.isEmpty(msgId)) {
				//trace.error({message:"<<<error showMsg argument null empty  msgId>>>>", stack:true, elapsed:true});
			}

			this.onload(obj);   //onload set
			var strId = strFlag +"_" + msgId;
			var oArgs = {
					p_callbackId : msgId,
					p_id : strId,
					msg :  LGE.Biz.getTranslateStr(msgCode, msgArr),
					msgCode : msgCode,
					msgType : Base.isEmpty(strMsgType) ? "default" : strMsgType,
					sizeType : Base.isEmpty(sSizeType) ? "default" : sSizeType,
					fCallback : Base.isEmpty(fCallback) ? "" : fCallback
				};

			return this._msgOpen(obj, strFlag, oArgs);
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {string} 	message flag
		 * ⓟ param {string} 	args
		 --------------------------------------------------------------------------------------------*/			 
		_msgOpen : function(obj, strFlag, oArgs) {
			var oSize=  LGE.Util.setOpenMsg(oArgs.sizeType);
			var sId = oArgs.p_id.split("_")[0] + "_" + nexacro.round(Math.random(), 3);
			var sXfdlPath = "Frame_TopMenu::"+strFlag+".xfdl";

			return this.popup(
				obj,
				sId,
				sXfdlPath,
				oArgs,
				"width=350,height=200,autosize=false,title=false",
				oArgs.fCallback);
		},
		

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {string} 	popup id
		 * ⓟ param {string} 	popup url
		 * ⓟ param {object} 	args
		 * ⓟ param {string} 	pupup option
		 * ⓟ param {string} 	call back function		 
		 --------------------------------------------------------------------------------------------*/		 
		popup : function (obj, sPopupId, sUrl, oArg, sOption, sPopupCallback) {
			this.ffobj = obj;

			var nLeft = -1, nTop = -1, nWidth = 1, nHeight = 1;
			var bShowTitle = true, bShowStatus = false, bModeless = false, bLayered = true;
			var nOpacity = 100;
			var bAutoSize = true, bResizable = false, bRound = false;
            sPopupCallback = Base.isEmpty(sPopupCallback) ? "fn_popupAfter" : sPopupCallback;
			var sTitleText = "";

		    if (!Base.isEmpty(oArg) && typeof oArg == "object") {
				for (var key; key<oArg.length;oArg++) {
					if (oArg.hasOwnProperty(key) && Base.isUndefined(oArg[key])) {
							oArg[key] = "";
					}
				}
			}
			else {
	    		oArg = {};
	    	}

			var aVal = Base.isEmpty(sOption) ? "" : sOption.split(",");

			var aVal2 = "";
			for (var i=0; i<aVal.length; i++) {
				aVal2 = aVal[i].trim().split("=");

				switch (aVal2[0]) {
				case "top":
					nTop = parseInt(aVal2[1]);
					break;
				case "left":
					nLeft = parseInt(aVal2[1]);
					break;
				case "width":
					nWidth = nexacro.toNumber(aVal2[1].toString());
					break;
				case "height":
					nHeight = parseInt(aVal2[1]);
					break;
				case "title":
					bShowTitle = aVal2[1];
					break;
				case "titletext":
					sTitleText = aVal2[1];
					break;
				case "status":
					bShowStatus = aVal2[1];
					break;
				case "modaless":
					bModeless = aVal2[1];
					break;
				case "layered":
					bLayered = aVal2[1];
					break;
				case "opacity":
					nOpacity = aVal2[1];
					break;
				case "autosize":
					bAutoSize = aVal2[1];
					break;
				case "resizable":
					bResizable = aVal2[1];
					break;
				case "round":
					bRound = aVal2[1];
					break;
				}
			}

			var sOpenalign = "";

			sTitleText = (Base.isEmpty(sTitleText)) ? LGE.Biz.getTranslateStr(sPopupId) : sTitleText;

			if (nLeft == -1 && nTop == -1) {
				sOpenalign = "center middle";
				nLeft = (application.mainframe.width / 2) - Math.round(nWidth / 2);
				nTop = (application.mainframe.height / 2) - Math.round(nHeight / 2);
			}

			var objParentFrame = this.ffobj.getOwnerFrame();

			if (bModeless == "true") {
				var objOpenedPopup = application.popupframes[sPopupId];

				if(objOpenedPopup != null) {
					objOpenedPopup.setFocus();

					return objOpenedPopup;
				}

				var sOpenStyle= "showtitlebar=true showstatusbar=false resizable=true";
				application.open(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight, this.ffobj);

				return application.popupframes[sPopupId];
			}
			else {
				newChild = new nexacro.ChildFrame;
				newChild.init(sPopupId,"absolute",nLeft, nTop, nWidth, nHeight+20, null, null, sUrl);

				newChild.set_dragmovetype("all");
				newChild.set_showtitlebar(bShowTitle);
				newChild.set_autosize(bAutoSize);
				newChild.set_resizable(bResizable);
				newChild.set_titletext(sTitleText);
				newChild.set_showstatusbar(bShowStatus);
				newChild.set_openalign(sOpenalign);
				newChild.set_layered(false);
				newChild.set_showtitleicon(true);
				newChild.showModal(objParentFrame, oArg, this.ffobj, sPopupCallback, true);
				newChild.style.set_border("1px solid #2A3340");
				//newChild.style.set_icon("");
				
				return newChild;
			}
		},

		
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {string} 	service id
		 * ⓟ param {string} 	biz act id
		 * ⓟ param {string} 	input dataset
		 * ⓟ param {string} 	output dataset
		 * ⓟ param {string} 	args
		 * ⓟ param {string} 	call back function
		 * ⓟ param {boolean} 	cursor 표시여부
		 * ⓟ param {boolean} 	async 여부
		 --------------------------------------------------------------------------------------------*/			
		tran : function() {
			this.onload(arguments[0]); //현재폼 초기화
			var pThis = arguments[0];
			var svcID = arguments[1];  //service id
			var actId = arguments[2];
			var inDatasets = arguments[3];
			var outDatasets = arguments[4];
			var argument = arguments[5];
			var callbackFunc = arguments[6];
			var showProgress = arguments[7];
			var bAsync = arguments[8];
			var nHttpTimeout = arguments[9];
			var nDataType = 2;  // 0:xml 2:ssv
			var bCompress = false;

			if (Base.isEmpty(bAsync)) {
				bAsync = true;
			}
			if (Base.isEmpty(argument)) {
				argument = "";
			}
			if (Base.isEmpty(callbackFunc)) {
				callbackFunc = "fn_callBack";
			}
			if(Base.isEmpty(nHttpTimeout)) {
				nHttpTimeout = 120;
			}

			if (Base.isEmpty(showProgress) || !Base.isBoolean(showProgress)){
				showProgress = true;
			}
			application.set_httptimeout(nHttpTimeout);
			application.set_usewaitcursor(showProgress);

			var service = application.services["host"];

			// Service ID Merge
			var sSvcID = {id:svcID, callbackFunc:callbackFunc};
			var sURL = service.url + "service/" + actId + "/nexacro.ncd";
			var sInDatasets = inDatasets;
			var sOutDatasets = outDatasets;
			var sArgument = argument;

			var aInDs = LGE.Util.splitDsName(sInDatasets, 0);
			if(!Base.isEmpty(sArgument)){
				sArgument += " baRq=" + aInDs.join(",");
				/*
				sArgument += " baRq=IN_PARAMETER";

				if(aInDs != null && aInDs.length > 0) {
					sArgument += "," + aInDs.join(",");
				}
				*/
			}
			else {
				sArgument += "baRq=" + aInDs.join(",");
			}
			sArgument += " baRs=" + LGE.Util.splitDsName(sOutDatasets, 1).join(",");

			pThis.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, "com_callback", bAsync, nDataType, bCompress);
			//pThis.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, callbackFunc, bAsync, nDataType, bCompress);
		},


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {string} 	service id
		 * ⓟ param {string} 	service url
		 * ⓟ param {string} 	input dataset
		 * ⓟ param {string} 	output dataset
		 * ⓟ param {string} 	args
		 * ⓟ param {string} 	call back function
		 * ⓟ param {boolean} 	cursor 표시여부
		 * ⓟ param {boolean} 	async 여부
		 --------------------------------------------------------------------------------------------*/		
		tranDo : function() {
			this.onload(arguments[0]); //현재폼 초기화
			var service = application.services["host"];
			var pThis = arguments[0];
			var svcID = arguments[1];  //service id
			var sUrl = service.url + arguments[2];
			var inDatasets = arguments[3];
			var outDatasets = arguments[4];
			var argument = arguments[5];
			var callbackFunc = arguments[6];
			var showProgress = arguments[7];
			var bAsync = arguments[8];
			var nHttpTimeout = arguments[9];
			var nDataType = 0;  // 0:xml 2:ssv
			var bCompress = false;

			if (Base.isEmpty(bAsync)) {
				bAsync = true;
			}
			if (Base.isEmpty(argument)) {
				argument = "";
			}
			if (Base.isEmpty(callbackFunc)) {
				callbackFunc = "fn_callBack";
			}
			if(Base.isEmpty(nHttpTimeout)) {
				nHttpTimeout = 120;
			}

			if (Base.isEmpty(showProgress) || !Base.isBoolean(showProgress)){
				showProgress = true;
			}
			application.set_httptimeout(nHttpTimeout);
			application.set_usewaitcursor(showProgress);

			var service = application.services["host"];

			// Service ID Merge
			var sSvcID = {id:svcID, callbackFunc:callbackFunc};
			var sInDatasets = inDatasets;
			var sOutDatasets = outDatasets;
			var sArgument = argument;

			pThis.transaction(sSvcID, sUrl, sInDatasets, sOutDatasets, sArgument, "com_callback", bAsync, nDataType, bCompress);
		},
		
	
		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object} 	호출 form
		 * ⓟ param {string} 	service id
		 * ⓟ param {string} 	service url
		 * ⓟ param {string} 	input dataset
		 * ⓟ param {string} 	output dataset
		 * ⓟ param {string} 	args
		 * ⓟ param {string} 	call back function
		 * ⓟ param {boolean} 	cursor 표시여부
		 * ⓟ param {boolean} 	async 여부
		 --------------------------------------------------------------------------------------------*/		
		tranDoPaging : function() {
			this.onload(arguments[0]); //현재폼 초기화
			var service = application.services["host"];
			var pThis = arguments[0];
			var svcID = arguments[1];  //service id
			var sUrl = service.url + arguments[2];
			var inDatasets = arguments[3];
			var outDatasets = arguments[4];
			var argument = arguments[5];
			var callbackFunc = arguments[6];
			var showProgress = arguments[7];
			var bAsync = arguments[8];
			var nHttpTimeout = arguments[9];
			//var nDataType = 2;  // 0:xml 2:ssv
			var nDataType = 0;  // 0:xml 2:ssv
			var bCompress = false;

			if (Base.isEmpty(bAsync)) {
				bAsync = true;
			}
			if (Base.isEmpty(argument)) {
				argument = "";
			}
			if (Base.isEmpty(callbackFunc)) {
				callbackFunc = "fn_callBack";
			}
			if(Base.isEmpty(nHttpTimeout)) {
				nHttpTimeout = 120;
			}

			if (Base.isEmpty(showProgress) || !Base.isBoolean(showProgress)){
				showProgress = true;
			}
			application.set_httptimeout(nHttpTimeout);
			application.set_usewaitcursor(showProgress);
			
			var sInDatasets = inDatasets;
			var sOutDatasets = outDatasets;
			var oDsPagingTemp = arguments[0].gfn_addDataset(arguments[0],"dsPagingTemp");
			
			var aDs = sOutDatasets.split("=");
			sOutDatasets = sOutDatasets.replace(aDs[0],"dsPagingTemp"); 

			// Service ID Merge
			var sSvcID = {id:svcID, callbackFunc:callbackFunc, pagingDataset:aDs[0]};
			
			var sArgument = argument;
			pThis.transaction(sSvcID, sUrl, sInDatasets, sOutDatasets, sArgument, "com_callbackpaging", bAsync, nDataType, bCompress);
		},		
	});
}