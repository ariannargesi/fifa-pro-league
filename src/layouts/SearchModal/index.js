import React from "react";
import styled from "styled-components";
import Modal from "../../components/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchModal = () => {
  return (
    <Modal title={"Search"}>
        <div className='search-wrapper'>
            <input className='search-input' placeholder='Keywoard'/>
            <FontAwesomeIcon icon={faSearch} className='search-modal__search-icon' color='red' cursor='pointer' size='lg' />
        </div>
    </Modal>
  );
};

export default SearchModal;
