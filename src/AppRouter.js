import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SchoolRegistration from './components/SchoolRegistrationForm';
import GuardianRegistration from './components/GuardianRegistrationForm';
import Login from './components/LoginForm';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import GuardianDashboard from './components/GuardianDashboard';
import AdminDashboard from './components/AdminDashboard';


function AppRouter() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/school-registration" component={SchoolRegistration} />
          <Route path="/guardian-registration" component={GuardianRegistration} />
          <Route path="/login" component={Login} />
          <Route path="/teacher-dashboard" component={TeacherDashboard} />
          <Route path="/student-dashboard" component={StudentDashboard} />
          <Route path="/guardian-dashboard" component={GuardianDashboard} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
        </Switch>
      </Router>
    );
  }
  
  export default AppRouter;
