import { useState, useEffect } from 'react';
/**
 * useState -> digunakan untuk mendefinisikan state
 * useEffect -> sebuah fungsi yang dijalankan (dieksekusi) ketika
 * komponennya telah ditampilkan
 */
import { Modal } from 'bootstrap';
export default function Student(props) {
  let [Students, setStudents] = useState([]);
  let [modalStudent, setModalStudent] = useState(null);
  let [id, setId] = useState(0);
  let [name, setName] = useState('');
  let [birthdate, setBirthdate] = useState('');
  let [action, setAction] = useState('');
  let [editId, setEditId] = useState(true);

  useEffect(() => {
    // inisiasi data array stdents
    let arrayStudents = [
      { id: 1, name: `Aulia`, birthdate: `19 Oktober 2004` },
      { id: 2, name: `Ayang`, birthdate: `22 Agustus 2004` },
    ];
    setStudents(arrayStudents);

    // inisiasi state (modalStudent)
    setModalStudent(new Modal(document.getElementById(`modal_student`)));
  }, []);

  // function addStudent
  let addStudent = () => {
    // open modal
    modalStudent.show();

    // reset isi dari setiap inputan
    setId(0);
    setName('');
    setBirthdate('');
    setAction('insert');
    setEditId(true);
  };

  // function saveStudent
  let saveStudent = () => {
    // close modal
    modalStudent.hide();
    if (action === `insert`) {
      let newData = {
        id: id,
        name: name,
        birthdate: birthdate,
      };

      // store array from students
      let temp = [...Students];
      // add new data
      temp.push(newData);
      // store to students again
      setStudents(temp);
    } else if (action === `edit`) {
      // store data student to temp
      let temp = [...Students];

      // find index of selected data by ID
      let index = temp.findIndex((siswa) => siswa.id === id);

      // update data based on founded index
      temp[index].name = name;
      temp[index].birthdate = birthdate;

      // restore to students from temp
      setStudents(temp);
    }
  };

  let editStudent = (siswa) => {
    // open the modal
    modalStudent.show();
    setId(siswa.id);
    setName(siswa.name);
    setBirthdate(siswa.birthdate);
    setAction(`edit`);
    setEditId(false);
  };

  return (
    <div>
      <div className="card-col-10">
        <div className="card-header bg-success">
          <h3 className="text-white">List of My Students</h3>
        </div>
        <div className="card-body">
          {/* 
                    .map() -> fungsi dari array untuk scanning setiap data dalam array
                    */}
          {Students.map((siswa) => (
            <div className="row" key={`key${siswa.id}`}>
              <div className="col-2">
                <small>ID</small>
                <h5>{siswa.id}</h5>
              </div>
              <div className="col-4">
                <small>Name</small>
                <h5>{siswa.name}</h5>
              </div>
              <div className="col-4">
                <small>Birthdate</small>
                <h5>{siswa.birthdate}</h5>
              </div>
              <div className="col-2">
                <small>Action</small> <br />
                {/* edit button */}
                <button className="btn btn-primary mx-1" onClick={() => editStudent(siswa)}>
                  Edit
                </button>
                {/* delete button */}
                <button className="btn btn-danger mx-1" onClick={() => deleteStudent(siswa)}>
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* button add data */}
          <button className="btn btn-dark" onClick={() => addStudent()}>
            Add
          </button>

          {/* modal component */}
          <div className="modal" id="modal_student">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4>Form Student</h4>
                </div>
                <div className="modal-body">
                  {/* input for ID, Name, Birthdate */}
                  ID
                  <input type={`number`} className="form-control mb-2" value={id} onChange={(ev) => setId(ev.target.value)} readOnly={!editId} />
                  {/* saat add student, editId = true
                                        oleh krn itu readOnly harus bernilai false,
                                        
                                        saat edit student, editId = false
                                        oleh krn itu readOnly harus bernilai true*/}
                  Name
                  <input type={`text`} className="form-control mb-2" value={name} onChange={(ev) => setName(ev.target.value)} />
                  Birthdate
                  <input type={`text`} className="form-control mb-2" value={birthdate} onChange={(ev) => setBirthdate(ev.target.value)} />
                  <button className="btn btn-info" onClick={() => saveStudent()}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end of modal */}
        </div>
      </div>
    </div>
  );
}
