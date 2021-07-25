import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmitHandler}>
        <div className="field">
          <label>Vide Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   state = { term: "" };

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onFormSubmit(this.state.term);
//   };
//   onInputChange = (event) => {
//     this.setState({ term: event.target.value });
//   };
//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field">
//             <label>Vide Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             ></input>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
