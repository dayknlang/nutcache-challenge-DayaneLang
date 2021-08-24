import React, { useState, useEffect } from 'react';
import Employee from '../components/employee/employee';
import RegisterEmployee from '../components/register-employee/register-employee';
import EditEmployee from '../components/edit-employee/edit-employee';
import DeleteEmployee from '../components/delete-employee/delete-employee';
import api from '../service/api-employee';
import toast from 'react-hot-toast';


const Home = () => {

    const [ employees, setEmployees ] = useState([]);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ modalEditOpen, setModalEditOpen ] = useState(false);
    const [ modalDeleteOpen, setModalDeleteOpen ] = useState(false);
    const [ editingEmployee, setEditingEmployee ] = useState(null);
    const [ deletingEmployee, setDeletingEmployee ] = useState(null);
    //const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        findAllEmployees();
    }, []);

    async function findAllEmployees() {
        const { data } = await api.get('/nutemployee');
        setEmployees(data)
    }

    async function registerEmployee ( name, birthdate, gender, email, cpf, stardate, team ) {
        try { 
            await api.post('/nutemployee', { 
                name: name, 
                birthdate: birthdate, 
                gender: gender, 
                email,
                cpf,
                stardate,
                team
            });

            const Promise = findAllEmployees();
    
            toast.promise(Promise, {
                loading: 'Loading...',
                success: 'Success!',
                error: 'Fetch with error',
            });

        } catch(e){
            console.log('API with error');
        }
    }

    async function deleteEmployee(employee){
        try {
            await api.delete('/nutemployee/' + employee._id);
            const Promise = findAllEmployees();
    
            toast.promise(Promise, {
                loading: 'Loading...',
                success: 'Success!',
                error: 'Fetch with error',
            });
        } catch(e){
           console.log('API with error');
        }
        
    }

    async function editEmployee(id, name, birthdate, gender, email, cpf, startdate, team){
        try{
            await api.put(`/nutemployee/${id}`, {
                name,
                birthdate,
                gender,
                email,
                cpf,
                startdate,
                team,
            })
            const Promise = findAllEmployees();
    
            toast.promise(Promise, {
                loading: 'Loading...',
                success: 'Success!',
                error: 'Fetch with error',
            });
        } catch(e){
            console.log('API with error');
        }
        
    }

    function toggleModal() {
        setModalOpen(!modalOpen);
    }

    function toggleModalEdit() {
        setModalEditOpen(!modalEditOpen);
    }

    function toggleModalDelete() {
        setModalDeleteOpen(!modalDeleteOpen);
    }
    
    function toDeleteEmployee(employee){
        setDeletingEmployee(employee);
    }

    function toEditEmployee(employee){
        setEditingEmployee(employee);
    }

    const allEmployees = employees.filter( employee => {
        return employee.name.toLowerCase();
    })

    return (
        <>
            <RegisterEmployee
                isOpen={modalOpen}
                setIsOpen={toggleModal}
                registerEmployee={registerEmployee}
            />
            <DeleteEmployee
                isOpen={modalDeleteOpen}
                setIsOpen={toggleModalDelete}
                deleteEmployee={deleteEmployee}
                employee={deletingEmployee}
            />
            <EditEmployee 
                isOpen={modalEditOpen}
                setIsOpen={toggleModalEdit}
                editEmployee={editEmployee}
                employee={editingEmployee}
            />
            <div className="container">
                <div className="mainContent">
                    
                    <h1>Nutcache Challenge Brasil</h1>
                    <h3>Seja bem vindo ao gerenciador de pessoas!</h3>
                    <div className="buttonEmployee">
                        <button 
                            className="btn btn-default add-btn" 
                            onClick={() => {toggleModal()}}
                        >
                            Adicione um novo funcionário
                        </button>
                    </div>
                </div>

                <div className="employeeSection">
                    <div className="employeesList">
                        {allEmployees.map(employee => (
                                <Employee
                                    key={employee._id}
                                    employee={employee}
                                    toDeleteEmployee={toDeleteEmployee}
                                    toEditEmployee={toEditEmployee}
                                    openModal={toggleModalDelete}
                                    openModalEdit={toggleModalEdit}
                                />
                            ))
                        }
                    </div>

                    {allEmployees.length === 0 &&
                        <div className="noFound">
                            <p>Por enquanto, sem funcionários adicionados!</p>
                        </div>
                    }
                    </div>

            </div>

        </>
    );
}

export default Home;