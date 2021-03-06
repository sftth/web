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
                this.set_name("dev_index");
                this.set_classname("dev_index");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1224,498);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">dasdf</Col></Row><Row><Col id=\"Column0\">asdfasd</Col><Col id=\"Column1\">dd</Col></Row><Row><Col id=\"Column0\">dddd</Col><Col id=\"Column1\">dd</Col></Row><Row/><Row/><Row><Col id=\"Column0\">d</Col></Row><Row/><Row><Col id=\"Column0\">d</Col></Row><Row><Col id=\"Column0\">d</Col></Row><Row/><Row><Col id=\"Column1\">d</Col><Col id=\"Column0\">d</Col></Row><Row><Col id=\"Column1\">dd</Col><Col id=\"Column0\">d</Col></Row><Row><Col id=\"Column0\">d</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "0", "0", null, "53", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("Form & Script");
            obj.set_cssclass("Guide_header");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "0", "53", "111", "71", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Form size");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "110", "53", null, "71", "0", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WFDA_Data");
            obj.set_text("1224 * 524 (팝업의 경우 Max 1200 * 800을 넘지 않도록 함)");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "123", "111", "71", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Form margin");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "110", "123", null, "71", "0", null, this);
            obj.set_taborder("13");
            obj.set_text("1224 * 524의 폼에 여백없이 컴포넌트를 배치한다.");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "193", "111", "71", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Include library");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "110", "193", null, "71", "0", null, this);
            obj.set_taborder("15");
            obj.set_text("include \"CommonLibrary::Comm.xjs\";");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "263", "111", "147", null, null, this);
            obj.set_taborder("16");
            obj.set_text("exercise");
            obj.set_cssclass("sta_WFDA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "110", "263", null, "147", "0", null, this);
            obj.set_taborder("17");
            obj.set_text("this.form_onload = function(obj:Form, e:nexacro.LoadEventInfo)\r\n{\r\n\tthis.com_fromInit(obj);\r\n}\r\n\r\n\r\nthis.fn_formInit = function()\r\n{\r\n \r\n}");
            obj.set_cssclass("sta_WFDA_Data");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1224, 498, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("dev_index");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("dev_index.xfdl", function(exports) {

        
        this.Button00_onclick = function(obj,e)
        {
        	//trace(this.Dataset00.saveXML());
        	trace(this.Dataset00.saveSSV());
        	//this.Grid00.set_treeinitstatus("expand,null");
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.Grid00.set_treeinitstatus("collapse,null");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.dev_index_onload, this);

        };

        this.loadIncludeScript("dev_index.xfdl", true);

       
    };
}
)();
