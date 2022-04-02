import './SearchForm.scss';

export function SearchForm(props: any) {
    return (
        <div className={`search-form ${props.className !== undefined ? props.className : ''}`}>
            <input autoComplete="off" className="search-form__input" placeholder="Поиск..." type="text" name="search-input" id="" />
            <button className="search-form__btn" type='submit'>
                <i className="fas fa-search"></i>
            </button>
        </div>
    );
}
