let currentTime = moment().format('MMM D YYYY, hh:mm:ss');

setInterval(()=>{
    currentTime=moment().format('MMM D YYYY, hh:mm:ss');
    currentTime = currentTime.split(', ');
    currentTime[0]=currentTime[0].split(' ')
    currentTime[1]=currentTime[1].split(':');
    for(let item of currentTime[1]){
        currentTime[0].push(item);
    }
    currentTime[0].unshift(moment().format('dddd'));
    currentTime= currentTime[0];
    console.log(currentTime);
    let hour = document.querySelector('h2');
    hour.innerText=`${currentTime[4]}:${currentTime[5]}`;
    let date = document.querySelector('h1');
    date.innerText=`${currentTime[0]}, ${currentTime[1]} ${currentTime[2]}`;
    document.querySelector('.hour').style.transform="rotate("+parseInt(currentTime[4])+'deg)'
    document.querySelector('.minute').style.transform="rotate("+parseInt(currentTime[5])+'deg)'
    document.querySelector('.second').style.transform="rotate("+parseInt(currentTime[6])+'deg)'

    

},1000)