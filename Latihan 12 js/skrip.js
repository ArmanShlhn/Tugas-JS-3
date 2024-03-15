function dataPerson(){
    let namasiswa = document.getElementById('frm').nama.value;
    let pekerjaan = document.getElementById('frm').pekerjaan.value;
    let hobby = document.getElementById('frm').hobby.value;
    let input = 'Nama Saya ' + namasiswa + '<br> Pekerjaan saya adalah '+pekerjaan+ '<br> Hobby saya yaitu '+hobby;
    let no_input = 'Form ini wajib di isikan semua!';
    let hasil = (namasiswa && pekerjaan && hobby !='') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;
    //tugasnya adalah lengkapi kode berikut dan tampilkan hasilnya ada pada html
    //1.isian html
    //2.isian pekerjaan
    //3.isian hobby
}