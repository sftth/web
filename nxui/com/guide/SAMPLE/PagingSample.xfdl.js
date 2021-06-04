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
                this.set_name("PagingSample");
                this.set_classname("PagingSample");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_COUNT\" type=\"int\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu_list", this);
            obj._setContents("<ColumnInfo><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"site_code\" type=\"STRING\" size=\"256\"/><Column id=\"menu_nm\" type=\"STRING\" size=\"256\"/><Column id=\"idiom_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_path\" type=\"STRING\" size=\"256\"/><Column id=\"source_nm\" type=\"STRING\" size=\"256\"/><Column id=\"menu_gbn\" type=\"STRING\" size=\"256\"/><Column id=\"menu_desc\" type=\"STRING\" size=\"256\"/><Column id=\"menu_level\" type=\"STRING\" size=\"256\"/><Column id=\"sort_no\" type=\"STRING\" size=\"256\"/><Column id=\"menu_grp\" type=\"STRING\" size=\"256\"/><Column id=\"use_fg\" type=\"STRING\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "48.83%", "1.3%", null, null, "45.7%", "95.31%", this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "6", "44", "554", "506", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_menu_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:menu_nm\"/><Cell col=\"1\" text=\"bind:menu_level\"/><Cell col=\"2\" text=\"bind:menu_id\"/><Cell col=\"3\" text=\"bind:menu_path\"/><Cell col=\"4\" text=\"bind:menu_grp\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging", "absolute", "6", "552", "554", "22", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("CommonObject::Paging.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("PagingSample");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "CommonObject::Paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PagingSample.xfdl", "CommonLibrary::Comm.xjs");
        this.registerScript("PagingSample.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("CommonLibrary::Comm.xjs", null, exports); }	//include "CommonLibrary::Comm.xjs";

        this.LIST_COUNT = 20; // 한 페이지에 보여줄 
        this.PAGE_COUNT = 10; // 페이지 번호 표시 개수

        this.PagingSample_onload = function(obj,e)
        {
        	// 페이징을 사용하기 위해 초기화 함수를 호출한다.
        	this.div_paging.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, obj);	
        }

        this.Button00_onclick = function(obj,e)
        {
        	// 버튼 클릭 시 현재 페이지 번호로 데이터를 조회한다.
        	var page = this.div_paging.getCurrentPage();
        	
        	this.searchData(page);
        }

        this.searchData = function(page)
        {
        	var sUrl, sInDs, sOutDs, sArg, sCallback, bAsync, nDataType, bCompress;
        	sUrl = "";
        	
        	sUrl			= application.services["host"].url;
        	sInDs 			= "";
        	sOutDs			= "";	
        	sArg  			= "list_count=" + this.LIST_COUNT + " page_no=" + page;
        	sCallback 		= "serviceCallback";
        	bAsync			= true;
        	nDataType		= 0;
        	bCompress		= false;
        	
        	//조회
        		sUrl   += "cop/cmm/menuMangement.do";
        		sOutDs  = "ds_menu_list=dsMenuList"; 
        		sArg    += " lang_cd='kr' use_fg='Y' menu_nm='' site_code='001'";
        		
        	
        	this.transaction( "qwe", sUrl, sInDs, sOutDs, sArg, sCallback, bAsync, nDataType, bCompress);
        	
        }

        this.serviceCallback = function(id,cd,msg)
        {
        	// 서버로부터 받은 총 데이터 건 수로 페이징 구성
        	var totalCount = this.ds_menu_list.getRowCount();
        	
        	this.div_paging.setPage(totalCount);
        	
        }

        // 페이지가 변경되었을 때 호출되는 함수로 변경된 page 번호가 넘어온다.
        this.onChangePage = function(page)
        {
        	// 여기서 this 는 initPaging 에서 4번째 인자로 지정한 scope 이다. (본 샘플에서는 Form)
        	this.searchData(page);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.PagingSample_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("PagingSample.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
