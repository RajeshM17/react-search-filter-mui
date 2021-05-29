import data from '../data/MOCK_DATA.json';
import React, { useState, useEffect } from 'react';
import inRange from '../utils/range';
import Datatable from '../components/Datatable';
import {
  Select,
  Input,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
} from '@material-ui/core';

function FormContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ageTerm, setAgeTerm] = useState('');
  const [genderTerm, setGenderTerm] = useState('');
  const [marriedTerm, setMarriedTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
    console.log(results);
  }, [searchTerm, marriedTerm, genderTerm, ageTerm]);

  return (
    <>
    <FormControl>
      <Input
        type="text"
        placeholder="Name..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <FormControl>
        <InputLabel id="">Select Age</InputLabel>
        <Select
          onChange={(event) => {
            setAgeTerm(event.target.value);
          }}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value="22">1-25</MenuItem>
          <MenuItem value="31">26-50</MenuItem>
          <MenuItem value="55">51+</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Select Gender</InputLabel>
        <Select
          onChange={(event) => {
            setGenderTerm(event.target.value);
          }}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Select Marital status</InputLabel>
        <Select
          onChange={(event) => {
            setMarriedTerm(event.target.value);
          }}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value="true">Married</MenuItem>
          <MenuItem value="false">Unmarried</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        color="primary"
        type="reset"
        text="Reset"
        onClick={() => {
          setSearchTerm(``);
          setAgeTerm(``);
          setGenderTerm(``);
          setMarriedTerm(``);
        }}
      >
      Reset
      </Button>
    </FormControl>
    <Datatable data={searchResults} />
    </>
  );
}
export default FormContainer;
