import { showMessage } from "react-native-flash-message";
const ShowError = (error) =>{
   showMessage({
    message,
    type: "danger",
    icon: "danger"
   })
}

const ShowSuccess = (message) =>{
    showMessage({
        message,
        type: "Success",
        icon: "Success"
       })
}

export {
    ShowError,
    ShowSuccess
}