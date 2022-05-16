import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo-colored-transparent.png';



const EmailVerifyPage = () => {

  return (
    <>
    <Card>
      <img src={logo} alt="logo" />
        <TextField required id="standard-required" label="E-mail" variant='outlined' defaultValue="" />
        <Button variant="contained" color="primary">
          Prosseguir
        </Button>
    </Card>
    </>
  )
}

export default EmailVerifyPage