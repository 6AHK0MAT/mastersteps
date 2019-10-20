import React, {Component} from 'react';
import { InputGroup, Button, FormControl  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class InputGroupComponent extends Component {
    render() {
        return (
            <div>
                {/*<InputGroup>*/}
                {/*    <InputGroup.Prepend>*/}
                {/*        <InputGroup.Text>With textarea</InputGroup.Text>*/}
                {/*    </InputGroup.Prepend>*/}
                {/*    <FormControl as="textarea" aria-label="With textarea" />*/}
                {/*    <InputGroup.Append>*/}
                {/*        <Button variant="outline-secondary">Очистить</Button>*/}
                {/*        <Button variant="outline-secondary">Отправить</Button>*/}
                {/*    </InputGroup.Append>*/}
                {/*</InputGroup>*/}
                <InputGroup>
                    <FormControl
                        placeholder="Введите вопрос тут"
                        aria-label="Введите вопрос тут"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Очистить</Button>
                        <Button variant="outline-secondary">Отправить</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }

}

export default InputGroupComponent;


