import { Alert } from "react-native";
import { routes } from "../navigator/routes";


const baseURL = "http://172.20.10.2:8000/";

export const userRegister =  (newUserInfo, onError, navigation,clearForm) => {
  const formData = new FormData();
  Object.keys(newUserInfo).map((field) => {
    formData.append(field.toLowerCase(), newUserInfo[field]);
  });


  fetch(baseURL + "api/user/", { method: "post", body: formData })
    .then((res) => res.json())
    .then((result) => {
      if (result?.success) {
        Alert.alert('success',result.success)
        navigation.navigate(routes.home,{userId:result?.data?.userId})
      } else {
        Object.keys(result).map((errorField) => {
          onError(errorField, result[errorField][0]);
        });
      }
    })
    .catch((error) => {
      console.log("user registration error: " + error);
      throw error;
    });
};

export const userInfo = (userId,setChange) => {

  fetch(baseURL+'api/user/?user='+userId)
  .then((res) => res.json())
  .then(result => {
    if(result?.success){
      setChange(result?.data)
    }
  })
  .catch((error) => {
    console.log("user information error: " + error);
    throw error;
  });
}
