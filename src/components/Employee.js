function Employee(props) {
  return (
    <div className="row">
        {/* bagian gambar */}
        <div className="col-3">
            {/* load image */}
            <img className="img img-rounded"
            src="(props.image}" alt="Gambar"
            style={{width:`20 rem`}}/>
        </div>

        {/* bagian kedua */}
        <div className="col-4">
            <small className="text-info">Nama</small>
            <h5>{props.name}</h5>
            <small className="text-info">Tgl. Lahir</small>
            <h5>{props.date}</h5>
            <small className="text-info">Gender</small>
            <h5>{props.gender}</h5>
        </div>

        {/* bagian ketiga */}
        <div className="col-4">
            <small className="text-info">Email</small>
            <h5>{props.email}</h5>
            <small className="text-info">Telepon</small>
            <h5>{props.telepon}</h5>
            <small className="text-info">Divisi</small>
            <h5>{props.divisi}</h5>
        </div>

    </div>
  );
}
export default Employee;
