import { useEffect, useState } from 'react';

export default function SearchAutocomplete() {
    return (
        <div className='search-autocomplete-container'>
            <input name='search-users' placeholder='ssearch Users here...' />
        </div>
    );
}