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
                this.set_name("Temp_05");
                this.set_titletext("Master Detail (n:n)");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">직매입</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">GF사업본부</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">VMI</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Nexacro</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Tobesoft</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">XPlatform</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Grid", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ICON\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Txt\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Txt\">A</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">1</Col><Col id=\"ICON\">URL('theme://images/ico_WF_GridBlue.png')</Col></Row><Row><Col id=\"Txt\">AB</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">2</Col><Col id=\"ICON\">URL('theme://images/ico_WF_GridGreen.png')</Col></Row><Row><Col id=\"Txt\">ABC</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">3</Col><Col id=\"ICON\">URL('theme://images/ico_WF_GridRed.png')</Col></Row><Row><Col id=\"Txt\">ABCD</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">4</Col><Col id=\"ICON\">URL('theme://images/ico_WF_GridYellow.png')</Col></Row><Row><Col id=\"Txt\">ABCDE</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">5</Col><Col id=\"ICON\"/></Row><Row><Col id=\"Txt\">ABCDEF</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"Txt\">ABCDEFG</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">7</Col></Row><Row><Col id=\"Txt\">ABCDEFGH</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">8</Col></Row><Row><Col id=\"Txt\">ABCDEFGHI</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">9</Col></Row><Row><Col id=\"Txt\">ABCDEFGHIJ</Col><Col id=\"Number\">1234567890</Col><Col id=\"No\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_Search", "absolute", "0", "0", null, "39", "0", null, this);
            obj.set_taborder("0");
            obj.set_scrollbars("autohorz");
            obj.set_cssclass("div_WFSA_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "8", "97", "21", null, null, this.div_Search);
            obj.set_taborder("0");
            obj.set_text("Subsidiary");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "97", "8", "150", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("Static03", "absolute", "247", "8", "119", "21", null, null, this.div_Search);
            obj.set_taborder("2");
            obj.set_text("Use Flag");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "366", "8", "150", "21", null, null, this.div_Search);
            obj.set_taborder("3");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "-1", null, null, "8", "0", "0", this.div_Search);
            obj.set_taborder("35");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "30", null, null, "0", this.div_Search);
            obj.set_taborder("36");
            obj.set_text("w\r\n30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "247", "0", "60", null, null, "0", this.div_Search);
            obj.set_taborder("37");
            obj.set_text("w60");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "-1", "0", null, "8", "0", null, this.div_Search);
            obj.set_taborder("38");
            obj.set_text("FIX h8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, null, "68", "21", "28", "8", this.div_Search);
            obj.set_taborder("4");
            obj.set_text("Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_tooltiptext("Inquiry");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "0", "28", null, "0", "0", this.div_Search);
            obj.set_taborder("40");
            obj.set_text("w28");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Data00", "absolute", "0", "53.72%", null, null, "0", "0", this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "23", "190", "24", null, null, this.div_Data00);
            obj.set_taborder("201");
            obj.set_text("Sub Management 2");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data00.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "49", null, null, "0", "21", this.div_Data00);
            obj.set_taborder("209");
            obj.set_binddataset("Grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"226\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" cssclass=\"Cellgrd_WF_Multihead\" text=\"Subsidiary\"/><Cell col=\"2\" rowspan=\"2\" text=\"DC Code\"/><Cell col=\"3\" rowspan=\"2\" text=\"DC Type\"/><Cell col=\"4\" rowspan=\"2\" text=\"Base Address\"/><Cell col=\"5\" rowspan=\"2\" text=\"Detail Address\"/><Cell col=\"6\" rowspan=\"2\" text=\"Zone Type\"/><Cell row=\"1\" text=\"Code\"/><Cell row=\"1\" col=\"1\" text=\"Code Name\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:No\"/><Cell col=\"1\" text=\"bind:Txt\"/><Cell col=\"2\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"3\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/></Band></Format></Formats>");
            this.div_Data00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", null, null, "21", "0", "0", this.div_Data00);
            obj.set_taborder("210");
            obj.set_text("Total : 100");
            obj.set_cssclass("sta_WF_GridTotal");
            this.div_Data00.addChild(obj.name, obj);
            obj = new Button("btn_add00", "absolute", null, "23", "24", "24", "4", null, this.div_Data00);
            obj.set_taborder("211");
            obj.set_cssclass("btn_WF_GridExpand");
            this.div_Data00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "0", null, "23", "0", null, this.div_Data00);
            obj.set_taborder("212");
            obj.set_text("h23");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data00.addChild(obj.name, obj);

            obj = new Div("div_Data", "absolute", "0", "39", null, null, "0", "46.28%", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "23", "190", "24", null, null, this.div_Data);
            obj.set_taborder("0");
            obj.set_text("DC Code Management 1");
            obj.set_cssclass("sta_WF_Title");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "0", null, "23", "0", null, this.div_Data);
            obj.set_taborder("198");
            obj.set_text("h23");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "195", "0", "30", "50", null, null, this.div_Data);
            obj.set_taborder("199");
            obj.set_text("h50");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_Data.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "50", null, null, "0", "20", this.div_Data);
            obj.set_taborder("6");
            obj.set_binddataset("Grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"DC Code\"/><Cell col=\"1\" rowspan=\"2\" text=\"DC Type\"/><Cell col=\"2\" rowspan=\"2\" text=\"Base Address\"/><Cell col=\"3\" rowspan=\"2\" text=\"Detail Address\"/><Cell col=\"4\" rowspan=\"2\" text=\"Zone Type\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"1\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"2\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"3\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_Number\" text=\"bind:Number\"/></Band></Format></Formats>");
            this.div_Data.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", null, null, "21", "0", "0", this.div_Data);
            obj.set_taborder("7");
            obj.set_text("Total : 100");
            obj.set_cssclass("sta_WF_GridTotal");
            this.div_Data.addChild(obj.name, obj);
            obj = new Button("btn_add00", "absolute", null, "23", "24", "24", "4", null, this.div_Data);
            obj.set_taborder("200");
            obj.set_cssclass("btn_WF_GridExpand");
            this.div_Data.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 39, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("autohorz");
            		p.set_cssclass("div_WFSA_Bg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");

            	}
            );
            this.div_Data00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Data,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_Data.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1224, 497, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Temp_01");
            		p.set_titletext("Master Detail (n:n)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("foldUnfold.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("foldUnfold.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        var fv_orgPosDiv1Bottom;
        var fv_orgPosDiv2Top;

        
        this.Temp_05_onload = function(obj,e)
        {
        	// 오리지널 위치를 폼변수에 저장
        	fv_orgPosDiv1Bottom = this.div_Data.bottom;
        	fv_orgPosDiv2Top = this.div_Data00.top;
        }

        
        // 상단 그리드 확장/축소
        this.div_Data_btn_fold_onclick = function(obj,e)
        {
        	if(obj.cssclass == "btn_WF_GridReduce") 
        	{
        		// 복귀
        		this.div_Data.set_bottom(fv_orgPosDiv1Bottom);
        		obj.set_cssclass("btn_WF_GridExpand");
        		// 대상이 아닌 div도 북귀
        		this.div_Data00.set_visible(true);
        	} else {
        		// 확장(원하는 위치 지정)
        		this.div_Data.set_bottom(0);
        		obj.set_cssclass("btn_WF_GridReduce");
        		// 대상이 아닌 div visible = false 처리
        		this.div_Data00.set_visible(false);
        	}
        }

        

        // 하단 그리드 확장/축소
        this.div_Data00_btn_add00_onclick = function(obj,e)
        {
        	if(obj.cssclass == "btn_WF_GridReduce") 
        	{
        		// 복귀
        		this.div_Data00.set_top(fv_orgPosDiv2Top);
        		obj.set_cssclass("btn_WF_GridExpand");
        		// 대상이 아닌 div도 북귀
        		this.div_Data.set_visible(true);		
        	} else {
        		// 확장(원하는 위치 지정)
        		this.div_Data00.set_top(39);
        		obj.set_cssclass("btn_WF_GridReduce");
        		// 대상이 아닌 div visible = false 처리
        		this.div_Data.set_visible(false);		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Temp_05_onload, this);
            this.div_Data00.btn_add00.addEventHandler("onclick", this.div_Data00_btn_add00_onclick, this);
            this.div_Data.btn_add00.addEventHandler("onclick", this.div_Data_btn_fold_onclick, this);

        };

        this.loadIncludeScript("foldUnfold.xfdl", true);

       
    };
}
)();
