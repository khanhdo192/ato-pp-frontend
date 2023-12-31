<<<<<<< HEAD
export const textIsValid = text =>
  !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text);

export const emailIsValid = email =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase()
  );

export const passwordIsValid = password =>
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

export const permissionsAreValid = permissions => permissions.length > 0;

export const urlIsValid = url =>
  url ? url.includes('http' || 'https') : false;

export const isPhoneNumberValid = phoneNumber => {
  return phoneNumber.length > 4 && phoneNumber.length < 20;
};

export const regexDate = /^\d{4}-\d{2}-\d{2}$/;
=======
 
export const textIsValid = text => !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text)

export const emailIsValid = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())

export const passwordIsValid = password => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

export const permissionsAreValid = permissions => permissions.length > 0
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
