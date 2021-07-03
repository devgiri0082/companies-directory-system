import {
  ADD_COMPANY,
  ADD_EMPLOYEE,
  BEGIN_UPDATE,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  LOADING,
  SET_ALL_EMPLOYEE,
  SET_COMPANY,
} from "../actions/counterActions";

let initialState = {
  company: {},
  employee: {},
  loading: undefined,
};

export default function directoryReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      console.log(state.loading, "changing the loading");
      return { ...state, loading: !state.loading };
    case ADD_COMPANY:
      let companyCpy = { ...state.company };
      companyCpy[action.payload.name] = action.payload;
      return { ...state, company: companyCpy };
    case ADD_EMPLOYEE:
      console.log(action.payload);
      let employeeCpy = { ...state.employee };
      if (!employeeCpy[action.payload.companyName])
        employeeCpy[action.payload.companyName] = {};
      employeeCpy[action.payload.companyName][action.payload.id] =
        action.payload;
      return { ...state, employee: employeeCpy };
    case SET_COMPANY:
      return { ...state, company: action.payload };
    case SET_ALL_EMPLOYEE:
      console.log(action.payload, "setting employee");
      let employeesCpy = { ...state.employee };
      employeesCpy[action.payload[0]] = action.payload[1];
      return { ...state, employee: employeesCpy };
    default:
      return state;
  }
}
