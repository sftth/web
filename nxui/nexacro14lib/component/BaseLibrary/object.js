/**
 * @fileoverview 넥사크로  공통 Library interface
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Base.object"))
{

    /**
     * @namespace
     * @name LGE.Interface
     * @author
     * @memberof!  Base.object
     */
    JsNamespace.declare("Base.object", {


		/**
		* object에서 각 반복되는 속성값들을 주어진 함수로 처리한다.<br>
		* 주어진 함수에서 임의 속성 처리에서 return false를 하면 임의 속성지점에서 반복이 멈춘다.
		* @param {object} object 
		* @param {function} func callback 함수 
		* @param {string} func.prop object property name 
		* @param {object} func.val object property value
		* @param {object} func.object object 그 자체
		* @param {object=} scope callback 함수에 대한 수행 scope
		* @example
		* var datas = {code: "001", userId: "", name: "pete"};
		* Base.object.Each(datas, function(prop, val, object) {
		* 	var result = "";
		* 	if ( !val )
		* 	{
		* 		result = prop + " must have not a non-empty value!"
		* 		st_result03.text += result;
		* 		trace(result);	// output : userId must have not a non-empty value!
		* 		return false;
		* 	}
		* 	result = prop + ":" + val;
		* 	st_result03.text += result + "  ";
		* 	trace(result);	// output : code:001
		* }, this);
		* @memberOf Base.object
		*/
		Each: function(object, func, scope)
		{
			var p,
				scope = scope || object;
			for (p in object)
			{
				if (object.hasOwnProperty(p))
				{
					if (func.call(scope, p, object[p], object) === false)
					{
						return;
					}
				}
			}
		},
		
		
		/**
		* object 에 주어진 argument들로 속성값들을 합치는 처리<br>
		* 마지막부터 두번째/첫번째 argument는 속성들이 중복되는 경우 처리방법에 대한 함수이다.<br>
		* 마지막부터 두번째/첫번째 argument가 function으로 존재하지 않으면 중복되는 경우는 tarobject의 값으로 처리된다.
		* @param {object} tarobject target object 
		* @param {object...} target object 과 합치는 object들
		* @param {function=} func callback 함수 
		* @param {object=} scope callback 함수에 대한 수행 scope
		* @return {object} merge 처리된 object
		* @example
		* var datas01 = {"id": edt_id, "id_1": edt_id1};
		* var datas02 = {"name": edt_nm, "name_1": edt_nm1};
		* var datas03 = {"code": edt_cd, "value": edt_val};
		* var datas04 = {"code": edt_cd, "value": edt_val};
		* 
		* var result = Base.object.merge(datas01, datas02, datas03, datas04, function(prop, val, object) {
		* 	switch ( prop )
		* 	{
		* 		case "code" :
		* 			if ( !object["code"] ) object["code"] = [];
		* 			object["code"].push(val);
		* 			return false;
		* 		case "value" :
		* 			if ( !object["value"] ) object["value"] = [];
		* 			object["value"].push(val);
		* 			return false;
		* 	}
		* }, this);
		* 
		* st_result.text = "";
		* for(var p in result)
		* {
		* 	if (Base.isArray(result[p]))
		* 	{
		* 		for (var i=0; i < result[p].length; i++)
		* 		{
		* 			trace(p + "[" + i + "]:" + result[p][i].name);
		*			// output : code[0]:edt_cd
		*			// output : code[1]:edt_cd
		*			// output : value[0]:edt_val
		*			// output : value[1]:edt_val
		* 		}
		* 	}
		* 	else
		* 	{
		* 		trace(p + ":" + result[p].name);
		*		// output : id:edt_id
		*		// output : id_1:edt_id1
		*		// output : name:edt_nm
		*		// output : name_1:edt_nm1
		* 	}
		* }
		* @memberOf Base.object
		*/
		merge: function(tarobject)
		{
			var i = 1,
				func, scope,
				ln = arguments.length,
				mergeFunc = Base.object.merge,
				isObjectFunc = Base.isObject,
				o, prop, 
				val, tarval;

			if ( !tarobject ) return;

			if ( typeof arguments[ln - 1]  == "function" )
			{
				ln = ln - 1;
				func = arguments[ln];
			}
			else if ( typeof arguments[ln - 2]  == "function" )
			{
				ln = ln - 2;
				func = arguments[ln];
				scope = arguments[ln + 1]||this;
			}

			if ( func )
			{
				for (; i < ln ; i++ ) //1
				{
					o = arguments[i];
					for ( prop in o )
					{
						if (o.hasOwnProperty(prop))
						{
							val = o[prop];
							if ( func.call(scope, prop, val, tarobject) !== false )
							{
								tarobject[prop] = val;
							}
						}
					}
				}
			}
			else
			{
				for (; i < ln ; i++ ) //1
				{
					o = arguments[i];
					for ( prop in o )
					{
						if (o.hasOwnProperty(prop))
						{
							val = o[prop];
							if ( !tarobject[prop] )
							{
								tarobject[prop] = val;
							}
						}
					}
				}
			}
			return tarobject;
		},		
		
		
		_hasDontEnumBug: !({ toString: null }).propertyIsEnumerable('toString'),		
		_dontEnums: [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		],
				
		/**
		* object에 속성명칭들을 array로 넘겨준다. 
		* @function getPropertyNames
		* @param {object} object 속성명 추출 대상 객체
		* @return {array} 속성명칭 Array
		* @example
		* var result = Base.object.getPropertyNames({"id": "kiwi", "id1": "apple", code: edt_arg});
		* trace(result);	// output : id,id1,code
		* @memberOf Base.object
		*/
		getPropertyNames: Object.keys ? function(object) {
			return Object.keys(object);
		} :
		function(object)
		{
			var names = [], p;

            for (p in object) 
            {
                if (object.hasOwnProperty(p)) 
                {
                    names.push(p);
                }
            }
            var pThis = Base.object;
			if ( pThis._hasDontEnumBug)
			{
				var enums = pThis._dontEnums;
				for ( var i = 0, len = enums.length ; i < len ; i++ )
				{
					if (object.hasOwnProperty(enums[i])) 
					{
						names.push(enums[i]);
					}
				}
			}
           return names;	
		},		
		    
		     
		/**
		* object에 argument로 주어진 object의 모든 속성값을 복사한다.<br>
		* object, function, date, array Type은 reference가 복사된다.
		* @param {object} tarobject target 객체 
		* @param {object} srcobject source 객체
		* @example
		* var target = {};
		* Base.object.copyProperties(target, {a: 1, b: "2", c: {"A": "3", "B": 4}});
		* for(var p in target)
 		* {
		* 	trace(p + ":" + target[p]);
		*	// output : a:1
		*	// output : b:2
		*	// output : c:[object Object]
 		* }
		* @memberOf Base.object
		*/
		copyProperties: function(tarobject, srcobject)
		{
			if (tarobject && srcobject) 
			{
				var p, value;
				
				for (p in srcobject)
				{
					if (srcobject.hasOwnProperty(p))
					{
						value = srcobject[p];
						tarobject[p] = value;
					}
				}
			}
		},		     
		     
    });

}
