console.log('This is a popup!');

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('cheeseme');
  button.addEventListener('click', function () {
      chrome.windows.create({
        url: 'popup.html',
        type: 'popup',
        width: 1500,
        height: 500
  });
        function popup2(){
        chrome.windows.create({
            url: 'popup2.html',
            type: 'popup',
            width: 800,
            height: 700,
            left: 300,
            top: 20

        });
    }
    setTimeout(popup2, 750);
});
});
