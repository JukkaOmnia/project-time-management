const Student = require('../models/presenter');
const validateAddPresenterInput = require('../validation/add-presenter');

module.exports = {
    showStudents:showStudents,
    showSingleStudent:showSingleStudent,
    addStudent:addStudent,
    editStudent:editStudent,
    deletePresenter:deletePresenter,
}

function showStudents (req, res) {
  Student.find ({}, (err, students) => {
    if (err) {
      res.status (404).send ('Data was not found');
    }
    res.json (students);
  });
}

function showSingleStudent (req, res) {
  const _id = req.params.id;
  Student.find ({_id}, (err, student) => {
    console.log (student);

    if (err) {
      res.status (404).send ('An error');
    }
    if (student.length < 1) {
      res.send ('A student with that id was not found');
    }
    res.json (student);
  });
}
///Add student without validation 
/*
function addStudent (req, res) {

  const newStudent = new Student (req.body);
  newStudent
    .save ()
    .then (() => {
      console.log ('Data is saved');
    })
    .catch (err => console.log ('Error', err));
  res.send ('A new student has been added');
}
*/
function addStudent(req, res) {
  const {errors, isValid} = validateAddPresenterInput(req.body);
  //check validitation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newStudent = new Student(req.body);
  newStudent
    .save()
    .then(student => {
      console.log('Data is saved');
      res.json(student);
    })
    .catch(err => console.log('Error', err));
}

function editStudent (req, res) {
  const _id = req.params.id;
  //console.log("inside edit Student, request: ", req.params);
    Student.findOne ({_id}, (err, student) => {
    console.group('before student assignment');
    (student.name = req.body.name), 
    (student.evaluatorName = req.body.evaluatorName),
    (student.presentationTopic = req.body.presentationTopic),
    (student.article = req.body.article),
    (student.currentTime = req.body.currentTime);
    
    student.save (err => {
      if (err) {
        res.status (404).send (err);
      }
      console.log ('Saved');
      res.send ('Student has been updated');
    });
  });
}

function deletePresenter (req, res) {
  const _id = req.params.id;
  Student.findByIdAndRemove ({_id}, (err, student) => {
    if (err) {
      res.status (404).send ('Unable to delete');
    }
    res.send (`A student with id ${_id} has been removed.`);
  });
}

