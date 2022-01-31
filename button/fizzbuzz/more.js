for(var i=1; i<20; i++) {
    if(i % 2 == 0) {
        console.log("fun"); 
    }else if(i % 2 == 0 || i % 3 == 0) {
        console.log("happy")
    } else console.log(i);
}