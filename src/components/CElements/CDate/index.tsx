import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import './style.scss';
import CLabel from '../CLabel';

interface Props {
  label?: string,
  style?: React.CSSProperties,
}

export default function SingleInputDateRangePicker({ label, style }: Props) {
  return (
    <div style={style} id='cdate'>
      {label ? <CLabel label='Date' required /> : ''}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['SingleInputDateRangeField']}>
          <DateRangePicker
            slots={{ field: SingleInputDateRangeField }}
            name="allowedRange"
          
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}