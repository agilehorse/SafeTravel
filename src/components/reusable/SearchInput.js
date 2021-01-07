import React from "react";
import {InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExploreIcon from "@material-ui/icons/Explore";
import FilterListIcon from "@material-ui/icons/FilterList";

export default function SearchInput({icons, placeholder, onChange, className, onEnter}) {
    return (
        <TextField
            id="input-with-icon-textfield"
            variant="outlined"
            className={className}
            onKeyDown={(e)=>{
                if (e.key==="Enter")
                    onEnter(e);
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {
                            icons.search &&
                            <SearchIcon fontSize="large" color="primary" onClick={icons.search.onClick} />
                        }
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position={"end"}>
                        {
                            icons.explore &&
                            <ExploreIcon fontSize="large" color="primary" onClick={icons.explore.onClick} />
                        }
                        {
                            icons.filter &&
                            <FilterListIcon fontSize="large" color="primary" className={icons.filter.className}
                                            onClick={icons.filter.onClick} />
                        }
                    </InputAdornment>
                )
            }}
            fullWidth
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}