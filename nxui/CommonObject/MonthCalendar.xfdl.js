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
                this.set_classname("Guide_15");
                this.set_titletext("월력");
                this._setFormPosition(0,0,100,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new PopupDiv("_pdiv_month", "absolute", "0", "26", "168", "158", null, null, this);
            obj.set_cssclass("pdiv_WF_CalPopup");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1", "1", null, "30", "1", null, this._pdiv_month);
            obj.set_taborder("16");
            obj.set_cssclass("year_bg");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Static("_stc_year", "absolute", "0", "0", "166", "26", null, null, this._pdiv_month);
            obj.set_taborder("17");
            obj.set_text("2015");
            obj.set_cssclass("sta_WF_Calendaryy");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_01", "absolute", "9", "36", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Calendamm1");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_02", "absolute", "46", "36", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_Calendamm2");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_03", "absolute", "83", "36", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Calendamm3");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_04", "absolute", "120", "36", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_Calendamm4");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_05", "absolute", "9", "74", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Calendamm5");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_06", "absolute", "46", "74", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Calendamm6");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_07", "absolute", "83", "74", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_Calendamm7");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_08", "absolute", "120", "74", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_Calendamm8");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_09", "absolute", "9", "112", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_Calendamm9");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_10", "absolute", "46", "112", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_Calendamm10");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_11", "absolute", "83", "112", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Calendamm11");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("_btn_pre", "absolute", "0", "0", "26", "26", null, null, this._pdiv_month);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_CalPrev");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("_btn_post", "absolute", null, "0", "26", "26", "0", null, this._pdiv_month);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_CalNext");
            this._pdiv_month.addChild(obj.name, obj);
            obj = new Button("btn_12", "absolute", "120", "112", "35", "35", null, null, this._pdiv_month);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_Calendamm12");
            obj.style.set_color("dimgray");
            this._pdiv_month.addChild(obj.name, obj);

            obj = new MaskEdit("_msk_date_", "absolute", "200", "0", null, null, "-200", "0", this);
            obj.set_taborder("0");
            obj.style.set_align("left middle");
            obj.set_mask("####-##");
            obj.set_type("string");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("_cal_date", "absolute", "0", "0", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");

            obj = new Button("_btn_monthCal", "absolute", null, "2", "19", "19", "1", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 168, 158, this._pdiv_month,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("pdiv_WF_CalPopup");

            	}
            );
            this._pdiv_month.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 100, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide_15");
            		p.set_titletext("월력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("MonthCalendar.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : MonthCalendar.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : 월력
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
        this.fv_callback = undefined;
        this.parentForm = undefined;
        this.orgValue = undefined;

        
        this.form_onload = function(obj,e)
        {
        	
        }

        this.btn_monthCal_onclick = function(obj,e)
        {
        	this.orgValue = this._cal_date.value;
        	this.fn_openPopupDiv();
        }

        this.fn_openPopupDiv = function()
        {
        	var date = parseInt(this._cal_date.value).toString();
        	var sMonth;

        	if(!LGE.Date.isDate8(date))
        	{
        		var year = (new Date()).getFullYear();
        		this._pdiv_month._stc_year.set_text(year);
        		sMonth = "01";
        	} else {
        		this._pdiv_month._stc_year.set_text((this._cal_date.value).toString().substr(0, 4));
        		sMonth = (this._cal_date.value).toString().substr(4, 2);
        	}
        	
        	
        	var nX = 0;
        	var nY = Number(this.getOffsetHeight() + 1);

        	var nMaxY = system.clientToScreenY(this.getOwnerFrame(), this.getOwnerFrame().height);
        	var nCheckY = system.clientToScreenY(this, Number(this.getOffsetHeight()) + Number(this._pdiv_month.height));
        	
        	if(nMaxY < nCheckY)	{
        		nY = 0 - (Number(this._pdiv_month.height) + 1);
        	}

        	var nMaxX = system.clientToScreenX(this.getOwnerFrame(), this.getOwnerFrame().width);
        	var nCheckX = system.clientToScreenX(this, Number(this._pdiv_month.width));
        	if(nMaxX < nCheckX) {
        		nX = 0 - (Number(this._pdiv_month.width) - Number(this.getOffsetWidth()));
        	}		
        	
        	this._pdiv_month.trackPopupByComponent(this._cal_date, nX, nY);
        	
        	eval("this._pdiv_month.btn_"+ sMonth + ".setFocus();");	
        	
        }

        this.btn_common_onclick = function(obj,e)
        {
        	this._cal_date.set_value(this._pdiv_month._stc_year.text+(obj.name).split("_")[1]);
        	this._pdiv_month.closePopup();
        	this.fn_call_callback();
        	
        	return;
        }

        this.btn_year_onclick = function(obj,e) {
        	var year = this._pdiv_month._stc_year.text;
        	switch ( obj.name ) {
        		case "_btn_pre" :
        			year--;
        			break;
        		case "_btn_post" :
        			year++;
        			break;
        	}
        	this._pdiv_month._stc_year.set_text(year);
        }

        this.getValue = function()
        {
        	var rtn;
        	if(Base.isEmpty(this._cal_date.value))
        	{
        		rtn = "";
        	}
        	else
        	{
        		rtn = this._cal_date.value.toString().substr(0, 6);
        	}
        	
        	return rtn
        }

        this.getDate = function()
        {
        	return this._cal_date.value.toString().substr(0, 6);
        }

        this.set_value = function(date)
        {
        	this._cal_date.set_value(date);
        	this.orgValue = date;
        }

        this.setDate = function(date)
        {
        	this._cal_date.set_value(date);
        	this.orgValue = date;
        }

        this.set_callback = function (obj,callback)
        {
        	if(!Base.isEmpty(callback))
        	{
        		this.fv_callback = callback;
        		this.parentForm = obj;
        	}
        }

        this.set_essential = function ()
        {
        	this._cal_date.set_cssclass("essential");
        }

        this.com_calendar_month_onkillfocus = function(obj,e)
        {
        	this.fn_call_callback();
        }

        
        this.fn_call_callback = function() {
        	if(!Base.isEmpty(this.fv_callback))
        	{
        		if(this.orgValue != this._cal_date.value)
        		{
        			this.orgValue = this._cal_date.value;
        			this.fv_callback.call(this.parentForm, this._cal_date.value);
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onkillfocus", this.com_calendar_month_onkillfocus, this);
            this._pdiv_month.btn_01.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_02.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_03.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_04.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_05.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_06.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_07.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_08.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_09.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_10.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month.btn_11.addEventHandler("onclick", this.btn_common_onclick, this);
            this._pdiv_month._btn_pre.addEventHandler("onclick", this.btn_year_onclick, this);
            this._pdiv_month._btn_post.addEventHandler("onclick", this.btn_year_onclick, this);
            this._pdiv_month.btn_12.addEventHandler("onclick", this.btn_common_onclick, this);
            this._cal_date.addEventHandler("ondropdown", this.cal_date_ondropdown, this);
            this._btn_monthCal.addEventHandler("onclick", this.btn_monthCal_onclick, this);

        };

        this.loadIncludeScript("MonthCalendar.xfdl", true);

       
    };
}
)();
