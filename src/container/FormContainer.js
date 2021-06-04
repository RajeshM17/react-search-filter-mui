import data from '../Data/MOCK_DATA.json';
import React, { useState, useEffect } from 'react';
import inRange from '../Utils/range';
import Datatable from '../Components/Datatable/Datatable';
import Control from '../Components/controls/Control';
import { FormControl } from '@material-ui/core';
function FormContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ageTerm, setAgeTerm] = useState('');
  const [genderTerm, setGenderTerm] = useState('');
  const [marriedTerm, setMarriedTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const ageOptions = [
    { id: 1, title: '1-25' },
    { id: 28, title: '26-50' },
    { id: 52, title: '51+' },
  ];
  const genderOptions = [
    { id: "Male", title: 'Male' },
    { id: "Female", title: 'Female' },
  ];
  const maritalStatusOptions = [
    { id: true, title: 'Married' },
    { id: false, title: 'Unmarried' },
  ];
  useEffect(() => {
    const results = data.filter((person) => {
      var minimum = 1,
        maximum = 150;

      if (inRange(ageTerm, 1, 25)) {
        minimum = 1;
        maximum = 25;
      } else if (inRange(ageTerm, 26, 50)) {
        minimum = 26;
        maximum = 50;
      } else if (inRange(ageTerm, 51, 150)) {
        minimum = 51;
        maximum = 150;
      }
      return (
        person.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        person.age >= minimum &&
        person.age <= maximum &&
        person.gender
          .toString()
          .toLowerCase()
          .startsWith(genderTerm.toLowerCase()) &&
        person.isMarried.toString().includes(marriedTerm)
      );
    });
    setSearchResults(results);
    console.log(searchTerm);
  }, [searchTerm, marriedTerm, genderTerm, ageTerm]);
  const changeState = () => {
    console.log('in change State');
    setSearchTerm('');
    setAgeTerm('');
    setGenderTerm('');
    setMarriedTerm('');
  };
  return (
    <div>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          margin: '20px',
        }}
      >
      <FormControl>
        <Control.Input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        <Control.Select
          label={'Select Age'}
          name={'Age'}
          value={ageTerm}
          options={ageOptions}
          onChange={(event) => {
            setAgeTerm(event.target.value);
          }}
        />

        <Control.Select
          label={'Select Gender'}
          name={'gender'}
          options={genderOptions}
          value={genderTerm}
          onChange={(event) => {
            setGenderTerm(event.target.value);
          }}
        />
        <Control.Select
          label={'Select Marital Status'}
          name={'status'}
          options={maritalStatusOptions}
          value={marriedTerm}
          onChange={(event) => {
            setMarriedTerm(event.target.value);
          }}
        />

        <Control.Button
          variant="outlined"
          color="primary"
          type="reset"
          text="Reset"
          onClick={() => changeState()}
        />
        </FormControl>
      </div>
      <div style={{ float: 'center' }}>
        <Datatable data={searchResults} />
      </div>
    </div>
  );
}
export default FormContainer;
