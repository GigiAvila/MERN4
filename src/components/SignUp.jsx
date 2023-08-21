import React, { useState, useEffect } from 'react'
import TitleSignUpText from './TitleSignUpText'
import SignInModal from './SignInModal'
import SignUpOptions from './SignUpOptions'
import { Input, Stack, InputGroup, InputRightElement, Tooltip, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import '../Styles.css/SignUp.css'


const SignUp = () => {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    console.log('handleSubmit')

  };



  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowPasswordChange = () => setShowPassword(!showPassword)


  return (
    <section className='SignUp'>
      <TitleSignUpText />
      <form className='signUpForm' onSubmit={handleSubmit}>
        <Stack  >
          <label className='nameContainer'> Name
            <InputGroup>
              <Input
                size='lg'
                variant='filled'
                className='inputName'
                type="text"
                placeholder='Name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </InputGroup>
          </label>
          <label className='surnameContainer'> Surname
            <InputGroup>
              <Input
                size='lg'
                variant='filled'
                className='inputSurname'
                type="text"
                placeholder='Surname'
                required
                value={surname}
                onChange={(e) => setSurname(e.target.value)} />
            </InputGroup>
          </label>
          <label className='emailContainer'> Email
            <InputGroup>
              <Input
                size='lg'
                variant='filled'
                className='inputemail'
                type='email'
                placeholder='Email'
                required
                value={signUpEmail}
                onChange={(e) => { setSignUpEmail(e.target.value) }} />
            </InputGroup>
          </label>
          <label className='passwordContainer'> Password
            <InputGroup>
              <Input
                size='lg'
                variant='filled'
                className='inputpassword'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                required
                minLength={8}
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)} />
              <InputRightElement width='4.2rem' height='3rem'>
                <Button
                  size='lg'
                  onClick={handleShowPasswordChange}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </label>
          <div className='signUpSubmitButtonContainer' >
            <Tooltip hasArrow label='Sign up' bg='yellow.600'>
              <Stack direction='row' spacing={4}>
                <Button className='signUpSubmitButton' variant='solid' colorScheme='telegram' type='submit'>Create your account</Button>
              </Stack>
            </Tooltip>
          </div>
        </Stack>
      </form>
      <SignUpOptions />
      {showModal && <SignInModal isOpen={showModal} onClose={handleCloseModal} />}

    </section >
  )
}

export default SignUp