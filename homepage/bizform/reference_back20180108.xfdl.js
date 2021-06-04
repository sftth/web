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
                this.set_name("reference_room");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,497);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filegubn\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"realname\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"STRING\" size=\"256\"/><Column id=\"update_date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"filename\">넥사크로 제품 소개서</Col><Col id=\"realname\">nexacro_Product_Description_kor.pdf</Col><Col id=\"filesize\">6100</Col><Col id=\"update_date\">20170721</Col></Row><Row><Col id=\"filename\">넥사크로 초보자를 위한 자습서</Col><Col id=\"realname\">nexacro_SelfStudy.pdf</Col><Col id=\"filesize\">2574</Col><Col id=\"update_date\">20170721</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_01", "absolute", "0", "0", "1224", null, null, "0", this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "40", null, null, "0", "0", this.div_01);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.style.set_border("0 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.set_binddataset("dsFile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"400\"/><Column size=\"431\"/><Column size=\"134\"/><Column size=\"131\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"설명\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"사이즈 (Kb)\"/><Cell col=\"4\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell style=\"selectfont: ;\"/><Cell col=\"1\" style=\"align:left;padding:0 0 0 10;selectfont: ;\" text=\"bind:filename\"/><Cell col=\"2\" style=\"align:left;padding:0 0 0 10;selectfont: ;\" text=\"bind:realname\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;selectfont: ;\" text=\"bind:filesize\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center;selectfont: ;\" text=\"bind:update_date\"/></Band></Format></Formats>");
            this.div_01.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "93.71%", "7", null, "28", "0.49%", null, this.div_01);
            obj.set_taborder("1");
            obj.set_text("찾 기");
            obj.set_visible("false");
            this.div_01.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "75.41%", "7", null, "28", "6.37%", null, this.div_01);
            obj.set_taborder("2");
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
            		p.set_classname("reference_room");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("reference_back20180108.xfdl", function(exports) {

        this.reference_room_onload = function(obj,e)
        {
        	this.fn_resize();
        }

        
        this.reference_room_onsize = function(obj,e)
        {
        	this.fn_resize();
        }

        this.fn_resize = function ()
        {
        	this.div_01.set_left((application.mainframe.width - 1224) /2);
        }

        
        this.div_01_Grid00_oncellclick = function(obj,e)
        {
        	var sFile = this.dsFile.getColumn(e.row,"realname")
        	system.execBrowser(application.services["host"].url + "homepage/file/" + sFile);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.reference_room_onload, this);
            this.addEventHandler("onsize", this.reference_room_onsize, this);
            this.div_01.Grid00.addEventHandler("oncellclick", this.div_01_Grid00_oncellclick, this);
            this.div_01.btn_search.addEventHandler("onclick", this.div_01_btn_search_onclick, this);

        };

        this.loadIncludeScript("reference_back20180108.xfdl", true);

       
    };
}
)();
