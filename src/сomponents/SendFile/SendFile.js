import React, {Component} from 'react';
import { InputGroup, Button, FormControl  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class SendFile extends Component {
    render() {
        return (
            <div>
                <p><b>Загрузить оценочный лист:</b></p>
                <InputGroup>
                    <FormControl
                        placeholder="Укажите путь до файла"
                        aria-label="Укажите путь до файла"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Отправить</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }

}

export default SendFile;


