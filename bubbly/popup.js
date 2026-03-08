document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('start');
  button.addEventListener('click', function () {
      var audio = new Audio('bubbly.mp3');
        audio.play();
    
    chrome.windows.create({
        url: '1pop.html',
        type: 'popup',
        width: 80,
        height: 150,
        left: 5,
        top:5
  });
        function popup2(){
        chrome.windows.create({
            url: '2popup.html',
            type: 'popup',
            width: 80,
            height: 150,
            left: 5,
            top: 5

        });
        }

        function popup3(){
        chrome.windows.create({
            url: '3pop.html',
            type: 'popup',
            width: 80,
            height: 150,
            left: 15,
            top: 5

        });
        }

        function popup4(){
        chrome.windows.create({
            url: '4pop.html',
            type: 'popup',
            width: 80,
            height: 150,
            left: 25,
            top: 5

        });
        }

        function popup5(){
        chrome.windows.create({
            url: '5pop.html',
            type: 'popup',
            width: 80,
            height: 150,
            left: 35,
            top: 5

        });
        }

        function popup6(){
        chrome.windows.create({
            url: '6pop.html',
            type: 'popup',
            width: 80,
            height: 150,
            left: 45,
            top: 5

        });
        }
    
        function popup7(){ //icame in
        chrome.windows.create({
            url: '7pop.html',
            type: 'popup',
            width: 200,
            height: 110,
            left: 45,
            top: 5

        });
        }

        function popup8(){ //abit befreo
        chrome.windows.create({
            url: '8pop.html',
            type: 'popup',
            width: 200,
            height: 110,
            left: 85,
            top: 25

        });
        }

        function popup9(){ //the opening set
        chrome.windows.create({
            url: '9pop.html',
            type: 'popup',
            width: 250,
            height: 285,
            left: 120,
            top: 25

        });
        }

        function popup10(){ //i took the bet
        chrome.windows.create({
            url: '10pop.html',
            type: 'popup',
            width: 250,
            height: 180,
            left: 180,
            top: 15

        });
        }

        function popup11(){ //i know the
        chrome.windows.create({
            url: '11pop.html',
            type: 'popup',
            width: 250,
            height: 100,
            left: 220,
            top: 35

        });
        }

        function popup11a(){ // the
        chrome.windows.create({
            url: '11pop2.html',
            type: 'popup',
            width: 80,
            height: 90,
            left: 220,
            top: 120

        });
        }

        function popup12(){ //rest
        chrome.windows.create({
            url: '12pop.html',
            type: 'popup',
            width: 250,
            height: 90,
            left: 300,
            top: 120

        });
        }

        function popup13(){ //it's good
        chrome.windows.create({
            url: '13pop.html',
            type: 'popup',
            width: 250,
            height: 90,
            left: 500,
            top: 20

        });
        }

        function popup14(){ //I
        chrome.windows.create({
            url: '14pop.html',
            type: 'popup',
            width: 250,
            height: 90,
            left: 500,
            top: 100

        });
        }

        function popup15(){ //guess
        chrome.windows.create({
            url: '15pop.html',
            type: 'popup',
            width: 250,
            height: 90,
            left: 600,
            top: 100

        });
        }
        function popup16(){ //the cavern
        chrome.windows.create({
            url: '16pop.html',
            type: 'popup',
            width: 250,
            height: 90,
            left: 700,
            top: 20

        });
        }

        function popup17(){ //is a crowd
        chrome.windows.create({
            url: '17pop.html',
            type: 'popup',
            width: 250,
            height: 90,
            left: 700,
            top: 100

        });
        }

        function popup18(){ //around
        chrome.windows.create({
            url: '18pop.html',
            type: 'popup',
            width: 250,
            height: 90,
            left: 900,
            top: 20

        });
        }

        function popup19(){ //and i
        chrome.windows.create({
            url: '19pop.html',
            type: 'popup',
            width: 250,
            height: 90,
            left: 900,
            top: 100

        });
        }
        function popup20(){ //can scarce
        chrome.windows.create({
            url: '20pop.html',
            type: 'popup',
            width: 250,
            height: 90,
            left: 900,
            top: 180

        });
        }

        function popup21(){ //get by
        chrome.windows.create({
            url: '21pop.html',
            type: 'popup',
            width: 250,
            height: 90,
            left: 900,
            top: 260

        });
        }

        function popup22(){ //on second breath
        chrome.windows.create({
            url: '22pop.html',
            type: 'popup',
            width: 200,
            height: 140,
            left: 50,
            top: 250

        });
        }

        function popup23(){ //between
        chrome.windows.create({
            url: '23pop.html',
            type: 'popup',
            width: 200,
            height: 90,
            left: 430,
            top: 300

        });
        }

        function popup24(){ //the
        chrome.windows.create({
            url: '24pop.html',
            type: 'popup',
            width: 70,
            height: 130,
            left: 230,
            top: 300

        });
        }

        function popup25(){ //press
        chrome.windows.create({
            url: '25pop.html',
            type: 'popup',
            width: 170,
            height: 130,
            left: 500,
            top: 300

        });
        }
    
    
    setTimeout(popup2, 500);
    setTimeout(popup3, 1500); //drums
    setTimeout(popup4, 2200);
    setTimeout(popup5, 2900);
    setTimeout(popup6, 3500);
    setTimeout(popup7, 3500); //i camein
    setTimeout(popup8, 4300);//a bit before
    setTimeout(popup9, 5100); //theopening set
    setTimeout(popup10, 6300); //i tookthebet
    setTimeout(popup11, 7500); //i know 
    setTimeout(popup11a, 8100); //the
    setTimeout(popup12, 8400); //rest   
    setTimeout(popup13, 8900); //it5's good
    setTimeout(popup14, 9500); //I
    setTimeout(popup15, 9800); //guess
    setTimeout(popup16, 10300); //the cavern
    setTimeout(popup17, 10800); //is a crowd
    setTimeout(popup18, 11300); //around
    setTimeout(popup19, 12300); //and i
    setTimeout(popup20, 13000); //can scarve
    setTimeout(popup21, 13400); //get by
    setTimeout(popup22, 13900); //on second breath
    setTimeout(popup23, 15500); //between
    setTimeout(popup24, 15900); //the
    setTimeout(popup25, 16300); //press

    
    
});
});