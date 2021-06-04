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
                this.set_name("com_multi_combo");
                this.set_titletext("멀티콤보");
                this._setFormPosition(0,0,206,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new PopupDiv("pdv_combo", "absolute", "1", "41", "245", "306", null, null, this);
            obj.set_visible("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("div_bottom", "absolute", "0", null, null, "34", "0", "12", this.pdv_combo);
            obj.set_taborder("5");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #cecfc2ff");
            this.pdv_combo.addChild(obj.name, obj);
            obj = new Button("btn_submit", "absolute", null, null, "52", "24", "95", "4", this.pdv_combo.div_bottom);
            obj.set_taborder("0");
            obj.set_text("Submit");
            obj.set_cssclass("btn_WF_PopupBtn");
            this.pdv_combo.div_bottom.addChild(obj.name, obj);
            obj = new Edit("edt_multi", "absolute", "0", "0", "205", "21", null, null, this.pdv_combo);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            obj.style.set_padding("0 26 0 5");
            this.pdv_combo.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "21", null, null, "0", "45", this.pdv_combo);
            obj.set_taborder("2");
            obj.set_scrollbars("autovert");
            obj.style.set_background("#ffffffff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"155\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell style=\"align:center;padding:0 0 0 0;\"/><Cell col=\"1\" style=\"align:left middle;background:#ffffffff;background2:#ffffffff; :mouseover {background:#eaeaeaff;background2:#EAEAEA;}\"/></Band></Format></Formats>");
            this.pdv_combo.addChild(obj.name, obj);
            obj = new Button("btn_expand", "absolute", null, "0", "21", "21", "41", null, this.pdv_combo);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_CustomCombo");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #aeaeaeff");
            this.pdv_combo.addChild(obj.name, obj);

            obj = new Edit("edt_multi", "absolute", "0", "0", null, "21", "0", null, this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.style.set_padding("0 26 0 5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_expand", "absolute", null, "0", "21", "21", "1", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_CustomCombo");
            obj.set_tabstop("false");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #aeaeaeff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 34, this.pdv_combo.div_bottom,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.style.set_background("#ffffffff");
            		p.style.set_border("1 solid #cecfc2ff");

            	}
            );
            this.pdv_combo.div_bottom.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 245, 306, this.pdv_combo,
            	//-- Layout function
            	function(p) {
            		p.set_visible("false");
            		p.set_scrollbars("none");

            	}
            );
            this.pdv_combo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 206, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("com_calendar_month");
            		p.set_titletext("멀티콤보");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("MultiCombo.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : MultiCombo.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : 멀티콤보
        				컴포넌트 개발시에는 include를 절대 하지 않는다.
                        외부함수가 필요시에는 본 소스내에 재작성한다.
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        /*--------------------------------------------------------------------------------------------
         * form variables
         --------------------------------------------------------------------------------------------*/
        this.fv_oForm 			= null;
        this.fv_sPopId 			= null;
        this.fv_oCallback 		= null;
        this.fv_oParam 			= null;
        this.fv_innerdataset   	= null; 
        this.fv_codecolumn   	= null;   
        this.fv_datacolumn    	= null;  
        this.fv_etccolumn    	= null;   
        this.fv_checkcolumn    	= null; 
        this.fv_listboxwidth    = null;
        this.fv_displayrowcount = null;
        this.fv_rowsize         = null;
        this.fv_viewcolumn      = null;
        this.fv_usecheck        = null;
        this.fv_delimiter 		= null;
        this.fv_selecttype 		= null;
        this.fv_gridtop			= null;
        this.fv_initdata		= null;

        //-------------------------------------------------------------------------------------------------
        // [ PART 2 ]
        // Form event 정의
        //-------------------------------------------------------------------------------------------------

        this.form_onload = function(obj,e)
        {
        	this.pdv_combo.div_bottom.btn_submit.set_text(this.pdv_combo.div_bottom.btn_submit.text);
        }

        //-------------------------------------------------------------------------------------------------
        // [ PART 3 ]
        // Form 공통 버튼 이벤트 함수 정의
        //-------------------------------------------------------------------------------------------------

        //닫기 공통버튼 클릭 이벤트
        this.fn_close = function()
        {
        	return true;
        }
        //-------------------------------------------------------------------------------------------------
        // [ PART 4 ]
        // transaction 함수 정의
        //-------------------------------------------------------------------------------------------------

        //-------------------------------------------------------------------------------------------------
        // [ PART 5]
        // 사용자 정의 함수
        // ex) fn_함수명
        //-------------------------------------------------------------------------------------------------

        /**
         * @class 멀티콤보 초기설정
         * @method fn_initComp
         * @param oForm{Object} Form Object
         * @param sPopId{String} Callback ID
         * @param oCallback{Object} Callback Function
         * @param oParam{Object} 멀티콤보 설정값
        			innerdataset 	- 콤보의 innerdataset으로 사용할 데이타셋(필수)
        			codecolumn		- 콤보의 코드값으로 사용할 컬럼명(필수)
        			datacolumn		- 콤보의 데이타컬럼값으로 사용할 컬럼명(필수)
        			etccolumn		- 추가로 보여줄 컬럼명 ex) "컬럼명1,컬럼명2"
        			checkcolumn		- 체크박스컬럼명(기본값 : CHK)
        			listboxwidth	- 콤보리스트박스의 넓이값(기본값 : 콤보의 width값)
        			displayrowcount	- 콤보 리스트박스에 보여줄 건수(기본값 : 10)
        			rowsize			- 콤보 리스트박스의 한로우의 높이값 (기본값 : 24)
        			viewcolumn		- 콤보리스트 선택시 보여줄 값의 컬럼명(기본값 : datacolumn)
        			usecheck		- 체크박스 사용여부
        			delimiter 		- 구분자값 (기본값 : ',')	
        			selecttype		- A : ALL, S : SELECT, N : ""
        			initdata		- 초기설정값
         * @return none
         */  
        this.fn_initComp = function(oForm,sPopId,oCallback,oParam)
        {
        	this.fv_oForm     = oForm;
        	this.fv_sPopId    = sPopId;
        	this.fv_oCallback = oCallback;
        	
        	this.fv_innerdataset 	= oParam.innerdataset;	
        	this.fv_codecolumn   	= !Base.isEmpty(oParam.codecolumn)		? oParam.codecolumn 		: "CODE";   
        	this.fv_datacolumn    	= !Base.isEmpty(oParam.datacolumn)		? oParam.datacolumn			: "NAME";  
        	this.fv_etccolumn    	= !Base.isEmpty(oParam.etccolumn)		? oParam.etccolumn			: "";  
        	this.fv_checkcolumn    	= !Base.isEmpty(oParam.checkcolumn)		? oParam.checkcolumn		: "CHK";
        	this.fv_listboxwidth    = !Base.isEmpty(oParam.listboxwidth)	? oParam.listboxwidth		: this.getOffsetWidth();
        	this.fv_displayrowcount = !Base.isEmpty(oParam.displayrowcount)	? oParam.displayrowcount	: 10;
        	this.fv_rowsize         = !Base.isEmpty(oParam.rowsize)			? oParam.rowsize			: 25;
        	this.fv_viewcolumn      = !Base.isEmpty(oParam.viewcolumn)		? oParam.viewcolumn			: this.fv_datacolumn;
        	this.fv_usecheck        = !Base.isEmpty(oParam.usecheck)		? oParam.usecheck			: true;
        	this.fv_delimiter 		= !Base.isEmpty(oParam.delimiter)		? oParam.delimiter			: ",";
        	this.fv_selecttype 		= !Base.isEmpty(oParam.selecttype)		? oParam.selecttype			: "";
        	this.fv_initdata		= !Base.isEmpty(oParam.initdata)		? oParam.initdata			: "";
        	this.fv_gridtop			= this.getOffsetHeight();			
        	
        	//initdata
        	if(!Base.isEmpty(this.fv_initdata))
        	{
        		this.fv_initdata = this.fv_initdata;
        	}
        	
        	// checkcolumn이 없는 경우 추가
        	this.fn_addColumn(this.fv_innerdataset, this.fv_checkcolumn, "string");
        	
        	var sSelectText = "";
        	if(!Base.isEmpty(this.fv_selecttype))
        	{
        		sSelectText = Base.decode(this.fv_selecttype, "A", "ALL", "S", "SELECT", "N", "");
        	}
        	
        	if(this.fv_innerdataset.rowcount < this.fv_displayrowcount) this.fv_displayrowcount = this.fv_innerdataset.rowcount;	
        	
        	var nWidth  = this.edt_multi.getOffsetWidth();
        	var nHeight = this.edt_multi.getOffsetHeight();
        	this.pdv_combo.edt_multi.setOffsetWidth(nWidth);
        	this.pdv_combo.edt_multi.setOffsetHeight(nHeight);
        	this.pdv_combo.btn_expand.setOffsetLeft(nWidth - parseInt(this.btn_expand.width));
        	this.pdv_combo.btn_expand.setOffsetWidth(parseInt(this.btn_expand.width)-1);
        	this.pdv_combo.btn_expand.setOffsetHeight(nHeight-2);
        	// PopupDiv 사이즈 설정
        	nWidth = this.fv_listboxwidth;
        	nHeight = this.fv_rowsize * (this.fv_displayrowcount + 1) + this.fv_gridtop + parseInt(this.pdv_combo.div_bottom.height);
        	
        	this.pdv_combo.setOffsetWidth(nWidth);
        	this.pdv_combo.setOffsetHeight(nHeight);

        	this.pdv_combo.grd_list.set_top(this.fv_gridtop);
        	//this.pdv_combo.grd_list.set_height(this.pdv_combo.getOffsetHeight() - this.fv_gridtop);
        	
        	//그리드 생성
        	var aEtcCol = null;
        	if(Base.isEmpty(this.fv_etccolumn)) aEtcCol = [];
        	else aEtcCol = this.fv_etccolumn.split(",");
        		
        	var nEtcCnt = aEtcCol.length;
        	
        	var nChkColWidth = 28;
        	var nColWidth = 0;
        	if(this.fv_usecheck) nColWidth = parseInt((nWidth - nChkColWidth) / (nEtcCnt + 1));
        	else nColWidth = parseInt((nWidth) / (nEtcCnt + 1));
        	
        	var sFormats = '<Formats>	\n';
        	sFormats += '<Format id="default">	\n';
        	sFormats += '  <Columns>	\n';
        	if(this.fv_usecheck) sFormats += '	<Column size="'+nChkColWidth+'" band="left" />	\n';
        	sFormats += '	<Column size="'+nColWidth+'" />	\n';
        	
        	for(var i = 0; i < aEtcCol.length; i++)
        	{
        		sFormats += '	<Column size="'+nColWidth+'" />	\n';
        	}
        	
        	sFormats += '  </Columns>	\n';
        	sFormats += '  <Rows>	\n';
        	sFormats += '   <Row size="24" band="head" /> \n';
        	sFormats += '	<Row size="'+this.fv_rowsize+'" />	\n';
        	sFormats += '  </Rows>	\n';
        	
        	var nColIdx = 0;
        	sFormats += '  <Band id="head">	\n';
        	if(this.fv_usecheck)
        	{
        		sFormats += '  <Cell col="'+nColIdx+'" displaytype="checkbox" celltype="body" edittype="checkbox" style="align:center"/>	\n';
        		nColIdx++;
        	}
        	sFormats += '  <Cell col="'+nColIdx+'" text="'+sSelectText+'" celltype="body" style="align:left&#32;middle;"/>	\n';
        	sFormats += '  </Band>	\n';
        	
        	sFormats += '  <Band id="body">	\n';
        	
        	nColIdx = 0;
        	if(this.fv_usecheck)
        	{
        		nColIdx++;
        		sFormats += '	<Cell displaytype="checkbox" edittype="checkbox" text="bind:'+this.fv_checkcolumn+'" style="align:center&#32;middle;background:#ffffffff;background2:#ffffffff;&#32;:mouseover&#32;{background:#eaeaeaff;background2:#EAEAEA;}"/>	\n';
        	}
        	sFormats += '	<Cell col="'+nColIdx+'" text="bind:'+this.fv_datacolumn+'" style="align:left&#32;middle;background:#ffffffff;background2:#ffffffff;&#32;:mouseover&#32;{background:#eaeaeaff;background2:#EAEAEA;}" />	\n';
        	for(var i = 0; i < aEtcCol.length; i++)
        	{
        		sFormats += '	<Cell col="'+(i+(nColIdx+1))+'" text="bind:'+aEtcCol[i]+'" style="align:left&#32;middle;background:#ffffffff;background2:#ffffffff;&#32;:mouseover&#32;{background:#eaeaeaff;background2:#EAEAEA;}" />	\n';
        	}	
        	sFormats += '  </Band>	\n';
        	sFormats += '</Format>	\n';
        	sFormats += '</Formats>	\n';
        	
        	this.pdv_combo.grd_list.set_formats(sFormats);
        	this.pdv_combo.grd_list.set_binddataset(this.fv_innerdataset);	
        	//this.pdv_combo.grd_list.set_autofittype("col");
        	if(this.fv_usecheck) 
        	{
        		this.pdv_combo.grd_list.set_selecttype("multirow");
        		this.pdv_combo.edt_multi.set_readonly(false);
        	}
        	else
        	{
        		this.pdv_combo.grd_list.set_selecttype("row");
        		this.pdv_combo.edt_multi.set_readonly(true);
        		this.fv_innerdataset.set_rowposition(-1);
        	}
        	//0번째값 설정
        	var sInitValue = "";	
        	if(!Base.isEmpty(this.fv_initdata))
        	{
        		sInitValue = this.fv_initdata;		
        	}
        // 	else
        // 	{
        // 		sInitValue = this.fv_innerdataset.getColumn(0, this.fv_datacolumn);
        // 	}
        	
        	this.edt_multi.set_value(sInitValue);
        	this.pdv_combo.edt_multi.set_value(sInitValue);
        }

        //데이타셋에 컬럼 추가
        this.fn_addColumn = function(objDs,sColumnNm,sColumnType)
        {
        	if(Base.isEmpty(objDs)) trace("gfn_addColumn dataset object error");
        	if(Base.isEmpty(sColumnNm)) trace("gfn_addColumn sColumnNm error");
        	if(Base.isEmpty(sColumnType)) sColumnType = "string";
        	
        	if(Base.isEmpty(objDs.getColumnInfo(sColumnNm)))
        	{
        		objDs.addColumn(sColumnNm, sColumnType);
        		objDs.applyChange();
        	}
        	
        	return true;
        }

        //값설정
        //viewcolumn에 해당하는 값들을 보여줌(기본값은 datacolumn)
        this.set_value = function(sParam)
        {
        	// Checkbox 사용여부
        	if(this.fv_usecheck)
        	{
        		// "CHK" 초기화
        		for(var i = 0; i < this.fv_innerdataset.rowcount; i++)
        		{
        			this.fv_innerdataset.setColumn(i, this.fv_checkcolumn, '0');
        		}

        		if(!Base.isEmpty(sParam))
        		{
        			var sSetValue = "";
        			var aValues = sParam.split(this.fv_delimiter);
        			var sValue;
        			
        			for(var i = 0; i < aValues.length; i++)
        			{
        				sValue = aValues[i].trim();
        				nRow = this.fv_innerdataset.findRow(this.fv_codecolumn, sValue);
        				if(nRow > -1)
        				{
        					this.fv_innerdataset.setColumn(nRow, this.fv_checkcolumn, '1');
        					
        					sSetValue += (this.fv_innerdataset.getColumn(nRow, this.fv_viewcolumn)+this.fv_delimiter);
        				}
        			}
        			
        			this.edt_multi.set_value(sSetValue.substring(0, sSetValue.length-1));
        		}
        		else
        		{
        			this.edt_multi.set_value("");
        		}	
        	}
        	else
        	{
        		if(!Base.isEmpty(sParam))
        		{
        			var nRow = this.fv_innerdataset.findRow(this.fv_codecolumn, sParam);
        			if(nRow > -1)
        			{
        				this.fv_innerdataset.set_rowposition(nRow);
        			}	
        			this.edt_multi.set_value(this.fv_innerdataset.getColumn(nRow, this.fv_viewcolumn));
        		}		
        	}
        }

        //값얻기
        //기본값은 codecolumn값
        //codecolumn값 이외 경우 컬럼명을 설정해줌
        this.getValue = function(sCol)
        {
        	if(Base.isEmpty(sCol)) sCol = this.fv_codecolumn;
        	
        	var sRtnValue = "";
        	if(this.fv_usecheck)
        	{
        		for(var i = 0; i < this.fv_innerdataset.rowcount; i++)
        		{	
        			if(this.fv_innerdataset.getColumn(i, this.fv_checkcolumn) == '1')
        			{
        				if(!Base.isEmpty(this.fv_innerdataset.getColumn(i, sCol)))
        				{
        					sRtnValue += this.fv_innerdataset.getColumn(i, sCol)+this.fv_delimiter;
        				}
        			}
        		}	
        		return sRtnValue.substring(0, sRtnValue.length-1);
        	}
        	else
        	{
        		var sRtn = this.fv_innerdataset.getColumn(this.fv_innerdataset.rowposition, sCol);
        		if(Base.isEmpty(sRtn)) sRtn = "";
        		return sRtn;
        	}
        }

        
        this.fn_getTextValue = function(sCol)
        {
        	if(Base.isEmpty(sCol)) sCol = this.fv_datacolumn;

        	var sRtnValue = "";
        	if(this.fv_usecheck)
        	{
        		for(var i = 0; i < this.fv_innerdataset.rowcount; i++)
        		{	
        			if(this.fv_innerdataset.getColumn(i, this.fv_checkcolumn) == '1')
        			{
        				if(!Base.isEmpty(this.fv_innerdataset.getColumn(i, sCol)))
        				{
        					sRtnValue += this.fv_innerdataset.getColumn(i, sCol)+this.fv_delimiter;
        				}
        			}
        		}	
        		return sRtnValue.substring(0, sRtnValue.length-1);
        	}
        	else
        	{
        		var sRtn = this.fv_innerdataset.getColumn(this.fv_innerdataset.rowposition, sCol);
        		if(Base.isEmpty(sRtn)) sRtn = "";
        		return sRtn;
        	}
        }

        this.fn_getValueQuote = function(sCol)
        {
        	if(Base.isEmpty(sCol)) sCol = this.fv_codecolumn;
        	
        	var sRtnValue = "";
        	var aRtn = [];
        	if(this.fv_usecheck)
        	{
        		for(var i = 0; i < this.fv_innerdataset.rowcount; i++)
        		{	
        			if(this.fv_innerdataset.getColumn(i, this.fv_checkcolumn) == '1')
        			{
        				if(!Base.isEmpty(this.fv_innerdataset.getColumn(i, sCol)))
        				{
        					aRtn.push("'"+this.fv_innerdataset.getColumn(i, sCol)+"'");
        				}
        			}
        		}
        		sRtnValue = aRtn.join(",");
        		return sRtnValue;
        	}
        	else
        	{
        		var sRtn = this.fv_innerdataset.getColumn(this.fv_innerdataset.rowposition, sCol);
        		if(Base.isEmpty(sRtn)) sRtn = "";
        		else sRtn = "'" + sRtn + "'";
        		return sRtn;
        	}
        }

        this.fn_initValue = function()
        {	
        	if(Base.isEmpty(this.fv_innerdataset) || this.fv_innerdataset.rowcount == 0) return;
        	
        	for(var i = 0; i < this.fv_innerdataset.rowcount; i++)
        	{	
        		this.fv_innerdataset.setColumn(i, this.fv_checkcolumn, '0');
        	}		
        	
        	var sInitValue = "";	
        	if(!Base.isEmpty(this.fv_initdata))
        	{
        		sInitValue = this.fv_initdata;		
        	}
        	else
        	{
        		sInitValue = this.fv_innerdataset.getColumn(0, this.fv_datacolumn);
        	}
        	
        	this.edt_multi.set_value(sInitValue);
        	this.pdv_combo.edt_multi.set_value(sInitValue);
        }

        // "CHK"칼럼이 체크된 Row값의 유효성체크
        this.fn_checkValidation = function()
        {
        	if(Base.isEmpty(this.getValue()))
        	{
        		this.alert("VALID_REQUIRED");
        		this.edt_multi.setFocus();
        		return false;
        	}
         	return true;
        }

        this.fn_clearCheck = function(bExceptNull)
        {
        	bExceptNull = Base.isEmpty(bExceptNull)? true : false;
        	
        	this.fv_innerdataset.set_enableevent(false);
        	for(var i = 0; i < this.fv_innerdataset.rowcount; i++)
        	{
        		//all인 로우가 아닌경우 체크해제
        		if(!Base.isEmpty(this.fv_innerdataset.getColumn(i, this.fv_codecolumn)))
        		{
        			this.fv_innerdataset.setColumn(i, this.fv_checkcolumn, "0");
        		}
        // 		else
        // 		{
        // 			this.fv_innerdataset.setColumn(i, this.fv_checkcolumn, "0");
        // 		}
        	}
        	this.fv_innerdataset.set_enableevent(true);
        	
        	return true;
        }

        //popupdiv오픈
        this.fn_openPopupDiv = function()
        {
        	if(this.pdv_combo.isPopup())
        	{
        		this.pdv_combo.closePopup();
        		return;
        	}
        	
        	//this.fv_innerdataset.filter("");
        	
        	if(Base.isEmpty(this.fv_innerdataset) || this.fv_innerdataset.rowcount == 0) return;
        	
        	this.edt_multi.setFocus();
        	this.pdv_combo.edt_multi.setSelect(0);
        	
        	//헤더의 체크박스 제거
        	//this.pdv_combo.grd_list.setCellProperty("head", 0, "text", "0");
        		
        // 	var nRowSize = this.fv_rowsize;
        // 	var nDispRowCount = this.fv_displayrowcount;
        // 	if(this.fv_innerdataset.rowcount < nDispRowCount) nDispRowCount = this.fv_innerdataset.rowcount;
        // 
        // 	var nHeight = nRowSize * (nDispRowCount);
        // 	
        // 	this.pdv_combo.grd_list.set_height(nHeight+2);
        	
        	
        	var nX = 0;
        	var nY = Number(this.getOffsetHeight() + 1);

        	var nMaxY = system.clientToScreenY(this.getOwnerFrame(), this.getOwnerFrame().height);
        	var nCheckY = system.clientToScreenY(this, Number(this.getOffsetHeight()) + Number(this.pdv_combo.height));
        	
        	if(nMaxY < nCheckY)	{
        		nY = 0 - (Number(this.pdv_combo.height) + 1);
        	}

        	var nMaxX = system.clientToScreenX(this.getOwnerFrame(), this.getOwnerFrame().width);
        	var nCheckX = system.clientToScreenX(this, Number(this.pdv_combo.width));
        	if(nMaxX < nCheckX) {
        		nX = 0 - (Number(this.pdv_combo.width) - Number(this.getOffsetWidth()));
        	}	
        	
        	this.pdv_combo.trackPopupByComponent(this.edt_multi, nX, nY, null, null, "_fn_closePopupDiv");
        }

        //-------------------------------------------------------------------------------------------------
        // [ PART 6]
        // 각 component 의 event 정의
        // event 가 있는 component 는 UI 명명규칙에 의하여 id 부여. 자동생성되는 function 명 사용
        //------------------------------------------------------------------------------------------------

        this.pdv_combo_edt_multi_onchar = function(obj,e)
        {
        	var sCol = this.fv_datacolumn;

        	if(!Base.isEmpty(e.posttext))
        	{		
        		var sText = e.posttext.toString();
        		var aText = sText.split(this.fv_delimiter);
        		var sFilterStr = "";
        		for(var i = 0; i < aText.length; i++)
        		{
        			if(!Base.isEmpty(aText[i]))
        			{
        				if(i != 0) sFilterStr += "||";
        				sFilterStr += "String("+sCol+").toString().toUpperCase().indexOf('"+aText[i].toString().toUpperCase()+"') > -1";
        			}
        		}
        		
        		this.fv_innerdataset.filter(sFilterStr);
        	}
        	else
        	{
        		this.fv_innerdataset.filter("");
        	}
        	
        // 	var nRowSize = this.fv_rowsize;
        // 	var nDispRowCount = this.fv_displayrowcount;
        // 	if(this.fv_innerdataset.rowcount < nDispRowCount) nDispRowCount = this.fv_innerdataset.rowcount;
        // 
        // 	var nHeight = nRowSize * (nDispRowCount + 1);
        // 	this.pdv_combo.grd_list.set_height(nHeight+2);	
        }

        this._fn_closePopupDiv = function()
        {
        	//trace("_fn_closePopupDiv");	
        }

        this.pdv_combo_oncloseup = function(obj,e)
        {
        //	trace("pdv_combo_oncloseup");
        //	this.fv_innerdataset.filter("");
        	
        	var sRtn = "";
        	if(this.fv_usecheck)
        	{
        		var sDispValue = "";
        			
        		var sValue = "", aValues = [];
        		var sSelectText = Base.decode(this.fv_selecttype, "A", "ALL", "S", "SELECT", "N", "");
        		
        		for(var i = 0; i < this.fv_innerdataset.rowcount; i++)
        		{
        			if(this.fv_innerdataset.getColumn(i, this.fv_checkcolumn) == "1")
        			{
        				sValue = this.fv_innerdataset.getColumn(i, this.fv_viewcolumn);
        	// 			if(sValue != sSelectText)
        	// 			{
        					aValues.push(sValue);
        	//			}
        			}
        		}
        		sDispValue = aValues.join(this.fv_delimiter);	
        		sRtn = sDispValue;		
        	}
        	else
        	{
        		sRtn = this.fv_innerdataset.getColumn(this.fv_innerdataset.rowposition, this.fv_datacolumn);
        	}
        	
        	if(Base.isEmpty(sRtn))
        	{
        		if(!Base.isEmpty(this.fv_initdata))
        		{
        			sRtn = this.fv_initdata;
        		}
        		else
        		{
        			
        		}
        	}
        		
        	this.edt_multi.set_value(sRtn);
        	this.pdv_combo.edt_multi.set_value(sRtn);
        	
        	this.fv_oCallback.call(this.fv_oForm, this.fv_sPopId, sRtn);	
        }

        this.btn_expand_onclick = function(obj,e)
        {
        	this.fn_openPopupDiv();
        }

        this.edt_multi_oneditclick = function(obj,e)
        {
        	this.fn_openPopupDiv();
        }

        this.pdv_combo_btn_expand_onclick = function(obj,e)
        {
        	this.pdv_combo.closePopup();
        }

        this.pdv_combo_div_bottom_btn_submit_onclick = function(obj,e)
        {
        	this.pdv_combo.closePopup();
        }

        this.pdv_combo_grd_list_oncellclick = function(obj,e)
        {
        	if(this.fv_usecheck)
        	{
        		//코드값이 null인 로우 선택시 다른로우 선택해제
        		if(Base.isEmpty(this.fv_innerdataset.getColumn(e.row, this.fv_codecolumn)))
        		{
        			this.fn_clearCheck();
        			return;
        		}	
        		
        		if(Base.isEmpty(this.fv_innerdataset.getColumn(0, this.fv_codecolumn)) && this.fv_innerdataset.getColumn(0, this.fv_checkcolumn) == '1')
        		{
        			this.fv_innerdataset.setColumn(0, this.fv_checkcolumn, '0');
        		}
        		if(e.cell != 0)
        		{
        			if(this.fv_innerdataset.getColumn(e.row, this.fv_checkcolumn) == "1")
        			{
        				this.fv_innerdataset.setColumn(e.row, this.fv_checkcolumn, "0");
        			}
        			else
        			{
        				this.fv_innerdataset.setColumn(e.row, this.fv_checkcolumn, "1");
        			}
        			
        			obj.updateToDataset();
        		}
        		
        		this.fn_setHeaderCheck(obj, this.fv_innerdataset);
        	}
        	else
        	{
        		this.pdv_combo.closePopup();
        	}
        }

        
        var _bDrag = false;
        this.pdv_combo_grd_list_ondrag = function(obj,e)
        {
        	//_bDrag = true;	
        }

        this.pdv_combo_grd_list_onlbuttonup = function(obj,e)
        {
        	if(_bDrag && this.fv_usecheck)
        	{
        		var sSelRow = this.pdv_combo.grd_list.getSelectedRows();
        		for(var i = 0; i < sSelRow.length; i++)
        		{
        			if(!Base.isEmpty(this.fv_innerdataset.getColumn(sSelRow[i], this.fv_codecolumn)))
        			{
        				this.fv_innerdataset.setColumn(sSelRow[i], this.fv_checkcolumn, "1");
        			}	
        		}
        		
        		this.fn_setHeaderCheck(obj, this.fv_innerdataset);
        		_bDrag = false;
        	}
        }

        this.pdv_combo_grd_list_onselectchanged = function(obj,e)
        {
        // 	trace(e.row);
        // 	if(this.fv_usecheck)
        // 	{
        // 		if(!Base.isEmpty(this.fv_innerdataset.getColumn(e.row, this.fv_codecolumn)))
        // 		{
        // 			this.fv_innerdataset.setColumn(e.row, this.fv_checkcolumn, "1");
        // 		}
        // 	}
        	
        // 	if(e.row < 0) return;
        // 	
        // 	//코드값이 null인 로우 선택시 다른로우 선택해제
        // 	if(Base.isEmpty(this.fv_innerdataset.getColumn(e.row, this.fv_codecolumn)))
        // 	{
        // 		this.fn_clearCheck();		
        // 	}
        // 		
        // 	if(Base.isEmpty(this.fv_innerdataset.getColumn(0, this.fv_codecolumn)) && this.fv_innerdataset.getColumn(0, this.fv_checkcolumn) == '1')
        // 	{
        // 		this.fv_innerdataset.setColumn(0, this.fv_checkcolumn, '0');
        // 	}
        // 	
        // 	if(e.cell != 0)
        // 	{
        // 		if(this.fv_innerdataset.getColumn(e.row, this.fv_checkcolumn) == "1")
        // 		{
        // 			this.fv_innerdataset.setColumn(e.row, this.fv_checkcolumn, "0");
        // 		}
        // 		else
        // 		{
        // 			this.fv_innerdataset.setColumn(e.row, this.fv_checkcolumn, "1");
        // 		}
        // 		
        // 		obj.updateToDataset();
        // 	}
        }

        this.pdv_combo_grd_list_onheadclick = function(obj,e)
        {
        	if(e.cell == 0 || e.cell == 1)
        	{
        		if(this.fv_usecheck)
        		{
        			var strVal;
        			var strChkCol;

        			var strType = obj.getCellProperty("head", 0, "displaytype");
        			if (strType != "checkbox"){
        				return;
        			}

        			strChkCol = obj.getCellProperty("body", 0, "text");
        			if (Base.isEmpty(strChkCol))	return;
        			
        			strChkCol = strChkCol.replace("bind:", "");

        			// Head셋팅
        			strVal = obj.getCellProperty("head", 0, "text");
        			if (Base.isEmpty(strVal) || strVal == ""){
        				strVal = 0;
        			}

        			if (strVal == "0"){
        				obj.setCellProperty("head", 0, "text", 1);
        				strVal = 1;
        			} else {
        				obj.setCellProperty("head", 0, "text", 0);
        				strVal = 0;
        			}
        			
        			// Body셋팅
        			this.fv_innerdataset.set_enableevent(false);
        			for (var i=0; i<this.fv_innerdataset.rowcount; i++){
        				this.fv_innerdataset.setColumn(i, strChkCol, strVal);
        			}
        			this.fv_innerdataset.set_enableevent(true);	
        		}
        		else
        		{
        			this.fv_innerdataset.set_rowposition(-1);
        			this.pdv_combo.closePopup();
        		}
        	}
        }

        //전체가 선택된 경우에만 헤더의 체크박스선택상태로 변경
        this.fn_setHeaderCheck = function(objGrid,oInnerDs)
        {
        	oInnerDs.set_enableevent(false);
        	var sFilterStr = oInnerDs.filterstr;
        	oInnerDs.filter("");
        	
        	var nChkSum = oInnerDs.getCaseCount(this.fv_checkcolumn+"==1");
        	var nRowCnt = oInnerDs.getRowCount();
        	//trace("nChkSum = " + nChkSum+" nRowCnt = "+nRowCnt);
        	if(nChkSum == nRowCnt)
        	{
        		objGrid.setCellProperty("head", 0, "text", 1);
        	}
        	else
        	{
        		objGrid.setCellProperty("head", 0, "text", 0);
        	}
        	
        	oInnerDs.filter(sFilterStr);
        	oInnerDs.set_enableevent(true);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.pdv_combo.addEventHandler("oncloseup", this.pdv_combo_oncloseup, this);
            this.pdv_combo.addEventHandler("onclose", this.pdv_combo_onclose, this);
            this.pdv_combo.div_bottom.btn_submit.addEventHandler("onclick", this.pdv_combo_div_bottom_btn_submit_onclick, this);
            this.pdv_combo.edt_multi.addEventHandler("onchar", this.pdv_combo_edt_multi_onchar, this);
            this.pdv_combo.grd_list.addEventHandler("onheadclick", this.pdv_combo_grd_list_onheadclick, this);
            this.pdv_combo.grd_list.addEventHandler("oncellclick", this.pdv_combo_grd_list_oncellclick, this);
            this.pdv_combo.grd_list.addEventHandler("onselectchanged", this.pdv_combo_grd_list_onselectchanged, this);
            this.pdv_combo.grd_list.addEventHandler("ondrag", this.pdv_combo_grd_list_ondrag, this);
            this.pdv_combo.grd_list.addEventHandler("onlbuttonup", this.pdv_combo_grd_list_onlbuttonup, this);
            this.pdv_combo.btn_expand.addEventHandler("onclick", this.pdv_combo_btn_expand_onclick, this);
            this.edt_multi.addEventHandler("onsetfocus", this.edt_multi_onsetfocus, this);
            this.edt_multi.addEventHandler("oneditclick", this.edt_multi_oneditclick, this);
            this.btn_expand.addEventHandler("onclick", this.btn_expand_onclick, this);

        };

        this.loadIncludeScript("MultiCombo.xfdl", true);

       
    };
}
)();
