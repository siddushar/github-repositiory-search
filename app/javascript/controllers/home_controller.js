// import { Controller } from 'stimulus';
// import axios from "axios";
// import autocomplete from "autocomplete.js";
// let debounce = require('lodash/debounce');

// export default class extends Controller {
//   static targets = ["field", "searchField", "autofield"];
  
//   connect() {
//     this.ac = autocomplete(this.autofieldTarget, { hint: false }, [
//       {
//         source: this.source(),
//         debounce: 200,
//         templates: {
//           suggestion: function (suggestion) {
//             return suggestion.name;
//           },
//         },
//       },
//     ]).on("autocomplete:selected", (event, suggestion, dataset, context) => {
//       this.ac.autocomplete.setVal(suggestion.name);
//     });

//   }

//   source() {
//     return (query, callback) => {
//       axios.get(`https://api.github.com/search/repositories`, { params: { q: this.autofieldTarget.value } }).then((response) => {
//         callback(response.data.items);
//       });
//     };
//   }
// }