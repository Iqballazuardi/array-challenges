// var arr = [
//     ['01','iqbal lazuardi','way petai','basketball'],
//     ['02', 'juni erlangga', 'kincir', 'basketball'],
//     ['03','ryan permadi','talang solo', 'basketball']
// ];


// var dataHAndling = function(array){
//     array.map(function(e){
//         console.log(` id: ${e[0]} \n nama: ${e[1]} \n alamat: ${e[2]} \n hobi:   ${e[3]}` );
    
//     })
    
    
// }
// dataHAndling(arr);


    var data = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

var dataHandling2 = function (array){
        array.splice(1, 1, "Roman Alamsyah Elsharawy")

        array.splice(4,1,"Pria", "SMA Internasional Metro")

        console.log(array)

    var bulan = array[3].split('/' , 3)
    
    var changebulan = bulan.sort()

    namebulan = bulan.slice(0,1);
    namebulan.join('')
    switch ( namebulan[0]) {
        
    
        case '05':
        console.log('MEI');
        break;
    
        case '06':
        alert(`${tanggal} juni ${tahun}`);
        break;
    
        case '07':
        alert(`${tanggal} july ${tahun}`);
        break;
}

    console.log(changebulan.reverse())
    

    var newbulan = bulan.join('-')

    console.log(newbulan)

    var nama = array[1]
    var n = nama.substring(0,15)
    console.log(n)
}
dataHandling2(data)


