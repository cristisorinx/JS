		var btnsub = function (){
			document.Calculator.display.value += '-';
		}

		var btnadd = function(){
			document.Calculator.display.value += '+';
		}

		var btndiv = function(){
			document.Calculator.display.value += '/';
		}

		var btnmul = function(){
			document.Calculator.display.value += '*';
		}

		var btnequal = function(){
			istoric.text.value += Calculator.display.value;
			btnequal2();
		}

		var btnequal2 = function(){
			Calculator.display.value =eval(Calculator.display.value);
			istoric.text.value += '=' + eval(Calculator.display.value) + '\n';
		}

		var btnsqrt = function(){
			var x = document.getElementById('display').value;
			var result = Math.sqrt(x);
			document.Calculator.display.value = result;
			istoric.text.value += '√' + x + ' = ' + result + '\n';
		}

		var btnsquare = function(){
			istoric.text.value += Calculator.display.value;
			var x = document.getElementById('display').value;
			var result = Math.pow(x,2);
			document.Calculator.display.value = result;
			istoric.text.value += ' ^2= ' + result + '\n';
		}

		var btnxaty = function(){
			var x = document.getElementById('display').value;
			var y = document.getElementById('display'),value;
			var result = Math.pow(x,y);
			document.Calculator.display.value = result;
		}
