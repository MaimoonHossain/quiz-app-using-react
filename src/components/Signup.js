import React from 'react';
import Illustration from './Illustration';
import Checkbox from './Checkbox';
import Button from './Button';
import Info from './Info';
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>Submit Now</Button>
          <Info>Already have an account?</Info>
        </Form>
      </div>
    </>
  );
};

export default Signup;
