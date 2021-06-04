﻿(function()
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
                this.set_name("faq");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"detail_url\" type=\"STRING\" size=\"256\"/><Column id=\"update_date\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">운영전환시 성능개선을 위한 퀵 가이드</Col><Col id=\"detail_url\">faq2.html</Col><Col id=\"update_date\">20170722</Col></Row><Row><Col id=\"title\">넥사크로 플랫폼 패치 가이드</Col><Col id=\"detail_url\">faq3.html</Col><Col id=\"update_date\">20170911</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_01", "absolute", "0", "0", "1224", null, null, "0", this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "40", null, null, "0", "0", this.div_01);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.style.set_border("0 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"1029\"/><Column size=\"170\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"제 목\"/><Cell col=\"1\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell style=\"align:left;padding:0 0 0 10;color:black;color2:black;selectfont: ;\" text=\"bind:title\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;selectfont: ;\" text=\"bind:update_date\"/></Band></Format></Formats>");
            this.div_01.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "93.71%", "7", null, "28", "0.49%", null, this.div_01);
            obj.set_taborder("4");
            obj.set_text("찾 기");
            obj.set_visible("false");
            this.div_01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "75.41%", "7", null, "28", "6.37%", null, this.div_01);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.div_01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 0, this.div_01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div00");

            	}
            );
            this.div_01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("faq");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("faq.xfdl", function(exports) {
        this.faq_onload = function(obj,e)
        {
        	this.fn_resize();
        }

        this.faq_onsize = function(obj,e)
        {
        	this.fn_resize();
        }

        this.fn_resize = function ()
        {
        	this.div_01.set_left((application.mainframe.width - 1224) /2);
        }

        this.div_01_Grid00_oncellclick = function(obj,e)
        {
        	var sHtml = this.dsList.getColumn(e.row, "detail_url");
        	application.gv_faqHtml = sHtml;
        	application.mainframe.vFramesetMain.headFrame.form.fn_menuOpen("bizform::faq_detail.xfdl");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.faq_onload, this);
            this.addEventHandler("onsize", this.faq_onsize, this);
            this.div_01.Grid00.addEventHandler("oncellclick", this.div_01_Grid00_oncellclick, this);

        };

        this.loadIncludeScript("faq.xfdl", true);

       
    };
}
)();
