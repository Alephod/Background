import { registerLocale } from 'react-datepicker';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import './Datepicker.scss';

registerLocale('ru', ru);

interface Props {
    getDate?: (state: any) => void
}

export function Datepicker({ getDate }: Props) {
    const [date, setDate] = useState();

    function onChange(date: any) {
        setDate(date);
        getDate && getDate(date);
    }

    return <DatePicker maxDate={new Date()} locale="ru" dateFormat="dd.MM.yyyy" selected={date} onChange={onChange} />;
}
