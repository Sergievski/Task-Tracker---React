
const Button = ({color, text, onClick}) => {
  
    return  (

  <button
        className="btn"
        style={{backgroundColor:color}}
        onClick={onClick}
        >

         {text} 
         
    </button>
  )
}

export default Button



Button.defaultProps = {

    title:'Task Tracker'

}