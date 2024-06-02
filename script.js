function clock() {
     let hours = document.querySelector(".h");
     let minutes = document.querySelector(".m");
     let scnd = document.querySelector(".s");
     let ampm = document.querySelector(".t");

     let ghante = new Date().getHours();
     let mnt = new Date().getMinutes();
     let sec = new Date().getSeconds();
     let peri = (ghante >= 12 ? "PM" : "AM");
    
    if(ghante > 12) {
        ghante = ghante - 12;
    }

    ghante = (ghante < 10) ? "0" + ghante : ghante;
    mnt = (mnt < 10) ? "0" + mnt : mnt;
    sec = (sec < 10) ? "0" + sec : sec;

     hours.innerHTML = ghante;
     minutes.innerHTML = mnt;
     scnd.innerHTML = sec;
     ampm.innerHTML = peri;

}
setInterval(clock, 1000);