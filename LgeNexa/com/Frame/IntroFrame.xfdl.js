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
                this.set_name("introFrame");
                this.set_titletext("Intro Page");
                this._setFormPosition(0,0,1260,564);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">3</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">4</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">5</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">6</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">7</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">8</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static10", "absolute", "0", "0", null, "23", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("h23");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "0", "20", null, null, "0", this);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "0", "20", null, "0", "0", this);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "13.17%", "30.67%", null, null, "13.17%", "30.5%", this);
            obj.set_taborder("4");
            obj.set_image("URL('images::LGE_NEXA_CI.png')");
            obj.style.set_border("0 solid #afafafff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1260, 564, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("introFrame");
            		p.set_titletext("Intro Page");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("IntroFrame.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : IntroFrame.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : Intro 화면
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        
        this.introFrame_onload = function(obj,e)
        {
        	//alert(application.av_vWorkFrameset.separatesize);
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.introFrame_onload, this);

        };

        this.loadIncludeScript("IntroFrame.xfdl", true);

       
    };
}
)();
