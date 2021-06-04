/**
 * LG Electronics Grid Library

 ● LGE.Grid.setGrid				: 그리드 필터,소트,멀티소트 설정
 ● LGE.Grid.setGridCheckAll		: 그리드 전체체크 
 ● LGE.Grid.openGridMenu			: 그리드 추가메뉴 Open(컨텍스트 메뉴)
 ● LGE.Grid.initGrid				: 그리드 초기화(소트, 필터, 소트마크, Head checkbox 등을 초기화 한다)
 
 */
if (!JsNamespace.exist("LGE.Grid")) {

	/*============================================================================================
	 * @define	 	JSLib.json	 
	 * @memberof 	LgeLibrary	 
	 * @namespace 	LGE.Grid
	 * @author 		admin
	 =============================================================================================*/
    JsNamespace.declare("LGE.Grid", {

		ct_separator 		: "	",
		fv_arrClipboard 	: null,
		ffobj 				: undefined,		// 호출 form		
		fv_bMultiSort 		: false,			// Multisort 여부
		fv_bSort	 		: false,			// Singlesort 여부
		fv_bSortcondition	: true,				// 현재 sort 상태(on/off)
		fv_bSortToggle 		: true,				// Sort Toggle 여부
		fv_bFilter 			: false,			// 현재 Filter 상태
		fv_sMarkerType		: "text",			// text or image
		fv_aMarker			: ["▲", "▼"], 	// [오름차순표시, 내림차순표시], fv_sMarkerType = image일때는 이미지 경로
		fv_orgFormat		: null,


		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object}	호출 form
		 * ⓟ param {object}	대상 grid
		 * ⓟ param {boolean}	filter 여부
		 * ⓟ param {boolean}	sort 여부
		 * ⓟ param {boolean}	multi sort 여부
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/	
		setGrid : function(objForm, objGrid, bFilter, bSort, bMultiSort)
		{
		
			this.ffobj = objForm;
			this.fv_bMultiSort = bMultiSort;
			this.fv_bSort 	   = bSort;
			this.fv_bFilter	   = bFilter;
			this.fv_orgFormat  = objGrid.formats;
			
			if(Base.isEmpty(this.fv_bMultiSort)) this.fv_bMultiSort = false;	
			if(Base.isEmpty(bSort)) bSort = false;	

			

			
			if(bFilter)
			{
				// Grid head 영역 추가 필터기능 사용을 위한 초기화
				LGE.Filter.initGridHeadAppendFilter(objGrid, objForm);
				// Grid head append filter 보이기
				LGE.Filter.showHeadAppendFilter(objGrid, objForm);
			}
			
			
			if(bSort)
			{
				// 그리드 헤드 셀 클릭 정렬 기능 사용을 위한 초기화
				this.initGridHeadClickSort(objGrid);	
			} 
		},

		/*--------------------------------------------------------------------------------------------
		 * ⓟ param {object}	호출 form
		 * ⓟ param {object}	대상 grid
		 * ⓡ return N/A
		 --------------------------------------------------------------------------------------------*/	
		setGridCopyPaste : function (oForm, oGrid)
		{
			// Grid Copy&Paste 기능 추가
			var oCellData = new Link.CellDataCopy(oForm, true);	
			oCellData.addGrid(oGrid);		
		},


		/**
		 * @class 필터를 동적으로 재 호출해야 하는 경우 사용
		 * @param objForm:Form obj:Grid
		 * @param e:GridClickEventInfo
		 * @return None
		 */  
		setFilter : function(objForm, objGrid)
		{
			// Grid head 영역 추가 필터기능 사용을 위한 초기화
			LGE.Filter.initGridHeadAppendFilter(objGrid, objForm);
			// Grid head append filter 보이기
			LGE.Filter.showHeadAppendFilter(objGrid, objForm);
		},


		initGridHeadClickSort : function(grid)
		{
			// 대상이 이미 초기화 되었는지 확인
			if ( Base.XComp.getUserProperty(grid, "initGridHeadClickSort") )
			{
				return;
			}

			LGE.Grid.setSortFont(grid);
			
			// add headclick handler
			grid.addEventHandler("onheadclick", this.sortGridOnHeadClickHandler, this);
			
			// 초기화 설정 완료 속성 지정 - 초기화 재설정 방지용
			Base.XComp.setUserProperty(grid, "initGridHeadClickSort", true);	
		},


		setSortFont : function(grid)
		{
// 			var nCellCnt = grid.getCellCount("Head");
// 			
// 			for(var i=0; i<nCellCnt; i++)
// 			{
// 				grid.setCellProperty( "Head", i, "font_size", "9");
// 				grid.setCellProperty( "Head", i, "font_face", "arial");
// 				grid.setCellProperty( "Head", i, "font_type", "bold underline");
// 			}
		},
	

		setSortFontClear : function(grid)
		{
// 			var nCellCnt = grid.getCellCount("Head");
// 			
// 			for(var i=0; i<nCellCnt; i++)
// 			{
// 				grid.setCellProperty( "Head", i, "font_size", "");
// 				grid.setCellProperty( "Head", i, "font_face", "arial");
// 				grid.setCellProperty( "Head", i, "font_type", "bold");
// 			}
		},




		sortGridOnHeadClickHandler : function(obj, e) 
		{
			//var multiple = false;
			
			if(!this.fv_bSortcondition) return;
			
			var strType = obj.getCellProperty("head", e.cell, "displaytype");
			if (strType == "checkbox"){
				return;
			}

			var bindDs = LGE.Grid.findDatasetUp(this.ffobj, obj.binddataset);
			
			if (Base.isEmpty(bindDs)) return false;
			if (bindDs.rowcount == 0) return false;
			
			// 정렬 상태 변경이 성공하면 정렬을 실행한다.
			if ( this.setSortStatus(obj, e.cell, this.fv_bMultiSort) )
			{
				this.executeSort(obj);
			}
		},
		
		
		// 상위레벨의 Object에서 Dataset을 찾아 반환
		findDatasetUp : function (obj, sDs)
		{
			if(!Base.isEmpty(obj.objects[sDs])) return eval("obj." + sDs);	
			while(Base.isEmpty(obj.objects[sDs])){
				obj = obj.parent;
				if(!Base.isEmpty(obj.objects[sDs])) return eval("obj." + sDs);

			}			 
		},

		/**
		 * 현재 적용된 모든 정렬을 제거한다.
		 * @param {Grid} grid 대상 Grid Component
		 */
		clearAllSort : function(grid) 
		{
			var sortInfos = Base.XComp.getUserProperty(grid, "sortInfos");
			var sortItems = Base.XComp.getUserProperty(grid, "sortItems");
			
			if ( Base.isEmpty(sortInfos) || Base.isEmpty(sortItems) ) return;
			
			// 정렬상태 초기화.
			Base.object.Each(sortInfos, function(nm, val, o) {
				val.status = 0;
			});
			
			// 정렬실행
			this.executeSort(grid);
			
			// 정보 초기화
			Base.XComp.setUserProperty(grid, "sortInfos", {});
			Base.XComp.setUserProperty(grid, "sortItems", []);
		},


		/**
		 * 정렬 상태를 지정한다. (실제 소팅 처리는 executeSort 에서 담당한다.)
		 * @param {Grid} grid 대상 Grid Component
		 * @param {number} headCellIndex 대상 head cell index
		 * @param {boolean=} isMultiple 다중선택여부
		 * @param {number=} sortStatus 정렬상태 강제 지정 (미지정시 현재 상태 반전)
		 * @return {boolean} 상태 변경 여부
		 */
		setSortStatus : function(grid, headCellIndex, isMultiple, sortStatus)
		{	
			// head cell index 에 해당하는 body cell index
			var bodyCellIndex = this.getBodyCellIndex(grid, headCellIndex);
			if ( bodyCellIndex < 0 ) return false;
			
			// body cell index 에 해당하는 바인드 컬럼명
			var columnName = this.getBindColumnNameByIndex(grid, bodyCellIndex);
			if ( Base.isEmpty(columnName) ) 
			{
				//trace.warn({message:"Check Grid body cell bind value", stack:true});
				return false;
			}
			
			if ( Base.isEmpty(isMultiple) ) isMultiple = false;

			if ( Base.isEmpty(sortStatus) ) sortStatus = -1;
			
			// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
			if ( Base.isUndefined(Base.XComp.getUserProperty(grid, "sortInfos")) )
			{
				Base.XComp.setUserProperty(grid, "sortInfos", {});
			}
			
			// 정렬대상컬럼 (순서중요)
			if ( Base.isUndefined(Base.XComp.getUserProperty(grid, "sortItems")) )
			{
				Base.XComp.setUserProperty(grid, "sortItems", []);
			}	
			
			var sortInfos = Base.XComp.getUserProperty(grid, "sortInfos"),
				sortItems = Base.XComp.getUserProperty(grid, "sortItems"),
				sortInfo = sortInfos[columnName],
				sortItem,
				status;
			
			if ( Base.isEmpty(sortInfo) )
			{
				var headText = grid.getCellText(-1, headCellIndex);
				
				// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
				// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다. 		
				var refCell = this.getGridCellObject(grid, "head", headCellIndex);
				
				sortInfo = sortInfos[columnName] = { status: 0, text: headText, refCell: refCell};
			}

			// set sort status
			if ( isMultiple ) 
			{		
				status = sortInfo.status;
				if ( sortStatus == -1 ) 
				{
					if ( status == 0 ) 
					{
						sortInfo.status = 1;
					} 
					else if ( status == 1 ) 
					{
						sortInfo.status = 2;
					} 
					else if ( status == 2 ) 
					{
						sortInfo.status = ( this.fv_bSortToggle ? 0 : 1);
					}
				}
				else 
				{
					sortInfo.status = sortStatus;
				}
			}
			else 
			{
				for (var p in sortInfos) 
				{
					if ( sortInfos.hasOwnProperty(p) )
					{
						sortInfo = sortInfos[p];
						
						if ( p == columnName ) 
						{
							status = sortInfo.status;
							if ( sortStatus == -1 ) 
							{
								if ( status == 0 ) 
								{
									sortInfo.status = 1;
								} 
								else if ( status == 1 ) 
								{
									sortInfo.status = 2;
								} 
								else if ( status == 2) 
								{
									sortInfo.status = ( this.fv_bSortToggle ? 0 : 1);
								}
							} 
							else 
							{
								sortInfo.status = sortStatus;
							}
						} 
						else 
						{
							sortInfo.status = 0;
						}
						
						if ( sortInfo.status == 0 )
						{
							for (var j=0, len2=sortItems.length; j<len2; j++) 
							{
								if ( sortItems[j] !== columnName ) 
								{
									Base.array.removeAt(sortItems, j);
									break;
								}
							}
						}
					}
				}
			}
			
			// 컬럼정보 등록
			if ( !Base.array.contains(sortItems, columnName) )
			{
				sortItems.push(columnName);
			}
			return true;
		},



		/**
		 * 정렬 적용
		 * @param {Grid} grid 대상 Grid Component
		 */
		executeSort : function(grid) 
		{

			var sortInfo, 
				sortItem,
				sortInfos = Base.XComp.getUserProperty(grid, "sortInfos"),
				sortItems = Base.XComp.getUserProperty(grid, "sortItems"),
				columnName,
				status,
				cell,
				sortString = "";
				
			if ( Base.isEmpty(sortInfos) || Base.isEmpty(sortItems) ) return;

			// keystring 조합
			for (var i=0; i<sortItems.length; i++) 
			{
				columnName = sortItems[i];
				sortInfo = sortInfos[columnName];
				status = sortInfo.status;
				cell = sortInfo.refCell;
				
				// 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
				// 확인하여 없으면 제거해 준다.
				if ( Base.isEmpty(cell) || grid.getBindCellIndex("body", columnName) < 0 )
				{
					Base.array.removeAt(sortItems, i);
					sortInfos[columnName] = null;
					delete sortInfos[columnName];
					
					i--;
				}
				else if ( status > 0 ) 
				{
					sortString += (status == 1 ? "+" : "-") + columnName;
				}
			}

			var ds = Base.XComp.lookup(grid.parent, grid.binddataset);
			
			// keystring 확인
			var curKeyString = ds.keystring;
			var groupKeyString = "";
			
			if ( curKeyString.length > 0 && curKeyString.indexOf(",") < 0 )
			{
				var sIndex = curKeyString.indexOf("S:");
				var gIndex = curKeyString.indexOf("G:");

				if ( sIndex > -1 )
				{
					groupKeyString = "";
				}
				else
				{
					if ( gIndex < 0 )
					{
						groupKeyString = "G:"+curKeyString;
					}
					else
					{
						groupKeyString = curKeyString;
					}
				}
			}
			else
			{
				var temps = curKeyString.split(",");
				var temp;
				for (var i=0,len=temps.length; i<len; i++)
				{
					temp = temps[i];
					if ( temp.length > 0 && temp.indexOf("S:") < 0 )
					{
						if ( temp.indexOf("G:") < 0 )
						{
							groupKeyString = "G:"+temp;
						}
						else
						{
							groupKeyString = temp;
						}
					}
				}
			}

			if ( sortString.length > 0 )
			{
				var sortKeyString = "S:"+sortString;
				
				if ( groupKeyString.length > 0 )
				{
					ds.set_keystring(sortKeyString + "," + groupKeyString);
				}
				else
				{
					ds.set_keystring(sortKeyString);
				}
				
				Base.XComp.setUserProperty(grid, "sortKeyString", sortKeyString);
			} 
			else
			{		
				ds.set_keystring(groupKeyString);
				
				Base.XComp.setUserProperty(grid, "sortKeyString", "");
			}

			//trace.debug("keystring==>"+ds.keystring);

			// 정렬표시
			var type = this.fv_sMarkerType;
			var index, marker;
			for (var p in sortInfos) 
			{
				if ( sortInfos.hasOwnProperty(p) )
				{
					sortInfo = sortInfos[p];			
					cell = sortInfo.refCell;
					
					if ( cell )
					{

						index = this.getCellObjectIndex(cell);
						
						marker = Base.decode(sortInfo.status, 1, this.fv_aMarker[0], 2, this.fv_aMarker[1], "");
						
						if ( type == "text" )
						{
							grid.setCellProperty( "head", index, "text", sortInfo.text + marker);
						}
						else if ( type == "image" )
						{
							grid.setCellProperty( "head", index, "style", "background:"+marker + " 50 5;");
						}
					}
				}
			}
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
			
			if ( !Base.isEmpty(text) )
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
		 * @class 그리드의 Sort Mark 제거
		 * @param obj:Grid
		 * @return None
		 */  
		clearSortMark : function (obj)
		{
			var nColCnt = obj.getCellCount("head");
			var sRepText;
			for (var ii=0; ii<nColCnt; ii++){
				if(obj.getCellProperty("head", ii, "displaytype") != "checkbox"){
					sRepText = String(obj.getCellProperty("head", ii, "text")).trim();
					if(!Base.isEmpty(sRepText)){
						sRepText = sRepText.split(this.fv_aMarker[1]).join("").split(this.fv_aMarker[0]).join("");
					}
					obj.setCellProperty("head", ii, "text", sRepText);
				}
			}
			
			
			
			var bindDs = LGE.Grid.findDatasetUp(this.ffobj, obj.binddataset);
			bindDs.set_keystring("");
			
			LGE.Grid.setSortFontClear(obj);				
			
		},							

		/**
		 * @class 그리드 Head중 check box가 있을 경우, check box 클릭 이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수
		 * @param obj:Grid
		 * @param e:GridClickEventInfo
		 * @return None
		 */  
		setGridCheckAll : function (obj, e)
		{
			this.ffobj = obj.parent;
			if (obj.readonly == true){
				return;
			}

			var strVal;
			var strChkCol;
			var dsObj;
			
			dsObj = LGE.Grid.findDatasetUp(this.ffobj, obj.binddataset);
			if (Base.isEmpty(dsObj))	return;




			var strType = obj.getCellProperty("head", e.cell, "displaytype");
			if (strType != "checkbox"){
				return;
			}
			
			strChkCol = obj.getCellProperty("body", e.col, "text");
			
			if (Base.isEmpty(strChkCol))	return;

			strChkCol = strChkCol.replace("bind:", "");

			// Head셋팅
			strVal = obj.getCellProperty("head", e.cell, "text");
			if (Base.isEmpty(strVal) || strVal == ""){
				strVal = "0";
			}

			if (strVal == "0"){
				obj.setCellProperty("head", e.cell, "text", '1');
				strVal = "1";
			} else {
				obj.setCellProperty("head", e.cell, "text", '0');
				strVal = "0";
			}
			
			// Body셋팅
			dsObj.set_enableevent(false);
			for (var i=0; i<dsObj.rowcount; i++){
				dsObj.setColumn(i, strChkCol, strVal);
			}
			dsObj.set_enableevent(true);
		},


		/**
		 * @class 그리드 Head중 check box가 있을 경우, check box 클릭 이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수
		 * @param obj:Grid
		 * @param e:GridClickEventInfo
		 * @return None
		 */  
		setGridCheckAllYN : function (obj, e)
		{
			if (obj.readonly == true){
				return;
			}
			
			var strVal;
			var strChkCol;
			var dsObj;
			
			dsObj = LGE.Grid.findDatasetUp(this.ffobj, obj.binddataset);
			if (Base.isEmpty(dsObj))	return;

			var strType = obj.getCellProperty("head", e.cell, "displaytype");
			if (strType != "checkbox"){
				return;
			}
			
			strChkCol = obj.getCellProperty("body", e.col, "text");
			if (Base.isEmpty(strChkCol))	return;
			
			strChkCol = strChkCol.replace("bind:", "");

			// Head셋팅
			strVal = obj.getCellProperty("head", e.cell, "text");
			if (Base.isEmpty(strVal) || strVal == ""){
				strVal = "0";
			}

			if (strVal == "0"){
				obj.setCellProperty("head", e.cell, "text", '1');
				strVal = "Y";
			} else {
				obj.setCellProperty("head", e.cell, "text", '0');
				strVal = "N";
			}
			
			// Body셋팅
			dsObj.set_enableevent(false);
			for (var i=0; i<dsObj.rowcount; i++){
				dsObj.setColumn(i, strChkCol, strVal);
			}
			dsObj.set_enableevent(true);
		},








		/**
		 * @class 그리드 추가메뉴 Open(컨텍스트 메뉴)
		 * @param obj - Grid object
		 * @param e - GridMouseEventInfo
		 * @param oOption - 사용할메뉴설정 : FILTER, SORT, HIDE, FREEZE
		 * @return None
		 */  
		openGridMenu : function(obj, e, oOption, oTgtGrid)
		{

			this.ffobj = obj.parent;
		
		// 	var oBindDs = obj.getBindDataset();
		// 	if(oBindDs.rowcount == 0) return;
			
			var oUseMenu = ["HIDE", "FREEZE", "FILTER", "SORT", "RESET"];
			if(!Base.isEmpty(oOption)) oUseMenu = oOption;
			
			var dsObj = application.gds_gridMenu;
			dsObj.filter("");
			
			var sOption;
			for(var i = 0; i < dsObj.rowcount; i++)
			{
				sOption = dsObj.getColumn(i, "option");
				if(Base.array.contains(oUseMenu, sOption))
				{
					dsObj.setColumn(i, "bUse", "Y");
				}
				else
				{
					dsObj.setColumn(i, "bUse", "N");
				}
			}
			
			dsObj.filter("bUse == 'Y'");
			
			var sPmuGridMenu = "pmu_gridMenu_"+obj.name;
			var oPmuGridMenu = this.ffobj.components[sPmuGridMenu];
			
			if (Base.isEmpty(oPmuGridMenu)){
				oPmuGridMenu = new PopupMenu;
				oPmuGridMenu.init(sPmuGridMenu, 0,0,0,0);
				this.ffobj.addChild(sPmuGridMenu, oPmuGridMenu);
				oPmuGridMenu.set_innerdataset(dsObj);
				oPmuGridMenu.set_levelcolumn("menuLvl");
				oPmuGridMenu.set_idcolumn("menuId");
				if(application.gv_language == "KO")
				{
					oPmuGridMenu.set_captioncolumn("menuNm");
				}
				else
				{
					oPmuGridMenu.set_captioncolumn("menuNmEn");
				}
				oPmuGridMenu.set_enablecolumn("bEnbleColumn");
				oPmuGridMenu.set_hotkeycolumn("hotkeyColumn");
				oPmuGridMenu.set_iconcolumn("iconColumn");
				
				//none인경우 onmenuclick이벤트발생안함
				oPmuGridMenu.style.set_popuptype("normal");
				oPmuGridMenu.style.set_border("1 solid #585858");
				oPmuGridMenu.style.set_itempadding("0 0 0 4");
				oPmuGridMenu.style.set_itemheight(21);
				
				oPmuGridMenu.show();

				oPmuGridMenu.addEventHandler("onmenuclick", this._grdMenu_onmenuclick, this);
			}
				
			//oPmuGridMenu.row = e.row;
			if (Base.isEmpty(oPmuGridMenu.grid_format)){
				
				oPmuGridMenu.grid_format = "<Formats>\r\n" + obj.getCurFormatString() + "</Formats>";
				//obj.grid_format = "<Formats>\r\n" + obj.getCurFormatString() + "</Formats>";
			
				if(obj.fv_splitCell == undefined ){
					obj.orgcellmovingtype = obj.cellmovingtype;
					obj.orgcellsizingtype = obj.cellsizingtype;
					obj.fv_splitCell=1;
				}		
			}
			
			
			
			
			var sPdvGridMenu = "pdv_gridMenu_"+obj.name;
			var oPdvGridMenu = this.ffobj.components[sPdvGridMenu];	
			
			if (Base.isEmpty(oPdvGridMenu)){
				oPdvGridMenu = new PopupDiv;
				oPdvGridMenu.init(sPdvGridMenu,0,0,0,0);
				oPdvGridMenu.style.set_border("1 solid #777777ff");
				oPdvGridMenu.style.set_background("#ffffff");
				this.ffobj.addChild(sPdvGridMenu, oPdvGridMenu);
				//oPdvGridMenu.set_async(false);
				//oPdvGridMenu.addEventHandler("onpopup", this._pdv_FilterList_onpopup, this);
				oPdvGridMenu.addEventHandler("oncloseup", this._pdv_FilterList_oncloseup, this);
				oPdvGridMenu.show();
			}
			
			var oExcelGrid;
			if(Base.isEmpty(oTgtGrid)) oExcelGrid = obj;
			
			//userproperty 설정
			oPmuGridMenu.form = this;
			oPmuGridMenu.grid = obj;
			oPmuGridMenu.cell = e.cell;
			oPmuGridMenu.col = e.col;
			oPmuGridMenu.popupdiv = oPdvGridMenu;
			oPmuGridMenu.excelgrid = oExcelGrid;
			//PopupMenu 오픈
		// 	var x = system.screenToClientX(application.mainframe, system.clientToScreenX(application.mainframe, e.screenX));
		// 	var y = system.screenToClientY(application.mainframe, system.clientToScreenY(application.mainframe, e.screenY));	
			var x = e.screenX - system.clientToScreenX(application.mainframe, 0); 
			var y = e.screenY - system.clientToScreenY(application.mainframe, 0); 	
			
			oPmuGridMenu.trackPopup(x, y);	
		},

		/**
		 * @class 그리드 메뉴에서 메뉴를 눌렀을 때 발생하는 이벤트
		 * @param obj - PopupMenu
		 * @param e - MenuClickEventInfo
		 * @return None
		 */  
		_grdMenu_onmenuclick : function(obj, e)
		{



			switch (e.id){

				case "100":		// 필터켜기
					this.fv_bFilter = true;
					LGE.Grid.setGrid(this.ffobj, obj.grid, this.fv_bFilter, this.fv_bSort, this.fv_bMultiSort);
					break;

				case "110":		// 필터끄기
					this.fv_bFilter = false;
					LGE.Filter.hideHeadAppendFilter(obj.grid);
					break;



				case "200":		// SORT 켜기
					this.fv_bSortcondition = true;
					LGE.Grid.setGrid(this.ffobj, obj.grid, this.fv_bFilter, true, false);
					break;

				case "210":		// 멀티소트 켜기
					this.fv_bSortcondition = true;
					LGE.Grid.setGrid(this.ffobj, obj.grid, this.fv_bFilter, true, true);
					break;

				case "220":		// SORT 끄기
					this.clearSortMark(obj.grid);
					Base.XComp.setUserProperty(obj.grid, "sortKeyString", "");
					this.fv_bSortcondition = false;
					break;


				case "300":		// 칼럼숨기기
					obj.grid.deleteContentsCol(obj.col);
					var objDs = obj.grid.binddataset;
					obj.grid.set_binddataset("");
					obj.grid.set_binddataset(objDs);
					break;
					
				case "310":		// 컬럼보이기(전체)
					if(this.fv_bFilter){
						obj.grid.set_formats(obj.grid_format);
					} else {
						obj.grid.set_formats(this.fv_orgFormat);
					}
					
					//틀고정시 셀무빙막기
					obj.grid.set_cellmovingtype(obj.grid.orgcellmovingtype);
					obj.grid.set_cellsizingtype(obj.grid.orgcellsizingtype);
					break;
					
					
					
				case "400":	// 틀고정
					//틀고정 성능향상을 위해 바인딩된데이타셋 핸들링
					var objGrid = obj.grid;
					var objDs   = objGrid.getBindDataset();
					objGrid.set_enableevent(false);
					objDs.set_enableevent(false);
					objGrid.set_binddataset("");
					this.cellFix(objGrid, obj.cell, obj.col); 
					objGrid.set_binddataset(objDs);			
					objGrid.set_enableevent(true);
					objDs.set_enableevent(true);
					objGrid.set_cellmovingtype("none");
					objGrid.set_cellsizingtype("none");
					break;
					
				case "410":	// 틀고정 해제
					//틀고정 성능향상을 위해 바인딩된데이타셋 핸들링
					var objGrid = obj.grid;
					var objDs = objGrid.getBindDataset();
					objGrid.set_enableevent(false);
					objDs.set_enableevent(false);
					objGrid.set_binddataset("");
					this.cellUnFix(objGrid); 
					objGrid.set_binddataset(objDs);
					//틀고정시 셀무빙막기
					objGrid.set_cellmovingtype(objGrid.orgcellmovingtype);
					objGrid.set_cellsizingtype(objGrid.orgcellsizingtype);
					objGrid.set_enableevent(true);
					objDs.set_enableevent(true);
					break;
					
				case "10000":	// 전체 초기화
					LGE.Grid.initGrid(obj.grid);
					break;					
			}
			
			// Grid head over filter 기능에 필요한 컴포넌트 위치 조정
			LGE.Filter.arrangeAppendFilterComps(obj.grid);
		},

		clearFilterMarker : function(obj)
		{
			for(var i = 0; i < obj.getCellCount("head"); i++)
			{
				obj.setCellProperty("head", i, "expandshow", "hide");
			}
		},

		/**
		 * @class 그리드의 내용을 범위로 지정하여 복사(Ctrl+C) 할 수 있음
		 * @param obj:Grid (단일Export - Grid Object, 다수Export - Array Objec[Grid Object,Grid Object])
		 * @param e:KeyEventInfo
		 * @return None
		 */  
		gridCopy : function (obj, e)
		{
			// Ctrl + C
			if (e.ctrlKey && e.keycode == 67){
				this.clipboardCopy(obj);
			} else if (e.ctrlKey && e.keycode == 86){	// Ctrl + V
				//this.clipboardPaste(obj);
			}
		},

		/**
		 * @class 그리드에 EnterKey 입력시 자동 Cell 이동 
		 * @param obj:Grid (단일Export - Grid Object, 다수Export - Array Objec[Grid Object,Grid Object])
		 * @param e:KeyEventInfo
		 * @return None
		 */  
		gridOnkeydup : function(obj, e)
		{

		},

		/**
		 * @class Clipboard에 Copy된 내용을 그리드의 선택된 영역에 Copy 한다.
		 * @param objGrid: Area Select 된 Grid
		 * @return None clipboardCopy(objGrid);
		 */ 

		clipboardCopy : function (objGrid)
		{
			var orgDataset = this.getDataset(objGrid.binddataset);
			var strColID;
			var strValue;
			var strClipboard = "";
			var nAreaStartRow;
			var nAreaEndRow;
			var nAreaStartCol;
			var nAreaEndCol;

			if (objGrid.selecttype == "area"){
				nAreaStartRow = objGrid.selectstartrow;
				nAreaEndRow = objGrid.selectendrow;
				nAreaStartCol = objGrid.selectstartcol;
				nAreaEndCol = objGrid.selectendcol;
			} else {
				nAreaStartRow = objGrid.selectstartrow;
				nAreaEndRow = objGrid.selectendrow;
				nAreaStartCol = 0;
				nAreaEndCol = objGrid.getCellCount("Body");
			}
			trace("clipboardCopy > nAreaStartRow = " + nAreaStartRow + " nAreaEndRow = "+nAreaEndRow + " nAreaStartCol = "+nAreaStartCol + " nAreaEndCol = "+nAreaEndCol);

			var sDispType;
			for (var nRow = nAreaStartRow; nRow <= nAreaEndRow; nRow++){
				for (var nCell = nAreaStartCol; nCell <= nAreaEndCol; nCell++){
					sDispType = objGrid.getCellProperty("body", nCell, "displaytype");
					trace("sDispType = " + sDispType);
					if(sDispType != "combo")
					{
						strColID = String(objGrid.getCellProperty("body", nCell, "text"));
						strValue = LGE.Base.isEmpty(orgDataset.getColumn(nRow, strColID.substr(5)));
					}
					else
					{
						strValue = objGrid.getCellText(nRow, nCell);
					}
					strClipboard = strClipboard + strValue + this.ct_separator;
				}
				strClipboard = strClipboard.substr(0, strClipboard.length - 1);
				trace("clipboardCopy > strClipboard = " + strClipboard);
				strClipboard = strClipboard + "\n";
			}
			//trace(strClipboard);
			strClipboard = strClipboard.substr(0, strClipboard.length - 1);
			//trace("strClipboard = " + strClipboard);
			system.setClipboard("CF_TEXT", strClipboard);
			this.fv_arrClipboard = strClipboard;
			
			return;
		},

		/**
		 * @class Clipboard에 Copy된 내용을 그리드의 선택된 영역에 Paste 한다.
		 * @param objGrid: Area Select 된 Grid
		 * @return None clipboardPaste(objGrid);
		 */  
		clipboardPaste : function (objGrid)
		{
			var orgDataset = this.getDataset(objGrid.binddataset);
			var nSearchRow = 0;
			var nSearchCol = 0;
			var strColID;
			var strValue;
			var strEditType;
			var strBgColor;
			var strClipboardData = "";
			
			// 숫자 자릿수 구분은 comma 를 사용하기 때문에 호환을 위해서 comma 를 제거한다.
			try{
			   strClipboardData = system.getClipboard("CF_TEXT").split(",").join("");
			}catch(e){}
			
			if (Base.isEmpty(strClipboardData)){
				strClipboardData = this.fv_arrClipboard.split(",").join("");
			}
			
			// 유럽의 숫자 자릿수 구분은 space 를 사용하기 때문에 호환을 위해서 space 를 제거한다.
			strClipboardData = strClipboardData.split(" ").join("");
			var strClipboardRecord = strClipboardData.split("\n");
			var strClipboardColunm;
			
			var nAreaStartRow;
			var nAreaEndRow;
			var nAreaStartCol;
			var nAreaEndCol;

		// 	if (objGrid.selecttype == "area"){
		// 		nAreaStartRow = objGrid.selectstartrow;
		// 		nAreaEndRow = objGrid.selectendrow;
		// 		nAreaStartCol = objGrid.selectstartcol;
		// 		nAreaEndCol = objGrid.selectendcol;
		// 	} else {
				nAreaStartRow = objGrid.selectstartrow;
				nAreaEndRow = objGrid.selectendrow;
				nAreaStartCol = 0;
				nAreaEndCol = objGrid.getCellCount("Body")-1;
		//	}

			for (var nRow = nAreaStartRow; nRow < (parseInt(nAreaStartRow) + parseInt(strClipboardRecord.length)); nRow++){
				strClipboardColunm = strClipboardRecord[nSearchRow].split(this.ct_separator);
				nSearchCol = 0;
				var nAreaCell = parseInt(nAreaStartCol) + parseInt(strClipboardColunm.length);
				for (var nCell = nAreaStartCol; nCell < nAreaCell; nCell++){
					strColID = String(objGrid.getCellProperty("body", nCell, "text")).substr(5);
					strEditType = objGrid.getCellProperty("body", nCell, "edittype");
					strValue = strClipboardColunm[nSearchCol];

					//에디터 타입이 none이거나 값이 없으면 카피 안함
					if (!(strEditType == "none" || Base.isEmpty(strValue))){
						orgDataset.setColumn(nRow, strColID, strValue);
					}
					nSearchCol++;
				}
				nSearchRow++;
			}
			return;
		},


		/**
		 * @class 팝업Div가 열릴 때 발생하는 이벤트
		 * @param obj - PopupDiv
		 * @param e - EventInfo
		 * @return None
		 */  
		_pdv_FilterList_onpopup : function(obj, e)
		{
			//this.grdMenu.closePopup();
		},

		/**
		 * @class 팝업Div가 닫힐 때 발생하는 이벤트
		 * @param obj - PopupDiv
		 * @param e - EventInfo
		 * @return None
		 */  
		_pdv_FilterList_oncloseup : function(obj, e)
		{
			trace("_pdv_FilterList_oncloseup = "+oPmuGridMenu.grid.name);
			obj.fn_closeup();
		},

		/**
		 * @class 이전에 Find form을 띄워 놓은 것이 있다면 Close한다.
		 * @param objGrid - 부모 그리드
		 * @return None
		 */  
		checkExistFindDlg : function()
		{
			var obj = application.popupframes["__GirdFindForm__"];
			// obj가 존재하는 경우라면 삭제한다.
			if(obj != null) {
				obj.destroy();
			}
		},

		/**
		 * @class 그리드 dataset에 filter가 적용되어 있는지 여부 판단.
		 * @param objGrid - 그리드
		 * @return 적용되어 있으면 true 아니면 false
		 */ 
		isFiterString : function(objGrid)
		{
			var bRet = false;
			// bind되어 있는 데이터 셋을 가져온다.
			var objBindDs = objGrid.getBindDataset();
			if (Base.isEmpty(objBindDs)){
				bRet = false;
			}
			if (!Base.isEmpty(objBindDs.filterstr.current)){
				bRet = true;
			}
			return bRet;
		},

		/**
		 * @class 그리드의 cell에 바인딩된 데이타셋의 컬럼ID를 구함
		 * @param objGrid - Grid object
		 * @param cellIdx - cell index
		 * @param band - Grid band
		 * @return 컬럼ID
		 */  
		getCellBind : function(obj, cellIdx, band)
		{
			if (Base.isEmpty(band)){
				band = "body";
			}
			var cellText = "";
			
			if(!Base.isEmpty(cellIdx)){
				cellText = new String(obj.getCellProperty(band, cellIdx, "text")).trim();
				if (Base.isEmpty(cellText)){
					return "";
				}
			}else{
				cellText = obj.getCellProperty("body", obj.currentcell, "text");
			}

			var arrText = cellText.split(":");
			if (arrText[0].toLowerCase() != "bind"){
				return "";
			}
			return arrText[1];
		},

		/**
		 * @class 그리드에서 바인드된 컬럼명으로 컬럼 index를 리턴하는 함수
		 * @param obj - Grid Object
		 * @param strCol - 바인드된 컬럼명
		 * @param strBand - 얻고자 하는 Cell의 영역('Head'/'Body'/'Summ'('Summary'))
		 * @return int 컬럼 index
		 */  
		getColumnIdx : function (obj, strCol, strBand)
		{
			if (strBand == null){
				strBand = "Body";
			}
			var nCnt = obj.getCellCount(strBand);
			var strCellCol;
			for (var i=0; i<nCnt; i++){
				if (strCol == this.getCellBind(obj, i, strBand)){
					return i ;
				}
			}
			return -1;
		},

		/**
		 * @class Bind되어 있는 Dataset에 해당되는 ColumnId 를 가지고 있는 Cell의 Index
		 * @param obj - Grid Object
		 * @param sCompColumnId - sCompColumnId 비교할 ColumnId
		 * @return Cell Index/못찾으면 '-1' 을 반환
		 */  
		getCellIdx : function (obj, strCompColumnId)
		{
			//Cell Id에 해당하는 번호를 반환함
			var arrColumnId = new Array();
			var nCellCnt = obj.getCellCount("body");
			for (var i=0; i<nCellCnt; i++){
				var strColumnId = String(obj.getCellProperty("body", i, "text")).replace("bind:", "");
				if (strColumnId == strCompColumnId) return i;
			}
			return -1;
		},

		/**
		 * @class 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
		 * @param sDsNm     - 데이터셋명
		 * @return Dataset
		 */   
		getDataset : function(sDsNm)
		{
			return Base.XComp.query(this, "typeOf == 'Dataset' && prop[name] == '"+sDsNm+"'")[0];
		},

		/**
		 * @class 그리드 틀고정 설정
		 * @param objGrid - Grid object
		 * @param nCell - cell index
		 * @return N/A
		 */  
		cellFix : function(obj, nCell, nCol)
		{
			//cssclass : cell_Fixed_right
			//line : 0 solid #808080ff,1 solid #808080ff
			//obj.set_enableevent(false);
			//var objBindDs = obj.getBindDataset();
			//objBindDs.set_enableevent(false);

			// 그리드 틀고정 해제
			this.cellUnFix(obj);
			
			var iCnt=0;
			var iTotCol = 0;
			for (var j = nCell; j >= 0; j--) 
			{
				var iColCur = obj.getCellProperty("Head", j, "col");
				var iCell = nCell;

				for (var i = iCell; i >= 0; i--) 
				{
					if (obj.getCellProperty("Head", i, "row") == 0 && iColCur == obj.getCellProperty("Head", i, "col")) 
					{
						if (iCnt==0) 
						{
							var iCol = obj.getCellProperty("Head", i, "col");
							var iSpan = obj.getCellProperty("Head", i, "colspan")-1;
							iTotCol = iCol + iSpan;                   
							for (var k = 0; k <= iTotCol; k++)
							{
								obj.setFormatColProperty(k, "band", "left");
							}                    
						}
						iCnt++;
					} 
				}
			} 	

			var col;
			for(var i = 0; i < obj.getCellCount("head"); i++)
			{
				col = parseInt(obj.getCellProperty("head", i, "col"));
				if(col <= iTotCol)
				{
					obj.setCellProperty("head", i, "background", "#d7d7d7");
				}
			}

		},

		/**
		 * @class 그리드 틀고정 해제
		 * @param objGrid - Grid object
		 * @return N/A
		 */  
		cellUnFix : function(obj)
		{	
			for (var i= obj.getFormatColCount()-1; i>=0; i--){
				obj.setFormatColProperty(i, "band", "body");
			}
			for (var i= obj.getCellCount("head")-1; i>=0; i--){
				obj.setCellProperty("head", i, "background", "");
			}
		},



		//조회전 그리드에 적용된 필터, sort 제거
		initGrid : function(objGrid)
		{
		
			this.fv_bSortcondition = false;
			this.fv_bFilter = false;
		
			var dsObj = objGrid.getBindDataset();

			if(!Base.isEmpty(dsObj))
			{
				dsObj.filter("");
				this.clearFilterMarker(objGrid);
				LGE.Filter.hideHeadAppendFilter(objGrid);
			}
			
			
			if(!Base.isEmpty(dsObj))
			{
				this.clearSortMark(objGrid);
			}
			
			if(!Base.isEmpty(objGrid))
			{
				objGrid.set_cellmovingtype(objGrid.orgcellmovingtype);
				objGrid.set_cellsizingtype(objGrid.orgcellsizingtype);
			}

			this._initCheckbox(objGrid);
			this.cellUnFix(objGrid);	
					
			objGrid.set_formats(this.fv_orgFormat);
					
		},
		
		
		
		
		//조회전 그리드헤더 checkbox 초기화
		_initCheckbox : function (objGrid)
		{
			var ncellCnt = objGrid.getCellCount("Head");
			
			for(i=0; i<ncellCnt; i++)
			{
				if(objGrid.getCellProperty("Head", i, "displaytype" ) == "checkbox" ){
					objGrid.setCellProperty( "Head", i, "text", "0");
				}
			}
		},		
		
		     
    });

}
