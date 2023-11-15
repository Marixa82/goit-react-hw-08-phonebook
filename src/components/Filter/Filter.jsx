import { Input, Label, Span, Div } from './Filter.styled';
import PropTypes from 'prop-types';


export  const Filter = ({filter, onChange}) => {
        return (
            <Div>
                <Label>
                    <Span>Find contact by name</Span>
                <Input type="text" 
                name='filter'
                value={filter}
                onChange={({target})  => onChange(target.value)}
                placeholder="Enter name for Search"
                    />
                </Label>
            </Div>
        )
    }
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
 }