import React, {useEffect} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [subject, setSubject] = React.useState('physical');
  const {tg} = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить даннные'
    })
  }, []);

  useEffect(() => {
    if (!city || !country) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, city]);

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  }

  const onChangeCity = (event) => {
    setCity(event.target.value);
  }

  const onChangeSubject = (event) => {
    setSubject(event.target.value);
  }

  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input
        className={'input'}
        type="text"
        placeholder={'Страна'}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'Город'}
        value={city}
        onChange={onChangeCity}
      />
      <select className={'select'} value={subject} onChange={onChangeSubject}>
        <option value={'physical'}>Физ. лицо</option>
        <option value={'legal'}>Юр. лицо</option>
      </select>
    </div>
  );
};

export default Form;