const isInteger = (value) => {
  return /^\d+$/.test(value);
}
const formatGiftString = (text) => {
  if (isInteger(text.split(' ')[0])) {
    return <><b>{text.split(' ')[0]}</b> {text.split(' ').slice(1, -1).join(' ')}</>
  } else {
    return text
  }
}
const bottomText = (selected, disabled, flavor, description) => {
  if (disabled) {
    return `Печалька, ${flavor} закончился`;
  } else {
    if (selected) {
      return description
    } else {
      return <>Чего сидишь? Порадуй котэ, <a>купи.</a></>
    }
  }
}
const Card = ({ name, flavor, description, amount, gift, additional, weight, selected, disabled, onClick }) => {
  return (
    <div className="cardWrapper">
      <div className={`card ${selected ? "selectedCard" : "defaultCard"}`} onClick={onClick}>
      <div className="textBlock">
          <div className="smallText topCardText">Скозочное заморское яство</div>
          <div className="title">{name}</div>
          <div className="subTitle">{flavor}</div>
          <div className="cardDetails">
            <div className="smallText"><b>{amount}</b> порций</div>
            <div className="smallText">{formatGiftString(gift)} в подарок</div>
            <div className="smallText">{additional}</div>
          </div>
        </div>
        <div className="cardImage cat"></div>
        <div className={`weightCircle ${selected ? "selected" : ""}`}>
          <div className="weight">{weight}</div>
          <div className="kilogram">кг</div>
        </div>
      </div>
      <div className="bottomCardText">
        {bottomText(selected, disabled, flavor, description)}
      </div>
    </div>

  )
}
export default Card;