import React from "react";
import { Style } from "./style";

import deletesymbol from "./assets/delete.svg";

export const Activity = ({ name, date, index, data, setData }) => {
  const deleteData = () => {
    setData(data.filter((item) => data.indexOf(item) != index));
  };

  let yearSeparated = date.slice(0,4)
  let monthSeparated = date.slice(5,7)
  let dateSeparated = date.slice(8,10)
  let suffix = "th"

  switch (dateSeparated.slice(1)) {
      case "1":
          suffix = "st"
          break;
      case "2":
          suffix = "nd"
          break;
      case "3":
          suffix = "rd"
          break;
      default:
          break;
  }

  if (dateSeparated.slice(0,1) === "0") {
    dateSeparated = dateSeparated.slice(1)
  }

  switch (monthSeparated) {
      case "01":
          monthSeparated = "January"
          break;
      case "02":
          monthSeparated = "February"
          break;
      case "03":
          monthSeparated = "March"
          break;
      case "04":
          monthSeparated = "April"
          break;
      case "05":
          monthSeparated = "May"
          break;
      case "06":
          monthSeparated = "June"
          break;
      case "07":
          monthSeparated = "July"
          break;
      case "08":
          monthSeparated = "August"
          break;
      case "09":
          monthSeparated = "September"
          break;
      case "10":
          monthSeparated = "October"
          break;
      case "11":
          monthSeparated = "November"
          break;
      case "12":
          monthSeparated = "December"
          break;
      default:
          break;
  }

  return (
    <Style>
      <div className="information">
        <div className="information-wrapper">
          <h4>{name}</h4>
          <p>{monthSeparated} {dateSeparated}{suffix} {yearSeparated}</p>
        </div>
      </div>
      <div className="delete">
        <img src={deletesymbol} onClick={(e) => deleteData()} />
      </div>
    </Style>
  );
};
