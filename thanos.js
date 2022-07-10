// Language: javascript
// Path: thanos.js

// calculate population of Thanos Planet
// determine the first day of thanos planet's population
let thanosPopulation = 0;
// determine the 50th days of Thanos Planet's population
for (let days = 2; days <= 50; days++) {
    let thanosPopulation0 = 1;
    if (days / 3 === 0) {
        let thanosPopulation1 = thanosPopulation0 - Math.floor(1 / 2 * thanosPopulation0);
        thanosPopulation = thanosPopulation1;
    }
}

      /*
      Javascript 
      - mulai dari hari ke-2
      - simpan variabel hari = 2
      - simpan jumlah penduduk awal = 1
      - dari hari bernilai 2, tambahkan 1 terus sampai 50
      - if nilai hari bisa habis dibagi 3, maka  
            - simpan jumlah penduduk saat ini dengan nilai = penduduk awal - (1/2*penduduk awal)
      - else tidak habis dibagi 3, maka
            - simpan jumlah penduduk saat ini dengan nilai = penduduk awal*3
      */

      //   Language: javascript
      //   Path: thanos.js
    //   function thanos() {
    //     for (var hari = 2; hari < 51; hari++) {
    //       var jpa = 1;
    //       if (hari / 3 == 0) {
    //         var jpa = 1;
    //         var jps = jpa - Math.floor((1 / 2) * jpa);
    //         jpa = jps;
    //       } else {
    //         var jpa = 1;
    //         var jps = 3 * jpa;
    //         jpa = jps;
    //       }
    //       console.log(`Jumlah penduduk di Planet Thanos hari ke-${hari} adalah ${jps} penduduk.` + "\n");
    //     }
    //   }

      /*
      // calculate population of Thanos Planet
      // determine the first day of thanos planet's population
      var thanosPopulation = 0;
      // determine the 50th days of Thanos Planet's population
      for (var days = 2; days < 51; days++) {
        var thanosPopulation0 = 1;
        if (days / 3 === 0) {
          var thanosPopulation1 = thanosPopulation0 - Math.floor((1 / 2) * thanosPopulation0);
          thanosPopulation = thanosPopulation1;
        } else {
            var thanosPopulation1 = thanosPopulation0 * 3;
            thanosPopulation = thanosPopulation1;
        }
        thanosPopulation = thanosPopulation1;
        console.log(`Jumlah penduduk di Planet Thanos hari ke-${days} adalah ${thanosPopulation} penduduk.` + "\n");
      }
      */