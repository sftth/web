//XJS=Comm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path, "CommonLibrary::rMateChartH5.xjs");
        this.addIncludeScript(path, "CommonLibrary::rMateChartH5License.xjs");
        this.registerScript(path, function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::rMateChartH5.xjs", null, exports); }	//include "CommonLibrary::rMateChartH5.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::rMateChartH5License.xjs", null, exports); }	//include "CommonLibrary::rMateChartH5License.xjs";

        /*--------------------------------------------------------------------------------------------
         * 업무화면 form init, form 사전처리, 이후 화면에 있는 fn_formInit 호출 
         * ⓟ param {object} 	form
         * ⓡ return 			N/A
         --------------------------------------------------------------------------------------------*/
        this.com_fromInit = function(objForm)
        {
        	LGE.Core.onload(objForm);
        	if(objForm["div_Search"]) nSearchHeight = this.div_Search.height;
        	this.com_changeLanguage(objForm); // 다국어 설정
        	if(objForm["fn_formInit"]) objForm.fn_formInit();
        }

        
        /*--------------------------------------------------------------------------------------------
         * transaction 공통콜백, 이후 화면 콜백 호출
         * ⓟ param {json} 		oSvc
         * ⓟ param {int}		errorcode
         * ⓟ param {string} 	errormsg
         * ⓡ return 			N/A
         --------------------------------------------------------------------------------------------*/
        this.com_callback = function(oSvc,errorcode,errormsg)
        {

        	// 세션아웃
        	if(errorcode == -2) {
        		system.execBrowser(application.services["host"].url);
        		application.exit();
        	}

        	
        	
        	// 화면 콜백 호출
        	if(this[oSvc.callbackFunc]){
        		var strExpr =  "this."+ oSvc.callbackFunc + "('" + oSvc.id + "', " + errorcode + ", '" + errormsg + "')";
        		eval(strExpr);
        	}
        }

        
        /*--------------------------------------------------------------------------------------------
         * Devon Append paging init
         * DevOn Paging Library 규약에 맟추어 개발된 함수 (ncd에서 사용못함)
         * ⓟ param {object}	paging 대상 dataset
         * ⓟ param {object}	input dataset
         * ⓟ param {object} 	output dataset
         * ⓟ param {string} 	key column
         * ⓡ return 			N/A
         --------------------------------------------------------------------------------------------*/
        this.com_pagingInit = function (oPagingDs,oInPagingDs,oOutPagingDs,sKey)
        {
        	var sReturnKey = "";

        	if(oOutPagingDs.getColumn(0,"pageNextYn") == "N") return;

        	if(oPagingDs.rowcount <= 0){
        		oInPagingDs.setColumn(0,"pageConditionKey",sKey);
        	} else {
        		var aKey = sKey.split("|");
        		if(aKey.length > 1){
        			for(var i=0; i<aKey.length; i++){
        				var aOrder = aKey[i].split("@");
        				if(i == 0){
        					if(aOrder.length > 1 ){
        						sKeyValue = oPagingDs.getColumn(oPagingDs.rowcount-1,aOrder[0]);
        						sReturnKey += aOrder[0] + "=" + sKeyValue + "@" + aOrder[1];					
        					} else {
        						sKeyValue = oPagingDs.getColumn(oPagingDs.rowcount-1,aKey[i]);
        						sReturnKey += aKey[i] + "=" + sKeyValue;										
        					}
        				} else {
        					if(aOrder.length > 1 ){
        						sKeyValue = oPagingDs.getColumn(oPagingDs.rowcount-1,aOrder[0]);
        						sReturnKey += "|" + aOrder[0] + "=" + sKeyValue + "@" + aOrder[1];
        					} else {
        						sKeyValue = oPagingDs.getColumn(oPagingDs.rowcount-1,aKey[i]);
        						sReturnKey += "|" + aKey[i] + "=" + sKeyValue;					
        					}
        				}
        			}
        		} else {
        			var aOrder = aKey[0].split("@");		
        			if(aOrder.length > 1 ){
        				sKeyValue = oPagingDs.getColumn(oPagingDs.rowcount-1,aOrder[0]);
        				sReturnKey = aOrder[0] + "=" + sKeyValue + "@" + aOrder[1];				
        			} else {
        				sKeyValue = oPagingDs.getColumn(oPagingDs.rowcount-1,sKey);
        				sReturnKey = sKey + "=" + sKeyValue;			
        			}
        		}
        		oInPagingDs.setColumn(0,"pageConditionKey",sReturnKey);
        		oInPagingDs.setColumn(0,"pageNextYn",oOutPagingDs.getColumn(0,"pageNextYn"));
        	}
        }

        
        /*--------------------------------------------------------------------------------------------
         * Append paging 전용 콜백
         * ⓟ param {object} 	json
         * ⓟ param {int}		errorcode
         * ⓟ param {string} 	errormsg
         * ⓡ return 			N/A
         --------------------------------------------------------------------------------------------*/
        this.com_callbackpaging = function(oSvc,errorcode,errormsg)
        {
        	// append 처리
        	var sAppendExpr = "this." + oSvc.pagingDataset + ".appendData(this.dsPagingTemp,true,true);";
        	eval(sAppendExpr);
        	
        	// 화면 콜백 처리
        	if(this[oSvc.callbackFunc]){
        		var strExpr =  "this."+ oSvc.callbackFunc + "('" + oSvc.id + "', " + errorcode + ", '" + errormsg + "')";
        		eval(strExpr);
        	}
        }

        
        /*--------------------------------------------------------------------------------------------
         * Append paging 사용시 대상 그리드 onvscroll 이벤트에 설정 
         * ⓟ param {object} 	grid
         * ⓡ return 			N/A
         --------------------------------------------------------------------------------------------*/
        this.com_gridPaging_onvscroll = function (obj,e)
        {
        	var nVscrollMax = obj.vscrollbar.max;
        	if((e.type == "tracklast" || e.type == "wheellast" || e.type == "last") || (e.pos == nVscrollMax && e.type == "none")){
        		// 화면의 조회 호출
        		this.fn_search();
        	} 
        }

        
        /*--------------------------------------------------------------------------------------------
         * 다국어 처리대상 분류
         * ⓟ param {object} 	form
         * ⓡ return 			N/A	
         --------------------------------------------------------------------------------------------*/
        this.com_changeLanguage = function (obj)
        {
        	// 개발 기준언어 설정
        	if(application.gv_language == 'KR') return;
        	var oList = obj.components;
        	var sKeyLang ;
        	var sChangeLang;
        	var nRow;
        	
        	for(var i=0; i<oList.length; i++)
        	{
        		// 예외처리 1(안하면 화면 멈춤)
        		if(oList[i] instanceof PopupDiv || oList[i] instanceof ExtCombo) {
        			continue;
        		}
        		// 예외처리 2(안하면 화면 멈춤)
        		if(oList[i].url == "obj_xcommon::PeriodCalendar.xfdl") {
        			continue;
        		}	
        		// 개발중에만 사용.....
        		if(!oList[i].visible) {
        			continue;
        		}		
        		if(oList[i] instanceof Div || oList[i] instanceof Tabpage)
        		{
        			this.com_changeLanguage(oList[i]);

        		} else if (oList[i] instanceof Tab) {
        		
        			// Tab 버튼 변경
        			var oTabpages = oList[i].tabpages;
        			for(var j=0; j<oTabpages.length; j++) 
        			{
        				sKeyLang 	= oTabpages[j].text;
        				sChangeLang = this._findLanguage(sKeyLang);
        				oTabpages[j].set_text(sChangeLang);
        			}
        			// Tabpage를 위해
        			this.com_changeLanguage(oList[i]);
        		} else {

        			// Static, Button
        			if(oList[i] instanceof Static || oList[i] instanceof Button) {
        				sKeyLang 	= oList[i].text;
        				sChangeLang = this._findLanguage(sKeyLang);
        				oList[i].set_text(sChangeLang);
        			}
        			// Grid
        			if(oList[i] instanceof Grid) {
        				var nCellCnt = oList[i].getCellCount("Head");
        				for(var j=0; j<nCellCnt; j++) 
        				{
        					sKeyLang 	= oList[i].getCellProperty("Head", j, "text");
        					sChangeLang = this._findLanguage(sKeyLang);
        					
        					oList[i].setCellProperty("Head", j, "text", sChangeLang);
        				}
        			}			
        		}
        	}
        }

        
        /*--------------------------------------------------------------------------------------------
         * 다국어 찾기
         * ⓟ param {string} 	Language id
         * ⓡ return 			Change Language	
         --------------------------------------------------------------------------------------------*/
        this._findLanguage = function(sKeyLang)
        {
        	if(Base.isEmpty(sKeyLang)) {
        		return "";
        	}

        	//var nRow = application.gds_language.findRow("WORD_KEY", sKeyLang);
        	var nRow = application.gds_message.findRow("MSG_CONT", sKeyLang);
        	
        	if(nRow < 0) {
        		trace("not language : " + sKeyLang);
        		return sKeyLang;
        	} else {
        		//sChangeLang = application.gds_language.getColumn(nRow, "WORD_TRANSLATION");
        		sChangeLang = application.gds_message.getColumn(nRow, "MSG_TRAN");
        		return sChangeLang;
        	}
        }

        
        /*--------------------------------------------------------------------------------------------
         * 조회영역 닫기(상단배치)
         * ⓟ param 
         * ⓡ return 			
         --------------------------------------------------------------------------------------------*/
        this.com_searchSlide = function()
        {
        	this.div_Search.set_scrollbars("none");

        	if(this.btn_SearchSlide.cssclass == "btn_WFSA_Up") {
        		this.div_Search.set_height(39);
        		this.btn_SearchSlide.set_cssclass("btn_WFSA_Down");
        	} else {
        		this.div_Search.set_height(nSearchHeight);
        		this.btn_SearchSlide.set_cssclass("btn_WFSA_Up");	
        	}
        	
        	this.btn_SearchSlide.set_top(this.div_Search.height);
        	this.div_Data.set_top(this.div_Search.height);		
        }

        
        /*--------------------------------------------------------------------------------------------
         * 조회영역 닫기(좌측배치)
         * ⓟ param 
         * ⓡ return 			
         --------------------------------------------------------------------------------------------*/
        this.com_searchSlideLeft = function()
        {
        	var nSearchWidth = 280;
        	this.div_Search.set_scrollbars("none");

        	if(this.btn_SearchSlide.cssclass == "btn_WF_ShuttleL") {
        		this.div_Search.set_width(0);
        		this.btn_SearchSlide.set_cssclass("btn_WF_ShuttleR");
        	} else {
        		this.div_Search.set_width(nSearchWidth);
        		this.btn_SearchSlide.set_cssclass("btn_WF_ShuttleL");	
        	}
        	
        	this.btn_SearchSlide.set_left(this.div_Search.width);
        	this.div_Data.set_left(this.div_Search.width + 20);		
        }

        
        /*--------------------------------------------------------------------------------------------
         * 이미지 찾기
         * ⓟ param 
         * ⓡ return 			
         --------------------------------------------------------------------------------------------*/
        this.com_imagefile = function (sFileId,sFileSeq)
        {
        	sUrl = application.services["host"].url + application.gv_imagefilesrc;
        	sUrl = sUrl.replace("#1",sFileId);
        	sUrl = sUrl.replace("#2",sFileSeq);	
        	return sUrl;
        }

        
        
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
