/**
 * LG Electronics Filter Library
   본 Library는 화면에서 직접호출 금지
  */
 
if (!JsNamespace.exist("LGE.Filter"))
{

	/*============================================================================================
	 * @define	 	JSLib.json	 
	 * @memberof 	LgeLibrary	 
	 * @namespace 	LGE.Filter
	 * @author 		admin
	 =============================================================================================*/
    JsNamespace.declare("LGE.Filter", {

		tGrid				: null,			// 대상그리드
        ffobj 				: undefined,	// 호출 form
        
        /**
		 * Grid head에 filer 기능 추가하기 초기화
		 * @param {Grid} grid 대상 Grid Component
         * @return 
         * @example
         *
         * @memberOf 
         */
        initGridHeadAppendFilter : function(grid, obj)
        {
			this.tGrid = grid
			this.ffobj = obj;			
			
			
			var pThis = LGE.Filter;
			var oBindDs = grid.getBindDataset();			
			
			// 대상이 이미 초기화 되었는지 확인
			if ( Base.XComp.getUserProperty(grid, "initGridHeadAppendFilter") )
			{
				return;
			}
			
			// 필터영역(Div) 컴포넌트 name 을 담아둘 속성 추가
			Base.XComp.setUserProperty(grid, "appendFilterCompNameList", []); 
			
			// 필터적용 정보를 담아둘 속성 추가
			Base.XComp.setUserProperty(grid, "filterInfos", {});
			
			// 사용자에 의해 셀이 이동된 경우 필터 관련 컴포넌트 재배치
			pThis.setUserGridOnCellMoved(grid, pThis.arrangeAppendFilterComps, obj);
			
			// 사용자에 의해 컬럼 사이즈가 변경된 경우 필터 관련 컴포넌트 재배치
			pThis.setUserGridOnColResized(grid, pThis.arrangeAppendFilterComps, obj);

			// add onhscroll handler - 가로 스크롤 발생 시 컴포넌트 재배치
			grid.addEventHandler("onhscroll", pThis.arrangeAppendFilterComps, obj);
			
			// add onselectchanged handler - 데이터 조회시
			grid.addEventHandler("onselectchanged", pThis.arrangeAppendFilterComps, obj);
			
			// add onrowsetchanged handler - autofit 적용시 필터작동후 깨짐			
			// oBindDs.addEventHandler("onrowsetchanged", pThis.arrangeAppendFilterComps, obj);
			
			
			// 초기화 설정 완료 속성 지정 - 초기화 재설정 방지용
			Base.XComp.setUserProperty(grid, "initGridHeadAppendFilter", true);	
        },


        /**
		 * Grid head append filter 보이기
		 * @param {Grid} grid 대상 Grid Component
		 * @param {Form} obj  대상 Form
         * @return 
         * @example
         *
         * @memberOf Inject.Filter
         */
        showHeadAppendFilter : function(grid, obj)
		{
		
			var pThis = LGE.Filter;
			
			var index = Base.XComp.getUserProperty(grid, "appendHeadRowIndex");

			if ( Base.isUndefined(index) )
			{
				// 신규 Row 추가
				index = grid.appendContentsRow("head");
				// Grid Head-band size 변경
				grid.setFormatRowProperty(index,"size",23);

				
				// 추가된 head row index를 담아두어 제거시 사용
				Base.XComp.setUserProperty(grid, "appendHeadRowIndex", index);
				
				// Grid Head 영역의 각 cell에 필터 컴포넌트 생성
				pThis.arrangeAppendFilterComps(grid, obj);
			}
		},


        /**
		 * Grid head append filter 숨기기 (필터제거 포함)
		 * @param {Grid} grid 대상 Grid Component
         * @return 
         * @example
         *
         * @memberOf Inject.Filter
         */
		hideHeadAppendFilter : function(grid)
		{
			var pThis = LGE.Filter;
			
			var index = Base.XComp.getUserProperty(grid, "appendHeadRowIndex");
			if ( !Base.isUndefined(index) )
			{
				grid.deleteContentsRow("head", index);
				
				// Div 숨기기 및 값 초기화
				var comps = grid.parent.components;
				var comp, nameList = Base.XComp.getUserProperty(grid, "appendFilterCompNameList");
				for (var i=0,len=nameList.length; i<len; i++)
				{
					comp = comps[nameList[i]];
					if ( comp )
					{
						comp.set_visible(false);			
						comp.initValue();
					}
				}
						
				// 정보 초기화
				Base.XComp.deleteUserProperty(grid, "appendHeadRowIndex");
				
				pThis.clearFilter(grid);
			}
		},
			
					
		arrangeAppendFilterComps : function(grid, obj, e) 
		{
			var pThis = LGE.Filter;
			var index = Base.XComp.getUserProperty(grid, "appendHeadRowIndex");
			
			if ( Base.isUndefined(index) ) return;
			
			// 스크롤 이벤트에 의해 호출된 경우
			var adjustRectSize = 0;
			
			if ( e ) 
			{
				switch(e.type)
				{
					// 아래의 경우 처리 불필요
					case 'trackfirstover' :
					case 'tracklastover' :
					case 'trackstart' :
						return;
						break;
					case 'track' :
					case 'pageleft' :
					case 'pageright' :
						// 이 type 으로 이벤트가 발생한 시점에 rect이 정확치 않다.	
						// getCellRect 에서 scroll 값을 참조하는데 scroll 이벤트 발생 후 값이 반영되는 듯 하다.
						Base.XComp.Event.requestAnimationFrame(pThis.arrangeAppendFilterComps, obj, grid);
						return;
						break;
				}
			} else {

			}

			
			var form = grid.parent;
			var nameList = Base.XComp.getUserProperty(grid, "appendFilterCompNameList");
			var comp, comps = form.components;
			for (var i=0,len=nameList.length; i<len; i++)
			{
				comp = comps[nameList[i]];
				if ( comp )
				{
					comp.set_visible(false);
				}
			}	
			
			var filterInfos = Base.XComp.getUserProperty(grid, "filterInfos");
			
			var gridLeftPos = grid.getOffsetLeft();
			var gridTopPos = grid.getOffsetTop();
			var gridWidth = grid.getOffsetWidth();
			var gridPos = [gridLeftPos, gridTopPos, gridLeftPos + gridWidth, gridTopPos + grid.getOffsetBottom()];
			var borderWidths = Base.XComp.Style.getBorderWidth(grid);
			var scrollWidth = grid.vscrollbar.max == 0 ? 0 : 15;		
			

			
			var rect, rects = [];
			var cellCnt = grid.getCellCount("head");
			var bodyCellIndex, columnName, comp, name, type, info;
			var col, colspan, band, pivotIndex;
			var l, t, w, h;
			
			// band "left", "body", "right" 를 고려하여 현재 보이는 셀 영역을 찾는다.
			var hScrollPos = grid.hscrollbar ? grid.hscrollbar.pos : 0;
			var hScrollMax = grid.hscrollbar ? grid.hscrollbar.max : 0;
			var vScrollWidth = grid.vscrollbar.max == 0 ? 0 : 15;
			

			
			var areaLeft = 0;
			var areaRight = grid.getOffsetWidth(); - vScrollWidth;
			var makeInfo = [];
			
			// head 'left' and 'right' band
			for (var i=0; i<cellCnt; i++)
			{
				if ( grid.getCellProperty("head", i, "row") == index )
				{
					col = grid.getCellProperty("head", i, "col");
					band = grid.getFormatColProperty(col, "band");
					
					if ( band == "body" ) continue;
					
					//  0이상:Body 영역의 Row / -1:Head 영역 / -2:Summ(Summary) 영역.
					rect = grid.getCellRect(-1, i, Base.decode(band, "left", -1, "right", -2, 0));
					
					if ( band == "left" )
					{
						l = rect.left;
						r = rect.right;
						areaLeft = Math.max(areaLeft, rect.right);
					}
					else if ( band == "right" )
					{
						l = rect.left - hScrollMax;
						
						areaRight = Math.min(areaRight, l);
					}
					
					makeInfo.push({
						'cell': i, 
						'left': l,
						'top': rect.top,
						'width': rect.width,
						'height': rect.height
					});
				}
			}
			
			
			// head 'body' band	
			for (var i=0; i<cellCnt; i++)
			{	
			
				
			
				if ( grid.getCellProperty("head", i, "row") == index )
				{
					col = grid.getCellProperty("head", i, "col");
					band = grid.getFormatColProperty(col, "band");
								
					if ( band == "body" )
					{
						rect = grid.getCellRect(-1, i, 0);
						
						l = rect.left;
						r = rect.right;
						
						if ( r > areaLeft && l < areaRight )
						{
							
							
							if ( l < areaLeft )
							{
								l = areaLeft;
							}
							
							if ( r > areaRight )
							{
								if((i == cellCnt-1))
								{
									r = (areaRight - 2) - vScrollWidth;
								} else {
									r = areaRight - 2;
								}
							}

							w = r - l;
							
							

							
							
							
							
							// 보이는 셀 영역 최소 기준 값 적용
							//if ( w >= 50 )
							//{
								makeInfo.push({
									'cell': i, 
									'left': l,
									'top': rect.top,
									'width': w,
									'height': rect.height
								});	
							//}
						} else {
							
						}
					}
				}
			}
			

			// 현재 보이는 cell 영역에 필터 입력 영역 생성
			var len = makeInfo.length;
			var info;

			for (var i=0; i<len; i++)
			{
				info = makeInfo[i];
				
				bodyCellIndex = pThis.getBodyCellIndex(grid, info.cell);
				columnName    = pThis.getBindColumnNameByIndex(grid, bodyCellIndex);
				type = grid.getCellProperty("body", bodyCellIndex, "displaytype");
				
				
				if(Base.isEmpty(columnName)) continue;
				

				
				if ( Base.isUndefined(type) ) type = "normal";
				
				name = grid.name + "_headAppendComp" + i;
				
				// 컴포넌트가 존재하지 않으면 추가
				if ( Base.array.indexOf(nameList, name) < 0 )
				{
					nameList.push(name);
					
					comp = new Div(name, "absolute", 0, 0, 0, 0); 
					comp.style.set_border("0 none , 1 solid #bfbfbfff , 0 none , 1 solid #bfbfbfff");
					comp.set_scrollbars("none");
					comp.set_async(false);
					comp.set_visible(false);
					form.addChild(comp.name, comp);
					comp.set_url("CommonObject::GridFilterDiv.xfdl");
					
					comp.addEventHandler("onkeydown", pThis._resizeFilter, pThis);	
					
					comp.show();
				}
				else
				{
					comp = form.components[name];
					
					// 내용 초기화
					comp.initValue();
				}
				
				// Div에 참조값 지정
				Base.XComp.setUserProperty(comp, "grid", grid); 
				Base.XComp.setUserProperty(comp, "refCell", pThis.getGridCellObject(grid, "head", info.cell));
				Base.XComp.setUserProperty(comp, "displayType", type);
				Base.XComp.setUserProperty(comp, "filterColumnName", columnName);
				Base.XComp.setUserProperty(comp, "filterInfo", filterInfos[columnName]);
				
				// 필터 정보 지정
				comp.setFilterInfo();
				
				// 위치 조정
				l = gridPos[0] + info.left;
				t = gridPos[1] + info.top + borderWidths[1];
				w = info.width ;
				h = info.height - 1;

				comp.move(l, t, w, h);
				comp.set_visible(true);
			}
			
			var div = Base.XComp.getUserProperty(grid, "currentFocusDiv");
			
			//if ( !Base.isEmpty(div) ) div.setFocus();
		},


		_resizeFilter : function(obj, e)
		{
			if ( e.keycode == 13 )
			{
				var info = {

				};

				LGE.Filter.arrangeAppendFilterComps(this.tGrid); 
			}
		},



		/**
		 * Grid head append filter 기능에 추가된 컴포넌트 제거
		 * @param {Grid} grid 대상 Grid Component
		 */
		removeAppendFilterComps : function(grid)
		{
			var form = grid.parent;
			var comps = form.components;
			var comp, nameList = Base.XComp.getUserProperty(grid, "appendFilterCompNameList");
			var removed;
			for (var i=0,len=nameList.length; i<len; i++)
			{
				comp = comps[nameList[i]];
				if ( comp )
				{
					removed = form.removeChild(comp.name);
					removed.destroy();
				}
			}
		},


		// 필터 처리 core function

		/**
		 * 대상 그리드에서 주어진 컬럼에 해당하는 필터 정보를 반환한다.
		 * @param {Grid} grid 대상 Grid Component
		 * @param {string} columnName 적용할 조건식
		 * @return {array} 필터 정보로 {logic, operator, value} 형태의 object 배열이다.
		 */
		getFilterInfo : function(grid, columnName)
		{
			var filterInfos = Base.XComp.getUserProperty(grid, "filterInfos");

			return filterInfos[columnName];
		},

		/**
		 * 대상 그리드에 주어진 컬럼에 해당하는 필터 정보를 지정한다.
		 * @param {Grid} grid 대상 Grid Component
		 * @param {string} columnName 적용할 조건식
		 * @param {array} datas 필터 데이터로 {logic, operator, value} 형태의 object 배열이다.
		 */
		setFilterInfo : function(grid, columnName, datas)
		{
			var filterInfos = Base.XComp.getUserProperty(grid, "filterInfos");

			filterInfos[columnName] = datas;
		},

		/**
		 * 대상 그리드에 주어진 컬럼에 해당하는 필터 데이터를 제거한다.
		 * @param {Grid} grid 대상 Grid Component
		 * @param {string} columnName 대상 데이터셋 컬럼명
		 */
		removeFilterInfo : function(grid, columnName) 
		{
			var filterInfos = Base.XComp.getUserProperty(grid, "filterInfos");
			var filterInfo = filterInfos[columnName];
			
			if ( !Base.isUndefined(filterInfo) )
			{
				filterInfo = null;
				delete filterInfos[columnName];
			}
		},

		/**
		 * 대상 그리드 필터 실행
		 * @param {Grid} grid 대상 Grid Component
		 */
		executeFilter : function(grid) 
		{	
			var pThis = LGE.Filter;
			
			var ds = Base.XComp.lookup(grid.parent, grid.binddataset);
			
			var filterString = "";
			var filterInfos = Base.XComp.getUserProperty(grid, "filterInfos");
			var filterInfo;
			var info, colType, logic;
			
			// 필터 항목의 데이터를 추출하여 filter string 을 만든다.
			for (var columnName in filterInfos )
			{
				if ( filterInfos.hasOwnProperty(columnName) )
				{
					if ( !Base.isEmpty(filterString) )
					{
						filterString += " && ";
					}
					
					//trace("columnName : " + columnName);
					
					if(Base.isEmpty(columnName))
					{
						continue;
					}
					
					
					filterInfo = filterInfos[columnName];
					colType = ds.getColumnInfo(columnName).type;
					
					filterString += "(";
					
					for (var i=0,len=filterInfo.length; i<len; i++)
					{
						info = filterInfo[i];
						logic = info.logic;
						
						if ( i > 0  )
						{			
							if ( logic == "and" )
							{
								filterString += " && ";
							}
							else if ( logic == "or" )
							{
								filterString += " || ";
							}
						}
						
						filterString += pThis.getFilterExprString(columnName, colType, info.operator, info.value); 
					}
					
					filterString += ")";
				}
			}
			
			//trace.debug("filter==>"+filterString);
			
			// 필터 적용
			ds.filter(filterString);
		},

		/**
		 * 현재 적용된 필터를 제거한다.
		 * @param {Grid} grid 대상 Grid Component
		 */
		clearFilter : function(grid)
		{
			// 데이터셋 필터 제거
			var ds = Base.XComp.lookup(grid.parent, grid.binddataset);
			ds.filter("");
			
			// 정보 초기화
			Base.XComp.setUserProperty(grid, "filterInfos", {});
		},

		/**
		 * 필터 조건문 문자열을 반환
		 * @param {string} columnName 필터 대상 데이터셋 컬럼명
		 * @param {string} colType 필터 대상 데이터셋 컬럼형
		 * @param {string} operator 연산자
		 * @param {*} value 피연산자 값
		 */
		getFilterExprString : function(columnName, colType, operator, value)
		{
			var expr = "";
			switch(operator) 
			{
				case 'equal' :
					expr = "==" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);
				break;
				case 'notEqual' :					
					expr = "!=" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);
				break;
				case 'greaterThan' :
					expr = ">" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);					
				break;
				case 'greaterThanOrEqual' :
					expr = ">=" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);					
				break;
				case 'lessThan' :
					expr = "<" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);					
				break;
				case 'lessThanOrEqual' :
					expr = "<=" + ( colType == "STRING" ? nexacro.wrapQuote(value) : value);			
				break;
				case 'startWith' :
					expr = ".toString().substr(0, "+value.length+") == '" + value + "'";
				break;
				case 'endWith' :
					expr = ".toString().substr("+columnName+".toString().length-"+value.length+") == '" + value + "'";
				break;
				case 'contains' :
					expr = ".toString().toUpperCase().search('"+value.toUpperCase()+"') > -1";
				break;
			}
			
			if ( !Base.isEmpty(expr) )
			{
				var aValue = value.split(",");
				if(aValue.length > 1){
					for(i=0; i<aValue.length; i++)
					{
						if(i == 0){
							expr = "(" + columnName + ".toString().search('"+aValue[i]+"') > -1" + ")";
						} else {
							expr += " || (" + columnName + ".toString().search('"+aValue[i]+"') > -1" + ")";
						}
					}
					
				} else {
					expr = columnName + expr;
				}			
			}
			
			return expr;
		},


		// Grid Utility function

		/**
		 * Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
		 * @param {Grid} grid 대상 Grid Component
		 * @param {string} band 얻고자 하는 cell 의 band (head/body/summ);
		 * @param {number} index 얻고자 하는 cell 의 index
		 * @return {object} cell object
		 */
		getGridCellObject : function(grid, band, index)
		{
			// 내부속성을 통해 얻어온다.
			var refCell;
			var format = grid._curFormat;
			if (format)
			{
				if ( band == "head" )
				{
					refCell = format._headcells[index];
				}
				else if ( band == "body" )
				{
					refCell = format._bodycells[index];
				}
				else if ( band == "summ" || band == "summary" )
				{
					refCell = format._summcells[index];
				}
			}
			
			return refCell;
		},

		/**
		 * cell object에서 index 를 얻어온다. (Grid 내부 속성이므로 get 용도로만 사용)
		 * @param {object} cell 대상 cell object
		 * @return {number} cell index
		 */
		getCellObjectIndex : function(cell)
		{
			return cell._cellidx;
		},

		/**
		 * body cell index로 binding 된 컬럼명을 얻어온다.
		 * @param {Grid} grid 대상 Grid Component
		 * @param {number} index body cell index
		 */
		getBindColumnNameByIndex : function(grid, index) 
		{
			var text = "";
			var columnid = "";
			var subCell = grid.getCellProperty("body", index, "subcell");
			if ( subCell > 0 )
			{
				text = grid.getSubCellProperty("body", index, 0, "text");
			}
			else
			{
				text = grid.getCellProperty("body", index, "text");
			}

			if ( !Base.isEmpty(text) && text != null && text != "undefinded" && text != "" )
			{
				if ( text.search(/^BIND\(/) > -1 ) 
				{	
					columnid = text.replace(/^BIND\(/, "");
					columnid = columnid.substr(0, columnid.length-1);
				} 
				else if ( text.search(/^bind:/) > -1 ) 
				{
					columnid = text.replace(/^bind:/, "");
				}
			}
			
			return columnid;
		},

		/**
		 * head cell에 match되는 body cell을 얻어온다
		 * @param {Grid} grid 대상 Grid Component
		 * @param {number} headCellIndex head cell index
		 * @param {boolean=} useColspan head cell 이 colspan 일 경우에도 반환값을 받을지 여부
		 */
		getBodyCellIndex : function(grid, headCellIndex, useColspan) 
		{	
			// Max Head Row Index
			var maxHeadRow = 0;
			for (var i=0, len=grid.getCellCount("head"); i<len; i++) 
			{
				var row = grid.getCellProperty("head", i, "row");
				if (maxHeadRow < row) 
				{
					maxHeadRow = row;
				}
			}
			// Max Body Row Index
			var maxBodyRow = 0;
			for (var i=0, len=grid.getCellCount("body"); i<len; i++) 
			{
				var row = grid.getCellProperty("body", i, "row");
				if (maxBodyRow < row) 
				{
					maxBodyRow = row;
				}
			}
			
			if (maxHeadRow == 0 && maxBodyRow == 0) 
			{
				return headCellIndex;
			}
			
			// Body Row 가 1개 이상일 경우
			// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
			// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.			
			var cellIndex = -1;
			var sRow = -1;
			var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
			var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
			var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));				
			
			if (maxHeadRow > maxBodyRow) 
			{
				sRow = nRow - (maxHeadRow - maxBodyRow);
				sRow = (sRow < 0 ? 0 : sRow);
			}
			else 
			{
				sRow = nRow;
			}
			
			var cRow, cCol, cColspan;
			for (var i=0, len=grid.getCellCount("body"); i<len; i++) 
			{
				cRow = parseInt(grid.getCellProperty("body", i, "row"));
				cCol = parseInt(grid.getCellProperty("body", i, "col"));	
				cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));					

				// colspan 이 적용된 cell 도 반환값을 사용할 경우 첫번째 항목에 매칭되는 index
				if ( useColspan )
				{
					if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
					{		
						cellIndex = i;
						break;
					}		
				}
				else
				{
					if (sRow == cRow && nCol == cCol && nColspan == cColspan) 
					{		
						cellIndex = i;
						break;
					}
				}
			}
			return cellIndex;
		},

		/**
		 * Grid column 이 사용자에 의해 resizing 중인지 여부를 반환
		 * @param {Grid} grid 대상 Grid Component
		 * @return {boolean} resizing 여부 반환
		 */
		isGridColResizing : function(grid)
		{
			// 내부 속성을 확인한다.
			var resizer = grid._resizer_elem;
			if ( resizer && resizer._is_tracking )
			{
				return true;
			}
			return false;
		},

		/**
		 * column resize 가 완료되었을 때 주어진 함수를 호출한다.<br>
		 * (Column resize 이벤트가 없으므로 내부속성을 이용하여 확인한다.)
		 * @param {Grid} grid 대상 Grid Component
		 * @param {function} func resize가 발생했을 때 호출할 함수 (호출시 넘겨줄 인자 object는 {col, oldvalue, newvalue} )
		 * @param {scope=} scope 함수 내부에서 this 로 사용할 scope (인자 값이 없다면 grid parent)
		 */
		setUserGridOnColResized : function(grid, func, scope)
		{
			// check grid argument
			if ( Base.isEmpty(grid) || Base.XComp.typeOf(grid) != "Grid" )
			{
				var msg = {
					'message': "1'st argument must be a Grid Component",
					'stack' : true
				};
				//trace.error(msg);
			}
			
			// check func argument
			if ( Base.isEmpty(func) || !Base.isFunction(func) )
			{
				var msg = {
					'message': "2'nd argument must be a Function",
					'stack' : true
				};
				//trace.error(msg);
			}
			
			// check scope argument
			if ( Base.isEmpty(scope) )
			{
				scope = grid.parent;
			}
			
			// 대상 그리드에 이미 추가 되었는지 확인
			if ( Base.XComp.getUserProperty(grid, "setUserGridOnColResized") )
			{
				return;
			}
			
			// add onmousemove handler
			// 마우스 이동 시 내부 속성을 확인하여 리사이즈 정보를 지정한다.
			grid.addEventHandler("onmousemove", function(obj, e) {

				if ( (obj.cellsizingtype == "col" || obj.cellsizingtype == "both") && e.col != -1 )
				{
					Base.XComp.setUserProperty(obj, "colResizeInfo", {
						'col' : e.col, 
						'oldvalue' : obj.getRealColSize(e.col)
					});
				}
				
			}, scope);
			
			// add onlbuttonup handler
			grid.addEventHandler("onlbuttonup", function(obj, e) {
			
				if ( (obj.cellsizingtype == "col" || obj.cellsizingtype == "both") && e.col != -1 )
				{
					var colResizeInfo = Base.XComp.getUserProperty(obj, "colResizeInfo");
					if ( !Base.isEmpty(colResizeInfo) )
					{
						var info = {
							'col': colResizeInfo.col,
							'oldvalue': colResizeInfo.oldvalue,
							'newvalue': obj.getRealColSize(colResizeInfo.col)
						};

						func.call(scope, obj, info); 
						//func.call(obj, Base.XComp.getUserProperty(obj, "form"), e); // (grid, obj, e)    // func == arrangeAppendFilterComps 
					}
				}
			
			}, scope);
			
			// add onsize handler : 전체창 사이즈 조정 시 이벤트 처리
			grid.addEventHandler("onsize", function(obj, e) {
			
				var info = {
					'gapx': e.cx,	// 변경된 너비
					'gapy': e.cy	// 변경된 높이
				};
				
				func.call(scope, obj, info); 
				//func.call(obj, Base.XComp.getUserProperty(obj, "form"), e); // (grid, obj, e)    // func == arrangeAppendFilterComps 
			
			}, scope);
			
			
			// 재정의 방지용
			Base.XComp.setUserProperty(grid, "setUserGridOnColResized", true);	
		},

		/**
		 * cell move 가 발생할 때 주어진 함수를 호출한다.<br>
		 * (cell moving 이벤트가 없으므로 내부속성을 이용하여 확인한다.)
		 * @param {Grid} grid 대상 Grid Component
		 * @param {function} func moving이 발생했을 때 호출할 함수 (호출시 넘겨줄 인자 object는 {col, oldcell, newcell, oldcol, newcol} )
		 * @param {scope=} scope 함수 내부에서 this 로 사용할 scope (인자 값이 없다면 grid parent)
		 */
		setUserGridOnCellMoved : function(grid, func, scope)
		{
			var pThis = LGE.Filter;
			
			// check grid argument
			if ( Base.isEmpty(grid) || Base.XComp.typeOf(grid) != "Grid" )
			{
				var msg = {
					'message': "1'st argument must be a Grid Component",
					'stack' : true
				};
				//trace.error(msg);
			}
			
			// check func argument
			if ( Base.isEmpty(func) || !Base.isFunction(func) )
			{
				var msg = {
					'message': "2'nd argument must be a Function",
					'stack' : true
				};
				//trace.error(msg);
			}
			
			// check scope argument
			if ( Base.isEmpty(scope) )
			{
				scope = grid.parent;
			}
			
			// 대상 그리드에 이미 추가 되었는지 확인
			if ( Base.XComp.getUserProperty(grid, "setUserGridOnCellMoved") )
			{
				return;
			}	
			
			// add onlbuttondown handler 
			grid.addEventHandler("onlbuttondown", function(obj, e) {
				if ( obj.cellmovingtype == "col" && e.row == -1 )
				{
					var cellMovingInfo = {
						'oldcell': e.cell,
						'oldcol': e.col,
						'refCell': pThis.getGridCellObject(obj, "head", e.cell)
					};
					Base.XComp.setUserProperty(obj, "cellMovingInfo", cellMovingInfo);
				}
				else
				{
					Base.XComp.setUserProperty(obj, "cellMovingInfo", null);
				}
			
			}, scope);
			
			// add onlbuttonup handler
			grid.addEventHandler("onlbuttonup", function(obj, e) {
				if ( obj.cellmovingtype == "col" && e.row < 0 )
				{			
					var cellMovingInfo = Base.XComp.getUserProperty(obj, "cellMovingInfo");

					if ( !Base.isEmpty(cellMovingInfo) )
					{
						if ( cellMovingInfo.oldcell != e.cell )
						{
							var info = {
								'oldcell': cellMovingInfo.oldcell,
								'newcell': cellMovingInfo.refCell._cellidx,
								'oldcol': cellMovingInfo.oldcol,
								'newcol': cellMovingInfo.refCell._col
							};
							
							func.call(scope, obj, info);
							//func.call(obj, Base.XComp.getUserProperty(obj, "form"), e); // (grid, obj, e) 
							
							Base.XComp.setUserProperty(obj, "cellMovingInfo", null);
						}
					}
				}
			
			}, scope);
			
			Base.XComp.setUserProperty(grid, "setUserGridOnCellMoved", true);
		}

    });

}
