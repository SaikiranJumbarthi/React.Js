// export default function Search() {
//   function search(formData) {
//     const query = formData.get(query);
//     alert(`you searched for '${query}' `);
//   }
//   return (
//     <form action={search}>
//       <input name="query" />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

export default function MyForm() {
  return (
    <>
      <label>
        Text Input: <input name="MyInput" />
      </label>
      <hr />
      <label>
        Checkbox:
        <input type="checkbox" name="checkbox" />
      </label>
      <hr />
      <p>
        Radio Buttons:
        <label>
          <input type="radio" name="MyRadio" value="option-1" />
          Option-1
        </label>
        <label>
          <input type="radio" name="MyRadio" value="option-2">
            Option-2
          </input>
        </label>
        <label>
          <input type="Radio" name="MyRadio" value="option-3">
            option-3
          </input>
        </label>
      </p>
    </>
  );
}
