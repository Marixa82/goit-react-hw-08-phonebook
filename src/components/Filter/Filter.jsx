import { Input, Label } from './Filter.styled';
import PropTypes from 'prop-types';


export  const Filter = ({filter, onChange}) => {
        return (
            <>
                <Label><span>find contact by name</span>
                <Input type="text" 
                name='filter'
                value={filter}
                onChange={({target})  => onChange(target.value)}
                placeholder="Enter name for Search"
                    /></Label>
            </>
        )
    }
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
 }