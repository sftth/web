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
                this.set_name("com_calendar_month");
                this.set_titletext("기간월력");
                this._setFormPosition(0,0,215,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new PopupDiv("_pdiv_month", "absolute", "0", "31", "360", "226", null, null, this);
            obj.set_cssclass("pdiv_WF_CalPopup");
            this.addChild(obj.name, obj);
            obj = new Static("_Static00", "absolute", "184", "32", "164", "152", null, null, this._pdiv_month);
            obj.set_taborder("35");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #7f485fff");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Static("_Static02", "absolute", "10", "32", "164", "152", null, null, this._pdiv_month);
            obj.set_taborder("34");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #7f485fff");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Static("_stc_from_year", "absolute", "11", "32", "162", "26", null, null, this._pdiv_month);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Calendaryy");
            obj.set_text("2015");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_01", "absolute", "19", "66", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Calendamm1");
            obj.style.set_border("1 none #808080ff");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_02", "absolute", "56", "66", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Calendamm2");
            obj.style.set_border("1 none #808080ff");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_03", "absolute", "93", "66", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Calendamm3");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_04", "absolute", "130", "66", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Calendamm4");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_05", "absolute", "19", "103", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Calendamm5");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_06", "absolute", "56", "103", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Calendamm6");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_07", "absolute", "93", "103", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Calendamm7");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_08", "absolute", "130", "103", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Calendamm8");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_09", "absolute", "19", "140", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Calendamm9");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_10", "absolute", "56", "140", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Calendamm10");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_11", "absolute", "93", "140", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Calendamm11");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_from_12", "absolute", "130", "140", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Calendamm12");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("_btn_from_pre", "absolute", "11", "32", "26", "26", null, null, this._pdiv_month);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_CalPrev");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("_btn_from_post", "absolute", "147", "32", "26", "26", null, null, this._pdiv_month);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_CalNext");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_01", "absolute", "193", "66", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Calendamm1");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_02", "absolute", "230", "66", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Calendamm2");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_03", "absolute", "267", "66", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Calendamm3");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_04", "absolute", "304", "66", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_Calendamm4");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_05", "absolute", "193", "103", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Calendamm5");
            obj.style.set_image("URL('theme://images/btn_WF_Calendamm5_N.png')");
            obj.style.set_background("#f4f4f5ff");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_06", "absolute", "230", "103", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_Calendamm6");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_07", "absolute", "267", "103", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Calendamm7");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_08", "absolute", "304", "103", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Calendamm8");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_09", "absolute", "193", "140", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_Calendamm9");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_10", "absolute", "230", "140", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_Calendamm10");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_11", "absolute", "267", "140", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_Calendamm11");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_to_12", "absolute", "304", "140", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_Calendamm12");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("_btn_select", "absolute", null, null, "45", "24", "157", "8", this._pdiv_month);
            obj.set_taborder("31");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_PopupBtn");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Static("_Static32", "absolute", "14", "9", "60", "15", null, null, this._pdiv_month);
            obj.set_taborder("32");
            obj.set_text("From");
            obj.style.set_font("antialias bold 9 LG스마트체,Arial");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Static("_Static01", "absolute", "188", "9", "60", "15", null, null, this._pdiv_month);
            obj.set_taborder("33");
            obj.set_text("To");
            obj.style.set_font("antialias bold 9 LG스마트체,Arial");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Static("_stc_to_year", "absolute", "184", "32", "163", "26", null, null, this._pdiv_month);
            obj.set_taborder("36");
            obj.set_text("2015");
            obj.set_cssclass("sta_WF_Calendaryy");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("_btn_to_pre", "absolute", "185", "32", "26", "26", null, null, this._pdiv_month);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_CalPrev");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("_btn_to_post", "absolute", "323", "32", "26", "26", null, null, this._pdiv_month);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_CalNext");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("_Button69", "absolute", null, "3", "20", "20", "3", null, this._pdiv_month);
            obj.set_taborder("37");
            obj.set_cssclass("btn_POP_CalClose");
            obj.set_visible("false");
            obj.set_tooltiptext("닫기");
            this._pdiv_month.addChild(obj.name, obj);

            obj = new Calendar("_cal_from_date", "absolute", "0", "0", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM");
            obj.style.set_padding("0 -25 0 0");

            obj = new Calendar("_cal_to_date", "absolute", "115", "0", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_readonly("false");

            obj = new Static("_Static00", "absolute", "100", "1", "15", "19", null, null, this);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 360, 226, this._pdiv_month,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("pdiv_WF_CalPopup");

            	}
            );
            this._pdiv_month.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 215, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide_15");
            		p.set_titletext("기간월력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("MonthCalendarTerm.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : MonthCalendarTerm.xfdl
        * PROGRAMMER  : 
        * DATE        : 2018-05-11
        * DESCRIPTION : 기간월력
        				컴포넌트 개발시에는 include를 절대 하지 않는다.
                        외부함수가 필요시에는 본 소스내에 재작성한다.
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        this.cal_date_ondropdown = function(obj,e) 
        {
        	this.fn_openPopupDiv();	// open_popup
        	return false;
        }

        // [open_popup]
        this.fn_openPopupDiv = function()
        {
        	var sM;
        	var eM;

        	if (this._cal_from_date.value == null || this._cal_from_date.value == "")
        	{
        		var year = (new Date()).getFullYear();
        		this._pdiv_month._stc_from_year.set_text(year);
        		this._pdiv_month._stc_to_year.set_text(year);
        		sM = LGE.Date.todayMonth();
        		eM = LGE.Date.todayMonth();
        	} 
        	else 
        	{
        		this._pdiv_month._stc_from_year.set_text((this._cal_from_date.value).toString().substr(0, 4));
        		this._pdiv_month._stc_to_year.set_text((this._cal_to_date.value).toString().substr(0, 4));
        		sM = (this._cal_from_date.value).toString().substr(4, 2);
        		eM = (this._cal_to_date.value).toString().substr(4, 2);
        	}
        	
        	var nX = 0;
        	var nY = Number(this.getOffsetHeight() + 1);

        	var nMaxY = system.clientToScreenY(this.getOwnerFrame(), this.getOwnerFrame().height);
        	var nCheckY = system.clientToScreenY(this, Number(this.getOffsetHeight()) + Number(this._pdiv_month.height));
        	
        	if (nMaxY < nCheckY)	
        	{
        		nY = 0 - (Number(this._pdiv_month.height) + 1);
        	}

        	var nMaxX = system.clientToScreenX(this.getOwnerFrame(), this.getOwnerFrame().width);
        	var nCheckX = system.clientToScreenX(this, Number(this._pdiv_month.width));
        	
        	if (nMaxX < nCheckX) 
        	{
        		nX = 0 - (Number(this._pdiv_month.width) - Number(this.getOffsetWidth()));
        	}		
        	
        	this._pdiv_month.trackPopupByComponent(this._cal_from_date, nX, nY);

        	this.btn_user_setfocus("from" ,sM);	// btn_setfocus
        	this.btn_user_setfocus("to" ,eM);	// btn_setfocus
        	
        }

        // [btn_setfocus]
        this.btn_user_setfocus = function(type,month)
        {
        	for (var i=1; i<=12; i++)
        	{
        		if (i < 10) 
        		{
        			eval("this._pdiv_month.btn_" + type + "_0" + i + ".style.set_border('1 none #808080 ')");
        			eval('this._pdiv_month.btn_' + type + '_0' + i + '.style.set_image("' + "URL('theme://images/btn_WF_Calendamm" + i + "_N.png')" + '");');
        		} 
        		else 
        		{
        			eval("this._pdiv_month.btn_" + type + "_" + i + ".style.set_border('1 none #808080 ')");
        			eval('this._pdiv_month.btn_' + type + '_' + i + '.style.set_image("' + "URL('theme://images/btn_WF_Calendamm" + i + "_N.png')" + '");');
        		}
        	}
        	
        	var nMonth = parseInt(month) + "";
        	
        	eval("this._pdiv_month.btn_" + type + "_" + month + ".style.set_border('1 solid #c00c3f ')");
        	eval('this._pdiv_month.btn_' + type + '_' + month + '.style.set_image("' + "URL('theme://images/btn_WF_Calendamm" + nMonth + "_O.png')" + '");');
        }

        this.btn_common_onclick = function(obj,e) 
        {
        	var type = (obj.name).split("_")[1];
        	
        	this.all["_cal_"+type+"_date"].set_value(this._pdiv_month.all["_stc_"+type+"_year"].text+(obj.name).split("_")[2]);
        	this.btn_user_setfocus(type, (obj.name).split("_")[2]);	// btn_setfocus
        }

        this.pdiv_month_btn_select_onclick = function(obj,e) 
        {
        	this._pdiv_month.closePopup();
        	return;
        }

        this.btn_year_onclick = function(obj,e) 
        {
        	var type = (obj.name).split("_")[2];
        	var year = this._pdiv_month.all["_stc_"+type+"_year"].text;
        	
        	if ((obj.name).indexOf("_pre") != -1) 
        	{
        		year--;
        	} 
        	else 
        	{
        		year++;
        	}
        	
        	this._pdiv_month.all["_stc_"+type+"_year"].set_text(year);
        }

        this.getValue = function() 
        {
        	return {from:String(this._cal_from_date.value).substr(0,6), to:String(this._cal_to_date.value).substr(0,6)};
        }

        this.set_value = function(dateObj) 
        {
        	for (var p in dateObj ) 
        	{
        		this.all["_cal_"+p+"_date"].set_value(dateObj[p]);
        	}
        }

        this.set_essential = function()
        {
        	this._cal_from_date.set_cssclass("essential");
        	this._cal_to_date.set_cssclass("essential");
        }

        this._cal_to_date_canchange = function(obj,e)
        {
        	return true;
        }

        this._cal_to_date_onchanged = function(obj,e)
        {
        	if (this._cal_to_date.value.toString().indexOf("0000") > -1)
        	{
        		this._cal_to_date.set_value("");
        	}
        	
        	if (Base.isEmpty(this._cal_from_date.value)) 
        	{
        		return true;
        	}
        	
        	var fromdt = Base.date.strToDate(this._cal_from_date.value.toString());
        	var todt = Base.date.strToDate(this._cal_to_date.value.toString());
        	var day = Base.date.getDiffDay(fromdt, todt);

        	if (day < 0)
        	{
        		this._cal_from_date.set_value("");
        		this._cal_to_date.set_value("");
        	}	
        }

        this._pdiv_month_oncloseup = function(obj,e)
        {
        	if (Base.isEmpty(this._cal_from_date.value) && !Base.isEmpty(this._cal_to_date.value)) 
        	{
        		this._cal_from_date.set_value("");
        		this._cal_to_date.set_value("");		
        	}
        	
        	if (!Base.isEmpty(this._cal_from_date.value) && Base.isEmpty(this._cal_to_date.value)) 
        	{
        		this._cal_from_date.set_value("");
        		this._cal_to_date.set_value("");		
        	} 	

        	if (this._cal_from_date.value > this._cal_to_date.value)
        	{
        		this._cal_from_date.set_value("");
        		this._cal_to_date.set_value("");		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this._pdiv_month.addEventHandler("oncloseup", this._pdiv_month_oncloseup, this);
            this._pdiv_month.btn_from_01.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_02.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_03.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_04.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_05.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_06.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_07.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_08.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_09.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_10.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_11.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_from_12.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month._btn_from_pre.addEventHandler("onclick", this.btn_year_onclick, this);
            this._pdiv_month._btn_from_post.addEventHandler("onclick", this.btn_year_onclick, this);
            this._pdiv_month.btn_to_01.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_02.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_03.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_04.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_05.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_06.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_07.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_08.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_09.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_10.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_11.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_to_12.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month._btn_select.addEventHandler("onclick", this.pdiv_month_btn_select_onclick, this);
            this._pdiv_month._btn_to_pre.addEventHandler("onclick", this.btn_year_onclick, this);
            this._pdiv_month._btn_to_post.addEventHandler("onclick", this.btn_year_onclick, this);
            this._pdiv_month._Button69.addEventHandler("onclick", this.pdv_cal_Button69_onclick, this);
            this._cal_from_date.addEventHandler("ondropdown", this.cal_date_ondropdown, this);
            this._cal_to_date.addEventHandler("ondropdown", this.cal_date_ondropdown, this);
            this._cal_to_date.addEventHandler("canchange", this._cal_to_date_canchange, this);
            this._cal_to_date.addEventHandler("onchanged", this._cal_to_date_onchanged, this);

        };

        this.loadIncludeScript("MonthCalendarTerm.xfdl", true);

       
    };
}
)();
