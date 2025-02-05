import React from "react";
import { SearchHeader, SearchForm, SearchInput, SearchIcon, SearchButton, ErrorLabel } from "./TopContainer.styled";
import search from "../../assets/images/search.svg";

const TopContainer = ({ handleSubmit, handleValidation, formValue, formError }) => {
    return (
        <SearchHeader>
            <SearchForm onSubmit={handleSubmit}>
                <SearchInput className="input" type="text" name="searchedLocation" onChange={handleValidation} value={formValue.searchedLocation} />
                <SearchButton type="submit">
                    <SearchIcon onClick={handleSubmit} src={search} alt="" aria-hidden="true" />
                    <span className="hidden-label">search</span>
                </SearchButton>
            </SearchForm>
            <ErrorLabel>{formError.searchedLocation}</ErrorLabel>
        </SearchHeader>
    )
}

export default TopContainer;