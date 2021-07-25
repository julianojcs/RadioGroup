import React, { useState, Fragment } from 'react'
import {
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  FormHelperText,
  Button
} from '@material-ui/core'
import { useEffect } from 'react'
import { questions as data } from './data'

function App() {
  const [value, setValue] = useState([])
  const [error, setError] = useState([])
  const [helperText, setHelperText] = useState([])

  const handleRadioChange = (index) => (event) => {
    const arrValue = value
    arrValue[index] = +event.target.value
    setValue([...arrValue])

    const arrHelperText = helperText
    arrHelperText[index] = ''
    setHelperText([...arrHelperText])

    const arrError = error
    arrError[index] = false
    setError([...arrError])
  }

  const questions = data

  const handleSubmit = (event) => {
    event.preventDefault()

    value.forEach((item, index) => {
      if (value[index] === '') {
        const arrHelperText = helperText
        arrHelperText[index] = 'Por favor, selecione uma opção.'
        setHelperText([...arrHelperText])

        const arrError = error
        arrError[index] = true
        setError([...arrError])
      }
    })

    if (error.every((item) => item === false)) {
      alert('Valid form!')
    }
  }

  useEffect(() => {
    const i = questions.radiogroups.length
    var arr = new Array(i)

    arr.fill('', 0, i)
    setValue([...arr])
    setHelperText([...arr])

    arr.fill(false, 0, i)
    setError([...arr])
  }, [questions.radiogroups.length])

  return (
    <>
      <h3>{questions.page}</h3>
      <form onSubmit={handleSubmit}>
        {questions.radiogroups.map((item, index) => {
          return (
            <FormControl
              component='fieldset'
              error={error[index]}
              key={item.key}
            >
              <FormLabel component='legend'>{item.label}</FormLabel>
              <RadioGroup
                aria-label='dor de cabeça' //Não tem necessidade de ter aria-label aqui
                name={questions.name}
                value={typeof value[index] === 'number' ? value[index] : ''}
                onChange={(event) => handleRadioChange(index)(event)}
              >
                {item.radio.map((radio) => (
                  <FormControlLabel
                    key={radio.value}
                    value={radio.value}
                    control={<Radio />}
                    label={radio.label}
                  />
                ))}
              </RadioGroup>
              <FormHelperText>{helperText[index]}</FormHelperText>
            </FormControl>
          )
        })}
        <Button type='submit' variant='outlined' color='primary'>
          Próximo
        </Button>
      </form>
    </>
  )
}

export default App
