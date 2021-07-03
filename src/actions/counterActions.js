import db from "../firebaseConfig";

export const LOADING = "LOADING";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const ADD_COMPANY = "ADD_COMPANY";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const BEGIN_UPDATE = "BEGIN_UPDATE";
export const SET_COMPANY = "SET_COMPANY";
export const SET_ALL_EMPLOYEE = "SET_ALL_EMPLOYEE";
export const loading = () => {
  return {
    type: LOADING,
  };
};
export const addCompany = (newCompany) => {
  return {
    type: ADD_COMPANY,
    payload: newCompany,
  };
};
export const addEmployee = (newEmployee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: newEmployee,
  };
};
export const setCompany = (allCompany) => {
  return {
    type: SET_COMPANY,
    payload: allCompany,
  };
};
export let setAllEmployee = (info) => {
  return {
    type: SET_ALL_EMPLOYEE,
    payload: info,
  };
};
export let updateEmployee = (newEmployee) => async (dispatch) => {
  let response = await db
    .collection(`${newEmployee.companyName}_Employee`)
    .add(newEmployee);
  newEmployee.id = response.id;
  dispatch(addEmployee(newEmployee));
};
export let updateCompany = (newCompany) => async (dispatch) => {
  await db.collection("Company").doc(newCompany.name).set(newCompany);
  dispatch(addCompany(newCompany));
};

export let getAllCompany = () => async (dispatch) => {
  let allCompany = {};
  dispatch(loading());
  let company = await db.collection("Company").get();
  company.forEach((docs) => {
    let data = docs.data();
    allCompany[data.name] = data;
  });
  dispatch(setCompany(allCompany));
  dispatch(loading());
  console.log("loading has been dispatched");
};
export let getAllEmployee = (allCompany) => async (dispatch) => {
  console.log(allCompany, " insideAllCOmpany");
  for (let i = 0; i < allCompany.length; i++) {
    let requiredOnly = {};
    let data = await db.collection(`${allCompany[i]}_Employee`).get();
    data.docs.forEach((elem) => (requiredOnly[elem.id] = elem.data()));
    console.log(requiredOnly, "requiredOnly");
    if (Object.values(requiredOnly).length > 0)
      dispatch(setAllEmployee([allCompany[i], requiredOnly]));
  }
};
// export const incrementAsync = () => {
//   return async (dispatch) => {
//     dispatch(updateBegin());
//     await sleep(2000);
//     dispatch(increment());
//   };
// };

// export const decrementAsync = () => {
//   return async (dispatch) => {
//     dispatch(updateBegin());
//     await sleep(2000);
//     dispatch(decrement());
//   };
// };
