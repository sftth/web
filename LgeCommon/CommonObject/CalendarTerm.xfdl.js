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
                this.set_name("com_period_calendar");
                this.set_titletext("기간달력");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,224,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFromTo", this);
            obj._setContents("<ColumnInfo><Column id=\"gubn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"gubn\">From</Col></Row><Row><Col id=\"gubn\">To</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Calendar("cal_to", "absolute", "115", "0", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_cursor("auto");
            obj.set_type("normal");

            obj = new Static("stc_bar", "absolute", "100", "0", "15", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_cal", "absolute", "0", "53", "551", "323", null, null, this);
            obj.set_cssclass("div_WF_CalpopBg");
            this.addChild(obj.name, obj);
            obj = new Calendar("cal_fr", "absolute", "11", "77", "259", "191", null, null, this.pdv_cal);
            this.pdv_cal.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_daysize("22 22");
            obj.style.set_border("0 none #808080");
            obj.set_locale("ko_KR");
            obj.set_value("20160520");
            obj = new Calendar("cal_to", "absolute", "276", "77", "259", "191", null, null, this.pdv_cal);
            this.pdv_cal.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_locale("ko_KR");
            obj.style.set_border("0 none #808080");
            obj.set_value("20160520");
            obj = new Button("btn_WF_Popup", "absolute", null, null, "45", "24", "251", "8", this.pdv_cal);
            obj.set_taborder("2");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_PopupBtn");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_01", "absolute", "97", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Calendamm1");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_02", "absolute", "134", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Calendamm2");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_03", "absolute", "171", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Calendamm3");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_04", "absolute", "208", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Calendamm4");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_05", "absolute", "246", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Calendamm5");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_06", "absolute", "283", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Calendamm6");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_07", "absolute", "320", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Calendamm7");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_08", "absolute", "357", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Calendamm8");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_09", "absolute", "393", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Calendamm9");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_10", "absolute", "430", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Calendamm10");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_11", "absolute", "467", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Calendamm11");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Button("btn_12", "absolute", "504", "9", "35", "35", null, null, this.pdv_cal);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Calendamm12");
            obj.style.set_color("dimgray");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Spin("spn_year", "absolute", "8", "13", "85", "27", null, null, this.pdv_cal);
            obj.set_taborder("15");
            obj.set_value("2016");
            obj.style.set_align("center middle");
            obj.style.set_font("bold antialias 12 arial");
            obj.set_readonly("false");
            this.pdv_cal.addChild(obj.name, obj);
            obj = new Radio("radFromto", "absolute", "2.19%", "48", null, "26", "2.37%", null, this.pdv_cal);
            this.pdv_cal.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_innerdataset("@dsFromTo");
            obj.set_codecolumn("gubn");
            obj.set_datacolumn("gubn");
            obj.set_direction("vertical");
            obj.style.set_font("antialias bold 9 LG스마트체,Arial");
            obj.set_value("From");

            obj = new Calendar("cal_fr", "absolute", "0", "0", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.style.set_padding("0 -25 0 0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 551, 323, this.pdv_cal,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("div_WF_CalpopBg");

            	}
            );
            this.pdv_cal.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 224, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("com_calendar_month");
            		p.set_titletext("기간달력");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CalendarTerm.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : CalendarTerm.xfdl
        * PROGRAMMER  : 
        * DATE        : 2018-05-03
        * DESCRIPTION : 기간달력
                        컴포넌트 개발시에는 include를 절대 하지 않는다.
                        외부함수가 필요시에는 본 소스내에 재작성한다.
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        // Form Variables
        this.fv_oForm;
        this.fv_sPopId;
        this.fv_oCallback;
        this.fv_oParam;
        this.isSelectedFr = false;
        this.isSelectedTo = false;

        /*--------------------------------------------------------------------------------------------
         * parent param
         --------------------------------------------------------------------------------------------*/
        this.sToday;
        this.sYYYY;
        this.sMM;
        this.sDD;

        
        /**
         * @class 기간달력 초기설정
         * @method fn_initComp
         * @param oForm{Object} Form Object
         * @param sPopId{String} Callback ID
         * @param oCallback{Object} Callback Function
         * @param oParam{Object} 기간달력 설정값
        		fromdate - 시작날짜 초기값
        		todate - 종료날짜 초기값
         * @return none
         */  
        this.fn_initComp = function(oForm,sPopId,oCallback,oParam)
        {
        	this.cal_fr.dropbutton.set_visible(false);
        	
        	this.fv_oForm = oForm;
        	this.fv_sPopId = sPopId;
        	this.fv_oCallback = oCallback;
        	
        	if (!Base.isEmpty(oParam))
        	{
        		this.fn_initValue(oParam);	// init_value
        	}
        	else
        	{
        		this.fn_initValue();		// init_value
        	}
        	
        	this.periodcalendar_onsize(this);	// form_onsize
        }

        // [init_value]
        this.fn_initValue = function(oParam)
        {
        	this.fv_oParam = oParam;
        	
        	if (Base.isEmpty(oParam))
        	{
        		this.cal_fr.set_value("");
        		this.cal_to.set_value("");
        		this.pdv_cal.cal_fr.set_value(LGE.Date.today());
        		this.pdv_cal.cal_to.set_value(LGE.Date.today());
        		return;
        	}
        	
        	if (!Base.isEmpty(oParam.fromdate))
        	{
        		this.cal_fr.set_value(oParam.fromdate);
        		this.pdv_cal.cal_fr.set_value(oParam.fromdate);
        	}
        	else
        	{
        		this.cal_fr.set_value(oParam.fromdate);
        		this.pdv_cal.cal_fr.set_value(LGE.Date.today());
        	}
        	
        	if(!Base.isEmpty(oParam.todate))
        	{
        		this.cal_to.set_value(oParam.todate);
        		this.pdv_cal.cal_to.set_value(oParam.todate);
        	}
        	else
        	{
        		this.cal_to.set_value(oParam.todate);
        		this.pdv_cal.cal_to.set_value(LGE.Date.today());
        	}	
        }

        // [form_onsize]
        this.periodcalendar_onsize = function(obj,e)
        {
        	obj.set_scrollbars("none");	
        	
        	var nFormWidth = obj.getOffsetWidth();
        	var nBarWidth = this.stc_bar.width;
        	var nBtnWidth = 10;
        	var nLeft = 0;
        	var nCalWidth = parseInt((nFormWidth - nBarWidth - nBtnWidth)/2);
        	
        	this.cal_fr.set_left(nLeft);		// 0
        	this.cal_fr.set_width(nCalWidth);	// 91
        	
        	nLeft += parseInt(nCalWidth);
        	this.stc_bar.set_left(nLeft);
        	this.stc_bar.set_width(nBarWidth);
        	
        	nLeft += parseInt(nBarWidth);
        	this.cal_to.set_left(nLeft);
        	this.cal_to.set_width(nCalWidth);
        	
        	this.cal_fr.dropbutton.set_visible(false);
        }

        this.cal_fr_canchange = function(obj,e)
        {	
        	return true;
        }

        this.cal_fr_onchanged = function(obj,e)
        {
        	if (obj.value.toString().indexOf("0000") > -1)
        	{
        		obj.set_value("");
        	}

        	if (Base.isEmpty(this.cal_to.value))
        	{	
        		return true;
        	}
        	
        	var fromdt = Base.date.strToDate(obj.value.toString());
        	var todt = Base.date.strToDate(this.cal_to.value.toString());
        	var day = Base.date.getDiffDay(fromdt, todt);

        	if (day < 0)
        	{
        		obj.set_value(e.prevalue);
        	}	
        }

        this.cal_to_canchange = function(obj,e)
        {	
        	return true;
        }

        this.cal_to_onchanged = function(obj,e)
        {	
        	if (obj.value.toString().indexOf("0000") > -1)
        	 {
        		obj.set_value("");
        	}
        	
        	if (Base.isEmpty(this.cal_fr.value))
        	{
        		return true;
        	}
        	
        	var fromdt = Base.date.strToDate(this.cal_fr.value.toString());
        	var todt = Base.date.strToDate(obj.value.toString());
        	var day = Base.date.getDiffDay(fromdt, todt);

        	if (day < 0)
        	{
        		obj.set_value(e.prevalue);
        	}
        }

        this.cal_to_ondropdown = function(obj,e)
        {	
        	this.fn_openPopupDiv();	// open_popup
        	return false;	
        }

        // [open_popup] popupdiv오픈
        this.fn_openPopupDiv = function()
        {
        	this.pdv_cal.radFromto.set_value("From");

        	this.sToday = LGE.Date.today();
        	this.sYYYY = this.sToday.substr(0,4);
        	this.sMM = this.sToday.substr(4,2);
        	this.sDD = this.sToday.substr(6,2);
        	
        	if (Base.isEmpty(this.cal_fr.value)) 
        	{
        		this.pdv_cal.spn_year.set_value(this.sYYYY);
        	} 
        	else 
        	{
        		frDate = this.cal_fr.value.toString();
        		frYYYY = frDate.substr(0,4);
         		this.pdv_cal.spn_year.set_value(frYYYY);
        	}
        	
        	var nX = 0;
        	var nY = Number(this.getOffsetHeight() + 1);

        	var nMaxY = system.clientToScreenY(this.getOwnerFrame(), this.getOwnerFrame().height);
        	var nCheckY = system.clientToScreenY(this, Number(this.getOffsetHeight()) + Number(this.pdv_cal.height));
        	
        	if (nMaxY < nCheckY)	
        	{
        		nY = 0 - (Number(this.pdv_cal.height) + 1);
        	}

        	var nMaxX = system.clientToScreenX(this.getOwnerFrame(), this.getOwnerFrame().width);
        	var nCheckX = system.clientToScreenX(this, Number(this.pdv_cal.width));
        	
        	if (nMaxX < nCheckX) 
        	{
        		nX = 0 - (Number(this.pdv_cal.width) - Number(this.getOffsetWidth()));
        	}	
        	
        	this.pdv_cal.cal_fr.set_enable(this.cal_fr.enable);
        	this.pdv_cal.cal_to.set_enable(this.cal_to.enable);
        	
        	this.pdv_cal.cal_fr.set_value(this.cal_fr.value);
        	this.pdv_cal.cal_to.set_value(this.cal_to.value);
        	
        	if (Base.isEmpty(this.pdv_cal.cal_fr.value))
        	{
        		this.pdv_cal.cal_fr.set_value(LGE.Date.today());
        	}
        	
        	if (Base.isEmpty(this.pdv_cal.cal_to.value))
        	{
        		this.pdv_cal.cal_to.set_value(LGE.Date.today());
        	}
        	
        	this.pdv_cal.trackPopupByComponent(this.cal_fr, nX, nY);
        }

        this.btn_common_onclick = function(obj,e)
        {
        	var sName = obj.name;
        	var sSelectMM = sName.substr(4,2);
        	var frDate = this.pdv_cal.spn_year.value + sSelectMM + this.sDD;	

        	if (this.pdv_cal.radFromto.value == "From")
        	{
        		this.pdv_cal.radFromto.set_value("From");
        		this.pdv_cal.cal_fr.set_value(frDate);
        	} 
        	else 
        	{
        		this.pdv_cal.radFromto.set_value("To");
        		this.pdv_cal.cal_to.set_value(frDate);
        	}
        }

        this.pdv_cal_btn_WF_Popup_onclick = function(obj,e)
        {
        	this.pdv_cal.closePopup();	// close_popup
        }

        // [close_popup]
        this.pdv_cal_oncloseup = function(obj,e)
        {
        	if (Base.isEmpty(this.cal_fr.value) && !Base.isEmpty(this.cal_to.value)) 
        	{
        		this.cal_fr.set_value("");
        		this.cal_to.set_value("");		
        	}
        	
        	if (!Base.isEmpty(this.cal_fr.value) && Base.isEmpty(this.cal_to.value)) 
        	{
        		this.cal_fr.set_value("");
        		this.cal_to.set_value("");			
        	} 	
        	
        	if (this.cal_fr.value > this.cal_to.value)
        	{
        		this.cal_fr.set_value("");
        		this.cal_to.set_value("");		
        	}	
        }

        this.pdv_cal_cal_fr_ondayclick = function(obj,e)
        {
        	if (this.cal_fr.enable && !this.cal_fr.readonly)
        	{
        		obj.set_value(e.date);
        		this.cal_fr.set_value(obj.value);
        	}
        	this.isSelectedFr = true;
        		
        	this.pdv_cal.radFromto.set_value("To");
        }

        this.pdv_cal_cal_to_ondayclick = function(obj,e)
        {	
        	if(this.cal_to.enable && !this.cal_to.readonly)
        	{
        		obj.set_value(e.date);
        		this.cal_to.set_value(obj.value);
        	}
        	this.isSelectedTo = true;
        }

        // 값 얻기
        this.getValue = function()
        {
        	var oRtn = {};
        	oRtn.fromdate = this.cal_fr.value;
        	oRtn.todate = this.cal_to.value;
        	
        	return oRtn;
        }

        // 값 설정
        this.set_value = function(oParam)
        {
        	this.fn_initValue(oParam);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize", this.periodcalendar_onsize, this);
            this.cal_to.addEventHandler("ondropdown", this.cal_to_ondropdown, this);
            this.cal_to.addEventHandler("canchange", this.cal_to_canchange, this);
            this.cal_to.addEventHandler("onchanged", this.cal_to_onchanged, this);
            this.pdv_cal.addEventHandler("oncloseup", this.pdv_cal_oncloseup, this);
            this.pdv_cal.cal_fr.addEventHandler("ondayclick", this.pdv_cal_cal_fr_ondayclick, this);
            this.pdv_cal.cal_to.addEventHandler("onchanged", this.pdv_cal_cal_to_onchanged, this);
            this.pdv_cal.cal_to.addEventHandler("ondayclick", this.pdv_cal_cal_to_ondayclick, this);
            this.pdv_cal.btn_WF_Popup.addEventHandler("onclick", this.pdv_cal_btn_WF_Popup_onclick, this);
            this.pdv_cal.btn_01.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_02.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_03.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_04.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_05.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_06.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_07.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_08.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_09.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_10.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_11.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.btn_12.addEventHandler("onclick", this.btn_common_onclick, this);
            this.pdv_cal.radFromto.addEventHandler("onitemclick", this.pdv_cal_Radio00_onitemclick, this);
            this.cal_fr.addEventHandler("canchange", this.cal_fr_canchange, this);
            this.cal_fr.addEventHandler("onchanged", this.cal_fr_onchanged, this);

        };

        this.loadIncludeScript("CalendarTerm.xfdl", true);

       
    };
}
)();
