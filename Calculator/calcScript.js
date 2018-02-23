		var box = document.getElementById('display');
		var box2 = document.getElementById('display2');
		var aux ;

		var displayKey = function(x){
			box.value = x;

			if(x == 'C'){
				box.value = '';
				box2.value = '';
			}
			//else if (x >='a' && 'z'<=x)
				//box.value = 'NaN';
		}

		var saveValue = function(x){
			box2.value += box.value + x;
			box.value = '';
		}

		var btnsub = function (x){
			if(box.value == '0' || box.value == '')
			box.value = x;
			else
			saveValue(x);
		}

		var btnadd = function(x){
			saveValue(x);
		}

		var btndiv = function(x){
			saveValue(x);
		}

		var btnrst = function(x){
			saveValue(x)
		}

		var btnmul = function(){
			box2.value += box.value + '*';
			box.value = '';
		}

		var btnequal = function(){
			//find the operation we want to do
			var str1 = box2.value;
			var len = str1.length-1;
			var x = str1.substring(len,len+1);

			//verify and do the correct calculation
			if(x == '^'){
				btnequal2();
			}
			else{
			var expresion = box2.value + box.value;
			box.value =eval(expresion);
			document.history.textHistory.value += expresion + ' = ' + box.value + '\n';
			box2.value = '';
			}
		}

		var btnequal2 = function(){
			var str1 = box2.value;
			var len = str1.length-1;

			var x = Number(str1.substring(0,len));
			var y = box.value;

			var result = Math.pow(x,y);

			box.value = result;
			document.history.textHistory.value += str1 + y + ' = ' + result + '\n';
			box2.value = '';
		}

		var btnsqrt = function(){
			var x = box.value;
			var result = Math.sqrt(x);

			box.value = result;
			document.history.textHistory.value += '√' + x + ' = ' + result + '\n';
		}

		var btnsquare = function(){
			document.history.textHistory.value += box.value;
			var x = box.value;
			var result = Math.pow(x,2);

			box.value = result;
			document.history.textHistory.value += '^2 = ' + result + '\n';
		}

		var btnxaty = function(x){
			saveValue(x);
		}

		var btnfact = function(){
			var fact=1;
			var n = box.value;

			if(n == 0 || n == 1){
				box.value = 1;
				document.history.textHistory.value += n + '! = ' + 1 +'\n';
			}else{

				for (var i = 1;i<=n;i++)
					fact *= i;

				box.value = fact;
				document.history.textHistory.value += n + '! = ' + fact + '\n';
			}
		}

		var btndel = function(){
				var v = box.value;
				var len = v.length-1;
				var newV = v.substring(0,len);

				box.value = newV;
			}

		var popUpHistory =function(){

		var currentName = document.getElementById('textHistory');

		if (currentName.style.visibility != 'visible')
			currentName.style.visibility = 'visible' ;
		else
			currentName.style.visibility = 'hidden' ;
			
		}

		var btnneg = function(){
			var x = box.value;
			var x2;
			var stringHistory;
			if(x > 0){
				x2 = ~x + 1;
				stringHistory = 'negate(' + x + ')';
				box.value = x2 ;
				document.history.textHistory.value +=  stringHistory + ' = ' + x2 + '\n';
			}else if (x < 0){
				x2 = ~x + 1;
				stringHistory = 'negate(' + x + ')';
				box.value = x2 ;
				document.history.textHistory.value += stringHistory + ' = ' + x2 + '\n';
			}else if (x == 0){
				stringHistory = 'negate(' + x + ')';
				box.value = x ;
				document.history.textHistory.value += stringHistory + ' = ' + x + '\n';
			}
		}
