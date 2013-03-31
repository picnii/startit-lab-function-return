describe("Function Return  ", function() {
  var cmds;
  

  
  beforeEach(function(){
    $('#output').css('background','white');
    $('#output').html('');
    
    clearItems();
    clearCommands();
    init();
    cmds = getCommands();
  })

 

  it('have input with  4 button ', function(){
    expect($('#buttonA').length).toBe(1);
    expect($('#buttonB').length).toBe(1);
    expect($('#buttonC').length).toBe(1);
    expect($('#buttonD').length).toBe(1);
  });

  it('getDistance Should Work Propery', function(){
    
    for(var i =-10; i < 100; i++)
    {
      for(var j =-10; j< 100; j++)
      {
        var expected = getDistance(i,j);
        var actual = Math.sqrt(Math.pow(i,2) + Math.pow(j,2));
        expect(expected).toBe(actual)
      }
    }
    
  });

  it('getTriangleArea() should work propery', function(){
    for(var i =-10; i < 100; i++)
    {
      for(var j =-10; j< 100; j++)
      {
        var expected = getTriangleArea(i,j);
        var actual = 0.5*i*j;
        expect(expected).toBe(actual)
      }
    }
  });

  it('getHoroscope(name, age) should work propery', function(){
    var name = 'npop';
    for(var i = -10 ; i <= 10;i++)
      expect(getHoroscope(name, i)).toEqual(name +" is too young");
    for(var i = 11 ; i <= 25;i++)
      expect(getHoroscope(name, i)).toEqual(name +" is ok");
    for(var i = 26 ; i <= 30;i++)
      expect(getHoroscope(name, i)).toEqual(name +" is too old");
  });

  it('isEvenNumber() should work propery ', function(){
   for(var i =0 ;i < 100;i++)
   {
      expect(isEvenNumber(i)).toBe(i % 2 == 0)
   }
  });

  it('work with button A B C D (using prompt)', function(){
    window.testPrompCount = 0;
    window.testPrompReturn = ["3","5","50","20","sompop","25","20"]
    window.prompt = function()
    {
      var answer = window.testPrompReturn[testPrompCount];
      testPrompCount++;
      return answer;
    }
      onSubmitA();
      //3 , 5;
      expect($('#item0').html()).toBe(''+Math.sqrt(Math.pow(3,2)+Math.pow(5,2)));    

      onSubmitB();
      //50 20
      expect($('#item1').html()).toBe(0.5*20*50+'');    

      onSubmitC();
      expect($('#item2').html()).toBe("sompop is ok");

      onSubmitD();
      expect($('#item3').html()).toBe("yes 20 is even number");
  });
  
});