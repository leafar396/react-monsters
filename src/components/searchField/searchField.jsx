import "./searchField.css";


function SearchField(props) {
  return (
    <div>
      <input className='search-field' 
      type='search' 
      placeholder={props.placeholder}
      onChange={props.changeHandler}/>
    </div>
  );
}

export default SearchField;
