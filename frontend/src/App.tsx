import PatientsList from './components/Patients/PatientsList';
// import PatientsForm from './components/Patients/PatientsForm';
// import PatientsDetails from './components/Patients/PatientsDetails';
import { Container } from '@mui/material';
import "./styles/app.scss"

function App() {

  return (
    <>
      <Container maxWidth="lg">
        <PatientsList />
        {/* <PatientsForm />
        <PatientsDetails /> */}
      </Container>
    </>
  )
}

export default App
