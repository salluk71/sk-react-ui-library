import { Button } from "../../interfaces/Button";
import {Button as DXButton} from 'devextreme-react';

function index({text}:Button) {
  return (
    <DXButton type="danger">{text}</DXButton>
  )
}

export default index