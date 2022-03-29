import { useState, useEffect } from "react";
import TahuList from '../components/TahuList';

export default function Tahu(props) {
    let [tahu, setTahu] = useState([]);

    useEffect(() => {
        let arrTahu = [
            {
                tgl: "01-03-2022",
                stokAwal: 100,
                terjual: 85,
                rusak: 5,
                hargaDasar: 3000,
                hargaJual: 4500,
            },
            {
                tgl: "04-03-2022",
                stokAwal: 50,
                terjual: 40,
                rusak: 5,
                hargaDasar: 3500,
                hargaJual: 4500,
            },
            {
                tgl: "10-03-2022",
                stokAwal: 70,
                terjual: 60,
                rusak: 10,
                hargaDasar: 4000,
                hargaJual: 5000,
            },
        ];

        setTahu(arrTahu);
    }, []);

    let untung = (hargaDasar, terjual, hargaJual) => {
        let result = (hargaJual * terjual) - (hargaDasar * terjual);
        return result;
    };

    let presentase = (terjual, stokAwal, rusak) => {
        let hasil = terjual / (stokAwal - rusak);
        return hasil;
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {tahu.map((item) => (
                    <TahuList
                        tgl={item.tgl}
                        stokAwal={item.stokAwal}
                        terjual={item.terjual}
                        rusak={item.rusak}
                        hargaDasar={item.hargaDasar}
                        hargaJual={item.hargaJual}
                        keuntungan={untung(item.hargaDasar, item.terjual, item.hargaJual)}
                        persen={presentase(item.terjual, item.stokAwal, item.rusak)}    
                    ></TahuList>
                ))}
            </div>
        </div>
    );
}