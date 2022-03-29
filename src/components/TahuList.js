export default function TahuList(props) {
    return (
        <div className="row">
            <div className="col-lg-3 p-3">
                <div className="card" style={{width:`18rem`}}>
                    <div className="card-body bg-white">
                        <h5 className="card-title">Tanggal</h5>
                        <p className="card-text">{props.tgl}</p>
                    </div>
                </div>
                <div className="card" style={{width:`18rem`}}>
                    <div className="card-body bg-primary">
                        <h5 className="card-title">Stok Awal</h5>
                        <p className="card-text">{props.stokAwal}</p>
                    </div>
                </div>
                <div className="card" style={{width:`18rem`}}>
                    <div className="card-body bg-success">
                        <h5 className="card-title">Terjual</h5>
                        <p className="card-text">{props.terjual}</p>
                    </div>
                </div>
                <div className="card" style={{width:`18rem`}}>
                    <div className="card-body bg-danger">
                        <h5 className="card-title">Rusak</h5>
                        <p className="card-text">{props.rusak}</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 p-3">
                <div className="card" style={{width:`18rem`}}>
                    <div className="card-body bg-white">
                        <h5 className="card-title">Tanggal</h5>
                        <p className="card-text">{props.tgl}</p>
                    </div>
                </div>
                <div className="card" style={{width:`18rem`}}>
                    <div className="card-body bg-primary">
                        <h5 className="card-title">Stok Awal</h5>
                        <p className="card-text">{props.stokAwal}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}