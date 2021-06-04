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
                this.set_name("GridFilterDiv");
                this.set_classname("GridFilterDiv");
                this.set_titletext("그리드필터");
                this._setFormPosition(0,0,100,50);
            }
            this.style.set_background("#e7e7e7ff");
            this.style.set_border("1 solid #d0d0d0ff,0 none #808080ff,1 solid #bfbfbfff,0 none #808080ff");
            this.style.set_color("transparent");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edt_filter", "absolute", "0", "15", null, "21", "0", null, this);
            obj.set_taborder("2");
            obj.style.set_border("1 solid #bfbfbfff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 100, 50, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("GridFilterDiv");
            		p.set_titletext("그리드필터");
            		p.style.set_background("#e7e7e7ff");
            		p.style.set_border("1 solid #d0d0d0ff,0 none #808080ff,1 solid #bfbfbfff,0 none #808080ff");
            		p.style.set_color("transparent");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("GridFilterDiv.xfdl", function(exports) {
        /**********************************************************************************************
        * SYSTEM      : 
        * BUSINESS    : 
        * FILE NAME   : GridFilterDiv.xfdl
        * PROGRAMMER  : 
        * DATE        : 2016-09-28
        * DESCRIPTION : Grid Filter에서 사용 
        				컴포넌트 개발시에는 include를 절대 하지 않는다.
                        외부함수가 필요시에는 중복되더라도 본 소스내에 재작성한다.
        *----------------------------------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *----------------------------------------------------------------------------------------------
        * ~ 
        *----------------------------------------------------------------------------------------------
        ***********************************************************************************************/

        
        /*--------------------------------------------------------------------------------------------
         * form variables
         --------------------------------------------------------------------------------------------*/
        var pForm = null;
        var fv_value = "";

        
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
         * Form onload event handler - 로드시 초기 지정
         * @param {Form} obj 대상 Form Component
         * @param {LoadEventInfo} e LoadEventInfo
         */
        this.GridFilterDiv_onload = function(obj,e)
        {
        	pForm = Base.XComp.getScriptForm(this.parent);
        	
        	this.resizeComps(obj.getOffsetWidth(), obj.getOffsetHeight());
        }

        
        /***********************************************************************************
        * User Function
        ***********************************************************************************/

        
        /***********************************************************************************
        * Component Event
        ***********************************************************************************/
        /**
         * Form onsetfocus event handler
         * @param {Form} obj 대상 Form Component
         * @param {SetFocusEventInfo} e SetFocusEventInfo
         */
        this.GridFilterDiv_onsetfocus = function(obj,e)
        {
        	// 현재 포커스 정보를 그리드에 지정하여
        	// arrangeAppendFilterComps 후 포커스 지정을 위함.
         	var grid = Base.XComp.getUserProperty(this, "grid");
         	
         	Base.XComp.setUserProperty(grid, "currentFocusDiv", this);
        }

        /**
         * Form onsize event handler - 사이즈 변경 시 컴포넌트 위치조정
         * @param {Form} obj 대상 Form Component
         * @param {SizeEventInfo} e SizeEventInfo
         */
        this.GridFilterDiv_onsize = function(obj,e)
        {
        	this.resizeComps(e.cx, e.cy);
        }

        /**
         * 컴포넌트 위치 조정
         * @param {number} formW Form Width
         * @param {number} formH Form Height
         */
        this.resizeComps = function(formW,formH)
        {
        	var l, t, w, h, gap = 2;
        	
        	l = gap;
        	t = gap;
        	w = formW - (gap * 2);
        	h = formH - (gap * 2);
        	
        	this.edt_filter.move(l, t, w, h);
        }

        /**
         * 컴포넌트 내용 초기화
         */
        this.initValue = function()
        {
        	this.edt_filter.set_value("");
        }

        /**
         * 필터 정보를 화면에 표시
         */
        this.setFilterInfo = function()
        {
        	var grid = Base.XComp.getUserProperty(this, "grid");
        	var type = Base.XComp.getUserProperty(this, "displayType");
        	var columnName = Base.XComp.getUserProperty(this, "filterColumnName");	
        	var filterInfo = Base.XComp.getUserProperty(this, "filterInfo");
        	
        	var refCell = Base.XComp.getUserProperty(this, "refCell");
        	var headCellIndex = LGE.Filter.getCellObjectIndex(refCell);
        	var bodyCellIndex = LGE.Filter.getBodyCellIndex(grid, headCellIndex);

         	if ( type == "number" )
        	{
        		this.edt_filter.set_visible(true);
        		this.edt_filter.set_inputtype("normal"); // 굳이 number 바꿀 필요없음.....
        		
        		if ( !Base.isEmpty(filterInfo) )
        		{			
        			var val = filterInfo[0].value;
        			if ( !Base.isEmpty(val) )
        			{
        				this.edt_filter.set_value(val);
        			}
        		}
        	}
        	else if ( type == "checkbox" )
        	{
        		this.edt_filter.set_visible(false);
        	}
        	else
        	{
        		this.edt_filter.set_visible(true);
        		this.edt_filter.set_inputtype("normal");
        		
        		if ( !Base.isEmpty(filterInfo) )
        		{			
        			var val = filterInfo[0].value;
        			
        			// displaytype 이 combo 이면 초기 입력된 값을 가져옮
        			if(type == "combo")
        			{
        				val = fv_value;
        			}
        			
        			if ( !Base.isEmpty(val) )
        			{
        				this.edt_filter.set_value(val);
        			}
        		}
        	}
        }

        /**
         * onkeydown Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {KeyEventInfo} e KeyEventInfo
         */
        this.edt_filter_onkeydown = function(obj,e)
        {
        	if ( e.keycode == 13 )
        	{
        		var type = Base.XComp.getUserProperty(this, "displayType");

        		// 공백제거 처리
        		if ( this.gfn_allTrim(obj.value) == "" )
        		{
        			// ""는 필터제거 처리하게 됨
        			obj.set_value("");
        		}
        		else if (type == "date")
        		{
        			// "-"문자와 입력문자의 좌우 공백제거 후 필터처리 함
        			obj.set_value(this.gfn_trim(this.gfn_replace(this.gfn_replace(obj.value, "-", ""), ":", "")));
        		}
        		else
        		{
        			// 입력문자의 좌우 공백제거 후 필터처리 함
        			obj.set_value(this.gfn_trim(obj.value));
        		}
        		
        		this.applyNormalFilter("contains", obj.value);
        	}
        }

        /**
         * onsetfocus Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {SetFocusEventInfo} e SetFocusEventInfo
         */
        this.edt_filter_onsetfocus = function(obj,e)
        {
        	var type = Base.XComp.getUserProperty(this, "displayType");
        	
        	// 공백제거 처리
        	if ( this.gfn_allTrim(obj.value) == "" )
        	{
        		// ""는 필터제거 처리하게 됨
        		obj.set_value("");
        	}
        	else if (type == "date")
        	{
        		// "-"문자와 입력문자의 좌우 공백제거 후 필터처리 함
        		obj.set_value(this.gfn_trim(this.gfn_replace(obj.value, "-", "")));
        	}
        	else
        	{
        		// 입력문자의 좌우 공백제거 후 필터처리 함
        		obj.set_value(this.gfn_trim(obj.value));
        	}
        	
        	Base.XComp.setUserProperty(obj, "focusValue", obj.value);
        }

        /**
         * onkillfocus Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {KillFocusEventInfo} e KillFocusEventInfo
         */
        this.edt_filter_onkillfocus = function(obj,e)
        {
        	var type = Base.XComp.getUserProperty(this, "displayType");
        	
        	// 공백제거 처리
        	if ( this.gfn_allTrim(obj.value) == "" )
        	{
        		// ""는 필터제거 처리하게 됨
        		obj.set_value("");
        	}
        	else if (type == "date")
        	{
        		// "-"문자와 입력문자의 좌우 공백제거 후 필터처리 함
        		obj.set_value(this.gfn_trim(this.gfn_replace(obj.value, "-", "")));
        	}
        	else
        	{
        		// 입력문자의 좌우 공백제거 후 필터처리 함
        		obj.set_value(this.gfn_trim(obj.value));
        	}
        	
        	if ( Base.XComp.getUserProperty(obj, "focusValue") != obj.value )
        	{
        		this.applyNormalFilter("contains", obj.value);
        	}
        }

        /**
         * combo type 을 제외한 필터 적용
         * @param {string} operator 연산자
         * @param {*} value 피연산자
         */
        this.applyNormalFilter = function(operator,value) 
        {
        	var grid = Base.XComp.getUserProperty(this, "grid");
        	var columnName = Base.XComp.getUserProperty(this, "filterColumnName");
        	
        	var infos = [];
        	
        	// displayType 이 combo 일 경우 Filter적용을 위해 입력된 값을 CODE로 변환하여 대상을 찾기 때문에
        	// Filter 적용 후 입력값을 CODE에서 VALUE로 변환하기 위해 초기 입력값 관리함
        	fv_value = value;
        	
        	if ( Base.isEmpty(operator) )
        	{
        		// 필터 정보 제거
        		LGE.Filter.removeFilterInfo(grid, columnName);
        	}
        	else
        	{
        		var type = Base.XComp.getUserProperty(this, "displayType");
        		if(type == "combo")
        		{
        			var grid    = Base.XComp.getUserProperty(this, "grid");
        			var refCell = Base.XComp.getUserProperty(this, "refCell");
        			var headCellIndex = LGE.Filter.getCellObjectIndex(refCell);
        			var bodyCellIndex = LGE.Filter.getBodyCellIndex(grid, headCellIndex);
        			var dsName = grid.getCellProperty("body", bodyCellIndex, "combodataset");
        			var codeCol = grid.getCellProperty("body", bodyCellIndex, "combocodecol");
        			var nameCol = grid.getCellProperty("body", bodyCellIndex, "combodatacol");
        			var dsType = Base.XComp.lookup(grid.parent, dsName);
        			
        			if(value != "") 
        			{
        				// 콤보일 경우 비슷한말 검색이 되지 않아 아래 로직으로 변경
         				// value = dsType.lookup(nameCol, value, codeCol);
         				
        				var sRtn = this.gfn_likeSearch(dsType, value, codeCol, nameCol);
        				if(!Base.isEmpty(sRtn)) {
        					value = sRtn;
        				}
        				
        			}
        		}
        		
        		infos.push({
        			'logic': "",
        			'operator': operator,
        			'value': value
        		});
        		
        		// 필터 정보 지정
        		LGE.Filter.setFilterInfo(grid, columnName, infos);	
        	}
        	
        	var visible = grid.vscrollbar ? grid.vscrollbar.visible : false;

        	// 필터 실행
        	LGE.Filter.executeFilter(grid);
        	
        	var visible2 = grid.vscrollbar ? grid.vscrollbar.visible : false;

        	// vscrolbar 의 변화가 있다면 컴포넌트 재정렬
        	if ( visible != visible2 )
        	{
        		/* 2016-05-24 autofil/dynamic Grid 구현 안하므로 스크롤에 따른 재조정 삭제
        		** 스크롤에 따라 다시 그릴 시 filter focus 이동 */
        		//LGE.Filter.arrangeAppendFilterComps(grid);
        	}
        	
        }

        
        this.gfn_likeSearch = function (oDs,value,codeCol,nameCol)
        {
        	var sRtn = "";
        	for(i=0; i<oDs.rowcount; i++)
        	{
        		nRow = oDs.findRowExpr(nameCol + ".toUpperCase().toString().search('"+value.toUpperCase()+"') > -1",i);

        		if(nRow > -1){
        		
        			if(sRtn != ""){
        				sRtn += ","+oDs.getColumn(nRow,codeCol);
        			} else {
        				sRtn += oDs.getColumn(nRow,codeCol);
        			}
        		}
        	}
        	return sRtn;
        }

        
        // 과도한 리소스 호출로 인한 성능저하 때문에 include "lib_xcommon::Comm.xjs";
        // 를 제거하고 CommUtil.xjs 에서 복사
        this.gfn_allTrim = function(strText)
        {
            var tStr = new String(strText);
            var tReturnStr="";
            var i;

            if ( strText != null ) {
                for ( var i = 0; i < tStr.length; i++ ) {
                    if ( tStr.charAt(i) != " " ) {
                        tReturnStr = tReturnStr + tStr.charAt(i);
                    }
                }
            } else {
                return -1;
            }
            
            return tReturnStr;
        }
        this.gfn_trim = function(sValue)
        {
            if (sValue == null) return "";
            if (new String(sValue).valueOf() == "undefined") return "";
            if (new String(sValue) == null) return "";
        	
            var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, '');

            return retVal;
        }

        this.gfn_replace = function (val,strOld,strNew)
        {
        	val = this.gfn_toString(val);
        	val = val.split(eval("/" + strOld + "/g")).join(strNew);
        	// val = val.split(strOld).join(strNew);
        	return val;
        }

        this.gfn_toString = function (val)
        {
        	if (Base.isEmpty(val)){
        		return new String();
        	}
        	return new String(val);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.GridFilterDiv_onload, this);
            this.addEventHandler("onsize", this.GridFilterDiv_onsize, this);
            this.addEventHandler("onsetfocus", this.GridFilterDiv_onsetfocus, this);
            this.edt_filter.addEventHandler("onsetfocus", this.edt_filter_onsetfocus, this);
            this.edt_filter.addEventHandler("onkillfocus", this.edt_filter_onkillfocus, this);
            this.edt_filter.addEventHandler("onkeydown", this.edt_filter_onkeydown, this);

        };

        this.loadIncludeScript("GridFilterDiv.xfdl", true);

       
    };
}
)();
