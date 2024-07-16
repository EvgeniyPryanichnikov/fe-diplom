import React from 'react'
import s from './Person-details-block.module.scss'
import DocumentTypeSelect from '../../../../../Ui/DocumentTypeSelect/DocumentTypeSelect'
import DocsDataInput from '../../../../../Ui/DocsDataInput/DocsDataInput'

const PersonDetailsBlock = () => {
  return (
    <div className={s.details}>
      <DocumentTypeSelect />

      <DocsDataInput label={'Серия'} placeholder={'__ __ __ __'}/>

      <DocsDataInput label={'Номер'} placeholder={'__ __ __ __ __ __'}/>

      <DocsDataInput label={'Номер'} placeholder={'_ _ _ _ _ _ _ _ _ _ _ _'}/>
    </div>
  )
}

export default PersonDetailsBlock