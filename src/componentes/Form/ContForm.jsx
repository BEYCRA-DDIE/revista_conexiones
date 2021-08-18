import Form from "./Form";
import inputs from "./data/items.json";


/* 
-Tipos de imputs testeados:
 *input types: text, password, date, number, email,  range, url, file
 
 -Tipos de contorles admitidos:
  *control: input, textarea, select, chekbox
 */

const ContForm = (props) => {
  return <Form getDataForm={props.getDataForm} array={inputs} />;
};

export default ContForm;
