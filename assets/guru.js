const guru = {
        nama: "Drs. H. HERI SUPRIYATNA, M.Pd",
        nip: "1968123456789",
        golongan: "Pembina Tk. I/ IV/b/Guru Madya, IV/b",
        jabatan: "Kepala Sekolah"
    }
let data = "";
for (let index = 1; index <= 50; index++) {
   data += `<tr>
   <td>${index}</td>
   <td>${guru.nama}</td>
   <td>${guru.nip+index}</td>
   <td>${guru.golongan}</td>
   <td>${guru.jabatan}</td>
</tr>`;    
document.querySelector("tbody").innerHTML = data;
}