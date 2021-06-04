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
                this.set_name("Form_Code");
                this.set_visible("true");
                this._setFormPosition(0,0,257,375);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Code", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button_Close", "absolute", "91.44%", "2", null, "26", "0.78%", null, this);
            obj.set_taborder("0");
            obj.set_text("X");
            obj.style.set_font("12 bold Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Add", "absolute", "51", "32", "62", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Save", "absolute", "192", "32", "62", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_Project", "absolute", "5", "68", "249", null, null, "153", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_Code");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"147\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label01", "absolute", "5", null, "75", "30", null, "124", this);
            obj.set_taborder("4");
            obj.set_text("CODE");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_CODE", "absolute", "79", null, "175", "30", null, "124", this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Code", "absolute", "5", null, "75", "30", null, "95", this);
            obj.set_taborder("6");
            obj.set_text("STEP명");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_NAME", "absolute", "79", null, "175", "30", null, "95", this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label12", "absolute", "5", null, "75", "88", null, "9", this);
            obj.set_taborder("8");
            obj.set_text("메모");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea_CONTENT", "absolute", "79", null, "175", "88", null, "9", this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Delete", "absolute", "122", "32", "62", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Delete");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 257, 375, this,
            	//-- Layout function
            	function(p) {
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit_CODE","value","ds_Code","CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit_NAME","value","ds_Code","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","TextArea_CONTENT","value","ds_Code","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form_Code.xfdl", function(exports) {

        this.Button_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.Form_Code_onload = function(obj,e)
        {
        	this.Static_Code.set_text(this.parent.sCode + "명");
        	
        	application.gv_Query = "select * from project_code";
        	application.gv_Query += " where type = '" + this.parent.sCode + "'";
        	application.gv_Query += " order by code";

        	this.transaction("search_code" ,"host::LGE_SWA/Service/search.jsp","","ds_Code=ds_out","","fn_Callback");
        }

        this.fn_Callback = function(SvcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0)
        	{
        		alert(SvcID + " : [" + ErrorCode + "] " + ErrorMsg);
        		return;
        	}
        	
        	if (SvcID == "save_code")
        	{
        		alert("[" + this.parent.sCode + "] 저장완료!");
        		return;
        	}
        }

        this.Button_Add_onclick = function(obj,e)
        {
        	var nRow = this.ds_Code.addRow();
        	
        	this.ds_Code.setColumn(nRow, "TYPE", this.parent.sCode);
        	this.ds_Code.setColumn(nRow, "CODE", this.fn_getMaxCode());
        }

        this.fn_getMaxCode = function()
        {
        trace("fn_getMaxCode");
        	if (this.ds_Code.rowcount <= 1)
        	{
        		return "0001";
        	}
        	
        	var sCode = this.ds_Code.getMax("CODE");
        	
        	sCode = (nexacro.toNumber(sCode) + 1).toString().padLeft(4, "0");
        	
        	return sCode;
        }

        this.Button_Delete_onclick = function(obj,e)
        {
        	if (this.ds_Code.rowcount > 0)
        	{
        		this.alert("삭제할 Code 정보가 없습니다.");
        		return;
        	}
        	
        	if (this.confirm("선택된 Code 를 지우면 프로젝트 정보에도 영향을 줍니다. \n\r그래도 삭제하시겠습니까?"))
        	{
        		this.ds_Code.deleteRow(this.ds_Code.rowposition);
        	}
        }

        this.Button_Save_onclick = function(obj,e)
        {
        	this.transaction("save_code" ,"host::LGE_SWA/Service/save_project_code.jsp","ds_in=ds_Code:U","","","fn_Callback");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Code_onload, this);
            this.Button_Close.addEventHandler("onclick", this.Button_Close_onclick, this);
            this.Button_Add.addEventHandler("onclick", this.Button_Add_onclick, this);
            this.Button_Save.addEventHandler("onclick", this.Button_Save_onclick, this);
            this.Button_Delete.addEventHandler("onclick", this.Button_Delete_onclick, this);

        };

        this.loadIncludeScript("Form_Code.xfdl", true);

       
    };
}
)();
