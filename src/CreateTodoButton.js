import './CreateTodoButton.css'

function CreateTodoButton () {
    return (
        
        <button
          className="CreateTodoButton"
          onClick= {
            (event)=> {
              console.log('Le diste un click ')
              console.log(event)
              console.log(event.target)
            }
          } 
          >+</button>
    );
  }

export { CreateTodoButton };