import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function EmpList(props) {
    const empDet = props.empDet || [];
    return (
        <div>
            <p style={{ margin: '25px' }} ></p>
            <table className='table  table-hover table-bordered table-striped' style={{}}>
                <thead className='tabHed table-dark '>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        empDet.map((emp, i) =>
                            <tr key={"keyName" + i.toString()}>
                                <td>{emp.name}</td>
                                <td>{emp.address}</td>
                                <td>{emp.city}</td>
                                <td>{emp.gender}</td>
                                <td>
                                    <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons" onClick={() => props.getEmpEdit(emp, i)}>&#xE254;</i></a>
                                    <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><i class="material-icons" onClick={() => props.empRemove(i)}>&#xE872;</i></a>

                                </td>

                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default EmpList;