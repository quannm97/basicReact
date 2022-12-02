var a= Math.floor(Math.random()*max);
if(a%2==0&&a%5==0){
    document.write("a chia het 2 va 5");
}else if(a%2==0){
    document.write("a chia het 2 ");
}else if(a%5==0){
    document.write("a chia het cho 5")
}else (a%5!==0&&a%2!==0){
    document.write("a khong chia het cho 2 va 5")
};