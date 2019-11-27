const express = require ('express');
const {
  showStudents,
  showSingleStudent,
  addStudent,
  editStudent,
  deletePresenter,
} = require ('../controllers/presenters.controller');
const studentRouter = express.Router ();

studentRouter.get('/',(req, res) => res.send('Check /students route if there student.'))
studentRouter.get ('/presenters', showStudents);
studentRouter.get('/presenters/:id',showSingleStudent);
studentRouter.post('/presenters', addStudent);
studentRouter.put('/presenters/edit/:id', editStudent);
studentRouter.delete('/presenters/:id', deletePresenter);


module.exports = studentRouter;

