
import './App.css';
import React, {useState} from 'react'
import EmpList from './EmpList';
import EmpForm from './EmpForm'


function App() {



  const [empObjList, EmpDetails] = useState([]);
  const [setEmpEdit, getEmpEdit2] = useState({});
  const [setEmpEditI, getEmpEdit3] = useState({});
  const [empDelete1, empRemove2] = useState([]);



  function getEmpDet(allDet) {
    EmpDetails(allDet);
  }

  function getEmpEdit1(editObj,i) {
    getEmpEdit2(editObj,i);
    getEmpEdit3(i)
    //console.log("i--",i)
  }

  function empRemove1(i) {
    empRemove2(i);
    empObjList.splice(i, 1);
  }

  return (
    <div className="" style={{background:' #6f42c1'}}>
      <header className='App-header'>
        <h2>Employee Details</h2>

      </header>
        <div className='container-lg' >
          <div className='row'>
            <div className='col-md-6' style={{background:'#f8f9fa'}}>
                <EmpForm getEmpDetailList={getEmpDet} empEditI={setEmpEditI} empEdit={setEmpEdit} />
            </div>
            <div className='col-md-6' style={{background:'#f8f9fa'}} >
                <EmpList empDet={empObjList} getEmpEdit={getEmpEdit1} empRemove={empRemove1} />
            </div>
          </div>
        </div>  
    </div>
    
  );
}

export default App;
