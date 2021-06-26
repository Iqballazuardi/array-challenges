var data = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

var dataHandling = function(arr){
    arr.splice(1, 1, "Roman Alamsyah Elsharawy")

    arr.splice(4,1,"Pria", "SMA Internasional Metro")

    console.log(arr)

    var bulan = arr[3].split('/',3)
    switch (bulan[1]) {
        case '01':
        console.log('JANUARI')
        break;
        
        case '02':
        console.log('FEBUARI')
        break;
        
        case '03':
        console.log('MARET')
        break;
        
        case '04':
        console.log('APRIL')
        break;

        case '05':
        console.log('MEI');
        break;
    
        case '06':
        console.log('JUNI')
        break;
    
        case '07':
        console.log('JULI')
        break;

        case '08':
        console.log('AGUSTUS')
        break;

        case '09':
        console.log('SEPTEMBER')
        break;

        case '10':
        console.log('OKTOBER')
        break;

        case '11':
        console.log('NOVEMBER')
        break;

        case '12':
        console.log('DESEMBER')
        break;
}
console.log(bulan.sort(function(a,b){
    return b-a  
}))
console.log(arr[3])
// var mantap = bulan
// console.log(mantap.reverse())

// var newbulan = bulan.join('-')

// console.log(newbulan)
var nama = arr[1]
    var n = nama.substring(0,15)
    console.log(n)
}

dataHandling(data)