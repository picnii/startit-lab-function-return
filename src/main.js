function init()
{
	showInput('button', 4);
	changeButtonText(buttonA, 'Distance');
	changeButtonText(buttonB, 'Triangle Area');
	changeButtonText(buttonC, 'Horoscope');
	changeButtonText(buttonD, 'Check Even');
}

function getDistance(deltaX, deltaY)
{
	var x2 = Math.pow(deltaX, 2);
	var y2 = Math.pow(deltaY, 2);
	return Math.sqrt(x2 + y2);
}

function getTriangleArea(width, height)
{
	return 0.5*width*height;
}

function getHoroscope(name, age)
{
	if(age > 25)
		return name +" is too old";
	else if(age > 10)
		return  name + " is ok";
	else
		return name + " is too young";
}

function isEvenNumber(number)
{
	return number % 2 == 0;
}




function onSubmitA()
{
	var inputA = Number(prompt("delta X"));
	var inputB = Number(prompt("delta Y"));
	echo(getDistance(inputA, inputB));
}

function onSubmitB()
{
	var inputA = Number(prompt("width"));
	var inputB = Number(prompt("height"));
	echo(getTriangleArea(inputA, inputB));
}

function onSubmitC()
{
	var inputA = prompt("name");
	var inputB = Number(prompt("age"));
	echo(getHoroscope(inputA, inputB));
}

function onSubmitD()
{
	var input = Number(prompt("number"));
	if(isEvenNumber(input))
		echo("yes "+input + " is even number");
	else
		echo("no")
}