function clicked(){
   let button = document.getElementById("button");
   button.innerText = Generate();
  
}
document.getElementById('button').addEventListener('click', () => {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('lastClickedTime').textContent = `Last clicked at: ${currentTime}`;
});


function Generate(){
   let n = prompt("how many digits OTP you want? (RECOMMENDED only upto 8 digits");
   if (n !== null && !isNaN(n) && Number.isInteger(Number(n)) && n > 0) {
    n = Number(n); // Convert to a number
    
     // Exit the loop if valid
} else {
    alert("Please enter a valid positive integer."); // Show feedback for invalid input
}


   let number = "0123456789"
    let otp ="";
    for(let i =0;i<n;i++){
        random =Math.floor(Math.random()*number.length);
        otp+=random;
    }

    
    return `your OTP is ${otp} Click Again for next otp`;

}
