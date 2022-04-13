 // const [empData, setEmpData] = useState({
    //     name: '',
    //     address: '',
    //     city: '',
    //     gender: '',

    // })
    // const [empList, setEmpList] =useState([])

    // const [editEmpData, setEditEmpData] = useState({
    //     name: '',
    //     address: '',
    //     city: '',
    //     gender: '',
    //   });
    
    //   const [editEmpId, setEditEmpId] = useState(null);

    // const handleAddFormChange = (event) => {
    //     event.preventDefault();
    
    //     const fieldName = event.target.getAttribute("name");
    //     const fieldValue = event.target.value;
    
    //     const newFormData = { ...empData };
    //     newFormData[fieldName] = fieldValue;
    
    //     setEmpData(newFormData);
    //   };

    //   const handleEditFormChange = (event) => {
    //     event.preventDefault();
    
    //     const fieldName = event.target.getAttribute("name");
    //     const fieldValue = event.target.value;
    
    //     const newEmpData = { ...editEmpData };
    //     newEmpData[fieldName] = fieldValue;
    
    //     setEditEmpData(newEmpData);
    //   };

    //   const handleEditFormSubmit = (event) => {
    //     event.preventDefault();
    
    //     const editedEmp = {
    //       id: editEmpId,
    //       name: editEmpData.name,
    //       address: editEmpData.address,
    //       city: editEmpData.city,
    //       email: editEmpData.email,
    //     };
    
    //     const newEmpLists = [...empList];
    
    //     const index = empList.findIndex((ele) => ele.id === editEmpId);
    
    //     newEmpLists[index] = editedEmp;
    
    //     setEmpList(newEmpLists);
    //     setEditEmpId(null);
    //   };

    //   const handleAddFormSubmit = (event) => {
    //     event.preventDefault();
    
    //     const newEmpList = {
    //       id: nanoid(),
    //       name: empData.name,
    //       address: empData.address,
    //       city: empData.city,
    //       gender: empData.gender,
    //     };
    
    //     const newEmpLists = [...empList, newEmpList];
    //     setEmpList(newEmpLists);
    //   };

    //   const handleEditClick = (event, contact) => {
    //     event.preventDefault();
    //     setEditEmpId(contact.id);
    
      //   const formValues = {
      //     name: contact.name,
      //     address: contact.address,
      //     city: contact.city,
      //     gender: contact.gender,
      //   };
    
      //   setEditEmpData(formValues);
      // };
    
      // const handleCancelClick = () => {
      //   setEditEmpId(null);
      // };
    
      // const handleDeleteClick = (empId) => {
      //   const newEmpList = [...empList];
    
      //   const index = empList.findIndex((contact) => contact.id === empId);
    
      //   newEmpList.splice(index, 1);
    
      //   setEmpList(newEmpList);
      // };