var sayi = Math.floor(Math.random() * (2020 - 1998 + 1) + 1998);

console.log(sayi)

if(sayi%4==0){
    console.log("Avrupa Kupası Senesidir")
}
else if(sayi%4==2){

    console.log("Dünya Kupası Senesidir")
}
else{
    console.log("Bu yılda ne dünya kupası ne avrupa kupası yapılmıştır.")
}