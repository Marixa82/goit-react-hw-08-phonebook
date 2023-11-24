import PropTypes from 'prop-types';
import {ContactListItem} from "./ContactListItem";
import { Ul } from './ContactList.styled';

export const ContactList = ({ items}) => {
    if(items.length===0) return null
    return (
            <Ul>
                {items.map(item => {
                    const { id } = item
                    return (
                        < ContactListItem
                            key={id}
                        {...item}
                     />)    
                })}
            </Ul>
    )}
    

    ContactList.propTypes = {
    items: PropTypes.array.isRequired,
    
 }
