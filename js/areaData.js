// Mengambil data provinsi dari API
fetch('https://api.mininxd.my.id/bmkg/area/prov')
  .then(res => res.json())
  .then(data => {
    // Menghilangkan loading dan menampilkan login
    loading.style.display = "none";
    login.style.display = "block";
    infoData.innerHTML = 'Data akan tersimpan dalam cache browser, tekan reset data untuk mengubah lokasi';
    // Menambahkan option provinsi ke select
    for (var i = 0; i < data.length; i++) {
      const option = document.createElement('option');
      option.value = data[i];
      option.text = data[i];
      inputProv.appendChild(option);
    }
  })
  .catch(e => {
    loading.style.display = "none";
    login.style.display = "block";
    infoData.innerHTML = 'Gagal mengambil data provinsi <a id="refresh">refresh</a>';
    infoData.classList.add('danger');
    console.error(e)
  })

// Event listener untuk input provinsi
inputProv.addEventListener('input', async function() {
  // Mengaktifkan input kabupaten dan kecamatan
  inputKab.disabled = true;
  inputKec.disabled = true;

  // Mengambil nilai provinsi yang dipilih
  const prov = inputProv.value;
  try {
    // Mengambil data kabupaten dari API
    const data = await getKabupaten(prov);
    // Mengosongkan option kabupaten
    inputKab.options.length = 0;
    // Menambahkan option kabupaten ke select
    const initialOption = document.createElement('option');
    initialOption.value = "pilih kabupaten";
    initialOption.text = "Pilih Kabupaten";
    initialOption.selected = true;
    initialOption.disabled = true;
    inputKab.appendChild(initialOption);
    for (var i = 0; i < data.length; i++) {
      const option = document.createElement('option');
      option.value = data[i];
      option.text = data[i];
      inputKab.appendChild(option);
    }
    // Mengaktifkan input kabupaten
    inputKab.disabled = false;
  } catch (error) {
    console.error(`Error fetching kabupaten: ${error.message}`);
  }
});

// Event listener untuk input kabupaten
inputKab.addEventListener('input', async function() {
  // Mengaktifkan input kecamatan
  inputKec.disabled = true;

  // Mengambil nilai kabupaten yang dipilih
  const kab = inputKab.value;
  // Mengambil nilai provinsi yang dipilih
  const prov = inputProv.value;
  try {
    // Mengambil data kecamatan dari API
    const data = await getKecamatan(prov, kab);
    // Mengosongkan option kecamatan
    inputKec.options.length = 0;
    // Menambahkan option kecamatan ke select
    const initialOption = document.createElement('option');
    initialOption.value = "pilih kecamatan";
    initialOption.text = "Pilih Kecamatan";
    initialOption.selected = true;
    initialOption.disabled = true;
    inputKec.appendChild(initialOption);
    for (var i = 0; i < data.length; i++) {
      const option = document.createElement('option');
      option.value = data[i];
      option.text = data[i];
      inputKec.appendChild(option);
    }
    // Mengaktifkan input kecamatan
    inputKec.disabled = false;
  } catch (error) {
    console.error(`Error fetching kecamatan: ${error.message}`);
  }
});



inputKec.addEventListener('change', function() {
submitLokasi.disabled = false;
submitLokasi.innerHTML = "simpan dan jalankan"
})

submitLokasi.addEventListener('click', function() {
  localStorage.setItem('areaID',`{
    "prov":"${inputProv.value}",
    "kab":"${inputKab.value}",
    "kec":"${inputKec.value}",
    "API_URL":"https://api.mininxd.my.id/bmkg/weather/${inputProv.value}/${inputKab.value}/${inputKec.value}"
  }`)
  window.location.reload();
})


// Fungsi untuk mengambil data kabupaten dari API
async function getKabupaten(prov) {
  try {
    const res = await fetch(`https://api.mininxd.my.id/bmkg/area/${prov}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching kabupaten: ${error.message}`);
    throw error;
  }
}

// Fungsi untuk mengambil data kecamatan dari API
async function getKecamatan(prov, kab) {
  try {
    const res = await fetch(`https://api.mininxd.my.id/bmkg/area/${prov}/${kab}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching kecamatan: ${error.message}`);
    throw error;
  }
}