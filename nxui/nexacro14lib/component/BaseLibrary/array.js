/**
 * @fileoverview 넥사크로  공통 Library interface
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Base.array"))
{

    /**
     * @namespace
     * @name LGE.Interface
     * @author
     * @memberof!  Base.array
     */
    JsNamespace.declare("Base.array", {


        /**
		* 지정된 항목이 처음 나오는 배열 위치를 반환한다. 
		* @param {array} array 검색 대상 Array.
		* @param {object} item 찾고자 하는 Item.
		* @param {number=} from 검색의 시작 위치 (default: 0).
		* @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
		* @return {number} 검색된 배열 위치. 없다면 -1 리턴.
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* var index = Base.array.indexOf(mon, "Mar");
		* trace("index==>" + index);	// output : index==>2
		* var index = Base.array.indexOf(mon, "May");
		* trace("index==>" + index);	// output : index==>-1
		* @memberOf Base.array
		*/
		indexOf: function(array, item, from, strict) 
		{
			var len = array.length;
			if ( from == null ) from = 0;;
			strict == !!strict;
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0)
			{
				from += len;
			}
			
			if (strict)
			{
				for (; from < len; from++) 
				{
					if ( array[from] === item)
					{
						return from;
					}
				}
			}
			else
			{
				for (; from < len; from++) 
				{
					if ( array[from] == item)
					{
						return from;
					}
				}
			}
			
			return -1;
		},
		  
		     
        /**
		* 원하는 위치의 항목을 배열에서 삭제 처리한다.
		* @param {array} array remove 대상 Array.
		* @param {number} index remove하고자 하는 item index.
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* Base.array.removeAt(mon, 1);
		* trace("mon==>" + mon);	// output : mon==>["Jan","Mar","Apr"]
		* @memberOf Base.array
		*/
        removeAt: function(array, index) 
        {
			array.splice(index, 1);
        },		     
		   
		     
		     
		/**
		* 지정된 항목이 배열에 포함되어 있는지 확인한다.
		* @param {array} array 검색 대상 Array.
		* @param {object} item 찾고자 하는 Item.
		* @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
		* @return {boolean} 포함되어 있다면 true, 없다면 false를 리턴.
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* var contain = Base.array.contains(mon, "Mar");
		* trace("contain==>" + contain);	// output : contain==>true
		* var contain = Base.array.contains(mon, "May");
		* trace("contain==>" + contain);	// output : contain==>false
		* @memberOf Base.array
		*/
		contains: function(array, item, strict) 
        {
			if (Base.array.indexOf(array, item, null, strict) === -1) 
			{
				return false;
			}
			else
			{
				return true;
			}
        },		     
		  
		     
        /**
		* 유일한 항목을 찾아 새로운 배열로 구성해서 리턴한다.
		* @param {array} array 처리 대상 Array.
		* @return {array} unique한 항목으로 새로 구성된 Array.
		* @example
		* var unique = Base.array.unique(["A","B","C","A","A","B"]);
		* trace("unique==>" + unique);	// output : unique==>["A","B","C"]
		* @memberOf Base.array
		*/
        unique: function(array) 
        {
            var i = 0, uniqueArray = [],
                len = array.length, 
                item,
                findKey = {},
                pThis = Base.array;

			for (; i < len; i++) 
			{
				item = array[i];
				findKey[item] = item;
			}
			for ( i in findKey ) uniqueArray.push(findKey[i]);
			
            return uniqueArray;
        },		     
		   
		     
		/**
		* 지정된 속성의 값이 처음으로 일치하는 객체의 배열 위치를 뒤에서부터 찾아 반환한다.<br>
        * 배열의 각 항목은 하나 이상의 속성을 가진 객체이다.<br> 
		* @param {array} array 대상 Array.
		* @param {string} prop 기준 속성.
		* @param {string} item 기준 값.
		* @param {number=} from 검색 시작 위치(default: 0).
		* @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
		* @return {number} 검색된 배열 위치. 없다면 -1 리턴.
		* @example
		* var users = [];
		* users[0] = {id:"milk", name:"park", age:33};
		* users[1] = {id:"apple", name:"kim"};
		* users[2] = {id:"oops", name:"joo", age:44};
		* users[3] = {id:"beans", name:"lee", age:50};
		* users[4] = {id:"zoo", age:65};
		* users[5] = {id:"milk", name:"", age:33};
		* users[6] = {id:"milk", name:"lee", age:33};
		* var index = Base.array.lastIndexOfProp(users, "name", "lee");
		* trace("index==>" + index);	// output : index==>6
		* var index = Base.array.lastIndexOfProp(users, "name", "lee", 5);
		* trace("index==>" + index);	// output : index==>3
		* @memberOf Base.array
		*/
		lastIndexOfProp: function(array, prop, item, from, strict)
		{
			var i, obj, 
				propValue;
			
			if (from == null)
			{
				from = array.length - 1;
			}
			else if (from < 0)
			{
				from = Math.max(0, array.length + from);
			}
			
			var strict = strict || false;
			
			if (strict)
			{
				for (i=from; i>=0; i--)
				{
					if (i in array && array[i])
					{
						obj = array[i],
						propValue = obj[prop];
						
						if (propValue === item)
						{
							return i;
						}
					}
				}
			}
			else
			{
				for (i=from; i>=0; i--)
				{
					if (i in array && array[i])
					{
						obj = array[i],
						propValue = obj[prop];
						
						if (propValue == item)
						{
							return i;
						}
					}
				}
			}
			
			return -1;
		},		     
		  
		     
        /**
		* 배열 형태로 변환 처리한다.
		* @param {object} iterant 변환 대상 Obejct.
		* @param {number=} start 시작 위치 (default: start Index).
		* @param {number=} end 끝 위치 (default: end Index).
		* @return {array} 변환된 Array.
		* @example
		* this.fn_mon("Jan","Feb","Mar","Apr");
		* this.fn_mon = function() 
		* {
		* 	var result = Base.array.toArray(arguments);
		*	trace("result==>" + result);	// output : result==>[Jan,Feb,Mar,Apr]
		* }
		*
		* var result = Base.array.toArray("ABCDEFG",1,3);
		* trace("result==>" + result);	// output : result==>[B,C]
		* @memberOf Base.array
		*/
        toArray: function(iterant, start, end)
        {
            if (!iterant || !iterant.length) 
            {
                return [];
            }
			
			if ( Base.isArray(iterant) )
			{
				if ( arguments.length == 1 ) return iterant;
				else if ( arguments.length == 2 ) return iterant.slice(start);
				else return iterant.slice(start, end);
			}

            if (typeof iterant === "string") 
            {
                iterant = iterant.split("");
            }

            var i, array = [],
            start = start || 0;
            
            end = end ? ((end < 0) ? iterant.length + end : end) : iterant.length;

            for (i = start; i < end; i++) 
            {
                array.push(iterant[i]);
            }

            return array;
        },		     
		     
		     
    });

}
