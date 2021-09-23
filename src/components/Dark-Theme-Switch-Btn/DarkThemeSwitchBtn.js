import React from "react";
import "./DarkThemeSwitchBtn.css";

const DarkThemeSwitchBtn = props => {
  let active;
  let buttonClassName;

  if (props.dark) {
    active = "dark";
    buttonClassName = "SwitchBtn SwitchBtn-Active";
  } else {
    active = "light";
    buttonClassName = "SwitchBtn";
  }

  let activeDayIcon = `image-${active}-theme/icon-day.svg`;
  let activeNightIcon = `image-${active}-theme/icon-night.svg`;

  return (
    <div className="DarkThemeSwitchBtn-wrapper">
      <picture className="ThemeIndicator-Icon">
        <img src={activeDayIcon} alt="icon for lite theme" />
      </picture>
      <div className="SwitchBtn-Track" onClick={props.changeTheme}>
        <button className={buttonClassName}/>
      </div>
      <picture className="ThemeIndicator-Icon">
        <img src={activeNightIcon} alt="icon for dark theme" />
      </picture>
    </div>
  )
}

export default DarkThemeSwitchBtn;