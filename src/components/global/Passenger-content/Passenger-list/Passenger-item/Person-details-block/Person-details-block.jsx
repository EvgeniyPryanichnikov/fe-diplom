import React from 'react'
import s from './Person-details-block.module.scss'
import DocumentTypeSelect from '../../../../../Ui/DocumentTypeSelect/DocumentTypeSelect'
import DocsDataInput from '../../../../../Ui/DocsDataInput/DocsDataInput'
import {setPassengerInfo} from "../../../../../../store/slices/ticketsSlice";
import {useDispatch, useSelector} from "react-redux";


export const DocumentType = {
  PASSPORT: 'паспорт',
  BIRTHDAY_CERTIFICATE: 'свидетельство о рождении',
}

const PersonDetailsBlock = ({index}) => {
  const personsInfo = useSelector(state => state.tickets.passengersInfo);
  const {
    document_type,
    document_data,
  } = personsInfo[index];
  const {
    series,
    number,
  } = document_data

  const dispatch = useDispatch();

  function handleInputChange(option, value) {
    dispatch(setPassengerInfo({value, option, index}))
  }

  function handleSelect(value) {
    dispatch(setPassengerInfo({value, option: 'document_type', index}))
  }

  return (
    <div className={s.details}>
      <DocumentTypeSelect onSelect={handleSelect} value={document_type}/>

      {document_type === DocumentType.PASSPORT &&
        <>
          <DocsDataInput label={'Серия'} option={'series'} value={series} placeholder={'__ __ __ __'} handleInputChange={handleInputChange} />
          <DocsDataInput label={'Номер'} option={'number'} value={number} placeholder={'__ __ __ __ __ __'} handleInputChange={handleInputChange} />
        </>
      }
      {
        document_type === DocumentType.BIRTHDAY_CERTIFICATE &&
        <>
          <DocsDataInput label={'Номер'} option={'number'} value={number} placeholder={'_ _ _ _ _ _ _ _ _ _ _ _'}/>
        </>
      }
    </div>
  )
}

export default PersonDetailsBlock
