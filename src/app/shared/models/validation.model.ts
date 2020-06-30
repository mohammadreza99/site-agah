export type ValidationTypes =
  | 'min'
  | 'max'
  | 'required'
  | 'email'
  | 'minlength'
  | 'maxlength'
  | 'pattern'
  | 'requiredTrue';

export type Validations = {
  [validationType in ValidationTypes]: string;
};

export class PrimeError {
  type: ValidationTypes;
  message: string;
}

/* 
e.x : errors = [
  {required : {value:true,errorMessage:'field is required'}},
  {minlength : {value:3,errorMessage:'enter at least 3 charachters'}}
]
*/
