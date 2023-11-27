
export default function Calendar(prop) {
    const {date} = prop
    date.locale('de')
    const startMonth = date().clone().startOf('M').startOf('week').add('day', 1)
    const finishMonth = date().clone().endOf('M').endOf('week').add('day', 1)
    const arrDayMonth = []
    for (let i = startMonth.clone(); i < finishMonth; i.add('week', 1)) {
      arrDayMonth.push([])  
      for(let k = i.clone(); k < i.clone().add('week', 1); k.add('day', 1)) {
        arrDayMonth[arrDayMonth.length - 1].push(k.clone())
        }
    }

    return  (
        <div classNameName="ui-datepicker">
  <div className="ui-datepicker-material-header">
    <div className="ui-datepicker-material-day">{date().format('dddd')}</div>
    <div className="ui-datepicker-material-date">
      <div className="ui-datepicker-material-day-num">{date().format('D')}</div>
      <div className="ui-datepicker-material-month">{date().format('MMMM')}</div>
      <div className="ui-datepicker-material-year">{date().format('Y')}</div>
    </div>
  </div>
  <div className="ui-datepicker-header">
    <div className="ui-datepicker-title">
      <span className="ui-datepicker-month">{date().format('MMMM')}</span>&nbsp;<span className="ui-datepicker-year">{date().format('Y')}</span>
    </div>
  </div>
  <table className="ui-datepicker-calendar">
    <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col className="ui-datepicker-week-end"></col>
      <col className="ui-datepicker-week-end"></col>
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
      {arrDayMonth.map(o => {
        return <tr key = {o}>
          {o.map(k => <td className = {date().format('D') === k.format('D') ? "ui-datepicker-today" : date().format('M') !== k.format('M') ? "ui-datepicker-other-month" : null } key = {k}>{k.format('D')}</td>)}
        </tr>
      })}
    </tbody>
  </table>
</div>
    )
}
