
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if(mysrc === 'images/Kobe.jpg'){
        myImage.setAttribute('src','images/800px-Kobe_Bryant_2015.jpg');

    }
    else{
        myImage.setAttribute('src','images/Kobe.jpg')
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName()
{
    let myName = prompt('请输入你最爱的球星：');
    if(!myName || myName === null)
    {
        setUserName();
    }
    localStorage.setItem('name' , myName);
    myHeading.textContent = '永远滴神' + myName;

}
if (!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName =  localStorage.getItem('name');
    myHeading.textContent = '永远滴神' + storedName;
}
myButton.onclick = function()
{
    setUserName();
}





