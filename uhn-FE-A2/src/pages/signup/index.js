import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {Button} from "@mui/material";
import {SERVER_URL} from '@/config';
import {useRouter} from "next/router";

const Signup = () => {
  const router = useRouter();
  const [prescriptionId, setPrescriptionId] = useState('');
  const [name, setName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [numberOfCompletedSets, setNumberOfCompletedSets] = useState('');
  const [finishStatus, setFinishStatus] = useState('done');

  const [valid, setValid] = useState(false);




  const handleSubmit = async (e) => {
    e.preventDefault();


    fetch(SERVER_URL + '/save', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        PrescriptionID: prescriptionId,
        Name: name,
        DoctorName: doctorName,
        ExerciseName: exerciseName,
        NumberOfCompletedSets: numberOfCompletedSets,
        FinishStatus: finishStatus
      })
    }).then(res => {
      if (res.status === 201) {
        alert('Save success!')
        setValid(true);
      } else {
        alert("Save fail!");
      }

    }).catch(err => {
      alert("Save fail!");
      console.log(err)
    })
  }

  return (
    <div className={'container'} style={{height: '100vh'}}>
      <h2 className={'text-center w-100 mt-5'}>Please enter your current progress</h2>

      {valid && (
        <div className="alert alert-success text-center" role="alert">
          Well Done! Your information has been saved.
        </div>
      )}

      <form className={'w-75 mt-5'} onSubmit={handleSubmit}>
        <p className={'d-flex justify-content-end'}>
          <label className={'form-label me-2'} style={{whiteSpace: 'nowrap'}}>
            Prescription ID
          </label>
          <input
            required
            value={prescriptionId}
            onChange={e => setPrescriptionId(e.target.value)}
            style={{width: '500px'}} className={'form-control form-control-sm '} />
        </p>

        <p className={'d-flex justify-content-end'}>
          <label className={'form-label me-2'} style={{whiteSpace: 'nowrap'}}>
            Your Name
          </label>
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            style={{width: '500px'}} className={'form-control form-control-sm '} />
        </p>

        <p className={'d-flex justify-content-end'}>
          <label className={'form-label me-2'} style={{whiteSpace: 'nowrap'}}>
            Doctor Name
          </label>
          <input
            required
            value={doctorName}
            onChange={e => setDoctorName(e.target.value)}
            style={{width: '500px'}} className={'form-control form-control-sm'} />
        </p>

        <p className={'d-flex justify-content-end'}>
          <label className={'form-label me-2'} style={{whiteSpace: 'nowrap'}}>
            Exercise Name
          </label>
          <input
            required
            value={exerciseName}
            onChange={e => setExerciseName(e.target.value)}
            style={{width: '500px'}} className={'form-control form-control-sm'} />
        </p>

        <p className={'d-flex justify-content-end'}>
          <label className={'form-label me-2'} style={{whiteSpace: 'nowrap'}}>
            Number of completed sets
          </label>
          <input
            required
            value={numberOfCompletedSets}
            onChange={e => setNumberOfCompletedSets(e.target.value)}
            type={'number'} step={1} style={{width: '500px'}} className={'form-control form-control-sm'} />
        </p>

        <p className={'d-flex justify-content-end'}>
          <label className={'form-label me-2'} style={{whiteSpace: 'nowrap'}}>
            Finish status(Done / Not Done)
          </label>
          <select value={finishStatus}
                  required
                  onChange={e => setFinishStatus(e.target.value)}
                  style={{width: '500px'}} className="form-select">
            <option value="done">Done</option>
            <option value="not done">Not done</option>
          </select>
        </p>

        <p className={'mt-4 text-end'}>
          <Button className={'me-2'}
                  type={'submit'}
                  color={'warning'}
                  variant={'contained'}>
            Submit Info!
          </Button>

          <Button
            color={'inherit'}
            variant={'contained'}
            onClick={() => {
             router.push('/table')
            }
            }
          >
            Check Database!
          </Button>
        </p>

      </form>
    </div>
  )
}

export default Signup;