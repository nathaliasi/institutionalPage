//Context"caixinha que armazena os dados",  reducer"executa ações específicas", 
//Provider"ambiente" , hook(acesso e manipulação de ações

import {createContext, ReactNode, useContext, useReducer} from 'react';

type State = {
  CurrentStep: number;
}

type Action = {
  type: FormActions;
  payload: any; 
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
}

type FormProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  CurrentStep: 0 
}

//context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
 export enum FormActions {
  setCurrentStep,
 }
 const formReducer = (state: State, action: Action) => {
  switch(action.type) {
    case FormActions.setCurrentStep:
      return{...state, currentStep: action.payload};
      default:
        return state;
  }
  
}

//provider
export const FormProvider = ({children}: FormProviderProps) => {
  const[state, dispatch] = useReducer(formReducer, initialData);
  const value = {state, dispatch};
  return(
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}

//Context Hook
export const useForm = () => {
  const context = useContext(FormContext);
  if(context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider')
  }
  return context;
}